
import Image from 'next/image'


import Link from 'next/link'
let WeCleanYouClean = () => { 




    return <div className="bg-lavendarWeb flex flex-col w-full  items-center">
        <h2 className='w-1/2 my-8 text-center text-4xl font-SourceCodeProReg font-bigBold'>We Clean, You Lean</h2>
        <p className='w-2/3 my-2'>If you're a homeowner or business looking for a reliable and affordable cleaning service, a 
            residential cleaning company can help keep your property in pristine condition. 
            Our team of experienced cleaners will work with you to develop a customized cleaning plan tailored to your specific needs and schedule. 
</p>
        <p className='w-2/3 my-2'> We offer a wide range of services, from daily janitorial services to one-time deep cleaning, 
            to help keep your business looking its best. Our cleaners use only the best products and equipment to ensure that your commercial space is cleaned to perfection every time.</p>
        <Link className='w-48 py-4 my-9 text-center font-BrushScript text-3xl text-zaffra bg-ghostWhite rounded-md hover:bg-zaffra hover:text-ghostWhite' href="/contact">Get A Quote</Link>
    </div>
}
export default WeCleanYouClean