import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Search, FileEdit, Rocket, TrendingUp } from "lucide-react";

const Process = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      number: "01",
      title: "SEO Audit & Research",
      description:
        "Deep dive into your industry, competitors, and target keywords. We analyze search intent, identify opportunities, and create a data-driven strategy for maximum visibility.",
      icon: <Search className="w-12 h-12" />,
      stat: "2-3 days",
      statLabel: "Comprehensive analysis",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Page Design & Build",
      description:
        "Craft high-converting landing pages with optimized content, semantic HTML structure, and compelling copy. Every element is designed for both search engines and users.",
      icon: <FileEdit className="w-12 h-12" />,
      stat: "5-7 days",
      statLabel: "Development timeline",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Launch & Optimize",
      description:
        "Deploy your SEO-optimized pages with technical perfection. We ensure lightning-fast load times, mobile responsiveness, and proper indexing from day one.",
      icon: <Rocket className="w-12 h-12" />,
      stat: "1-2 days",
      statLabel: "Launch & testing",
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "04",
      title: "Monitor & Scale",
      description:
        "Continuous performance tracking with Google Analytics and Search Console. We analyze rankings, traffic, and conversions to refine and scale your success.",
      icon: <TrendingUp className="w-12 h-12" />,
      stat: "24/7",
      statLabel: "Performance monitoring",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="process"
      className="py-12 md:py-16 bg-dark-800 relative overflow-hidden"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-3 mb-6"
          >
            <span className="text-6xl font-display font-bold text-white/30">
              005
            </span>
            {/* <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-2xl">P</span>
            </div> */}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Our Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Strategic SEO implementation from research to results. Transparent
            workflow that turns search visibility into revenue.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="glass-effect rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div
                    className={`bg-gradient-to-r ${step.color} p-0.5 rounded-2xl flex-shrink-0`}
                  >
                    <div className="bg-dark-900 rounded-2xl p-4 text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-sm text-gray-400 mb-2">
                          Step {step.number}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold">
                          {step.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-display font-bold">
                          {step.stat}
                        </div>
                        <div className="text-xs text-gray-400">
                          {step.statLabel}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg text-gray-300">{step.description}</p>
                  </div>
                </div>

                {/* Progress Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-14 top-full w-0.5 h-12 bg-gradient-to-b from-white/20 to-transparent hidden md:block"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Ready to dominate search rankings and drive real results?
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Get Your Free SEO Audit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
