// app\[locale]\page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Examples from "@/components/Examples";
import WhatsIncluded from "@/components/WhatsIncluded";
import Pricing from "@/components/Pricing";
import WhyThisWorks from "@/components/WhyThisWorks";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Examples />
      <WhatsIncluded />
      <Pricing />
      <WhyThisWorks />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
