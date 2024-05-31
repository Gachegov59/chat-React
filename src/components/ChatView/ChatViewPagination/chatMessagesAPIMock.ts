import { IChatMessage } from "@/interfaces/IChat";

//todo: refactor types everywhere
export const chatMessagesAPI: IChatMessage[] = [
  {
    messageId: "14123edasd",
    user: {
      id: "123123edasd",
      name: "Jek",
      surname: "user1",
      status: true
    },
    userAvatar: "avatar-default_1.png",
    isMine: false,
    date: "Sat Jan 17 2024 15:36:16 GMT+0200",
    messages: [
      {
        id: "1",
        userId: "user1",
        type: "text",
        content: "All good",
        date: "Sat Jan 17 2024 10:36:16 GMT+0200",
        isRead: true,
      },
      {
        id: "2",
        userId: "user1",
        type: "text",
        content: "What's new with you?",
        date: "Sat Jan 20 2024 10:36:16 GMT+0200",
        isRead: true,
      },
      {
        id: "3",
        userId: "user1",
        type: "text",
        content: "Are you here?",
        date: "Sat Jan 20 2024 10:46:16 GMT+0200",
        isRead: false,
      },
      {
        id: "4",
        userId: "user1",
        type: "text",
        content: "Hi, how are you?",
        date: "Sat Jan 20 2024 10:56:16 GMT+0200",
        isRead: false,
      },
      {
        id: "5",
        userId: "user1",
        type: "text",
        content: "I was thinking, maybe we should go to the movies?",
        date: "Sat Jan 20 2024 11:06:16 GMT+0200",
        isRead: false,
      },
      {
        id: "6",
        userId: "user1",
        type: "image",
        content: "movie-poster_1.png",
        date: "Sat Jan 20 2024 11:16:16 GMT+0200",
        isRead: false,
      },
      {
        id: "7",
        userId: "user1",
        type: "text",
        content: "This movie looks interesting, don't you think?",
        date: "Sat Jan 20 2024 11:26:16 GMT+0200",
        isRead: false,
      },
      {
        id: "8",
        userId: "user2",
        type: "text",
        content: "Hi, sorry for not replying. I was busy.",
        date: "Sat Jan 20 2024 11:36:16 GMT+0200",
        isRead: true,
      },
      {
        id: "9",
        userId: "user2",
        type: "text",
        content: "I'm doing well, thanks for asking.",
        date: "Sat Jan 20 2024 11:46:16 GMT+0200",
        isRead: true,
      },
      {
        id: "10",
        userId: "user2",
        type: "text",
        content: "I don't go to the movies, I don't like crowds.",
        date: "Sat Jan 20 2024 11:56:16 GMT+0200",
        isRead: true,
      },
      {
        id: "11",
        userId: "user2",
        type: "text",
        content: "What do you like to do in your free time?",
        date: "Sat Jan 20 2024 12:06:16 GMT+0200",
        isRead: true,
      },
      {
        id: "12",
        userId: "user1",
        type: "text",
        content: "I like to read books, listen to music, and play video games.",
        date: "Sat Jan 20 2024 12:16:16 GMT+0200",
        isRead: false,
      },
      {
        id: "13",
        userId: "user1",
        type: "image",
        content: "book-cover_1.png",
        date: "Sat Jan 20 2024 12:26:16 GMT+0200",
        isRead: false,
      },
      {
        id: "14",
        userId: "user1",
        type: "text",
        content: "This is my favorite book, have you read it?",
        date: "Sat Jan 20 2024 12:36:16 GMT+0200",
        isRead: false,
      },
      {
        id: "15",
        userId: "user2",
        type: "text",
        content: "No, I haven't. What's it about?",
        date: "Sat Jan 20 2024 12:46:16 GMT+0200",
        isRead: true,
      },
      {
        id: "16",
        userId: "user1",
        type: "text",
        content:
          "It's about the adventures of a young wizard who finds out he is the chosen one to defeat an evil lord.",
        date: "Sat Jan 20 2024 12:56:16 GMT+0200",
        isRead: false,
      },
      {
        id: "17",
        userId: "user2",
        type: "text",
        content: "Sounds familiar. Is it Harry Potter?",
        date: "Sat Jan 20 2024 13:06:16 GMT+0200",
        isRead: true,
      },
      {
        id: "18",
        userId: "user1",
        type: "text",
        content: "Yes, it's Harry Potter. Don't you like the series?",
        date: "Sat Jan 20 2024 13:16:16 GMT+0200",
        isRead: false,
      },
      {
        id: "19",
        userId: "user2",
        type: "text",
        content: "I don't mind it, but I prefer more realistic literature.",
        date: "Sat Jan 20 2024 13:26:16 GMT+0200",
        isRead: true,
      },
      {
        id: "20",
        userId: "user2",
        type: "image",
        content: "book-cover_2.png",
        date: "Sat Jan 20 2024 13:36:16 GMT+0200",
        isRead: true,
      },
      {
        id: "21",
        userId: "user2",
        type: "text",
        content: "This is my favorite book, have you read it?",
        date: "Sat Jan 20 2024 13:46:16 GMT+0200",
        isRead: true,
      },
      {
        id: "22",
        userId: "user1",
        type: "text",
        content: "No, I haven't. What's it about?",
        date: "Sat Jan 20 2024 13:56:16 GMT+0200",
        isRead: false,
      },
      {
        id: "23",
        userId: "user2",
        type: "text",
        content:
          "It's about life and death, love and hate, war and peace, the meaning of existence.",
        date: "Sat Jan 20 2024 14:06:16 GMT+0200",
        isRead: false,
      },
    ],
  },
  {
    messageId: "1467123edasd",
    user: {
      id: "12612423edasd",
      name: "Jack",
      surname: "Sparrow",
      status: true
    },
    isMine: true,
    userAvatar: "avatar-default_2.png",
    date: "Sat Jan 17 2024 10:36:16 GMT+0200",
    messages: [
      {
        id: "12612423edasd",
        userId: "12612423edasd",
        type: "text",
        content: "Привет, извини, что не отвечал. Был занят.",
        date: "Sat Jan 20 2024 11:36:16 GMT+0200",
        isRead: true,
      },
      {
        id: "12612423edasd",
        userId: "12612423edasd",
        type: "text",
        content: "У меня все хорошо, спасибо за интерес.",
        date: "Sat Jan 20 2024 11:46:16 GMT+0200",
        isRead: true,
      },
      {
        id: "12612423edasd",
        userId: "12612423edasd",
        type: "text",
        content: "В кино я не хожу, не люблю толпы.",
        date: "Sat Jan 20 2024 11:56:16 GMT+0200",
        isRead: true,
      },
      {
        id: "12612423edasd",
        userId: "12612423edasd",
        type: "text",
        content: "А ты что любишь делать в свободное время?",
        date: "Sat Jan 20 2024 12:06:16 GMT+0200",
        isRead: true,
      },
      {
        id: "12612423edasd",
        userId: "12612423edasd",
        type: "image",
        content: "book-cover_2.png",
        date: "Sat Jan 20 2024 12:16:16 GMT+0200",
        isRead: true,
      },
      {
        id: "12612423edasd",
        userId: "12612423edasd",
        type: "text",
        content: "Это моя любимая книга, ты читал?",
        date: "Sat Jan 20 2024 12:26:16 GMT+0200",
        isRead: true,
      },
      {
        id: "12612423edasd",
        userId: "12612423edasd",
        type: "text",
        content:
          "Она о жизни и смерти, о любви и ненависти, о войне и мире, о смысле бытия.",
        date: "Sat Jan 20 2024 12:36:16 GMT+0200",
        isRead: true,
      },
      {
        id: "12612423edasd",
        userId: "12612423edasd",
        type: "image",
        content: "book-cover_3.png",
        date: "Sat Jan 20 2024 12:46:16 GMT+0200",
        isRead: true,
      },
      {
        id: "12612423edasd",
        userId: "12612423edasd",
        type: "text",
        content: "А это еще одна моя любимая книга, ты читал?",
        date: "Sat Jan 20 2024 12:56:16 GMT+0200",
        isRead: true,
      },
      {
        id: "12612423edasd",
        userId: "12612423edasd",
        type: "text",
        content:
          "Она о путешествии во времени, о том, как одно решение может изменить все.",
        date: "Sat Jan 20 2024 13:06:16 GMT+0200",
        isRead: true,
      },
      {
        id: "123123edasd",
        userId: "123123edasd",
        type: "text",
        content: "Привет, я тут. Извини, что не отвечал. Был занят.",
        date: "Sat Jan 20 2024 13:16:16 GMT+0200",
        isRead: false,
      },
      {
        id: "123123edasd",
        userId: "123123edasd",
        type: "text",
        content: "У меня все хорошо, спасибо за интерес.",
        date: "Sat Jan 20 2024 13:26:16 GMT+0200",
        isRead: false,
      },
      {
        id: "123123edasd",
        userId: "123123edasd",
        type: "text",
        content: "В кино я не хожу, не люблю толпы.",
        date: "Sat Jan 20 2024 13:36:16 GMT+0200",
        isRead: false,
      },
      {
        id: "123123edasd",
        userId: "123123edasd",
        type: "text",
        content: "А ты что любишь делать в свободное время?",
        date: "Sat Jan 20 2024 13:46:16 GMT+0200",
        isRead: false,
      },
      {
        id: "123123edasd",
        userId: "123123edasd",
        type: "image",
        content: "book-cover_1.png",
        date: "Sat Jan 20 2024 13:56:16 GMT+0200",
        isRead: false,
      },
      {
        id: "123123edasd",
        userId: "123123edasd",
        type: "text",
        content: "Это моя любимая книга, ты читал?",
        date: "Sat Jan 20 2024 14:06:16 GMT+0200",
        isRead: false,
      },
      {
        id: "123123edasd",
        userId: "123123edasd",
        type: "text",
        content:
          "Она о приключениях молодого волшебника, который узнает, что он избранный, чтобы победить злого лорда.",
        date: "Sat Jan 20 2024 14:16:16 GMT+0200",
        isRead: false,
      },
      {
        id: "123123edasd",
        userId: "123123edasd",
        type: "image",
        content: "book-cover_4.png",
        date: "Sat Jan 20 2024 14:26:16 GMT+0200",
        isRead: false,
      },
      {
        id: "123123edasd",
        userId: "123123edasd",
        type: "text",
        content: "А это еще одна моя любимая книга, ты читал?",
        date: "Sat Jan 20 2024 14:36:16 GMT+0200",
        isRead: false,
      },
      {
        id: "123123edasd",
        userId: "123123edasd",
        type: "text",
        content:
          "Она о фантастическом мире, где люди делятся на фракции по своим характеристикам.",
        date: "Sat Jan 20 2024 14:46:16 GMT+0200",
        isRead: false,
      },
      {
        id: "12612423edasd",
        userId: "12612423edasd",
        type: "text",
        content: "Привет, я тут. Извини, что не отвечал. Был занят.",
        date: "Sat Jan 20 2024 14:56:16 GMT+0200",
        isRead: true,
      },
      {
        id: "12612423edasd",
        userId: "12612423edasd",
        type: "text",
        content: "У меня все хорошо, спасибо за интерес.",
        date: "Sat Jan 20 2024 15:06:16 GMT+0200",
        isRead: true,
      },
    ],
  },
];

// export const currentChatAPI: ICurrentChat = {
// 	chatId: '254424131',
// 	type: 'personal',
// 	name: 'Петя',
// 	owner: {
// 		ownerId: '123123edasd34',
// 		name: 'Петя'
// 	},
// 	members: [
// 		{
// 			id: '123123edasd34',
// 			name: 'Петя',
// 			surname: 'Петров',
// 			role: 'owner',
// 			status: true
// 		}
// 	],
// 	isRead: true
// };
