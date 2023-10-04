import Link from "next/link";
let Servicess = () => {
    return (
        <footer
            className=" flex 
        flex-col w-screen  
        bg-lavendarWeb
        
        sm:px-10

        md:px-10

        lg:px-40
        xl:px-40
        2xl:px-40
        "
        >
            <nav className="flex mt-3
     

            flex-wrap
            pl-10
            pb-4
             ">
                <div
                    className="flex flex-col
               
                    
                    ">
                    <h2>Services</h2>
                    <div
                        className="flex mx-4  ">

                        <ul className="m-3">
                            <li>
                                <Link href="/">House Keeping</Link>
                            </li>
                            <li>
                                <Link href="/">Deep Cleaning</Link>
                            </li>
                            <li>
                                <Link href="/">Moving Related</Link>
                            </li>
                        </ul>
                        <ul className="m-3">
                            <li>
                                <Link href="/">Carpet</Link>
                            </li>
                            <li>
                                <Link href="/">Upholstery</Link>
                            </li>
                            <li>
                                <Link href="/">Mattress</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <h2>Contact Us</h2>
                    <Link className="mx-7 mt-3" href="/">Send a message</Link>
                    <div
                        className="flex mx-4  ">
                        <ul className="mx-3">
                            <li>
                                <Link href="/">Yelp</Link>
                            </li>
                            <li>
                                <Link href="/">Facebook</Link>
                            </li>
                        
                        </ul>
                        <ul className="mx-3">
                            <li>
                                <Link href="/">Email</Link>
                            </li>
                            <li>
                                <Link href="/">Phone</Link>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </nav>
            <h1
            className=" p-4
            border-solid
            border-black
            border-t-2
            pl-3
            mx-3
            "
            >C 2023 - Burley Maids: Dedicated to Joe Ladan</h1>
        </footer>
    );
};

export default Servicess;
