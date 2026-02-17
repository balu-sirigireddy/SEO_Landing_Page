import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "Our organic traffic increased by 340% in just 6 months. The technical SEO audit uncovered issues we didn't even know existed, and the content strategy transformed our entire approach to search visibility.",
      author: "Emily Rodriguez",
      position: "Marketing Director",
      company: "GrowthTech",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      text: "From keyword research to Core Web Vitals optimization, the team delivered exceptional results. Our bounce rate dropped by 45% and conversions doubled. Best ROI we've seen from any marketing investment.",
      author: "James Mitchell",
      position: "CEO",
      company: "EcomPro",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
      text: "The local SEO strategy completely transformed our business. We now dominate the first page for every major keyword in our market. Customer inquiries have tripled since the optimization began.",
      author: "Sarah Chen",
      position: "Owner",
      company: "Urban Dental",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      text: "Their approach to content optimization and link building is unmatched. We went from page 3 to consistent top 3 rankings across our most competitive keywords. The ongoing support has been invaluable.",
      author: "Marcus Rivera",
      position: "Digital Marketing Manager",
      company: "TechSolutions",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonials"
      className="py-12 md:py-16 bg-dark-900 relative overflow-hidden"
    >
      {/* ✅ Scoped styles ONLY targeting 325px–385px screens. Everything above is untouched. */}
      <style>{`
        @media (max-width: 385px) {
          .testi-section-number { font-size: 0.6rem !important; }
          .testi-heading        { font-size: 1.4rem !important; line-height: 1.2 !important; }
          .testi-subtitle       { font-size: 0.8rem !important; }
          .testi-card           { padding: 1rem !important; }
          .testi-quote-icon     { top: 0.75rem !important; right: 0.75rem !important; }
          .testi-quote-icon svg { width: 28px !important; height: 28px !important; }
          .testi-quote-text     { font-size: 0.875rem !important; line-height: 1.55 !important; margin-bottom: 1rem !important; }
          .testi-avatar         { width: 36px !important; height: 36px !important; }
          .testi-author-name    { font-size: 0.8rem !important; }
          .testi-author-role    { font-size: 0.7rem !important; }
          .testi-nav-btn        { width: 32px !important; height: 32px !important; }
          .testi-nav-btn svg    { width: 14px !important; height: 14px !important; }
          .testi-cta-link       { font-size: 0.8rem !important; }
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl"></div>
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
            <span className="testi-section-number text-6xl font-display font-bold text-white/30">
              008
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="testi-heading text-4xl md:text-5xl font-display font-bold mb-6"
          >
            What Our Clients Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="testi-subtitle text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Trusted by businesses that value organic growth and sustainable
            search rankings.
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="testi-card glass-effect rounded-3xl p-12 relative">
            {/* Quote Icon */}
            <div className="testi-quote-icon absolute top-8 right-8 text-white/10">
              <Quote size={80} />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="testi-quote-text text-2xl md:text-3xl font-display leading-relaxed mb-8 italic">
                  "{testimonials[activeIndex].text}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].author}
                      className="testi-avatar w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="testi-author-name font-display font-bold text-lg">
                        {testimonials[activeIndex].author}
                      </div>
                      <div className="testi-author-role text-gray-400">
                        {testimonials[activeIndex].position} at{" "}
                        {testimonials[activeIndex].company}
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex space-x-2">
                    <button
                      onClick={prev}
                      className="testi-nav-btn w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={next}
                      className="testi-nav-btn w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Progress Indicators */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeIndex ? "w-8 bg-white" : "w-2 bg-white/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="testi-cta-link text-blue-400 hover:text-blue-300 font-semibold text-lg"
          >
            Read more success stories →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
