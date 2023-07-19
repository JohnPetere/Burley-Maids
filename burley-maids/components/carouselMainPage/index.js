const CarasuselMainPage = () => {
  return (
    <div className="w-screen bg-powderBlue h-96  overflow-hidden">
      {/* slides here */}
      <div className="">
        {/* Each elemente is a slide */}
        <div class=" w-full h-full relative" >
          <img
            src="https://i.imgur.com/b59ciVT.jpeg"
            className=" h-full w-full object-contain-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          <div className='
          bg- w-1/2 h-64 
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
      <div></div>
    </div>
  );
};

export default CarasuselMainPage;
