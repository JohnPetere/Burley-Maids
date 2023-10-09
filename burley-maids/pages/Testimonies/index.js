import testimonyData from "../../components/testimoneyData";
import Footer from '../../components/footerBar'
function Testimonies({ children, ...props }) {
  return (
    <div
      className="
     
      
      flex flex-col
      items-center
    "
    >
      {children}
      <div className="h-full flex flex-col items-center">
      <h2 className="m-5  text-center text-2xl font-bigBold 
      sm:text-2xl
      m:text:3xl
      lg:text-6xl
      xl:text-8xl
      2xl:test-8xl
      ">Testimonies</h2>
      <div
      className="flex flex-wrap justify-center w-11/12" 
      >

        {testimonyData.map((testimoney) => (
          
            <div className="text-base  font-normal h-1/4 w-80 m-7 p-6 bg-lavendarWeb flex flex-col rounded-xl">
              <p>{testimoney.desc}</p>
              <p  className="text-zaffra font-bigBold text-right px-6
               justify-self-center">{testimoney.author}</p>
              <p className=" text-right px-6">{testimoney.location}</p>
            </div>
        
        ))}
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Testimonies;
