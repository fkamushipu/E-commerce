import Link from "next/link";
import logo from "../public/tech-africa-white.svg";
import Image from "next/image";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Navigation (){
    const [isOpen, setIsOpen] =useState(false);

    return(
        <div className="">
            <nav className=" w-full shadow-xl">
                <div className="w-full">
                    <div className="w-full h-20 flex items-center bg-gray-500">
                        <div className="flex justify-around mx-20 w-full ">
                            {/* The logo */}
                            <div className="justify-center items-center flex-shrink-0">
                                <Image src={logo} className="w-16 rounded-full "/>
                            </div>
                            {/* navigation links */}
                            <div className="hidden md:block ">
                                <div className="ml-10 flex justify-between w-full space-x-4 py-2.5 items-center tracking-wider font-semibold sm:text-lg md:text-2xl">
                                    {/* Use link not the anchor tag so the page don't have to reload evrytime you visit a different component or page */}
                                    <Link href={"/"} ><button className="flex-1 hover:text-gray-800 px-8 border-r-2 border-b-yellow-400">Home</button></Link>
                                    <Link href={"#Hero"}><button className="flex-1 hover:text-gray-800 px-8 border-r-2 border-b-yellow-400">Introduction</button></Link>
                                    <Link href={"#Slider"} ><button className="flex-1 hover:text-gray-800 px-8 border-r-2 border-b-yellow-400">What we offer</button></Link>
                                    <Link href={"#Services"}><button className="flex-1 hover:text-gray-800 px-8 border-r-2 border-b-yellow-400">Other services</button></Link>
                                    <Link href={"#ContactForm"}><button className="flex-1 hover:text-gray-800 px-8 border-r-2 border-b-yellow-400">Contact Us</button></Link>
                                </div>
                            </div>
                        </div>

                        {/* Small screens responsive */}
                        <div className="mr-10 flex md:hidden ">
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-lg text-white  shadow-xl hover:bg-gray-700 focus:outline-none"
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
                            <div ref={ref} className="bg-gray-600 px-4 sm:px-3 pt-2.5 pb-3 space-y-2 flex flex-col tracking-wider font-semibold text-lg ">
                                <Link href={"/"} ><button className=" hover:text-gray-800 text-left w-full border-b-2 border-b-gray-300 ">Home</button></Link>
                                <Link href={"#Hero"}><button className=" hover:text-gray-800 text-left w-full border-b-2 border-b-gray-300 ">Introduction</button></Link>
                                <Link href={"#Slider"} ><button className=" hover:text-gray-800 text-left w-full border-b-2 border-b-gray-300 ">What we offer</button></Link>
                                <Link href={"#Services"} ><button className=" hover:text-gray-800 text-left w-full border-b-2 border-b-gray-300 ">Other Services</button></Link>
                                <Link href={"#ContactForm"}><button className="hover:text-gray-800 text-left w-full border-b-2 border-b-gray-300 ">Contact Us</button></Link>
                            
                            </div>
                        </div>
                    )}

                </Transition>
            </nav>
        </div>
    )

}
