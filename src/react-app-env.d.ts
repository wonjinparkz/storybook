/// <reference types="react-scripts" />

// CSS 모듈 타입 선언
declare module '*.css' {
  const content: any;
  export default content;
}
