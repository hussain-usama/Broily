// "use client"
import React from "react";
import Image from "next/image";
import Footer from "../../components/Footer";
function LandingPage() {
  return (
    <>
      <div className="bg-[#F7FF58] p-2 pb-20 gap-4 sm:py-10 px-20 ">
        <div className="w-full flex justify-between items-center">
          <img
            src="/images/Broily Logo.png"
            alt="Logo"
            height={"100px"}
            width={"100px"}
          />
          {/* <button className="bg-black text-white px-4 py-2 ">Investors</button> */}

          <button className="bg-black text-white px-4 py-2 hover:bg-orange-600 transition relative group">
            Investors
            <span className="absolute left-20 w-full text-center text-xs text-white bg-black opacity-0 group-hover:opacity-100 transition p-1 rounded-md mt-1">
              Why Broily? Click to find out.
            </span>
          </button>


        </div>
        <div className="items-center w-full max-w-6xl mt-8 px-6 md:px-20 ">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 text-center md:text-left">
              <h1
                className="text-4xl md:text-6xl font-bold  text-black leading-tight"
                style={{ fontWeight: 900 }}
              >
                A Social Space That Puts You{" "}
                <span className="text-black">FIRST.</span>
              </h1>
              <p className="text-lg font-semibold text-black mt-6">
                Real Users. Real Conversations. For Men.
              </p>
              <p className="text-gray-700 mt-4">
                Broily is a verified, invite-only social platform for men,
                designed to foster real conversations, authentic connections,
                and a mentally healthy online experience, free from spam, fake
                accounts, and exploitative algorithms.
              </p>
              <p className="text-gray-700 mt-4">
                Join us as we redefine what it means for men to connect online.
                Signup below to confirm your invite when we launch!
              </p>
              <button className="mt-5 px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                Notify Me
              </button>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-48 md:w-64">
                <Image
                  src="/images/MobileMockup.png"
                  alt="Broily App"
                  width={300}
                  height={600}
                  // className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end bg-[#F7FF58] my-10 gap-6 px-6 md:px-20">
                <img
                  src="/images/Google PlayStore.png"
                  alt="App Store"
                  width={200}
                  height={80}
                />
                <img
                  src="/images/Google PlayStore.png"
                  alt="Google Play"
                  width={200}
                  height={80}
                />
             
          
          </div>
        </div>
       
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
