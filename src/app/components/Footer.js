"use client";

import Link from "next/link";
import WhyThoughModal from "./Modals/WhyThoughModal";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {

  const [isWhyThoughOpen, setIsWhyThoughOpen] = useState(false);

  return (
    <footer className="bg-[#071B2F] text-white py-2 px-6  md:px-4">
      <div className="grid grid-cols-1 md:grid-cols-12  px-6 md:px-2 gap-2">
        <div className="md:col-span-6  md:text-center">
          <div className="flex justify-start   gap-4 mb-2">
            <a
              href="https://www.facebook.com/BroilyOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
              title="Follow us on Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/BroilyOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400"
              title="Follow us on Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://x.com/BroilyOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
              title="Follow us on X"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/broily/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-600"
              title="Follow us on LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="md:col-span-6 flex justify-end">
          <div className="text-center text-sm text-gray-400 mt-1">
            © 2025 Broily. All Rights Reserved |{" "}
            <Link href="#" className="hover:underline">
              Participate {" "}
            </Link>
            | {" "}
            <Link href="mailto:support@broily.club" className="hover:underline">
              Support {" "}
            </Link>
            |{" "}
            {/* <Link href="#" className="hover:underline">
              Why Though?
            </Link> */}
            <button onClick={() => setIsWhyThoughOpen(true)} className="hover:underline">Why Though?</button>
          </div>
        </div>
      </div>
      <WhyThoughModal isOpen={isWhyThoughOpen} onClose={() => setIsWhyThoughOpen(false)} />
    </footer>
  );
};

export default Footer;
