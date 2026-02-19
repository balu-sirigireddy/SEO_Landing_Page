import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes your SEO landing pages different ?",
      answer:
        "Our landing pages combine technical SEO excellence with conversion-focused design. Every page is built with semantic HTML, optimized for Core Web Vitals, and strategically crafted to rank for high-intent keywords while driving measurable conversions. We don't just build pages—we build revenue-generating assets.",
    },
    {
      question: "How long does it take to see SEO results?",
      answer:
        "Initial indexing and ranking improvements typically appear within 2-4 weeks. Significant traffic growth usually occurs around the 3-6 month mark as search engines recognize your content authority. However, technical optimizations like page speed improvements deliver immediate UX benefits and conversion rate boosts.",
    },
    {
      question: `What's included in the SEO audit?`,
      answer:
        "Our comprehensive audit includes technical SEO analysis (crawlability, indexing, site structure), keyword research with search volume and competition data, competitor analysis, content gap identification, Core Web Vitals assessment, and a prioritized action plan with ROI projections.",
    },
    {
      question: "Do you provide ongoing SEO support?",
      answer:
        "Yes! We offer monthly retainer packages that include continuous optimization, content updates, performance monitoring, ranking reports, conversion rate optimization, and technical maintenance. Your dedicated account manager ensures your pages stay competitive and continue to drive growth.",
    },
    {
      question: "How much do SEO landing pages cost?",
      answer:
        "Pricing varies based on page complexity, keyword competitiveness, and number of pages. Single landing pages start at $3,500. Multi-page campaigns range from $8,000-$25,000. Enterprise solutions with ongoing optimization are custom-priced. All packages include keyword research, content strategy, and technical implementation.",
    },
    {
      question: "Will my pages work with my existing website?",
      answer:
        "Absolutely! We design pages that seamlessly integrate with your existing site, matching your brand guidelines and design system. We can work with any CMS (WordPress, Webflow, custom builds) or create standalone pages. Our code is clean, maintainable, and developer-friendly.",
    },
    {
      question: "What metrics do you track and report?",
      answer:
        "We monitor organic traffic, keyword rankings, conversion rates, bounce rates, Core Web Vitals scores, backlink growth, and revenue attribution. You receive monthly reports with clear visualizations, insights, and recommendations. We integrate with Google Analytics, Search Console, and your preferred tracking tools.",
    },
    {
      question: "How do you stay current with Google algorithm updates?",
      answer:
        "Our team continuously monitors SEO industry changes, Google Search Central updates, and algorithm shifts. We proactively adjust strategies based on emerging trends and verified best practices. Our focus on quality content, technical excellence, and user experience ensures your pages remain resilient to algorithm changes.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
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
              007
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
            Questions & Answers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Clear answers about our SEO process, pricing, and results.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full glass-effect rounded-2xl p-6 text-left hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-display font-semibold pr-8 group-hover:text-blue-400 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500 transition-all">
                    {openIndex === index ? (
                      <Minus size={20} className="text-white" />
                    ) : (
                      <Plus size={20} className="text-white" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 glass-effect rounded-3xl p-12 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-display font-bold mb-4">
            You still have questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Every business has unique SEO needs. Let our team show you how we
            can drive measurable results for your specific industry and goals.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Get Your Free SEO Audit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
