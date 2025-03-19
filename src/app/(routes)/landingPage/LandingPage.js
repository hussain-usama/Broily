"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "../../components/Footer";
import NotifyMeModal from "../../components/Modals/NotifyMeModal";

function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsSubmitted(false);
  };

  return (
    <>
      <div className="bg-[#F7FF58] p-4 pb-20 sm:py-8 sm:px-10 md:px-20">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <img
            src="/images/Broily Logo.png"
            alt="Logo"
            className="h-20 w-20 sm:h-30 sm:w-30"
          />

          <button className="bg-black text-white px-4 py-2 hover:bg-[#F34213] transition relative group">
            Investors
            <span className="absolute left-20 w-full text-center text-xs text-white bg-black opacity-0 group-hover:opacity-100 transition p-1 rounded-md mt-1">
              Why Broily? Click to find out.
            </span>
          </button>
        </div>

        <div className="items-center w-full max-w-6xl mt-8 px-4 sm:px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black leading-tight">
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
              <button
                onClick={toggleModal}
                className="mt-5 px-5 py-1 bg-[#F34213] text-white rounded-lg hover:bg-[#F34213] transition"
              >
                Notify Me
              </button>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-40 sm:w-48 md:w-64">
                <Image
                  src="/images/MobileMockup.png"
                  alt="Broily App"
                  width={300}
                  height={600}
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

      <Footer />
      <NotifyMeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        toggleModal={toggleModal}
      />
    </>
  );
}

export default LandingPage;
