'use client'

import {useMemo, useState} from "react";
import HeroItem from "@/components/HeroSection/HeroItem";
import HeroNavigation from "@/components/HeroSection/HeroNavigation";

export function HeroSection() {
  const slides = useMemo(() => { return [
      {
        className: 'bg-heroSlide1',
        title: 'LOREM IPSUM DOLOR LOREM IPSUM\n' +
            'DOLOR SIT AMET, CONSECTETUR\n' +
            'ADIPISCING ELIT',
        justifyClass: 'justify-start'
      },
  ]}, []);
  const [currentBackground, setCurrentBackground] = useState(slides[0].className);
  const renderHeroItem = useMemo(() => {
    const slideAttrs = slides.find(slide => slide.className === currentBackground);
    if(slideAttrs){
      return <HeroItem backgroundClass={currentBackground} title={slideAttrs.title} justifyClass={slideAttrs.justifyClass}/>
    }
    return <HeroItem backgroundClass={currentBackground} title={slides[0].title} justifyClass={slides[0].justifyClass}/>
  }, [currentBackground, slides]);
  return (
      <>
        {renderHeroItem}
        <HeroNavigation items={slides} selected={currentBackground} callBack={setCurrentBackground}/>
      </>
  )
}