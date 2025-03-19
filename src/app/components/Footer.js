"use client";

import Link from "next/link";
import WhyThoughModal from "./Modals/WhyThoughModal";
import { useState } from "react";
import {
  FaFacebookF ,
  FaInstagram,
 // FaXTwitter ,
  FaLinkedin,
} from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const [isWhyThoughOpen, setIsWhyThoughOpen] = useState(false);

  return (
    <footer className="bg-[#021827] text-[#B4E1FF] py-2 px-6 md:px-4" style={{ fontFamily: "var(--font-footer)" }}>
      <div className="grid grid-cols-1 md:grid-cols-12 px-6 md:px-2 gap-2">
        <div className="md:col-span-6 md:text-center">
          <div className="flex gap-3 mb-2 justify-center sm:justify-start">
            {[
              { href: "https://www.facebook.com/BroilyOfficial", icon: FaFacebookF , title: "Facebook" },
              { href: "https://www.instagram.com/BroilyOfficial", icon: FaInstagram, title: "Instagram" },
              { href: "https://x.com/BroilyOfficial", icon: RiTwitterXFill, title: "X" },
              { href: "https://www.linkedin.com/company/broily/", icon: FaLinkedin, title: "LinkedIn" },
            ].map(({ href, icon: Icon, title }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center bg-[#B4E1FF] rounded-md"
                title={`Follow us on ${title}`}
              >
                <Icon size={18} className="text-[#021827]" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-6 flex justify-end">
          <div className="text-center text-sm text-gray-400 mt-1">
            © 2025 Broily. All Rights Reserved |{" "}
            <Link href="#" className="hover:underline">
              Participate{" "}
            </Link>
            |{" "}
            <Link href="mailto:support@broily.club" className="hover:underline">
              Support{" "}
            </Link>
            |{" "}
            <button onClick={() => setIsWhyThoughOpen(true)} className="hover:underline">
              Why Though?
            </button>
          </div>
        </div>
      </div>
      <WhyThoughModal isOpen={isWhyThoughOpen} onClose={() => setIsWhyThoughOpen(false)} />
    </footer>
  );
};

export default Footer;
