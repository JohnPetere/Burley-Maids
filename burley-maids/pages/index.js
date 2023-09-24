
import Navbar from "../components/navBar"
import CarasuselMainPage from "../components/mainPage/carouselMainPage"
import WeCleanYouClean from "../components/mainPage/weCleanYouClean"
import Services from "../components/mainPage/Services"
import BeforeAndAfter from "../components/mainPage/beforeAndAfter"
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
          <BeforeAndAfter/>
          <div className=" flex w-full h-96 bg-red-700">

          </div>
        </div>

      </div>

    </div>
  )
}
