"use client";
import React, { useState } from "react";
import NotifyMeModal from "../../components/Modals/NotifyMeModal";

function WhyBroily() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-100 text-[#021827] p-6 sm:p-10 md:p-20">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Why Do Men Need Broily?</h1>
        <p className="text-lg text-gray-700">
          Men today aren’t just lonelier—they’re disconnected. Society expects them to be strong, 
          to endure, to provide. But where do they go when they need real friendships, support, 
          or meaningful conversations? Nowhere. And that’s the problem.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto mt-10 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
          <p className="text-gray-700">
            Studies show that men today are experiencing an alarming decline in close friendships. Over 
            15% report having no close friends at all—a sharp increase from previous decades. Society 
            encourages strength but offers no structured environments for men to connect, leading to 
            loneliness and disconnection.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Why It’s Significant and Timely</h2>
          <p className="text-gray-700">
            This isn’t just a trend—it’s a mental health emergency. Loneliness contributes to rising 
            rates of depression, anxiety, and even suicide among men, who are less likely to seek 
            emotional support than women. Despite spending hours on social media, most men struggle 
            to find deep, meaningful connections.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Gaps in Existing Solutions</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Engagement metrics prioritize virality over real connection.</li>
            <li>Lack of exclusivity leads to bots, trolls, and distrust.</li>
            <li>Men naturally connect through structured conversations, not random posts.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Broily – The Ideal Solution</h2>
          <p className="text-gray-700">
            Broily is a trusted, invite-only network built for real engagement. Unlike traditional 
            social media, we prioritize depth, trust, and meaningful conversations.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 mt-4">
            <li>Every member is verified, ensuring trust and authenticity.</li>
            <li>Structured discussions foster real connections.</li>
            <li>No fake engagement—just valuable, supportive interactions.</li>
          </ul>
        </section>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            onClick={() => setIsModalOpen(true)}
          >
            Join Now
          </button>
          <button className="bg-[#021827] text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Investors
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Support
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Participate
          </button>
        </div>
      </div>

      {/* Notify Me Modal */}
      <NotifyMeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default WhyBroily;
