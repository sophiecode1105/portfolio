declare module "*.png";
declare module "*.svg";
declare module "*.ttf";
declare module "*.woff";
declare module "*.woff2";
declare module "*.scss" {
    const content: { [className: string]: string };
    export = content;
  }
