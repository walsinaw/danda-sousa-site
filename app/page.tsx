import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeelingsSection from "@/components/FeelingsSection";
import AboutStatement from "@/components/AboutStatement";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Quote from "@/components/Quote";
import Attendance from "@/components/Attendance";
import FinalCta from "@/components/FinalCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeelingsSection />
        <AboutStatement />
        <Services />
        <About />
        <Process />
        <Quote />
        <Attendance />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
