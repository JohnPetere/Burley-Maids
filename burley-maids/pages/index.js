
import Navbar from "../components/navBar"
import CarasuselMainPage from "../components/mainPage/carouselMainPage"
import WeCleanYouClean from "../components/mainPage/weCleanYouClean"
import Services from "../components/mainPage/Services"
// import BeforeAndAfter from "../components/mainPage/beforeAndAfter"
import FooterBar from "../components/footerBar"
export default function Home() {
  return (
    <div className="main-page-container">
        <Navbar className=" l" />
      <div className="main-inner-page-responsive
      ">
        <div className="  main-page-content ">

          <CarasuselMainPage className="flex"  />
          <WeCleanYouClean />
          <Services/>
          {/* <BeforeAndAfter/> */}
        
        </div>

      </div>
      <FooterBar/>
    </div>
  )
}
