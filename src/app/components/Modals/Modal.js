"use client";
import React from "react";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  onSubmit,
  closeText = "Close",
  submitText = "Submit",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0  bg-opacity-0.5 backdrop-blur-md flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-[90%] max-w-[600px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-left mb-4">
          <h2 className="text-2xl font-bold text-black">{title}</h2>
          <button
            className="text-gray-600 hover:text-red-600 text-xl"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        {/* Modal Content - inner content here */}
        {children}

        {/* Modal Footer */}
        <div className="flex justify-between mt-6">
         {onClose   &&( <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            {closeText}
          </button>)}
          {onSubmit && (
            <button
              onClick={onSubmit}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              {submitText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
