import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Lightbulb, Heart, Shield, Rocket, ArrowRight, X } from "lucide-react";

const OrbitalValues = () => {
  const containerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const values = [
    {
      icon: Lightbulb,
      title: "SEO Excellence",
      color: "from-cyan-400 via-blue-500 to-purple-600",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
      desc: "Dominate search rankings with data-driven SEO strategies that deliver measurable results.",
      details: {
        headline: "Rank Higher, Convert Better",
        story:
          "Our SEO-optimized landing pages have helped 500+ businesses achieve first-page rankings. With proven strategies combining technical SEO, content optimization, and conversion rate optimization, we deliver sustainable organic growth.",
        stats: [
          { label: "Avg. Ranking Boost", value: "250%" },
          { label: "Organic Traffic Growth", value: "340%" },
          { label: "Conversion Rate", value: "8.5%" },
        ],
        features: [
          "Advanced Keyword Research",
          "Technical SEO Optimization",
          "Core Web Vitals Excellence",
          "Schema Markup Integration",
        ],
      },
    },
    {
      icon: Heart,
      title: "Performance First",
      color: "from-cyan-400 via-blue-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
      desc: "Lightning-fast landing pages that load instantly and convert visitors into customers.",
      details: {
        headline: "Speed Meets Conversion",
        story:
          "Every millisecond counts. Our landing pages load in under 1.5 seconds, achieving perfect 100/100 PageSpeed scores. Fast pages mean better SEO rankings, lower bounce rates, and higher conversions.",
        stats: [
          { label: "Avg. Load Time", value: "<1.5s" },
          { label: "PageSpeed Score", value: "100" },
          { label: "Bounce Rate Drop", value: "45%" },
        ],
        features: [
          "Image Optimization & CDN",
          "Code Minification",
          "Lazy Loading Implementation",
          "Mobile-First Design",
        ],
      },
    },
    {
      icon: Shield,
      title: "Data-Driven Approach",
      color: "from-cyan-400 via-blue-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
      desc: "Every decision backed by analytics, A/B testing, and proven conversion optimization techniques.",
      details: {
        headline: "Analytics That Drive Results",
        story:
          "We don't guess—we measure, test, and optimize. Our landing pages come with comprehensive tracking, heatmaps, and conversion funnel analysis to continuously improve performance and ROI.",
        stats: [
          { label: "A/B Tests Run", value: "1,200+" },
          { label: "Avg. ROI Increase", value: "285%" },
          { label: "Conversion Uplift", value: "67%" },
        ],
        features: [
          "Google Analytics 4 Setup",
          "Conversion Tracking",
          "Heatmap Analysis",
          "Monthly Performance Reports",
        ],
      },
    },
    {
      icon: Rocket,
      title: "Conversion Focused",
      color: "from-cyan-400 via-blue-500 to-purple-600",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200",
      desc: "Beautiful designs engineered to guide visitors seamlessly from click to conversion.",
      details: {
        headline: "Turn Traffic Into Revenue",
        story:
          "Our conversion-optimized landing pages combine psychology, design principles, and persuasive copywriting to turn visitors into leads and customers. Every element is strategically placed to maximize conversions.",
        stats: [
          { label: "Avg. Conversion Rate", value: "12.3%" },
          { label: "Lead Generation", value: "+430%" },
          { label: "Client Satisfaction", value: "98%" },
        ],
        features: [
          "Compelling CTAs",
          "Trust Signals & Social Proof",
          "Mobile-Optimized Forms",
          "Exit Intent Technology",
        ],
      },
    },
  ];

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div ref={containerRef} className="h-[400vh] bg-[#0a0a0a] relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          style={{ x }}
          className="flex gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              layoutId={`card-${index}`}
              onClick={() => setActiveCard(index)}
              className="relative w-[88vw] sm:w-[75vw] md:w-[60vw] h-[65vh] sm:h-[68vh] md:h-[70vh] flex-shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Background */}
              <div className="absolute inset-0">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-20 mix-blend-overlay`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
              </div>

              {/* Card content */}
              <div className="relative h-full flex flex-col justify-end p-5 sm:p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Badge */}
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r ${value.color} mb-4 sm:mb-6 w-fit
                      max-[375px]:gap-1.5 max-[375px]:px-2 max-[375px]:py-1 max-[375px]:mb-2`}
                  >
                    <value.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white max-[375px]:w-3 max-[375px]:h-3" />
                    <span className="text-white font-medium text-xs sm:text-sm max-[375px]:text-[10px]">
                      Core Value 0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-5 md:mb-6 leading-none
                    max-[375px]:text-2xl max-[375px]:mb-1.5"
                  >
                    {value.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="text-sm sm:text-base md:text-xl text-gray-300 max-w-xl leading-relaxed mb-5 sm:mb-7 md:mb-8
                    max-[375px]:text-[11px] max-[375px]:mb-3"
                  >
                    {value.desc}
                  </p>

                  {/* CTA button */}
                  <button className="flex items-center gap-2 sm:gap-3 text-white group/btn">
                    <span className="text-sm sm:text-base md:text-lg font-medium max-[375px]:text-xs">
                      Learn More
                    </span>
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center group-hover/btn:scale-110 transition-transform
                        max-[375px]:w-6 max-[375px]:h-6`}
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 max-[375px]:w-3 max-[375px]:h-3" />
                    </div>
                  </button>
                </motion.div>
              </div>

              {/* Watermark number */}
              <div
                className="absolute top-4 right-4 sm:top-8 sm:right-8 text-[100px] sm:text-[150px] md:text-[200px] font-bold text-white/5 leading-none select-none
                max-[375px]:text-[60px] max-[375px]:top-2 max-[375px]:right-2"
              >
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-4 text-white/40">
          <span className="text-xs sm:text-sm tracking-widest uppercase max-[375px]:text-[9px]">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 max-[375px]:w-3 max-[375px]:h-3" />
          </motion.div>
        </div>
      </div>

      {/* ── Full-Screen Expand Modal ── */}
      <AnimatePresence>
        {activeCard !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a]"
          >
            <motion.div
              layoutId={`card-${activeCard}`}
              className="w-full h-full relative overflow-hidden"
            >
              {/* Background */}
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img
                  src={values[activeCard].image}
                  alt={values[activeCard].title}
                  className="w-full h-full object-cover opacity-30"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${values[activeCard].color} opacity-30`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/40" />
              </motion.div>

              {/* Close button */}
              <button
                onClick={() => setActiveCard(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors
                  max-[375px]:w-8 max-[375px]:h-8 max-[375px]:top-3 max-[375px]:right-3"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 max-[375px]:w-3.5 max-[375px]:h-3.5" />
              </button>

              {/* Scrollable content */}
              <div className="relative z-10 h-full overflow-y-auto">
                <div
                  className="min-h-screen flex flex-col justify-center px-5 sm:px-10 md:px-20 py-16 sm:py-20
                  max-[375px]:px-3.5 max-[375px]:py-10"
                >
                  <div className="max-w-6xl mx-auto w-full">
                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mb-10 sm:mb-14 md:mb-16 max-[375px]:mb-6"
                    >
                      {/* Modal badge */}
                      <div
                        className={`inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r ${values[activeCard].color} mb-4 sm:mb-6
                          max-[375px]:gap-1.5 max-[375px]:px-2 max-[375px]:py-1 max-[375px]:mb-2.5`}
                      >
                        {React.createElement(values[activeCard].icon, {
                          className:
                            "w-4 h-4 sm:w-5 sm:h-5 text-white max-[375px]:w-3 max-[375px]:h-3",
                        })}
                        <span className="text-white font-medium text-xs sm:text-sm max-[375px]:text-[10px]">
                          Core Value 0{activeCard + 1}
                        </span>
                      </div>

                      {/* Modal headline */}
                      <h1
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight
                        max-[375px]:text-xl max-[375px]:mb-2"
                      >
                        {values[activeCard].details.headline}
                      </h1>

                      {/* Modal story */}
                      <p
                        className="text-sm sm:text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed
                        max-[375px]:text-[11px]"
                      >
                        {values[activeCard].details.story}
                      </p>
                    </motion.div>

                    {/* Stats grid */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-14 md:mb-16
                        max-[375px]:gap-1.5 max-[375px]:mb-5"
                    >
                      {values[activeCard].details.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8
                            max-[375px]:p-2 max-[375px]:rounded-lg"
                        >
                          {/* Stat value */}
                          <div
                            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${values[activeCard].color} bg-clip-text text-transparent mb-1 sm:mb-2
                              max-[375px]:text-base max-[375px]:mb-0.5`}
                          >
                            {stat.value}
                          </div>
                          <div
                            className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg
                            max-[375px]:text-[9px] leading-tight"
                          >
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </motion.div>

                    {/* Features list */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h3
                        className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-5 md:mb-6
                        max-[375px]:text-sm max-[375px]:mb-2.5"
                      >
                        What This Means
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-[375px]:gap-1.5">
                        {values[activeCard].details.features.map(
                          (feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10
                                max-[375px]:gap-2 max-[375px]:p-2"
                            >
                              <div
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${values[activeCard].color} flex-shrink-0
                                  max-[375px]:w-1.5 max-[375px]:h-1.5`}
                              />
                              <span className="text-white text-sm sm:text-base md:text-lg max-[375px]:text-[11px]">
                                {feature}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </motion.div>

                    {/* CTA row */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      className="mt-10 sm:mt-14 md:mt-16 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4
                        max-[375px]:mt-5 max-[375px]:gap-2"
                    >
                      <button
                        className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r ${values[activeCard].color} text-white font-bold text-sm sm:text-base md:text-lg hover:scale-105 transition-transform text-center
                          max-[375px]:px-4 max-[375px]:py-2 max-[375px]:text-xs`}
                      >
                        Start Your Journey
                      </button>
                      <button
                        onClick={() => setActiveCard(null)}
                        className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 text-white font-bold text-sm sm:text-base md:text-lg hover:bg-white/10 transition-colors text-center
                          max-[375px]:px-4 max-[375px]:py-2 max-[375px]:text-xs"
                      >
                        Back to Values
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrbitalValues;
