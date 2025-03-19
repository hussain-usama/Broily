"use client";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const NotifyMeModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const inviteLink = "https://broily.com/why-though";

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setShowTooltip(false);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink);
    setShowTooltip(true);

    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={submitted ? "You're in!" : "Notify Me"}
      onSubmit={!submitted ? handleSubmit : null}
      closeText="Close"
      submitText="Submit"
    >
      {!submitted ? (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-md max-h-[400px] overflow-y-auto">
          {/* Left Side */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-gray-600">Name*</label>
              <input type="text" required className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-black" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Email*</label>
              <input type="email" required className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-black" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Year of Birth*</label>
              <input type="date" required className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-black" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Gender*</label>
              <select required className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-black">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-gray-600">Country of Residence*</label>
              <input type="text" required className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-black" />
            </div>
            <div>
              <label className="text-sm text-gray-600">City*</label>
              <input type="text" required className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-black" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Area Code (Optional)</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-black" />
            </div>
          </div>
        </form>
      ) : (
        <>
          <p className="text-gray-700 mb-4 text-center">
            We've saved your spot. Stay tuned—Broily is coming, and you'll be the first to know when we go live.
          </p>
          

          {/* Copy Link with Tooltip */}
          <div className="relative">
            <div className="flex gap-2 items-center bg-gray-100 p-2 rounded">
              <input type="text" value={inviteLink} readOnly className="bg-transparent text-gray-700 flex-1" />
              <button onClick={handleCopyLink} className="bg-black text-white px-3 py-1 rounded hover:bg-[#F34213] cursor-pointer">
                Copy
              </button>
            </div>
            {showTooltip && (
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-sm px-3 py-1 rounded">
                Link Copied!
              </span>
            )}
          </div>
        </>
      )}
    </Modal>
  );
};

export default NotifyMeModal;
