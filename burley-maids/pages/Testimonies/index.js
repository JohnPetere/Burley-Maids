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
      <h2 className="m-5">Testimonies</h2>
      <div>
        {testimonyData.map((testimoney) => (
          <div className="text-base font-normal">
            <p
           
            >{testimoney.desc}</p>
            <p
            className="text-zaffra font-bigBold"
            >{testimoney.author}</p>
            <p
            className="font-bold"
            >
              {testimoney.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonies;
