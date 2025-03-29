import Image from "next/image";
import LandingPage from "./landingPage/LandingPage";

export default function Home() {
  return (
    <div className="bg-[#F7FF58] p-3 pb-20 sm:py-6 sm:px-10 md:px-20 flex justify-center">
      <LandingPage />
    </div>
  );
}
