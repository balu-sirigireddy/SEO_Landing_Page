import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Search,
  BarChart3,
  Globe,
  Zap,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  // Stagger animation variants for sequential content reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-black"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Enhanced Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left space-y-8"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="inline-block">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-300">
                    #1 SEO-Optimized Design Agency
                  </span>
                </div>
              </motion.div>

              {/* Main Heading with Enhanced Gradient */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight"
              >
                <span className="text-white">You rank higher,</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  we design smarter.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                We design{" "}
                <span className="text-white font-semibold">
                  SEO-optimized landing pages
                </span>{" "}
                that convert traffic into{" "}
                <span className="text-white font-semibold">real revenue</span>.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 group"
                >
                  <span className="relative z-10 flex items-center">
                    Get Free SEO Audit
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
                {/* <motion.a
                  href="#work"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-lg text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                >
                  View Our SEO Projects
                </motion.a> */}
              </motion.div>

              {/* Stats - Enhanced Design */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent backdrop-blur-md rounded-2xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-300">
                      Average Ranking Boost
                    </span>
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <TrendingUp className="text-green-400" size={20} />
                    </div>
                  </div>
                  <div className="text-5xl font-bold font-display mb-2 bg-gradient-to-br from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    +87%
                  </div>
                  <div className="text-sm text-gray-400">
                    First-page visibility improvement
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-300">
                      Conversion Growth
                    </span>
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                      <TrendingUp className="text-blue-400" size={20} />
                    </div>
                  </div>
                  <div className="text-5xl font-bold font-display mb-2 bg-gradient-to-br from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    +53%
                  </div>
                  <div className="text-sm text-gray-400">
                    Optimized SEO landing pages
                  </div>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start gap-8 pt-2 text-sm text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-gray-900" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-gray-900" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-gray-900" />
                  </div>
                  <span className="font-medium text-gray-300">
                    500+ Happy Clients
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-medium text-gray-300">
                    4.9/5 Rating
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Enhanced SEO Visualization with NO GAPS */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="relative hidden lg:flex lg:items-center lg:justify-center h-full"
            >
              <div className="w-full max-w-lg">
                {/* Main SEO Dashboard Card - FULL HEIGHT */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl shadow-black/20"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-sm text-gray-400 mb-2 font-medium"
                      >
                        Live SEO Metrics
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="text-3xl font-bold font-display bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
                      >
                        Your Rankings
                      </motion.div>
                    </div>
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50"
                    >
                      <Search className="text-white" size={26} />
                    </motion.div>
                  </div>

                  {/* Rankings Progress */}
                  <div className="space-y-6 mb-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-300">
                          Organic Traffic
                        </span>
                        <span className="text-sm font-bold text-green-400 flex items-center gap-1">
                          <TrendingUp size={16} />
                          127%
                        </span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "87%" }}
                          transition={{
                            duration: 1.5,
                            delay: 1.3,
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-300">
                          Page Speed
                        </span>
                        <span className="text-sm font-bold text-blue-400 flex items-center gap-1">
                          <TrendingUp size={16} />
                          94%
                        </span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "94%" }}
                          transition={{
                            duration: 1.5,
                            delay: 1.4,
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-300">
                          Domain Authority
                        </span>
                        <span className="text-sm font-bold text-purple-400 flex items-center gap-1">
                          <TrendingUp size={16} />
                          68%
                        </span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "68%" }}
                          transition={{
                            duration: 1.5,
                            delay: 1.5,
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* SEO Metrics Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="grid grid-cols-3 gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="bg-gradient-to-br from-blue-500/15 to-blue-500/5 backdrop-blur-sm rounded-xl p-5 text-center border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <Globe className="mx-auto mb-2 text-blue-400" size={28} />
                      <div className="text-2xl font-bold font-display mb-1 text-white">
                        156
                      </div>
                      <div className="text-xs text-gray-400 font-medium">
                        Keywords
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="bg-gradient-to-br from-green-500/15 to-green-500/5 backdrop-blur-sm rounded-xl p-5 text-center border border-green-500/30 hover:border-green-500/50 transition-all duration-300"
                    >
                      <BarChart3
                        className="mx-auto mb-2 text-green-400"
                        size={28}
                      />
                      <div className="text-2xl font-bold font-display mb-1 text-white">
                        4.2K
                      </div>
                      <div className="text-xs text-gray-400 font-medium">
                        Backlinks
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="bg-gradient-to-br from-yellow-500/15 to-yellow-500/5 backdrop-blur-sm rounded-xl p-5 text-center border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300"
                    >
                      <Zap className="mx-auto mb-2 text-yellow-400" size={28} />
                      <div className="text-2xl font-bold font-display mb-1 text-white">
                        98
                      </div>
                      <div className="text-xs text-gray-400 font-medium">
                        SEO Score
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Enhanced Floating Elements - Properly Positioned */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -12, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: 1.8 },
                    scale: { duration: 0.6, delay: 1.8 },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2.4,
                    },
                  }}
                  whileHover={{ scale: 1.08, y: -6 }}
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 border border-green-500/30 shadow-xl shadow-green-500/20"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/50"
                    >
                      <TrendingUp className="text-white" size={22} />
                    </motion.div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">
                        Position
                      </div>
                      <div className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        #1 Rank
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: 2 },
                    scale: { duration: 0.6, delay: 2 },
                    y: {
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2.6,
                    },
                  }}
                  whileHover={{ scale: 1.08, y: -6 }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 border border-blue-500/30 shadow-xl shadow-blue-500/20"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50"
                    >
                      <Search className="text-white" size={22} />
                    </motion.div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">
                        Monthly
                      </div>
                      <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        47K Visits
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-white/50 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-gradient-to-b from-white to-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
