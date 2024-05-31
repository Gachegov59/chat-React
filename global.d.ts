declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.scss' {
  const content: { [key: string]: { [key: string]: string } };
  export default content;
}


// declare module '*.module.scss' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

// declare module '*.scss' {
//   const content: { [key: string]: any };
//   export default content;
// }