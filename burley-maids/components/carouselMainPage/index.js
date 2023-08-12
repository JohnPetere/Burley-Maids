
import Image from 'next/image';
import { useState } from 'react';
import slideData from './slideData';
// I am probably going to use getServerSideProps....
// then use Map??? well see....
let CarasuselMainPage = () => {
  let goToSlide = ()=>{

  }
  let nextSlide =()=>{

  }
  let prevSlide = ()=>{

  }
  let populateSlides = ()=>{

  }


  return (
    <div className=" h-96 w-full  
     flex flex-col bg-[url('https://i.imgur.com/zhd5Dfj.jpeg')] justify-center">
      {/* slides here */}
      <div className=" ">
        {/* Each elemente is a slide */}
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
          sm:w-full
          md:w-full
          lg:w-1/2
          xl:w-1/2
          2xl:w-1/2
          text-2xl
            
            
            px-14'>
            <h2 
            className="mx-4  ">
              A Cleaner, spotless home is a message or call away!
            </h2>
            <h2
            className="mx-4">
              Contact us without delay!
            </h2>
            <a
            className='bg-lavendarWeb 
            rounded-md
            text-3xl
            self-center
            w-4/12 
            font-BrushScript 
            text-center
            text-redWine
            hover:text-lavendarWeb
            hover:bg-redWine
            py-3
             font-bold'
             href='/'
            >Free quote</a>
          </div>
        </div>
   
      </div>

      <div>
      
      </div>
    </div>
  );
};

export default CarasuselMainPage;
