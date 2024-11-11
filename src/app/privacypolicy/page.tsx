// pages/privacy-policy.js
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-10 bg-gray-900 mt-10">
      <h1 className="text-3xl font-bold text-yellow-500 mb-6">Privacy Policy</h1>
      <p className="text-slate-100 mb-4">
        Your privacy is important to us. This privacy statement explains how we handle your data.
      </p>

      {/* Simple Contact Form */}
      <div className="mt-10 bg-gray-900 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Contact Us</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-3 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 mb-3 border border-gray-300 rounded"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-4 flex justify-center rounded hover:bg-blue-700 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
