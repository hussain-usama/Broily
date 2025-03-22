"use client";

import Modal from "./Modal";

const WhyThoughModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Why Do Men Need Broily?" >
      <div className="text-gray-700 space-y-4 max-h-[400px] overflow-y-auto p-2">
        <p>
          Men today aren’t just lonelier, they’re disconnected. Society expects them to be strong, to endure, to provide. 
          But where do they go when they need real friendships, support, or meaningful conversations? Nowhere. And that’s the problem.
        </p>
        <p>
          On mainstream social media, engagement is a lie. Likes don’t mean connection. Viral posts don’t mean real conversations. 
          And the algorithms? They’re designed to trap, not to serve. Broily rejects all of it!
        </p>
        <p>
          Broily is an identity-verified, invite-only network built for real conversations, meaningful connections, and genuine personal growth. 
          Here, men aren’t just scrolling, they’re engaging with purpose, building friendships, and leveling up.
        </p>
        <p>
          This is positive masculinity, redefined. Strength through emotional intelligence. Leadership through self-awareness. 
          Brotherhood through meaningful support.
        </p>
        <p>
          Every member is verified. Every conversation is real. Broily isn’t about chasing likes, it’s about building something that matters. 
          Whether it’s connecting with like-minded men, finding support, or simply having real discussions, Broily is designed to add value, not drain it.
        </p>
        <p>
          Broily isn’t a platform, it’s a movement. A movement for men who refuse to settle for shallow connections, empty scrolling, or fake engagement. 
          If you’re ready for something real, Broily is waiting for you!
        </p>
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
</div>
        <br/>

        <p className="text-center font-bold">
          Join the waitlist now and be part of the first wave of men redefining what it means to connect online.
        </p>
        <button className="w-full bg-[#021827] text-white py-2 rounded hover:bg-[#F34213]">Join Now!</button>
      </div>
    </Modal>
  );
};

export default WhyThoughModal;
