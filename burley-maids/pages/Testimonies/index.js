import testimonyData from "./testimoneyData";
function Testimonies({ children, ...props }) {
  return (
    <div
      className="
      font-bigBold
      text-8xl
      flex flex-col
      items-center
    "
    >
      {children}
      <div className="w-full h-full ">
      <h2 className="m-5  text-center">Testimonies</h2>
      <div
      className="flex flex-wrap  w-full" 
      >

        {testimonyData.map((testimoney) => (
          
            <div className="text-base  font-normal h-1/4 w-80 m-7 p-6 bg-lavendarWeb flex flex-col">
              <p>{testimoney.desc}</p>
              <p  className="text-zaffra font-bigBold text-right px-6
               justify-self-center">{testimoney.author}</p>
              <p className=" text-right px-6">{testimoney.location}</p>
            </div>
        
        ))}
      </div>
      </div>
    </div>
  );
}

export default Testimonies;
