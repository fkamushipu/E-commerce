import Link from "next/link";
import logo from "../public/vercel.svg";
import Image from "next/image";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Navigation (){
    const [isOpen, setIsOpen] =useState(false);

    return(
        <div className="">
            <nav className=" w-full ">
                <div className="w-full">
                    <div className="w-full h-auto flex items-center py-6">
                        <div className="flex justify-between px-20 w-full ">
                            {/* The logo */}
                            <div className=" flex justify-center items-center flex-shrink-0">
                                {/* <Image src={logo} className="w-16 rounded-full "/> */}
                                <div className="text-2xl tracking-wide uppercase font-bold font-sans">Shop Name</div>
                            </div>
                            {/* navigation links */}
                            <div className="hidden md:block ">
                                <div className="ml-10 flex justify-between w-full space-x-6  items-center tracking-wider ">
                                    {/* Use link not the anchor tag so the page don't have to reload evrytime you visit a different component or page */}
                                    <Link href={"/"}  className="hover:text-amber-700 duration-700 ease-in">Home</Link>
                                    <Link href={"/"}  className="hover:text-amber-700 duration-700 ease-in">Store</Link>
                                    <Link href={"/"}  className="hover:text-amber-700 duration-700 ease-in">Blog</Link>
                                    <Link href={"/"}  className="hover:text-amber-700 duration-700 ease-in">About</Link>
                                    <Link href={"/"}  className="hover:text-amber-700 duration-700 ease-in">Point of Sale</Link>
                                    {/* <Image></Image> */}
                                    <div className="px-10 hover:color-amber-700 duration-700 ease-in">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Small screens responsive */}
                        <div className="mr-10 flex md:hidden ">
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-lg text-white   hover:bg-gray-700 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false" >
                                <span className="sr-only ">Open main menu</span>
                                {!isOpen ? (
                                    // menu icon
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
                                    viewBox="0 0 24 24" fill="none" stroke={"currentColor"} 
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="14" width="7" height="7"></rect>
                                        <rect x="3" y="14" width="7" height="7"></rect>
                                    </svg>
                                ):(
                                    // cross icon
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
                                    viewBox="0 0 24 24" fill="none" stroke={"currentColor"} 
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                )
                            }
                            </button>
                        </div>
                    </div>
                </div>
                <Transition show={isOpen}
                enter="transition ease-out duration-100 transform "
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100 "
                leave="transition ease-in-out duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo= "opacity-0 scale-95">
                    {(ref) => (
                        <div className="md:hidden " id="mobile-menu">
                            <div ref={ref} className="bg-white px-20  py-8  space-y-4 flex flex-col tracking-wide font-semibold text-lg ">
                            <Link href={"/"}  className="hover:text-amber-700 duration-700 ease-in">Home</Link>
                                    <Link href={"/"}  className="hover:text-amber-700 duration-700 ease-in">Store</Link>
                                    <Link href={"/"}  className="hover:text-amber-700 duration-700 ease-in">Blog</Link>
                                    <Link href={"/"}  className="hover:text-amber-700 duration-700 ease-in">About</Link>
                                    <Link href={"/"}  className="hover:text-amber-700 duration-700 ease-in">Point of Sale</Link>
                            
                            </div>
                        </div>
                    )}

                </Transition>
            </nav>
        </div>
    )

}
