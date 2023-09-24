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
          <div className="flex items-center flex-col">
            {/* One service card */}
            <div className="service-card
                ">
              <div className="service-card-icon-title">
                <Link
                  className="                      
                  service-card-icon-link"  href="/contact"
                >
                  <Image className="" height={100} width={100} src={SmallBiz} />
                </Link>
                <h3 className="text-4xl text-left text-zaffra  my-6 font-SourceCodePro font-bigBold ">
                   Business
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <p className="service-card-p
                ">Are you a small business owner struggling to keep your workspace clean and organized? Look no further than our cleaning company's small business cleaning service. Our team of expert cleaners will work with you to create a customized cleaning plan that meets the specific needs of your business. We use eco-friendly cleaning products and state-of-the-art equipment to ensure a thorough and effective cleaning. Our small business cleaning service can provide regular cleaning and maintenance, as well as one-time deep cleanings. Let us take care of the cleaning so you can focus on growing your business. Our service is affordable and flexible, designed to fit the unique needs of small businesses. 
                  </p>
                <Link className="servuce-card-link-button "
                 href="/contact ">Get a quote</Link>
              </div>
            </div>
             {/* One service card */}
             <div className="service-card
                ">
              <div className="service-card-icon-title">
                <Link
                  className="                      
                  service-card-icon-link"  href="/contact"
                >
                  <Image className="" height={123} width={125} src={CarpetCleaning} />
                </Link>
                <h3 className="text-4xl text-center text-zaffra  my-6 font-SourceCodePro font-bigBold ">
                   Carpet Cleaning
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <p className="service-card-p
                ">Are you a business owner struggling to maintain the pristine condition of your carpets? Look no further than our carpet cleaning company's small business carpet cleaning service. Our team of expert carpet cleaners will collaborate with you to craft a tailor-made cleaning plan that addresses the specific needs of your business. We utilize eco-friendly cleaning products and state-of-the-art carpet cleaning equipment to ensure a comprehensive and efficient cleaning process.

                Our small business carpet cleaning service offers both regular maintenance and one-time deep cleanings, granting you the freedom to select the level of care that suits your carpets best. Allow us to handle the carpet cleaning, allowing you to dedicate your time and energy to the growth of your business. Our service is not only affordable but also remarkably flexible, designed to accommodate the unique requirements of small businesses like yours.
                  </p>
                <Link className="servuce-card-link-button "
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
