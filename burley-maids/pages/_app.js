import Navbar from '../components/navBar'
import '../styles/globals.css'

 import localFont from 'next/font/local'
const BrushScript = localFont({src: './fonts/brushScript/Brush Script Regular.ttf'})
export default function MyApp({ Component, pageProps }) {
  
  return <Component className={`${BrushScript.className} h-auto w-screen flex flex-col `} {...pageProps}>

   <Navbar/>
  </Component>
}
