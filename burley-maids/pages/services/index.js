import Link from "next/link";

import Image from "next/image";
import SmallBiz from "../../styles/svg/building-solid-icon.svg";
import CarpetCleaning from "../../styles/svg/carpet-icon.svg";
import ResidentialIcon from "../../styles/svg/house-solid-icon.svg";
function Services({ children, ...props }) {
  return (
    <div className="main-page-container bg-ghostWhite">
      {children}
      <main className="main-inner-page-responsive bg-ghostWhite ">
        <div className="main-page-content flex ">
          <h2 className="text-8xl font-BrushScript text-center my-6 ">
            Services
          </h2>
          <div className="flex justify-center  ">
            {/* One service card */}
            <div className="bg-lavendarWeb flex p-4 w-5/6 rounded-[2rem]">
              <div className="m-4 h-full flex flex-col items-center justify-center">
                <Link
                  className="  h-52
                            w-52 
                            flex
                            justify-center
                            bg-ghostWhite
                            rounded-full
                            mx-2
                            hover:scale-110
                            hover:drop-shadow-2xl"
                  href="/contact"
                >
                  <Image className="" height={75} width={75} src={SmallBiz} />
                </Link>
                <h3 className="text-4xl text-left text-zaffra  my-6 font-SourceCodePro font-bigBold ">
                  Residential
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-md p-6 text-left text-black my-6 font-SourceCodePro">Are you a small business owner struggling to keep your workspace clean and organized? Look no further than our cleaning company's small business cleaning service. Our team of expert cleaners will work with you to create a customized cleaning plan that meets the specific needs of your business. We use eco-friendly cleaning products and state-of-the-art equipment to ensure a thorough and effective cleaning. Our small business cleaning service can provide regular cleaning and maintenance, as well as one-time deep cleanings. Let us take care of the cleaning so you can focus on growing your business. Our service is affordable and flexible, designed to fit the unique needs of small businesses. A clean and organized workspace not only creates a better environment for your employees, but it also makes a great impression on your clients.
                  </p>
                <Link className="text-ghostWhite bg-zaffra p-4 rounded-lg text-center w-5/12 hover:scale-125 text-2xl font-bigBold "
                 href="/contact ">Get a quote</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Services;
