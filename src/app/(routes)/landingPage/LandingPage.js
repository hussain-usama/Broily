"use client";
import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Footer from "../../components/GeneralComponents/Footer";
import NotifyMeModal from "../../components/Modals/NotifyMeModal";
import Header from "../../components/GeneralComponents/Header";

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

      <div className="bg-[#F7FF58] p-3 pb-15 sm:py-6 sm:px-10 md:px-20 flex justify-center  pt-[env(safe-area-inset-top)] min-h-screen">
        <div className="w-full max-w-6xl">
          <Header showInvestorsBtn={true} />

          <div className="items-center w-full max-w-6xl  mt-1 md:mt-5 px-2 sm:px-4 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7 ">
                {" "}
                <div>
                  <h1
                    className="text-4xl  md:text-7xl text-center md:text-left text-[#021827] leading-tight px-2 md:px-0"
                    style={{ fontFamily: "var(--font-impact)" }}
                  >
                    A Social Space  <br className="block md:hidden" />That Puts You{" "}
                    <span className="text-[#021827]">FIRST.</span>
                  </h1>
                  {/* image on mobile view , hidden on web  */}
                  <div className="block md:hidden flex justify-center relative ">
                    <img
                      src="/images/Mobile View Mockup.png"
                      alt="Broily Mobile"
                      className="w-full h-auto mt-6"
                    />
                  </div>

                  <p
                    className="text-2xl md:text:2xl text-[#021827]  md:mt-6"
                    style={{ fontFamily: "var(--font-concert)" }}
                  >
                    <span className="block sm:inline">Real Users. </span>
                    <span className="block sm:inline">
                      Real Conversations. For Men.
                    </span>
                  </p>

                  <p className="text-[#021827] mt-4 text-left">
                    Broily is a verified, invite-only social platform for men,
                    designed to foster real conversations, authentic
                    connections, and a mentally healthy online experience, free
                    from spam, fake accounts, and exploitative algorithms.
                  </p>
                  <p className="text-[#021827] mt-4 text-left">
                    Join us as we redefine what it means for men to connect
                    online. Signup below to confirm your invite when we launch!
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <button
                    onClick={toggleModal}
                    className="mt-5 px-7 md:px-5 py-2 text-xl md:text-base md:py-1 bg-[#F34213] text-white border border-[#021827] rounded-lg hover:bg-[#021827] transition cursor-pointer"
                    // style={{ fontFamily: "var(--font-impact)" }}
                  >
                    Notify Me
                  </button>
                </div>
              </div>
              {/* image on web view , hidden on mobile  */}
          
              
                <div className="md:col-span-5 flex justify-end ">
                  <div className="relative w-40 sm:w-48 md:w-64">
                    <Image
                      src="/images/MobileMockup.png"
                      alt="Broily App"
                      width={300}
                      height={600}
                      className="hidden md:block"
                    />
              
                </div>
              </div>
            </div>
            <div className="flex justify-center sm:justify-end w-full sm:my-10 mt-12 px-4">
              <div className="flex flex-row gap-4">
                <img
                  src="/images/Apple AppStore.png"
                  alt="App Store"
                  className="w-auto max-w-[140px] sm:max-w-[180px]"
                />
                <img
                  src="/images/Google PlayStore.png"
                  alt="Google Play"
                  className="w-auto max-w-[140px] sm:max-w-[180px]"
                />
              </div>
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
