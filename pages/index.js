import coverImage from "../public/cover1.jpg";
import Cover1 from "../public/Pictures/Cover1.jpg"
import Cover2 from "../public/More.jpg"
import Cover3 from "../public/Pictures/Cover3.jpg"

import Model1 from "../public/Models/Model1.png"
import Model2 from "../public/Models/Model2.png"

import Product2 from "../public/Products/short2.png"
import Product3 from "../public/Products/top3.png"

import Image from "next/image";

const Home = () => {
  return (
    <div className="">
      <div className=''>

        {/* Hero Image */}
        <div className="relative sm:mx-4 md:mx-20 mb-10 md:mb-20">
          <div className=' h-full md:h-96 overflow-hidden bg-neutral-800'>
           <Image src={coverImage} className="h-auto w-full opacity-60 "></Image>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex-col ">
            <div className="font-bold xs:text-xl sm:text-2xl md:text-4xl text-center text-white">
              <span>New Outerwear <br></br>Collection</span>
            </div>
            <div className="flex justify-center w-full">
            <button className="font-semibold tracking-wide border text-white hover:bg-black hover:text-white ease-in duration-700 rounded-full text-center py-2.5 mt-10 px-8 w-48">Shop Now</button>
            </div>
          </div>
        </div>

{/* Gray section */}
        <div className="bg-neutral-100 w-full py-12 justify-center ">
          <div className="text-center pb-10 ">
            <h3 className="xs:text-xl md:text-3xl font-semibold uppercase tracking-wide">Newest Products</h3>
          </div>
          <div className="justify-around mx-10 md:mx-20  flex grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-2 " >
              <div className="sm:h-48 md:h-64 overflow-hidden bg-neutral-100 ">
                <Image src={Product3} className="h-auto w-full"></Image>
              </div>
              <div className="py-4 text-center">
                <div className="">Product Name</div>
                <div className="">$99.99</div>
              </div>
            </div>
            <div className="bg-white p-2 " >
              <div className="sm:h-48 md:h-64   overflow-hidden bg-neutral-100 ">
                <Image src={Product2} className="h-auto w-full"></Image>
              </div>
              <div className="py-4 text-center">
                <div className="">Product Name</div>
                <div className="">$99.99</div>
              </div>
            </div>
            <div className="bg-white p-2 " >
              <div className="sm:h-48 md:h-64  overflow-hidden bg-neutral-100 ">
                <Image src={Product3} className="h-auto w-full"></Image>
              </div>
              <div className="py-4 text-center">
                <div className="">Product Name</div>
                <div className="">$99.99</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
          <button className="font-semibold tracking-wide border border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white ease-in duration-700 rounded-full flex justify-center text-center py-2.5 mt-10 px-8 w-36 ">Shop All</button>
          </div>
        </div>

        {/* 2 Gallery Section */}
        <div className="px-10 md:px-20 pt-20">
         <div className="grid md:grid-cols-2 gap-6 font-bold text-xl md:text-4xl lg:text-5xl">
          <div className="relative h-full md:h-72 overflow-hidden">
            <div className=" bg-neutral-800 "><Image src={Cover1} className="w-auto h-full opacity-80 hover:opacity-60 hover:scale-110 duration-700 ease-in "></Image></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">Our Story</div>
          </div>

          <div className="relative h-full md:h-72 overflow-hidden">
            <div className=" bg-neutral-800 "><Image src={Cover3} className="w-auto h-full opacity-80 hover:opacity-60 hover:scale-110 duration-700 ease-in "></Image></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">Our Blog</div>
          </div>
         </div>
        </div>

        {/* 3 Gallery Section */}
        <div className="px-4 md:px-20 py-10">
         <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-6 font-bold text-lg">
          <div className="relative xs:h-full md:h-64 overflow-hidden  ">
            <div className="h-full bg-neutral-800  "><Image src={Cover2} className="w-auto h-full hover:opacity-40 duration-700 ease-in"></Image></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white">Accesories</div>
          </div>

          <div className="relative xs:h-full md:h-64 overflow-hidden  ">
            <div className="h-full bg-neutral-800  "><Image src={Cover2} className="w-auto h-full hover:opacity-40 duration-700 ease-in"></Image></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white">Tops</div>
          </div>

          <div className="relative xs:h-full md:h-64 overflow-hidden  ">
            <div className="h-full bg-neutral-800  "><Image src={Cover2} className="w-auto h-full hover:opacity-40 duration-700 ease-in"></Image></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white">Bags</div>
          </div>


         </div>
        </div>

        {/* Featured Products List  */}
        <div className="bg-neutral-100 w-full pt-12 justify-center ">
          <div className="text-center pb-10 ">
            <h3 className="xs:text-xl md:text-3xl font-semibold uppercase tracking-wide">Featured Products</h3>
          </div>
          <div className="justify-around px-6 md:px-24 flex grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-2 " >
              <div className="h-52 md:h-64 bg-neutral-300 overflow-hidden  ">
                <Image src={Model2} className="h-auto w-full"></Image>
              </div>
              <div className="py-4 text-center">
                <div className="">Product Name</div>
                <div className="">$99.99</div>
              </div>
            </div>
            <div className="bg-white p-2 " >
              <div className="h-52 md:h-64 bg-neutral-300 overflow-hidden  ">
                <Image src={Model1} className="h-auto w-full "></Image>
              </div>
              <div className="py-4 text-center">
                <div className="">Product Name</div>
                <div className="">$99.99</div>
              </div>
            </div>
            <div className="bg-white p-2 " >
              <div className="h-52 md:h-64 bg-neutral-300 overflow-hidden  ">
                <Image src={Model2} className="h-auto w-full "></Image>
              </div>
              <div className="py-4 text-center">
                <div className="">Product Name</div>
                <div className="">$99.99</div>
              </div>
            </div>
            <div className="bg-white p-2 " >
              <div className="h-52 md:h-64 overflow-hidden  ">
                <Image src={coverImage} className="h-auto w-full "></Image>
              </div>
              <div className="py-4 text-center">
                <div className="">Product Name</div>
                <div className="">$99.99</div>
              </div>
            </div>
            <div className="bg-white p-2 " >
              <div className="h-52 md:h-64 overflow-hidden  ">
                <Image src={Cover2} className="h-auto w-full "></Image>
              </div>
              <div className="py-4 text-center">
                <div className="">Product Name</div>
                <div className="">$99.99</div>
              </div>
            </div>
            <div className="bg-white p-2 " >
              <div className="h-52 md:h-64  overflow-hidden ">
                <Image src={coverImage} className="h-auto w-full"></Image>
              </div>
              <div className="py-4 text-center">
                <div className="">Product Name</div>
                <div className="">$99.99</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <button className="font-semibold tracking-wide border border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white ease-in duration-700 rounded-full text-center py-2.5 mt-10 px-8 w-36 ">Shop All</button>
          </div>

          {/* Icons */}

          <div className="grid sm:grid-cols-3 gap-6 px-20 py-20">
            <div className="flex flex-col space-y-6 ">
              <div className="flex justify-center  text-amber-800">
               <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2.1l4 4-4 4"/><path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4"/><path d="M21 11.8v2a4 4 0 0 1-4 4H4.2"/></svg>
              </div>
              <div className="text-center font-semibold">Free Shipping and Returns</div>

            </div>
            <div className="flex flex-col space-y-6 ">
              <div className="flex justify-center  text-amber-800">
               <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <div className="text-center font-semibold">Secure Payment</div>

            </div>
            <div className="flex flex-col space-y-6 ">
              <div className="flex justify-center  text-amber-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
              </div>
              <div className="text-center font-semibold">Customer Service</div>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
