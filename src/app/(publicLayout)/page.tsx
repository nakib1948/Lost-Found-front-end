import AboutUs from "@/Components/Home/AboutUs/AboutUs";
import Gallery from "@/Components/Home/Gallery/Gallery";
import IntroduceSection from "@/Components/Home/IntroduceSection/IntroduceSection";
import LostItemSection from "@/Components/Home/LostItemSection/LostItemSection";
import LSTimeline from "@/Components/Home/Timeline/Timeline";

export default function Home() {
  return (
    <div>
      <IntroduceSection />
      <LostItemSection />
      <LSTimeline />
      <AboutUs />
      <Gallery />
    </div>
  );
}
