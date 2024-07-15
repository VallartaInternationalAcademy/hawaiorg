declare module 'react-slick' {
    import { Component } from 'react';
  
    export interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      arrows?: boolean;
      prevArrow?: React.ReactNode;
      nextArrow?: React.ReactNode;
      centerMode?: boolean;
      centerPadding?: string;
      cssEase?: string;
      draggable?: boolean;
      fade?: boolean;
      focusOnSelect?: boolean;
      pauseOnHover?: boolean;
      responsive?: Array<{
        breakpoint: number;
        settings: Settings;
      }>;
      variableWidth?: boolean;
      vertical?: boolean;
    }
  
    export default class Slider extends Component<Settings> {}
  }
  