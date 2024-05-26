import HeroSection from "@/Components/Home/HeroSection/HeroSection";
import Navbar from "@/Components/shared/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <HeroSection />
      </div>
    </>
  );
}
