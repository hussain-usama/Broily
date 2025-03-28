"use client";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { db, collection, addDoc } from "../../../../firebaseConfig"; // Import Firebase

const NotifyMeModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const inviteLink = "https://broily.club/whyBroily";

  const initialFormState = {
    name: "",
    birthYear: "",
    country: "",
    email: "",
    gender: "",
    city: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formError, setFormError] = useState("");  
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData(initialFormState); setFormError("");
    }
  }, [isOpen]);

  // useEffect(() => {
  //   setIsFormValid(Object.values(formData).every((field) => field.trim() !== "")); if (isValid) setFormError("");
  // }, [formData]);

  useEffect(() => {
    const isValid = Object.values(formData).every((field) => field.trim() !== "");
    setIsFormValid(isValid);
    if (isValid) setFormError(""); 
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // if (!isFormValid) return; 
    if (!isFormValid) {
      setFormError("⚠️ Please fill out all required fields before submitting.");
      return;
    }

    try {
      await addDoc(collection(db, "Users"), formData);
      console.log("Document successfully written!", formData);
      setSubmitted(true);
      setFormData(initialFormState);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={submitted ? "You're in!" : "Notify Me"}
      onSubmit={!submitted ? handleSubmit : null} 
      closeText="Close"
      submitText={!submitted ? "Submit" : null} 
      isSubmitDisabled={!isFormValid} // Disable Submit button if form is incomplete
    >
      {!submitted ? (
        <div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-md max-h-[400px] overflow-y-auto">
          {/* Left Side */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-gray-600">Name*</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-[#021827]" 
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Year of Birth*</label>
              <select 
                name="birthYear" 
                value={formData.birthYear} 
                onChange={handleChange} 
                required 
                className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-[#021827]"
              >
                <option value="">Select Year</option>
                {Array.from({ length: 83 }, (_, i) => 2024 - 18 - i).map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-600">Country of Residence*</label>
              <input 
                type="text" 
                name="country" 
                value={formData.country} 
                onChange={handleChange} 
                required 
                className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-[#021827]" 
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-gray-600">Email*</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-[#021827]" 
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Gender*</label>
              <select 
                name="gender" 
                value={formData.gender} 
                onChange={handleChange} 
                required 
                className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-[#021827]"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-600">City*</label>
              <input 
                type="text" 
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
                required 
                className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-[#021827]" 
              />
            </div>
          </div>
        </form>
         {/* Error Message */}
         <br/>
         {formError && (
          <div className="col-span-2 bg-red-100 text-red-600 p-2 text-sm rounded-md">
            {formError}
          </div>
        )}
        </div>
      ) : (
        <>
          <p className="text-gray-700 mb-4 text-center">
            We've saved your spot. Stay tuned—Broily is coming, and you'll be the first to know when we go live.
          </p>

          {/* Copy Link Section */}
          <div className="relative">
            <div className="flex gap-2 items-center bg-gray-100 p-2 rounded">
              <input type="text" value={inviteLink} readOnly className="bg-transparent text-gray-700 flex-1" />
              <button onClick={handleCopyLink} className="bg-[#021827] text-white px-3 py-1 rounded hover:bg-[#F34213] cursor-pointer">
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
