import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import slideData from "./slideData";

let CarasuselMainPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDarkened, setIsDarkened] = useState(false);
  let popNavButtons = () => {
    let buttons = [];
    for (let i = 0; i < slideData.length; i++) {
      let slideElm;

      if (i === currentIndex) {
        const x = i;
        slideElm = (
          <div
            className="w-16  h-4 mx-4 bg-redWine border-2 border-black rounded-lg"
            onClick={() => {
              goToSlide(i);
            }}
          ></div>
        );
      } else {
        slideElm = (
          <div
            className="w-12 h-4 mx-4 bg-lavendarWeb border-1 border-black rounded-lg"
            onClick={() => {
              goToSlide(i);
            }}
          ></div>
        );
      }
      buttons.push(slideElm);
    }
    return buttons;
  };
  let changeNavButton = () => { };
  let goToSlide = (i) => {
    setIsDarkened(true);
    // console.log("YOU Clicked on button nav # " + i);
    setTimeout((()=>{setCurrentIndex(i)}), 50);
    setTimeout(() => { setIsDarkened(false);; }, 100);


    
  };
  let nextSlide = () => {

     
    // set opacity to 0
    // then change backround image index, after a delay of 200 ms
    // then set opacity to 1, after a delay of 200 ms
    
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length)

    // delay(200).then(() => setIsDarkened(!isDarkened));
  
};
  let check = isDarkened ? 0 : 1;
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
   
    

    return () => clearInterval(interval);
  }, [currentIndex]);

  popNavButtons();
  return (
    <div
      id="galleryBackground"
      style={{
        backgroundImage: "url(" + slideData[currentIndex].imageURL + "`)",
        backgroundPosition: "center center",
        filter: "brightness( +"+check+")",
      }}
      className="h-96 w-full flex flex-col  justify-around duration-150 "
    >
      {/* slides here */}
      <div className=" ">
        {/* Each elemente is a slide */}
        <div
          className="
        "
        >
          <div
            className="
          flex
          flex-col
          justify-evenly
          bg-sortaBigBlue
          text-white

          bg-opacity-50
          bg- w-full h-64 
         
          sm:w-3/4
          
          sm:text-center
          md:w-full
          md:text-center
          md:text-3xl
          lg:w-1/2
          lg:text-left
          lg:text-xl
         
          xl:text-lg
          xl:w-1/2
          2xl:w-1/2
          2xl:text-3xl
          2xl:text-lef

            
            px-14"
          >
            <h2 className="mx-4  ">{slideData[currentIndex].header1}</h2>
            <h2 className="mx-4">{slideData[currentIndex].header2}</h2>
            <Link
              className="bg-lavendarWeb 
             
            rounded-md
            text-3xl
            w-1/2
            self-center
            sm:p-0;
            sm:text-lg
            md:w-2/5
            md:text-xl
            lg:w-1/2 
            lg:text-2xl
            xl:text-3xl
            xl:w-1/2
            font-BrushScript 
            text-center
            text-zaffra
            hover:text-lavendarWeb
            hover:bg-redWine
            py-3
            font-bold"
              href={slideData[currentIndex].buttonLink}
            >
              {slideData[currentIndex].buttonText}
            </Link>
          </div>
        </div>
      </div>
      {/* buttons here*/}
      <div
        id="caraNavButtons"
        className=" flex 
      flex-row 
      self-center 
      items-center
      justify-around
      h-10 
     
      text-4xl 
      text-redWine
      "
      >
        {popNavButtons()}
      </div>
    </div>
  );
};

export default CarasuselMainPage;
