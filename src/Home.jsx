import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Services from "./sections/Services";
import Process from "./sections/Process";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Team from "./sections/Team";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Analytics from "./sections/Analytics";
import AboutUs from "./sections/AboutUs";

const Home = () => {
  return (
    <div className="App">
      <Navigation />

      <main>
        <Hero />
        <AboutUs />
        <Work />
        <Services />
        <Process />
        <Analytics />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
