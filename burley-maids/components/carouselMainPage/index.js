
import Image from 'next/image';
import leftButton from '../../styles/svg/chevron-left-button.svg'
import rightButton from '../../styles/svg/chevron-right-button.svg'

// import JoeLogo from '../../styles/svg/Joe-Logo.svg'
import { useState } from 'react';
import slideData from './slideData';
// I am probably going to use getServerSideProps....
// then use Map??? well see....
let CarasuselMainPage = () => {
  let goToSlide = ()=>{
    console.log("You pressed Slide: ")
  }
  let nextSlide =()=>{

  }
  let prevSlide = ()=>{

  }
  let populateSlides = ()=>{

  }


  return (
    <div className=" h-96 w-full  
     flex flex-col bg-[url('https://i.imgur.com/zhd5Dfj.jpeg')] justify-around">
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
      {/* buttons here*/}
      <div
      className=' flex 
      flex-row 
      self-center 
      items-center
      justify-around
      h-10 
     
      text-4xl 
      text-redWine
      '>
          <div
          className='w-16  h-6 mx-4 bg-redWine border-2 border-black rounded-lg'
          id={1}
          onClick={goToSlide}
          >

          </div>
          <div
          className='w-12 h-4 mx-4 bg-lavendarWeb'
          >

          </div>
          <div
          className='w-12 h-4 mx-4 bg-lavendarWeb'
          >

          </div>
      </div>
    </div>
  );
};

export default CarasuselMainPage;
