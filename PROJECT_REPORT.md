# ОТЧЁТ ПРОЕКТА: chat-React

---

## ИДЕЯ

Веб-мессенджер (аналог Telegram/WhatsApp).
Пользователь логинится, видит список чатов, открывает переписку и общается.
Поддержка личных и групповых чатов. Сообщения: текст, изображение, аудио, видео.
Интерфейс на 3 языках: English, Русский, עברית (иврит + RTL).

---

## ТЕХНОЛОГИЧЕСКИЙ СТЕК

**Core**
- React 18 + TypeScript 5 + Vite 5

**State Management**
- Redux Toolkit 2 + React Redux 9

**Routing**
- React Router DOM 6 + Route Guard (защита приватных страниц)

**HTTP / API**
- Axios 1.6
  - Request interceptor → добавляет Bearer JWT токен
  - Response interceptor → авто-рефреш токена при 401

**Формы**
- React Hook Form 7

**Стилизация**
- Tailwind CSS 3 + SCSS (CSS Modules на компонентах) + PostCSS + Autoprefixer

**Интернационализация**
- i18next 23 + react-i18next 14 + i18next-http-backend 2

**Уведомления**
- react-hot-toast 2

**Утилиты**
- Day.js (даты)
- dotenv (env-переменные)

**Тестирование**
- Jest 29 + React Testing Library 15 + ts-jest

**Качество кода**
- ESLint 8 + TypeScript ESLint + Prettier

---

## АРХИТЕКТУРА ПАПОК

Тип: **Layered + Feature-based (гибрид)**
Папки делятся и по техническим слоям (`store`, `services`, `http`), и по фичам (`Auth`, `ChatView`, `Menu`).

```
src/
├── assets/                      # Шрифты, картинки, SVG, глобальные SCSS
│
├── components/
│   ├── Auth/                    # Форма входа/регистрации
│   │   └── FormGroup/           # Группа полей формы
│   ├── ChatView/                # Область переписки
│   │   ├── ChatMessage/         # Блок сообщений одного пользователя
│   │   ├── MessageItem/         # Одно сообщение
│   │   ├── ChatInputPanel/      # Поле ввода + кнопка отправки
│   │   └── ChatViewPagination/  # Пагинация истории сообщений
│   ├── Menu/                    # Боковое меню
│   │   ├── MenuBase/            # Контейнер меню + выдвижной sidebar
│   │   └── MenuChat/            # Список чатов + один элемент чата
│   ├── Modals/
│   │   └── AccountModal/        # Модалка профиля пользователя
│   ├── Translator/              # Обёртка i18n
│   └── UI/                      # Переиспользуемые базовые компоненты
│       ├── Avatar/AvatarBase/
│       ├── Button/BtnBase/
│       ├── Button/BtnBurger/
│       ├── Container/
│       ├── Input/InputBase/
│       ├── Loader/LoaderSpinner/
│       ├── Modal/ModalBase/
│       └── Title/
│
├── hooks/                       # Типизированные Redux хуки
│   └── redux.ts                 # useAppDispatch, useAppSelector
│
├── http/                        # Axios конфигурация
│   ├── index.ts                 # Axios instance + оба interceptor
│   └── constant.ts              # API эндпоинты (строковые константы)
│
├── interfaces/                  # TypeScript интерфейсы
│   ├── IChat.ts
│   ├── IMenu.ts
│   ├── IPagination.ts
│   └── IUser.ts
│
├── locales/                     # JSON переводы
│   ├── en/
│   ├── ru/
│   └── iw/
│
├── models/                      # Модели ответов API
│   ├── UserAuth.ts
│   └── response/AuthResponse.ts
│
├── pages/
│   ├── PageAuth.tsx
│   ├── PageChat.tsx
│   ├── PageLoading.tsx
│   ├── errorPages/PageError.tsx
│   └── layouts/
│       ├── ChatLayout.tsx
│       └── DefaultLayout.tsx
│
├── router/
│   ├── Router.tsx               # Определение маршрутов
│   └── GuardRouter.tsx          # Редирект неавторизованных на /login
│
├── services/                    # Классы для вызовов API
│   ├── AuthService.ts           # login, registration, logout
│   └── UserService.ts           # fetchUsers
│
├── store/
│   ├── store.ts                 # Конфигурация Redux store
│   └── auth/
│       ├── authSlice.ts         # Reducer + начальный стейт
│       ├── authActions.ts       # Thunks: login, logout, registration, checkAuth
│       └── types.ts             # Типы параметров thunks
│
├── utils/
│   └── getImagesUrl.ts
│
├── App.tsx                      # Root: проверка авторизации при старте
├── main.tsx                     # Entry point
└── i18n.ts                      # Инициализация i18next
```

---

## МОДЕЛЬ ДАННЫХ

```typescript
// Пользователь
IUser {
  id, name, surname, middleName?
  status: boolean        // online/offline
  photoId?, role?, account?, chats?[]
}

// Чат в списке (меню)
IMenuChat {
  id, name, image
  type: 'personal' | 'group'
  counter: number        // непрочитанные
  lastMessage: { text, date }
}

// Открытый чат
ICurrentChat {
  chatId, name
  type: 'personal' | 'group'
  owner: { ownerId, name }
  members[]: { id, name, surname, role, status }
  isRead: boolean
}

// Группа сообщений (от одного юзера)
IChatMessage {
  user: IUser
  messageId, userAvatar
  isMine: boolean
  date: string
  messages: IChatMessageItem[]
}

// Одно сообщение
IChatMessageItem {
  id, userId
  type: 'text' | 'image' | 'audio' | 'video'
  content, date
  isRead: boolean
}

// Ответ сервера при авторизации
AuthResponse {
  accessToken: string
  refreshToken: string
  user: UserAuth
}
```

---

## ФИЧИ ПРИЛОЖЕНИЯ

**Авторизация**
- Регистрация / Вход / Выход по email + пароль
- checkAuth при старте — проверка сессии
- Refresh token — авто-обновление access token при истечении
- Route Guard — редирект на /login если не авторизован

**Меню (боковая панель)**
- Список чатов с аватаром, именем, счётчиком, последним сообщением
- Выдвижной sidebar (бургер-кнопка)
- Закрытие sidebar по клавише Escape
- Кнопки: Аккаунт, Logout

**Чат**
- Отображение сообщений с пагинацией
- Группировка сообщений по отправителю
- Определение "моё / чужое" сообщение
- Статус прочитано/непрочитано
- Поле ввода + отправка сообщения

**Профиль**
- Модальное окно аккаунта

**UI**
- Спиннер загрузки
- Toast-уведомления
- Страница ошибки (404)
- Страница загрузки

**Интернационализация**
- 3 языка: EN / RU / IW
- RTL поддержка для иврита

---

## ЧТО ОТСУТСТВУЕТ (для полноценного мессенджера)

- WebSocket / Socket.io — реальное время
- Загрузка файлов / медиа в сообщениях
- Поиск по чатам и сообщениям
- Создание новых чатов / групп
- Управление участниками группы
- Push-уведомления
- Хранение токена в httpOnly cookie (сейчас localStorage)
