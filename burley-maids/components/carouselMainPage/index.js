
const CarasuselMainPage = () => {
  return (
    <div className="w-screen bg-powderBlue h-96  overflow-hidden">
      {/* slides here */}
      <div className="">
        {/* Each elemente is a slide */}
        <div  
        data-te-carousel-init
        data-te-carousel-slide
        className=" w-full h-full relative
        after:clear-both after:block after:content-['']
        " >
          <img
            src="https://i.imgur.com/b59ciVT.jpeg"
            className=" h-full w-full object-contain-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          <div className='
          bg- w-full h-64 
          sm:w-full
          md:w-full
          lg:w-1/2
          xl:w-1/2
          2xl:w-1/2
       
          absolute top-10 left-1
           bg-sortaBigBlue bg-opacity-50
            text-white text-3xl
            flex
            flex-col
            justify-evenly
            
            
            px-14'>
            <h2 
            className="mx-4">
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
        {/* Second SLide */}
        <div  
      
        data-te-carousel-slide
        className=" w-full h-full relative
        after:clear-both after:block after:content-['']
        " >
          <img
            src="https://i.imgur.com/b59ciVT.jpeg"
            className=" h-full w-full object-contain-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          <div className='
          bg- w-full h-64 
          sm:w-full
          md:w-full
          lg:w-1/2
          xl:w-1/2
          2xl:w-1/2
       
          absolute top-10 left-1
           bg-sortaBigBlue bg-opacity-50
            text-white text-3xl
            flex
            flex-col
            justify-evenly
            
            
            px-14'>
            <h2 
            className="mx-4">
              THE SECOND MESSAGE MOFO
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
      {/* Button nav things here */}
      <div>
      <div
    class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-te-carousel-indicators>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="0"
      data-te-carousel-active
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="1"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="2"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>
  </div>
      </div>
    </div>
  );
};

export default CarasuselMainPage;
