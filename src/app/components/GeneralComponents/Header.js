"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const Header = ({showInvestorsBtn=false}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex  sm:flex-row justify-between items-center gap-4">
      <img
        src="/images/Broily Logo.png"
        alt="Logo"
        className="h-35 w-35 sm:h-45 sm:w-45"
      />
      {/* 
    <Link
      href="mailto:support@broily.club"
      className="bg-[#021827] text-white px-4 py-2 hover:bg-[#F34213] transition relative group cursor-pointer"
      style={{ fontFamily: "var(--font-arialRounded)" }}
    >
      Investors
      <span className="absolute left-20 w-full text-center text-xs text-white bg-[#021827] opacity-0 group-hover:opacity-100 transition p-1 rounded-md mt-1">
        Why Broily? Click to find out.
      </span>
    </Link> */}

      <div className="flex items-center gap-4">
        {/* Investors Button - Visible only on desktop */}
        {showInvestorsBtn && (
          <Link
            href="mailto:support@broily.club"
            className="hidden md:block bg-[#021827] text-white px-4 py-2 hover:bg-[#F34213] transition"
            style={{ fontFamily: "var(--font-arialRounded)" }}
          >
            Investors
          </Link>
        )}
        {/* Hamburger Menu - Visible only on mobile */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>{" "}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-[#F34213] text-white flex flex-col justify-between  z-50 p-5">
          <button
            className="absolute top-4 right-4 text-xl"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>

          <ul className="text-left text-xl space-y-4 mt-3">
            <li>
              <Link
                href="mailto:support@broily.club"
                onClick={() => setIsOpen(false)}
              >
                Investors
              </Link>
            </li>
            <li>
              <Link href="/whyBroily" onClick={() => setIsOpen(false)}>
                Why Though?
              </Link>
            </li>
            <li>
              <Link
                href="mailto:support@broily.club"
                onClick={() => setIsOpen(false)}
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                href="https://survey.broily.club"
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                Participate
              </Link>
            </li>
            <li>
              <Link
                href="https://survey.broily.club"
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                Join the Waitlist
              </Link>
            </li>
            <li>
              <div className="flex gap-3 my-10 justify-center ">
                {[
                  {
                    href: "https://www.facebook.com/BroilyOfficial",
                    icon: FaFacebookF,
                    title: "Facebook",
                  },
                  {
                    href: "https://www.instagram.com/BroilyOfficial",
                    icon: FaInstagram,
                    title: "Instagram",
                  },
                  {
                    href: "https://x.com/BroilyOfficial",
                    icon: RiTwitterXFill,
                    title: "X",
                  },
                  {
                    href: "https://www.linkedin.com/company/broily/",
                    icon: FaLinkedin,
                    title: "LinkedIn",
                  },
                ].map(({ href, icon: Icon, title }) => (
                  <a
                    key={title}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center bg-[#B4E1FF] rounded-md hover:bg-[#F34213]"
                    title={`Follow us on ${title}`}
                  >
                    <Icon size={18} className="text-[#021827]" />
                  </a>
                ))}
              </div>
            </li>
          </ul>

          {/* Copyright Text (at the bottom) */}
          <p className="text-sm opacity-80 text-center">
            &copy; 2025 Broily. <br /> All Rights Reserved.
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
