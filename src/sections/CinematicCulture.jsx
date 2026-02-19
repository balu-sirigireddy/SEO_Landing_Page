import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Users,
  Sparkles,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

const CinematicCulture = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const cultureItems = [
    {
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      title: "Collaborative Workspace",
      description: "Modern office designed for creativity and teamwork",
      icon: MapPin,
      size: "large", // spans 2 rows
      color: "from-blue-500 to-cyan-500",
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
      title: "Innovation Hub",
      description: "State-of-the-art technology and tools",
      icon: Sparkles,
      size: "small",
      color: "from-purple-500 to-pink-500",
    },
    {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      title: "Team Building",
      description: "Regular events and activities",
      icon: Users,
      size: "small",
      color: "from-orange-500 to-red-500",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
      title: "Learning & Development",
      description: "Continuous training and skill enhancement programs",
      icon: GraduationCap,
      size: "wide", // spans 2 columns
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Life at VBLP
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            SEO Friendly Development Content driven strategy data driven
            decisions Authority & Link building SEO for Different IT models
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          {cultureItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${
                item.size === "large"
                  ? "md:row-span-2"
                  : item.size === "wide"
                    ? "md:col-span-2"
                    : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity mix-blend-overlay`}
              />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-bl-full`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CinematicCulture;
