// import { Dispatch, SetStateAction, KeyboardEvent } from 'react';

// export const clickBtnBurger = (
//   isMenuOpen: boolean,
//   setIsMenuOpen: Dispatch<SetStateAction<boolean>>,
//   switchKeyListener: () => void
// ) => {
//   setIsMenuOpen(!isMenuOpen);
//   switchKeyListener();
// };

// export const switchKeyListener = (
//   isMenuOpen: boolean,
//   onKeyDown: (event: KeyboardEvent) => void
// ) => {
//   if (!isMenuOpen) {
//     window.addEventListener('keydown', onKeyDown);
//   } else {
//     window.removeEventListener('keydown', onKeyDown);
//   }
// };

// export const createOnKeyDownHandler = (
//   setIsMenuOpen: Dispatch<SetStateAction<boolean>>
// ) => {
//   return (event: KeyboardEvent) => {
//     if (event.key === 'Escape') {
//       setIsMenuOpen(false);
//       window.removeEventListener('keydown', createOnKeyDownHandler(setIsMenuOpen));
//     }
//   };
// };
