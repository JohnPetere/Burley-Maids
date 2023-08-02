import Navbar from '../components/navBar'
import '../styles/globals.css'
export default function MyApp({ Component, pageProps }) {
  
  return <Component className=" h-auto w-screen flex flex-col " {...pageProps}>

   <Navbar/>
  </Component>
}
