/// <reference types="react-scripts" />

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "@splidejs/react-splide" {
  import { ComponentType } from "react";

  export interface SplideProps {
    options?: Record<string, any>;
    [key: string]: any;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<any>;
}

declare module "@splidejs/react-splide/css";
