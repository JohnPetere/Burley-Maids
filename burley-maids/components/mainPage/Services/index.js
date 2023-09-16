import Link from "next/link";
import Image from "next/image";
import SmallBiz from "../../../styles/svg/building-solid-icon.svg"
let Servicess = () => { 

    return <div className="bg-ghostWhite">
        <h2>Services</h2>
        <div>
            {/* image here */}
            <h3>Residential</h3>
           <Link href='/Services'>
            <Image src={SmallBiz}/>
           </Link>
        </div>
        
    </div>
}
export default Servicess;