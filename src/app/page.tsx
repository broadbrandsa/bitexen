import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Opportunity } from "@/components/sections/Opportunity";
import { Campaign } from "@/components/sections/Campaign";
import { Budget } from "@/components/sections/Budget";
import { MediaPlan } from "@/components/sections/MediaPlan";
import { SuccessMetrics } from "@/components/sections/SuccessMetrics";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="divider" />
      <Opportunity />
      <div className="divider" />
      <Campaign />
      <div className="divider" />
      <Budget />
      <div className="divider" />
      <MediaPlan />
      <div className="divider" />
      <SuccessMetrics />
      <CTA />
    </>
  );
}
