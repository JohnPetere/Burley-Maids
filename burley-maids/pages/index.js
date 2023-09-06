
import Navbar from "../components/navBar"
import CarasuselMainPage from "../components/carouselMainPage"
export default function Home() {
  return (
    <div className=" h-auto w-auto flex flex-col overflow-hidden">
        <Navbar className="" />
      <div className=" bg-green-600 w-full h-auto flex justify-center">
        <div className=" w-4/5 flex flex-col  ">

          <CarasuselMainPage className="flex"  />
          <div className=" flex w-full h-96 bg-red-700">

          </div>
        </div>

      </div>

    </div>
  )
}
