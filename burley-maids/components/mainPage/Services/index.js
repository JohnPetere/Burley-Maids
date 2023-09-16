import Link from "next/link";
import Image from "next/image";
import SmallBiz from "../../../styles/svg/building-solid-icon.svg";
import CarpetCleaning from "../../../styles/svg/carpet-icon.svg";
import ResidentialIcon from "../../../styles/svg/house-solid-icon.svg";
let Servicess = () => {
  const iconSize = 100;
  return(
    <div className="bg-ghostWhite">
      <h2 className="w-full text-center text-4xl my-9 "
      >Services</h2>

      <div className = "w-full
      flex
      flex-wrap
      justify-evenly"
     >

        <div>
          <Link className="service-box-main-page" href="/Services">
            <Image 
             className=""
            height={75} width={75} src={SmallBiz} />
          </Link>
          <h3 className="service-box-main-page-h3" >Residential</h3>
        </div>

        <div>
          <Link className="service-box-main-page" href="/Services">
            <Image
             className="" height={125} width={125} src={CarpetCleaning} />
          </Link>
          <h3 className="service-box-main-page-h3" >Carpet Cleaning</h3>
        </div>

        <div>
          <Link className="service-box-main-page" href="/Services">
            <Image 
            height={125} width={125} src={ResidentialIcon} />
          </Link>
          <h3 className="service-box-main-page-h3" >Small Business</h3>
        </div>
      </div>
    </div>
)
}
export default Servicess;
