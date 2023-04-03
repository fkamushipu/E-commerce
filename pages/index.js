import coverImage from "../public/cover1.jpg";
import Image from "next/image";
const Home = () => {
  return (
    <div className="">
      <div className=''>

        {/* Hero Image */}
        <div className="relative mx-20 mb-20">
          <div className='h-96 overflow-hidden'>
           <Image src={coverImage} className="h-auto w-full "></Image>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex-col ">
            <div className="font-bold text-4xl text-center">
              <span>New Outerwear <br></br>Collection</span>
            </div>
            <div className="flex justify-center w-full">
            <button className="font-semibold tracking-wide border border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white ease-in duration-700 rounded-full text-center py-2.5 mt-10 px-8 w-48">Shop Now</button>
            </div>
          </div>
        </div>

{/* Gray section */}
        <div className="bg-neutral-100 w-full py-12 justify-center ">
          <div className="text-center pb-10 ">
            <h3 className="text-3xl font-semibold uppercase tracking-wide">Newest Products</h3>
          </div>
          <div className="justify-around px-24 flex grid grid grid-cols-3 gap-6">
            <div className="bg-white p-2 " >
              <div className="h-64   ">
                <Image src={coverImage} className="h-full"></Image>
              </div>
              <div className="py-4 text-center">
                <div className="">Product Name</div>
                <div className="">$99.99</div>
              </div>
            </div>
            <div className="bg-white p-2 " >
              <div className="h-64   ">
                <Image src={coverImage} className="h-full"></Image>
              </div>
              <div className="py-4 text-center">
                <div className="">Product Name</div>
                <div className="">$99.99</div>
              </div>
            </div>
            <div className="bg-white p-2 " >
              <div className="h-64 gray-400  ">
                <Image src={coverImage} className="h-full"></Image>
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
        </div>

        {/* 2 Gallery Section */}
        <div className="px-20 pt-20">
         <div className="grid grid-cols-2 gap-6 font-bold text-4xl">
          <div className="relative h-72 overflow-hidden">
            <div className=" "><Image src={coverImage} className="w-auto h-full"></Image></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">Our Story</div>
          </div>

          <div className="relative h-72 overflow-hidden">
            <div className=""><Image src={coverImage} className="w-auto h-full"></Image></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">Our Story</div>
          </div>
         </div>
        </div>

        {/* 3 Gallery Section */}
        <div className="px-20 py-10">
         <div className="grid grid-cols-3 gap-6 font-bold text-xl">
          <div className="relative h-56 overflow-hidden">
            <div className="h-full "><Image src={coverImage} className="w-auto h-full"></Image></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">Our Story</div>
          </div>

          <div className="relative h-56 overflow-hidden ">
            <div className="h-full"><Image src={coverImage} className="w-auto h-full"></Image></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">Our Story</div>
          </div>

          <div className="relative h-56 overflow-hidden ">
            <div className="h-full"><Image src={coverImage} className="w-auto h-full"></Image></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">Our Story</div>
          </div>


         </div>
        </div>

        {/* Products List  */}
        <div className="bg-neutral-100 w-full py-12 justify-center ">
          <div className="text-center pb-10 ">
            <h3 className="text-3xl font-semibold uppercase tracking-wide">Featured Products</h3>
          </div>
          <div className="justify-around px-24 flex grid grid grid-cols-3 gap-8">
            <div className="bg-white p-2 " >
              <div className="h-64   ">
                <Image src={coverImage} className="h-full"></Image>
              </div>
              <div className="py-4 text-center">
                <div className="">Product Name</div>
                <div className="">$99.99</div>
              </div>
            </div>
            <div className="bg-white p-2 " >
              <div className="h-64   ">
                <Image src={coverImage} className="h-full"></Image>
              </div>
              <div className="py-4 text-center">
                <div className="">Product Name</div>
                <div className="">$99.99</div>
              </div>
            </div>
            <div className="bg-white p-2 " >
              <div className="h-64   ">
                <Image src={coverImage} className="h-full"></Image>
              </div>
              <div className="py-4 text-center">
                <div className="">Product Name</div>
                <div className="">$99.99</div>
              </div>
            </div>
            <div className="bg-white p-2 " >
              <div className="h-64   ">
                <Image src={coverImage} className="h-full"></Image>
              </div>
              <div className="py-4 text-center">
                <div className="">Product Name</div>
                <div className="">$99.99</div>
              </div>
            </div>
            <div className="bg-white p-2 " >
              <div className="h-64   ">
                <Image src={coverImage} className="h-full"></Image>
              </div>
              <div className="py-4 text-center">
                <div className="">Product Name</div>
                <div className="">$99.99</div>
              </div>
            </div>
            <div className="bg-white p-2 " >
              <div className="h-64   ">
                <Image src={coverImage} className="h-full"></Image>
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
        </div>

      </div>
    </div>
  )
}

export default Home
