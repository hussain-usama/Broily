"use client";
import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Footer from "../../components/GeneralComponents/Footer";
import NotifyMeModal from "../../components/Modals/NotifyMeModal";
import Header from "@/app/components/GeneralComponents/Header";

function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsSubmitted(false);
  };

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Broily – A Social Space That Puts You First</title>
        <meta
          name="description"
          content="Broily is an identity-verified, social space for men. No fake engagement, no distractions, just real conversations and meaningful connections."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Broily – A Social Space That Puts You First"
        />
        <meta
          property="og:description"
          content="Broily is an identity-verified, social space for men. No fake engagement, no distractions, just real conversations and meaningful connections."
        />
        <meta property="og:image" content="/images/Broily-og-image.png" />
        <meta property="og:url" content="https://www.broily.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Broily – A Social Space That Puts You First"
        />
        <meta
          name="twitter:description"
          content="Broily is an identity-verified, social space for men. No fake engagement, no distractions, just real conversations and meaningful connections."
        />
        <meta name="twitter:image" content="/images/Broily-og-image.png" />
      </Head>

      <div className="bg-[#F7FF58] p-3 pb-20 sm:py-6 sm:px-10 md:px-20 flex justify-center">
        <div className="w-full max-w-6xl">
        <Header showInvestorsBtn={true}/>

          <div className="items-center w-full max-w-6xl mt-5 px-4 sm:px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7 text-center md:text-left">
                <h1
                  className="text-3xl sm:text-4xl md:text-7xl  text-[#021827] leading-tight "
                  style={{ fontFamily: "var(--font-impact)" }}
                >
                  A Social Space That Puts You{" "}
                  <span className="text-[#021827]">FIRST.</span>
                </h1>

                <div className="block md:hidden flex justify-center relative">
                  <img

                    src="/images/Mobile View Mockup.png"
                    alt="Broily Mobile"
                    className="w-40 h-auto mt-6"
                  />
                </div>

                <p
                  className="text-2xl text-[#021827] mt-6"
                  style={{ fontFamily: "var(--font-concert)" }}
                >
                  Real Users. Real Conversations. For Men.
                </p>
                <p className="text-[#021827] mt-4" style={{ fontFamily: "var(--font-appleSymbols)" }}>
                  Broily is a verified, invite-only social platform for men,
                  designed to foster real conversations, authentic connections,
                  and a mentally healthy online experience, free from spam, fake
                  accounts, and exploitative algorithms.
                </p>
                <p className="text-[#021827] mt-4" style={{ fontFamily: "var(--font-appleSymbols)" }}>
                  Join us as we redefine what it means for men to connect
                  online. Signup below to confirm your invite when we launch!
                </p>
                <button
                  onClick={toggleModal}
                  className="mt-5 px-5 py-1 bg-[#F34213] text-white border border-[#021827] rounded-lg hover:bg-[#021827] transition cursor-pointer"
                  style={{ fontFamily: "var(--font-comic)" }}
                >
                  Notify Me
                </button>
              </div>

              {/* <div className="md:col-span-5 flex justify-center">
              <div className="relative w-40 sm:w-48 md:w-64 flex justify-center">
                <Image
                  src="/images/MobileMockup.png"
                  alt="Broily App"
                  width={300}
                  height={600}
                />
              </div>
            </div> */}
              {/* 
              <div className="md:col-span-5 md:hidden flex justify-center relative">
                <div
                  className="relative w-300 h-[100%] bg-contain bg-no-repeat bg-center "
                  style={{
                    backgroundImage:
                      "url('/images/Mobile Mockup Without Logo (1).png')",
                  }}
                >
                  <img
                    onClick={toggleModal}
                    src="/images/Broily Logo.png"
                    alt="Broily"
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-30 h-30 md:hidden"
                  />
                </div>
              </div> */}

              <div className="md:col-span-5 hidden md:flex justify-center relative">
                <div
                  className="relative w-300 h-[100%] bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url('/images/Mobile Mockup Without Logo (1).png')",
                  }}
                >
                  <img
                    onClick={toggleModal}
                    src="/images/Broily Logo.png"
                    alt="Broily"
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-30 h-30"
                  />
                </div>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end bg-[#F7FF58] my-10 gap-4">
              <img
                src="/images/Apple AppStore.png"
                alt="App Store"
                className="w-full max-w-[180px] sm:max-w-[200px]"
              />
              <img
                src="/images/Google PlayStore.png"
                alt="Google Play"
                className="w-full max-w-[180px] sm:max-w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        {/* // hide on phone , footer content is in hamburger*/}
        <Footer />
      </div>
      <NotifyMeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        toggleModal={toggleModal}
      />
    </>
  );
}

export default LandingPage;
