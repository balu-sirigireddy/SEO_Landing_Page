import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, Zap, LineChart, X, Check } from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      number: "01",
      title: "Technical SEO",
      subtitle: "foundation",
      description:
        "Deep technical optimization that ensures search engines can crawl, index, and rank your pages effectively for maximum visibility.",
      icon: <Search className="w-16 h-16" />,
      color: "from-blue-500 to-cyan-500",
      detailedInfo: {
        overview:
          "Build a rock-solid foundation that search engines love. Our technical SEO ensures your site is crawlable, indexable, and primed for top rankings.",
        features: [
          "Site architecture and URL structure optimization",
          "XML sitemap generation and robots.txt configuration",
          "Schema markup and structured data implementation",
          "Canonical tags and duplicate content resolution",
          "Mobile-first indexing optimization",
          "HTTPS security and site migration support",
        ],
        results:
          "Average 45% increase in indexed pages and 67% improvement in crawl efficiency within 90 days.",
      },
    },
    {
      number: "02",
      title: "Content Strategy",
      subtitle: "engagement",
      description:
        "Data-driven content architecture with semantic HTML and keyword targeting that resonates with both users and search algorithms.",
      icon: <FileText className="w-16 h-16" />,
      color: "from-purple-500 to-pink-500",
      detailedInfo: {
        overview:
          "Create content that ranks and converts. We craft SEO-optimized pages with strategic keyword placement and compelling copy that drives action.",
        features: [
          "In-depth keyword research and competitive analysis",
          "Semantic HTML structure with proper heading hierarchy",
          "Long-tail keyword integration for voice search",
          "User intent mapping and content gap analysis",
          "Internal linking strategy and content clusters",
          "Meta titles, descriptions, and alt text optimization",
        ],
        results:
          "Clients see average 156% increase in organic traffic and 89% boost in keyword rankings within 6 months.",
      },
    },
    {
      number: "03",
      title: "Performance Optimization",
      subtitle: "speed",
      description:
        "Lightning-fast load times and Core Web Vitals excellence that improve rankings, user experience, and conversion rates.",
      icon: <Zap className="w-16 h-16" />,
      color: "from-green-500 to-emerald-500",
      detailedInfo: {
        overview:
          "Speed is a ranking factor. We optimize every millisecond to deliver blazing-fast experiences that boost both SEO and conversions.",
        features: [
          "Core Web Vitals optimization (LCP, FID, CLS)",
          "Image compression and lazy loading implementation",
          "CSS and JavaScript minification and bundling",
          "Browser caching and CDN integration",
          "Server response time optimization",
          "Mobile performance enhancement",
        ],
        results:
          "Average PageSpeed score improvement from 45 to 95+, resulting in 34% higher conversion rates.",
      },
    },
    {
      number: "04",
      title: "Conversion Analytics",
      subtitle: "growth",
      description:
        "Advanced tracking and optimization strategies that transform organic traffic into measurable revenue and sustainable business growth.",
      icon: <LineChart className="w-16 h-16" />,
      color: "from-orange-500 to-red-500",
      detailedInfo: {
        overview:
          "Turn data into dollars. We track every metric that matters and continuously optimize to maximize your ROI from organic search.",
        features: [
          "Google Analytics 4 and Search Console integration",
          "Conversion tracking and goal setup",
          "Heat mapping and user behavior analysis",
          "A/B testing for landing page optimization",
          "ROI tracking and revenue attribution",
          "Custom dashboards and monthly reporting",
        ],
        results:
          "Clients achieve average 127% increase in conversion rate and 3.2x ROI on SEO investment.",
      },
    },
  ];

  return (
    <section
      id="services"
      className="py-12 md:py-16 bg-dark-900 relative overflow-hidden"
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
              003
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Comprehensive SEO solutions that drive rankings, traffic, and
            revenue. Data-driven strategies that deliver measurable results.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <div className="glass-effect rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  {/* Number Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-6xl font-display font-bold text-white/20">
                      #{service.number}
                    </span>
                    <div
                      className={`bg-gradient-to-r ${service.color} p-0.5 rounded-2xl`}
                    >
                      <div className="bg-dark-900 rounded-2xl p-3 text-white">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-display font-bold mb-2">
                    {service.title}
                  </h3>
                  <div className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
                    {service.subtitle}
                  </div>
                  <p className="text-lg text-gray-300 mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-white font-semibold group-hover:gap-3 flex items-center gap-2 transition-all"
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary inline-block">
            Explore Services in Depth
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-dark-800 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Header */}
              <div
                className={`bg-gradient-to-r ${selectedService.color} p-0.5 rounded-t-2xl sm:rounded-t-3xl`}
              >
                <div className="bg-dark-800 rounded-t-2xl sm:rounded-t-3xl p-5 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    {/* Responsive Icon */}
                    <div
                      className={`bg-gradient-to-r ${selectedService.color} p-0.5 rounded-xl sm:rounded-2xl flex-shrink-0`}
                    >
                      <div className="bg-dark-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white">
                        {React.cloneElement(selectedService.icon, {
                          className: "w-8 h-8 sm:w-12 sm:h-12",
                        })}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs sm:text-sm text-gray-400 mb-2 uppercase tracking-wider">
                        {selectedService.subtitle}
                      </div>

                      {/* Responsive Title */}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
                        {selectedService.title}
                      </h3>

                      <p className="text-sm sm:text-base md:text-lg text-gray-300">
                        {selectedService.detailedInfo.overview}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-8">
                {/* Features */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6 flex items-center gap-3">
                    <div
                      className={`w-1 h-6 sm:h-8 bg-gradient-to-b ${selectedService.color} rounded-full`}
                    ></div>
                    What's Included
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {selectedService.detailedInfo.features.map(
                      (feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-colors"
                        >
                          <div
                            className={`mt-1 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-r ${selectedService.color} flex items-center justify-center`}
                          >
                            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                          </div>
                          <span className="text-sm sm:text-base text-gray-300">
                            {feature}
                          </span>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>

                {/* Results */}
                <div
                  className={`bg-gradient-to-r ${selectedService.color} p-0.5 rounded-xl sm:rounded-2xl`}
                >
                  <div className="bg-dark-900 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                    <h4 className="text-lg sm:text-xl font-display font-bold mb-2 sm:mb-3 flex items-center gap-2">
                      <LineChart className="w-4 h-4 sm:w-5 sm:h-5" />
                      Expected Results
                    </h4>
                    <p className="text-sm sm:text-lg text-gray-300">
                      {selectedService.detailedInfo.results}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a href="#contact" className="btn-primary flex-1 text-center">
                    Get Started Today
                  </a>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="btn-secondary flex-1"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
