"use client";
import React, { useState } from "react";
import NotifyMeModal from "../components/Modals/NotifyMeModal";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function WhyBroily() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsSubmitted(false);
  };
  return (
    <>
      <div className="bg-gray-100 text-[#021827]  sm:p-8 md:p-10 flex justify-center">
        <div className="w-full max-w-4xl">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <img
              src="/images/Broily Logo.png"
              alt="Logo"
              className="h-16 w-16 sm:h-30 sm:w-30"
            />
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl mb-6 text-center"
            style={{ fontFamily: "var(--font-arialRounded)" }}
          >
            Why Do Men Need Broily?
          </h1>

          {/* Main Content */}
          <div className="mt-8 px-4 sm:px-6 md:px-2 py-5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8 text-center md:text-left text-sm sm:text-base leading-relaxed">
                <p>
                  Men today aren’t just lonelier, they’re disconnected. Society
                  expects them to be strong, to endure, to provide. But where do
                  they go when they need real friendships, support, or
                  meaningful conversations? Nowhere. And that’s the problem.
                </p>
                <br />
                <p>
                  On mainstream social media, engagement is a lie. Likes don’t
                  mean connection. Viral posts don’t mean real conversations.
                  And the algorithms? They’re designed to trap, not to serve.
                  Broily rejects all of it!
                </p>
                <br />
                <p>
                  Broily is an identity-verified, invite-only network built for
                  real conversations, meaningful connections, and genuine
                  personal growth. Here, men aren’t just scrolling, they’re
                  engaging with purpose, building friendships, and leveling up.
                </p>
                <br />
                <p>
                  This is positive masculinity, redefined. Strength through
                  emotional intelligence. Leadership through self-awareness.
                  Brotherhood through meaningful support.
                </p>
                <br />
                <p>
                  Every member is verified. Every conversation is real. Broily
                  isn’t about chasing likes, it’s about building something that
                  matters. Whether it’s connecting with like-minded men, finding
                  support, or simply having real discussions, Broily is designed
                  to add value, not drain it.
                </p>
                <br />
                <p>
                  Broily isn’t a platform, it’s a movement. A movement for men
                  who refuse to settle for shallow connections, empty scrolling,
                  or fake engagement. If you’re ready for something real, Broily
                  is waiting for you!
                </p>
              </div>

              {/* Mobile Mockup Image - right side*/}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-32 sm:w-48 md:w-64 flex justify-center">
                  <Image
                    src="/images/MobileMockup.png"
                    alt="Broily App"
                    width={300}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Problem Statement Accordion */}
          <div className="my-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center font-bold justify-between w-full p-3  sm:text-2xl text-[#021827] transition-all cursor-pointer"
              style={{ fontFamily: "var(--font-arialRounded)" }}
            >
              <p className=" font-bold text-lg sm:text-2xl">
               
                Problem Statement
              </p>
              {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
            </button>

            {isOpen && (
              <div className="mt-3 p-3 text-[#021827] text-sm sm:text-base">
                <section>
                  <p className=" text-[#021827]">
                    Recent studies show that men today are experiencing an
                    alarming decline in close friendships, with over 15%
                    reporting having no close friends at all—a sharp increase
                    from just a few decades ago. Research from institutions like
                    the Survey Center on American Life and Harvard’s Making
                    Caring Common project highlights a growing trend: men are
                    becoming more socially isolated, lacking spaces where they
                    can engage in real, supportive relationships.
                  </p>  <br />
                  <p className=" text-[#021827]">
                    While society encourages men to be strong, self-sufficient,
                    and resilient, it rarely provides them with structured
                    environments where they can openly connect, support each
                    other, and build meaningful friendships. The result? A
                    generation of men facing disconnection, loneliness, and a
                    lack of authentic social spaces.
                  </p> <br />
                  <p className=" text-[#021827]">
                    At the same time, mainstream social media, which should have
                    solved this issue, is actively making it worse.
                  </p>
                </section>

                <section>
                  <p
                    className="my-10  text-3xl  text-[#021827]"
                    style={{ fontFamily: "var(--font-arialRounded)" }}
                  >
                    Why It’s Significant and Timely
                  </p>
                  <p className=" text-[#021827]">
                    The current crisis in male social disconnection isn’t just a
                    trend—it’s a mental health emergency. Reports show that
                    loneliness contributes to rising rates of depression,
                    anxiety, and even suicide among men, who are less likely to
                    seek emotional support than women.
                    <br />
                    This issue is magnified by today’s digital-first world,
                    where online interactions have replaced real relationships.
                    The average person spends nearly 2.5 hours per day on social
                    media, yet most men still struggle to find deep, meaningful
                    connections on these platforms. Why? Because these platforms
                    weren’t built to facilitate real engagement—they were
                    designed to maximize time spent scrolling.
                  </p>
                </section>
              </div>
            )}
          </div>

          <hr />
          <section className="px-5 text-center mt-10">
            <p className="font-bold">
              Join the waitlist now and be part of the first wave of men
              redefining what it means to connect online.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 my-5">
              <button
                onClick={toggleModal}
                className="w-full sm:w-auto bg-[#021827] text-white px-5 py-2 rounded hover:bg-[#F34213] text-center"
              >
                Join Now!
              </button>
              <Link
                href="https://survey.broily.club"
                target="_blank"
                className="w-full sm:w-auto bg-[#021827] text-white px-5 py-2 rounded hover:bg-[#F34213] text-center"
              >
                Participate
              </Link>
              <Link
                href="mailto:support@broily.club"
                className="w-full sm:w-auto bg-[#021827] text-white px-5 py-2 rounded hover:bg-[#F34213] text-center"
              >
                Investors
              </Link>
              <Link
                href="https://survey.broily.club"
                className="w-full sm:w-auto bg-[#021827] text-white px-5 py-2 rounded hover:bg-[#F34213] text-center"
              >
                Support
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* Notify Me Modal */}
      <NotifyMeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        toggleModal={toggleModal}
      />
    </>
  );
}

export default WhyBroily;
