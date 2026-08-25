import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import SocialProof from "@/app/components/SocialProof";
import Products from "@/app/components/Products";
import AboutUs from "@/app/components/AboutUs";
import HowItWorks from "@/app/components/HowItWorks";
import FAQ from "@/app/components/FAQ";
import FinalCTA from "@/app/components/FinalCTA";
import Footer from "@/app/components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <SocialProof /> */}
      <Products />
      <AboutUs />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
