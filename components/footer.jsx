import Link from "next/link"
export default function Footer(){
    return(
        <div className="pt-20  text-black w-full text-sm">
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-20 justify-between">
            {/* Useful Links */}
            <div className="flex flex-col justify-between">
                <Link href="/" className="hover:text-amber-700 ease-in duration-700">Home</Link>
                <Link href="/" className="hover:text-amber-700 ease-in duration-700">Store</Link>
                <Link href="/" className="hover:text-amber-700 ease-in duration-700">About</Link>
                <Link href="/" className="hover:text-amber-700 ease-in duration-700">Blog</Link>
                <Link href="/" className="hover:text-amber-700 ease-in duration-700">Point of sale</Link>
            </div>

            {/* Address */}
            <div className="flex flex-col justify-between">
                <div className="flex  gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>Windhoek , Namibia</div>
                {/* Contact Details */}
                <div>
                    <div className="">Email: 
                        <span className="text-amber-900  hover:text-amber-700 ease-in duration-700 hover:underline font-semibold">
                            <Link href="mailto:fkamushipu@gmail.com"> fkamushipu@gmail.com</Link>
                        </span> 
                    </div>
                
                    <div className="pt-2">Call: 
                        <span className="text-amber-900 hover:text-amber-700 ease-in duration-700 hover:underline font-semibold">
                            <Link href="tel:+264818220330"> 0818220330</Link>
                        </span> 
                    </div>
                </div>

            </div>

            {/* More Info */}
            <div className="flex flex-col justify-between">
                <div><Link href="/" className="hover:text-amber-700 ease-in duration-700">Shipping & Returns </Link></div>
                <div><Link href="/" className="hover:text-amber-700 ease-in duration-700">FAQ</Link></div>
                <div className="flex gap-4">
                    <Link href="/" className="hover:text-amber-700 ease-in duration-700"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#000"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/></svg></Link>
                    <Link href="/" className="hover:text-amber-700 ease-in duration-700"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#000"><path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/></svg></Link>
                    <Link href="/" className="hover:text-amber-700 ease-in duration-700"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#000"><path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z"/></svg></Link>
                </div>
            </div>
            {/* Newsletter */}
            <div className="flex flex-col justify-between">
                <div><p>Receive our news and updates !</p></div>
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

           {/* Copyright */}
           <div>
            <div class="container mx-auto  py-4 my-8 border-t">
                    <p class="text-center">&copy; Copyright 2023 
                    Feni Kamushipu | All rights reserved.</p>
                </div>
           </div>
        </div>
    )
}