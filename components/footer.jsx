import Link from "next/link"
export default function Footer(){
    return(
        <div className="py-10  text-black w-full ">
           <div className="grid grid-cols-4 gap-6 px-20 justify-around">
            {/* Useful Links */}
            <div className="flex flex-col ">
                <Link href="/" className="hover:text-amber-700 ease-in duration-700">Home</Link>
                <Link href="/" className="hover:text-amber-700 ease-in duration-700">Store</Link>
                <Link href="/" className="hover:text-amber-700 ease-in duration-700">About</Link>
                <Link href="/" className="hover:text-amber-700 ease-in duration-700">Blog</Link>
                <Link href="/" className="hover:text-amber-700 ease-in duration-700">Point of sale</Link>
            </div>

            {/* Address */}
            <div className="flex flex-col justify-around">
                <div className="py-2">Windhoek , Namibia</div>
                {/* Contact Details */}
                <div>
                    <div className="">Email: 
                        <span className="text-amber-900  hover:text-amber-700 ease-in duration-700 hover:underline">
                            <Link href="mailto:fkamushipu@gmail.com"> fkamushipu@gmail.com</Link>
                        </span> 
                    </div>
                
                    <div className="pt-2">Call: 
                        <span className="text-amber-900 hover:text-amber-700 ease-in duration-700 hover:underline">
                            <Link href="tel:+264818220330"> 0818220330</Link>
                        </span> 
                    </div>
                </div>

            </div>

            {/* More Info */}
            <div>
                <div><Link href="">Shipping & Returns </Link></div>
                <div><Link href="">FAQ</Link></div>
                <div className="flex gap-4 py-6">
                    <Link href="">Facebook</Link>
                    <Link href="">Instagram</Link>
                    <Link href="">Twitter</Link>
                </div>
            </div>
            {/* Newsletter */}
            <div>
                <div><p>Receive our news and updates </p></div>
                <div>
                    <div className=" my-2">
                        <input className="border p-3 w-full focus-ring-none " placeholder="Email Address"></input>
                    </div>
                    <div className=" bg-amber-800 hover:bg-amber-900 ease-in duration-700 py-2.5 text-white text-center w-full ">
                        <Link href="">Subscribe Now</Link>
                    </div>
                </div>
            </div>

           </div>
        </div>
    )
}