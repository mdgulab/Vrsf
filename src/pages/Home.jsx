import HeroSection from "../components/HeroSection";
import ImpactStats from "../components/ImpactStats";
import Campaigns from "../components/Campaigns";
import DonationCTA from "../components/DonationCTA";
import HomeAboutSection from "../components/HomeAboutSection";
import VisionMissionSection from "../components/VisionMissionSection";
import JoinSection from "../components/JoinSection";
import InitiativesSection from "../components/InitiativesSection";
import DonateBanner from "../components/DonateBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeAboutSection/>
      <VisionMissionSection/>
      <JoinSection/>
      <InitiativesSection/>
      {/* <DonateBanner/> */}
      
      {/* <Campaigns /> */}
   
    </>
  );
}
