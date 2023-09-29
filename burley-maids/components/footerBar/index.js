import Link from "next/link";
let Servicess = () => {
    return (
        <footer
            className=" flex 
        flex-col w-screen  
        bg-lavendarWeb
        "
        >
            <nav className="flex flex-row justify-evenly">
                <div
                    className="flex flex-col">
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
            <h1>C 2023 - Burley Maids</h1>
        </footer>
    );
};

export default Servicess;
