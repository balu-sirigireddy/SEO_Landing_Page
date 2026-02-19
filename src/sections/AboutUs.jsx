import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
// import {
//   Award,
//   Users,
//   Target,
//   TrendingUp,
//   Heart,
//   Lightbulb,
//   Shield,
//   Rocket,
// } from "lucide-react";
import OrbitalValues from "./OrbitalValues";
import CinematicCulture from "./CinematicCulture";

const AboutUs = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  // const [valuesRef, valuesInView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });
  // const [statsRef, statsInView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });
  // const [teamRef, teamInView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });
  // const [cultureRef, cultureInView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  // const stats = [
  //   {
  //     icon: Award,
  //     value: "10+",
  //     label: "Years of Excellence",
  //     description: "Delivering exceptional digital solutions",
  //   },
  //   {
  //     icon: Users,
  //     value: "500+",
  //     label: "Happy Clients",
  //     description: "Businesses transformed globally",
  //   },
  //   {
  //     icon: Target,
  //     value: "1000+",
  //     label: "Projects Completed",
  //     description: "Successfully delivered with precision",
  //   },
  //   {
  //     icon: TrendingUp,
  //     value: "98%",
  //     label: "Success Rate",
  //     description: "Client satisfaction guaranteed",
  //   },
  // ];

  // const values = [
  //   {
  //     icon: Lightbulb,
  //     title: "Innovation",
  //     description:
  //       "We stay ahead of the curve, embracing cutting-edge technologies and methodologies to deliver solutions that give our clients a competitive edge.",
  //   },
  //   {
  //     icon: Heart,
  //     title: "Client-Centric",
  //     description:
  //       "Your success is our success. We build lasting partnerships by understanding your unique needs and delivering solutions that exceed expectations.",
  //   },
  //   {
  //     icon: Shield,
  //     title: "Integrity",
  //     description:
  //       "Transparency, honesty, and ethical practices are the foundation of everything we do. We build trust through consistent, reliable service.",
  //   },
  //   {
  //     icon: Rocket,
  //     title: "Excellence",
  //     description:
  //       "We are committed to delivering nothing but the best. From code quality to customer service, excellence is our standard, not our goal.",
  //   },
  // ];

  const milestones = [
    {
      year: "2016",
      event:
        "VBLP Tech Solutions founded with a vision to transform digital landscapes",
    },
    {
      year: "2018",
      event:
        "Expanded services to include comprehensive SEO and digital marketing solutions",
    },
    {
      year: "2020",
      event:
        "Reached 200+ successful projects and established partnerships across 15+ countries",
    },
    {
      year: "2022",
      event:
        "Launched advanced analytics and AI-driven SEO optimization services",
    },
    {
      year: "2024",
      event:
        "Celebrated 8 years with 400+ clients and multiple industry recognition awards",
    },
    {
      year: "2026",
      event:
        "Marking a decade of excellence with cutting-edge solutions and global impact",
    },
  ];

  // const teamMembers = [
  //   {
  //     name: "Vikram Patel",
  //     role: "Founder & CEO",
  //     image:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  //     bio: "Visionary leader with 15+ years in digital transformation",
  //   },
  //   {
  //     name: "Priya Sharma",
  //     role: "CTO",
  //     image:
  //       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  //     bio: "Expert in AI-driven SEO and technical architecture",
  //   },
  //   {
  //     name: "Arjun Reddy",
  //     role: "Head of Strategy",
  //     image:
  //       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  //     bio: "Strategic mastermind behind 500+ successful campaigns",
  //   },
  // ];

  // const cultureImages = [
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  //     title: "Collaborative Workspace",
  //     description: "Modern office designed for creativity and teamwork",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
  //     title: "Innovation Hub",
  //     description: "State-of-the-art technology and tools",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
  //     title: "Team Building",
  //     description: "Regular events and activities that strengthen bonds",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
  //     title: "Learning & Development",
  //     description: "Continuous training and skill enhancement programs",
  //   },
  // ];

  return (
    <div className="bg-dark-900">
      {/* Hero Section */}
      <section
        id="aboutus"
        className="pt-10 pb-5 md:pt-18 md:pb-5 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div ref={ref} className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 mb-6"
            >
              <span className="text-6xl font-display font-bold text-white/30">
                001
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6"
            >
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                VBLP Tech Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            >
              A decade of innovation, excellence, and transforming businesses
              through cutting-edge digital solutions.
            </motion.p>
          </div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-effect rounded-3xl p-12 max-w-5xl mx-auto mb-1"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Founded in 2015,{" "}
                <span className="text-white font-semibold">
                  VBLP Tech Solutions Pvt. Ltd.
                </span>{" "}
                embarked on a mission to revolutionize the digital landscape.
                What started as a small team of passionate technologists has
                grown into a leading provider of comprehensive SEO, web
                development, and digital marketing solutions.
              </p>
              <p>
                Over the past{" "}
                <span className="text-white font-semibold">10 years</span>,
                we've helped hundreds of businesses—from ambitious startups to
                established enterprises—achieve their digital goals. Our
                approach combines technical expertise with strategic thinking,
                ensuring that every solution we deliver not only meets but
                exceeds expectations.
              </p>
              <p>
                Today, VBLP Tech Solutions stands as a testament to what
                dedication, innovation, and client focus can achieve. We've
                built a reputation for delivering results that matter: increased
                organic traffic, higher search rankings, improved user
                engagement, and ultimately, better business outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Culture Section */}

      <CinematicCulture />

      {/* Values Section */}
      {/* <section
        ref={valuesRef}
        className="py-12 md:py-16 bg-dark-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide every decision we make and every
              solution we deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="glass-effect rounded-3xl p-8 hover:border-blue-500/50 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-2xl mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all">
                  <value.icon size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <OrbitalValues />
      {/* Timeline Section */}
      <section className="py-12 md:py-16 bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A decade of milestones, growth, and continuous innovation.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-display font-bold">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <div className="flex-grow pt-4">
                  <div className="glass-effect rounded-2xl p-6">
                    <p className="text-lg text-gray-300">{milestone.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-3xl p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join hundreds of businesses that trust VBLP Tech Solutions for
              their digital success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Get Started Today
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="#services"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
