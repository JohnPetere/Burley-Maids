

import Link from 'next/link'
import { useEffect, useState } from 'react';
import slideData from './slideData';

let CarasuselMainPage = () => {

 const [currentIndex, setCurrentIndex] = useState(0); 
 const [isDarkened, setIsDarkened] = useState(false);
 
  let popNavButtons = ()=>{
    let buttons = []
      for(let i = 0; i < slideData.length; i++){
        let slideElm
      
        if(i === currentIndex){
          const x = i;
          slideElm =  <div
          className=' w-16  h-4 mx-4 bg-redWine border-2 border-black rounded-lg'
            
          onClick={() => {  goToSlide(i)}}
          >
            </div>
          
        }else{
          slideElm =  <div
          className='hover:bg-redWine w-12 h-4 mx-4 bg-lavendarWeb border-1 border-black rounded-lg'
          onClick={() => {  goToSlide(i)}}
          >
            </div>
        }
        buttons.push(slideElm)
      }
    return buttons
  }
  let changeNavButton = ()=>{

  }
  let goToSlide = (i)=>{
      console.log('YOU Clicked on button nav # '+ i)
      setCurrentIndex(i);
  }
  let nextSlide =()=>{
    setIsDarkened(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    

  }
  useEffect(()=>{
    console.log('the current index is '+ currentIndex)
  
  }, [currentIndex]);
  useEffect(()=>{
    const interval = setInterval(nextSlide,3000); 
  
   return () => clearInterval(interval);
  }, [currentIndex]);
 // I am probably gonna make it fade in and out before and after each time the variables switch.... 
  // I need to figure out a way to put the image url into line 43 in a efficent manner, I may try to put it in a variable before the return
  // however, I need to make sure that the url changes every time the slide swithces all the variables...
//https://i.imgur.com/zhd5Dfj.jpeg
//https://picsum.photos/seed/picsum/200/300
//https://picsum.photos/200/300?grayscale
// backgroundImage: "url(//"+ "i.imgur.com/zhd5Dfj.jpeg"+"`)",
       
  popNavButtons();
  return (
    <div id='galleryBackground'
    className={`
    h-96 w-full  
    flex flex-col justify-around
    bg-url('${slideData[currentIndex].imageURL}')
    ${isDarkened ? 'darken' : ''}
    transition-opacity duration-500 transition-bg
   
  `}
 
     >
  

      <div className=" ">
     
        <div  
        className="
        " >
          
          <div className='
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

            
            px-14'>
             
            <h2 
            className="mx-4  ">
             {
              slideData[currentIndex].header1
             }
            </h2>
            <h2
            className="mx-4">
               {
              slideData[currentIndex].header2
             }
            </h2>
            <Link
            
            className='bg-lavendarWeb 
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
            text-redWine
            hover:text-lavendarWeb
            hover:bg-redWine
            py-3
            font-bold'
            href={slideData[currentIndex].buttonLink}
            >
              {
                slideData[currentIndex].buttonText
              }
            </Link>
          </div>
        </div>
      </div>
      {/* buttons here*/}
      <div
      id='caraNavButtons'
      className=' flex 
      flex-row 
      self-center 
      items-center
      justify-around
      h-10 
      text-4xl 
      text-redWine
      '>
        {
        
          popNavButtons()
        }
      </div>
    </div>
  );
};

export default CarasuselMainPage;
