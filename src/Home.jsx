import { useEffect, useState } from "react";
import SEO from "./seo/SEO";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Services from "./sections/Services";
import Process from "./sections/Process";
import FAQ from "./sections/FAQ";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Analytics from "./sections/Analytics";
import AboutUs from "./sections/AboutUs";

const Home = () => {
  const [schema, setSchema] = useState(null);

  useEffect(() => {
    fetch("/schema.json")
      .then((res) => res.json())
      .then((data) => setSchema(data))
      .catch(() => {});
  }, []);

  return (
    <>
      <SEO
        title="SEO Company in India | VBLP Tech Solutions"
        description="VBLP Tech Solutions is a professional SEO company in India helping businesses rank on Google, increase organic traffic and generate qualified leads."
        url="https://www.vblp.co.in/"
        image="https://www.vblp.co.in/og-home.jpg"
        keywords="seo company india, seo services india, search engine optimization company, organic traffic growth, google ranking services"
        schema={schema}
      />

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
    </>
  );
};

export default Home;
