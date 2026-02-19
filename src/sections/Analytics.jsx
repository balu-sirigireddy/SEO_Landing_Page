import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Search,
  BarChart3,
  Target,
  Globe,
  Zap,
} from "lucide-react";

const Analytics = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const metrics = [
    {
      icon: TrendingUp,
      value: "340%",
      label: "Average Traffic Increase",
      description: "Organic traffic growth within 6 months",
    },
    {
      icon: Search,
      value: "1000+",
      label: "Keywords Ranked",
      description: "First page rankings achieved for clients",
    },
    {
      icon: BarChart3,
      value: "95%",
      label: "Client Retention",
      description: "Long-term partnerships built on results",
    },
    {
      icon: Target,
      value: "250+",
      label: "Projects Delivered",
      description: "Successful SEO campaigns completed",
    },
  ];

  const services = [
    {
      icon: Globe,
      title: "Technical SEO",
      description:
        "Core Web Vitals optimization, site speed improvement, mobile-first indexing, and structured data implementation.",
      features: [
        "Site Audits",
        "Speed Optimization",
        "Schema Markup",
        "XML Sitemaps",
      ],
    },
    {
      icon: Search,
      title: "Content Strategy",
      description:
        "Data-driven keyword research, content gap analysis, and SEO-optimized content that ranks and converts.",
      features: [
        "Keyword Research",
        "Content Planning",
        "SEO Writing",
        "Topic Clusters",
      ],
    },
    {
      icon: Zap,
      title: "Link Building",
      description:
        "White-hat link acquisition strategies that build authority and improve domain rankings organically.",
      features: [
        "Guest Posting",
        "Digital PR",
        "Broken Link Building",
        "Competitor Analysis",
      ],
    },
  ];

  return (
    <section
      id="analytics"
      className="py-12 md:py-16 bg-dark-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-3 mb-6"
          >
            <span className="text-6xl font-display font-bold text-white/10">
              006
            </span>
            {/* <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-2xl">V</span>
            </div> */}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            SEO Analytics & Performance
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Data-driven SEO strategies that deliver measurable results and
            sustainable growth.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="glass-effect rounded-3xl p-8 text-center hover:scale-105 transition-transform"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                <metric.icon size={32} className="text-white" />
              </div>
              <div className="text-4xl font-display font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="font-semibold mb-2">{metric.label}</div>
              <div className="text-sm text-gray-400">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-display font-bold text-center mb-12">
            Our SEO Services
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="glass-effect rounded-3xl p-8 hover:border-blue-500/50 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-2xl mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all">
                  <service.icon size={28} />
                </div>

                <h4 className="text-2xl font-display font-bold mb-4">
                  {service.title}
                </h4>

                <p className="text-gray-400 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-4">
              Ready to Dominate Search Rankings?
            </h3>
            <p className="text-xl text-gray-400 mb-8">
              Let's analyze your website and create a custom SEO strategy that
              drives real results.
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center">
              Get Your Free SEO Audit
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Analytics;
