"use client";
import React, { useState } from "react";
import NotifyMeModal from "../components/Modals/NotifyMeModal";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/GeneralComponents/Footer";
import Header from "../components/GeneralComponents/Header";
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
      <div className="bg-[#F7FF58] p-3 pb-15 sm:py-6 sm:px-10 md:px-20 flex justify-center text-[#021827]">
        <div>
          <Header />

        
<div className="w-full max-w-6xl mt-5 px-4 sm:px-6 md:px-20">
<h1
            className="text-3xl sm:text-4xl md:text-5xl mb-6 text-left"
            style={{ fontFamily: "var(--font-arialRounded)" }}
          >
            Why Does the World Need Broily?
          </h1>
          {/* Main Content */}
          <div className="mt-8 px-4 sm:px-6 md:px-2 py-5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8    text-left md:text-left text-sm sm:text-base leading-relaxed">
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
              <div className="md:col-span-4 hidden md:flex justify-center">
                <div className="relative w-32 sm:w-48 md:w-64 flex justify-center">
                  <Image
                    src="/images/MobileMockup.png"
                    alt="Broily App"
                    width={300}
                    height={600}
                     className="w-full h-[600px] object-contain"
                   // className="w-full height-fit-content"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Problem Statement Accordion */}
          <div className="my-10">
            <p
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center font-bold justify-between w-full p-3 text-lg  sm:text-3xl text-[#021827] transition-all cursor-pointer"
              style={{ fontFamily: "var(--font-arialRounded)" }}
            >
              Problem Statement
              {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
            </p>

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
                  </p>{" "}
                  <br />
                  <p className=" text-[#021827]">
                    While society encourages men to be strong, self-sufficient,
                    and resilient, it rarely provides them with structured
                    environments where they can openly connect, support each
                    other, and build meaningful friendships. The result? A
                    generation of men facing disconnection, loneliness, and a
                    lack of authentic social spaces.
                  </p>{" "}
                  <br />
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
                    Why It’s Important and Timely
                  </p>
                  <p className=" text-[#021827]">
                    The current crisis in male social disconnection isn’t just a
                    trend—it’s a mental health emergency. Reports show that
                    loneliness contributes to rising rates of depression,
                    anxiety, and even suicide among men, who are less likely to
                    seek emotional support.
                  </p>
                  <br />
                  <p>
                    This issue is magnified by today’s digital-first world,
                    where online interactions have replaced real relationships.
                    The average person spends nearly 2.5 hours per day on social
                    media, yet most men still struggle to find deep, meaningful
                    connections on these platforms. Why? Because these platforms
                    weren’t built to facilitate real engagement—they were
                    designed to maximize time spent scrolling.
                  </p>
                </section>

                <section>
                  <div>
                    <p
                      className="my-10  text-3xl  text-[#021827]"
                      style={{ fontFamily: "var(--font-arialRounded)" }}
                    >
                      Gaps in Existing Solutions
                    </p>
                    <p>
                      Current social platforms fail men in three fundamental
                      ways:
                    </p>

                    <ul className="list-none  mt-2 space-y-4">
                      <li>
                      <h3
                          className="font-semibold"
                          style={{ fontFamily: "var(--font-arialRounded)" }}
                        > They prioritize engagement metrics over real connection. </h3>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                          <li>
                            Platforms like Instagram and Twitter/X reward
                            virality over depth, making interactions
                            surface-level and fleeting.
                          </li>
                          <li>
                            Algorithms dictate what users see, limiting organic,
                            interest-based discovery.
                          </li>
                        </ul>
                      </li>

                      <li>  <h3
                          className="font-semibold"
                          style={{ fontFamily: "var(--font-arialRounded)" }}
                        >
                        They lack exclusivity and structured conversations.</h3>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                          <li>
                            Anyone can join, meaning bots, trolls, and bad
                            actors dilute discussions.
                          </li>
                          <li>
                            Platforms like Reddit and Discord offer topic-based
                            discussions but lack real user verification, leading
                            to distrust.
                          </li>
                        </ul>
                      </li>

                      <li>
                      <h3
                          className="font-semibold"
                          style={{ fontFamily: "var(--font-arialRounded)" }}
                        > They do not create spaces designed for how men naturally
                        connect.</h3>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                          <li>
                            Research shows that men often build friendships
                            through shared activities and structured
                            conversations, rather than random, unfiltered
                            discussions.
                          </li>
                          <li>
                            There are no mainstream platforms that provide a
                            structured, high-trust environment for men to
                            connect in a way that feels natural and valuable.
                          </li>
                        </ul>
                      </li>
                    </ul>

                    <p className="mt-4">
                      Without a space designed to meet their social and
                      emotional needs, men are left with fragmented, low-trust
                      digital interactions that do not translate into real-world
                      relationships or support networks.
                    </p>
                  </div>
                </section>

                <section>
                  <div>
                    <p
                      className="my-10  text-3xl  text-[#021827]"
                      style={{ fontFamily: "var(--font-arialRounded)" }}
                    >
                      Broily – The Ideal Solution
                    </p>
                    <p>
                      Broily is a trusted, invite-only network designed to
                      facilitate real, structured engagement among men. Unlike
                      traditional platforms that push content for engagement’s
                      sake, Broily actively fosters authentic interactions by
                      prioritizing depth over virality.
                    </p>

                    <div className="mt-6 space-y-6">
                      <div>
                        <h3
                          className="font-semibold"
                          style={{ fontFamily: "var(--font-arialRounded)" }}
                        >
                          Real Conversations, Not Just Scrolling
                        </h3>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                          <li>
                            Every member is identity-verified, ensuring that
                            discussions are genuine and built on trust, not
                            anonymity.
                          </li>
                          <li>
                            Users engage intentionally in structured
                            discussions, interest-based groups, and purposeful
                            interactions.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3
                          className="font-semibold "
                          style={{ fontFamily: "var(--font-arialRounded)" }}
                        >
                          A Better Way to Build Friendships
                        </h3>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                          <li>
                            Men don’t just talk; they connect through shared
                            experiences.
                          </li>
                          <li>
                            Broily provides ways to engage with and meet
                            like-minded men, whether for personal development,
                            career advice, or social connection.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3
                          className="font-semibold"
                          style={{ fontFamily: "var(--font-arialRounded)" }}
                        >
                          Engagement That Actually Adds Value
                        </h3>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                          <li>
                            No meaningless likes, fake engagement, or
                            algorithm-driven content.
                          </li>
                          <li>
                            Every interaction is designed to be intentional,
                            supportive, and geared toward personal and social
                            growth.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3
                          className="font-semibold"
                          style={{ fontFamily: "var(--font-arialRounded)" }}
                        >
                          A High-Trust, Low-Noise Community
                        </h3>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                          <li>
                            Verified membership ensures quality engagement.
                          </li>
                          <li>
                            No bots, no trolls, no distractions—just real
                            conversations with real people.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
                <hr className="my-8" />
                <section className="mt-6 space-y-6 text-[#021827]">
                  <p>
                    {" "}
                    Men today need more than just another social platform—they
                    need a space that prioritizes meaningful engagement over
                    artificial interactions. While existing platforms continue
                    to promote passive, low-value engagement, Broily is built to
                    actively foster connections, trust, and real-world
                    relationships.
                  </p>
                  <p>
                    {" "}
                    This isn’t just another platform—it’s a movement for men who
                    refuse to settle for shallow interactions, algorithm-driven
                    content and empty scrolling.
                  </p>
                  <p>
                    {" "}
                    Broily is designed for those who want to engage differently,
                    connect intentionally, and redefine what social media should
                    be.
                  </p>
                  <p>
                    {" "}
                    A new way to connect is coming. The only question is: Are
                    you ready for something real?
                  </p>
                </section>
              </div>
            )}
          </div>

          <hr />
          <section className="px-5    text-left mt-10">
            {/* <p className="font-bold">
              Join the waitlist now and be part of the first wave of men
              redefining what it means to connect online.
            </p> */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 my-5">
              <button
                onClick={toggleModal}
                className="w-full sm:w-auto bg-[#021827] text-white px-5 py-2 rounded hover:bg-[#F34213]    text-left"
              >
                Join Now!
              </button>
              <Link
                href="https://survey.broily.club"
                target="_blank"
                className="w-full sm:w-auto bg-[#021827] text-white px-5 py-2 rounded hover:bg-[#F34213]    text-left"
              >
                Participate
              </Link>
              <Link
                href="mailto:investors@broily.club"
                className="w-full sm:w-auto bg-[#021827] text-white px-5 py-2 rounded hover:bg-[#F34213]    text-left"
              >
                Investors
              </Link>
              <Link
                href="https://survey.broily.club"
                className="w-full sm:w-auto bg-[#021827] text-white px-5 py-2 rounded hover:bg-[#F34213]    text-left"
              >
                Support
              </Link>
            </div>
          </section>


          </div>
        </div>
      </div>

      {/* Notify Me Modal */}
      <NotifyMeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        toggleModal={toggleModal}
      />

      <div className="hidden md:block">
        <Footer />
      </div>
    </>
  );
}

export default WhyBroily;
