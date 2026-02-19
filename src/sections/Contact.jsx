import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });

      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-16 bg-dark-900 relative overflow-hidden"
    >
      <div className="container-custom">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Let's Talk.
            </h2>

            <p className="text-xl text-gray-400 mb-12">
              Ready to dominate search rankings? Share your goals — we'll craft
              a custom SEO strategy for you.
            </p>

            {/* What We Offer */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold mb-4 text-gray-300">
                What we offer
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Technical SEO audits & optimization
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Content strategy & keyword research
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Local SEO & Google Business optimization
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Link building & authority growth
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Monthly reporting & ongoing support
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a
                    href="mailto:info@vblptechsolutions.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    info@vblptechsolutions.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Office</div>
                  <div className="text-gray-400">
                    KPHB
                    <br />
                    Hitech City Road
                    <br />
                    Hyderabad, Telangana
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="tel:+918309390566"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    8309390566
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-effect rounded-3xl p-8"
            >
              <h3 className="text-2xl font-display font-bold mb-6">
                Send us a message
              </h3>

              {submitted && (
                <div className="bg-green-500/20 border border-green-500/50 text-green-400 rounded-xl p-4 mb-6">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Company Inc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your SEO goals..."
                  ></textarea>
                </div>

                <div className="text-sm text-gray-400">
                  By submitting, you agree to our{" "}
                  <Link
                    to="/privacy"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
