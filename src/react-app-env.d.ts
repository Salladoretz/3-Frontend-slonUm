/// <reference types="react-scripts" />

declare module '*.module.scss'

declare module '*.module.css'

declare module '*.png'

declare module '*.svg' {
    const content: string;
    export default content;
}