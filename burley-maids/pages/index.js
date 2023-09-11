
import Navbar from "../components/navBar"
import CarasuselMainPage from "../components/carouselMainPage"
export default function Home() {
  return (
    <div className="main-page-container">
        <Navbar className=" l" />
      <div className="main-inner-page-responsive
      ">
        <div className="  main-page-content ">

          <CarasuselMainPage className="flex"  />
          <div className=" flex w-full h-96 bg-red-700">

          </div>
        </div>

      </div>

    </div>
  )
}
