import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  TrendingUp,
  Zap,
  BarChart3,
} from "lucide-react";

const Work = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      name: "Keyword Architect",
      description:
        "Strategic keyword research and mapping that targets high-intent search queries for maximum conversions.",
      icon: <Search className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Speed Optimizer",
      description:
        "Lightning-fast page load times with Core Web Vitals optimization that boosts rankings and user experience.",
      icon: <Zap className="w-12 h-12" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Content Engine",
      description:
        "SEO-optimized content structure with semantic HTML that search engines love and users engage with.",
      icon: <TrendingUp className="w-12 h-12" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Analytics Core",
      description:
        "Real-time tracking and conversion optimization that turns traffic into measurable revenue growth.",
      icon: <BarChart3 className="w-12 h-12" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  const nextProduct = () => {
    setActiveProduct((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setActiveProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section
      id="work"
      className="py-12 md:py-16 bg-dark-800 relative overflow-hidden"
    >
      <div className="container-custom">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <span className="text-6xl font-display font-bold text-white/30">
                002
              </span>
              {/* <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-2xl">P</span>
              </div> */}
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our Work
            </h2>

            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-gray-300">
              SEO-optimized pages that rank higher, convert better, and drive
              real business growth.
            </h3>

            <p className="text-lg text-gray-400 mb-8">
              Every landing page is crafted with proven SEO strategies,
              delivering measurable results and sustainable organic traffic.
            </p>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/10">
              <div className="text-sm text-gray-400 mb-2">Featured Service</div>
              <h4 className="text-2xl font-display font-bold mb-3">
                Enterprise SEO Landing Pages
              </h4>
              <p className="text-gray-300">
                Transform your online presence with landing pages designed to
                dominate search rankings. We combine technical SEO excellence
                with conversion-focused design to turn searches into sales.
              </p>
            </div>
          </motion.div>

          {/* Right - Product Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-effect rounded-3xl p-8 relative overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${products[activeProduct].color} opacity-10`}
              ></div>

              <div className="relative z-10">
                <div className="text-sm text-gray-400 mb-4">
                  Service {activeProduct + 1}/{products.length}
                </div>

                <div className="mb-6 text-white">
                  {products[activeProduct].icon}
                </div>

                <h4 className="text-3xl font-display font-bold mb-4">
                  {products[activeProduct].name}
                </h4>

                <p className="text-lg text-gray-300 mb-8">
                  {products[activeProduct].description}
                </p>

                {/* Carousel Controls */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={prevProduct}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="Previous product"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextProduct}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="Next product"
                  >
                    <ChevronRight size={24} />
                  </button>

                  <div className="flex-1 flex space-x-2">
                    {products.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveProduct(index)}
                        className={`h-1 flex-1 rounded-full transition-all ${
                          index === activeProduct ? "bg-white" : "bg-white/20"
                        }`}
                        aria-label={`Go to product ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
              SEO excellence built-in
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
