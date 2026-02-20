import React, { useState, useEffect } from "react";
import { Twitter, Linkedin, Github, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const footerLinks = {
    product: [
      { name: "Home", href: "/" },
      { name: "Work", href: "/#work" },
      { name: "Services", href: "/#services" },
      { name: "Analytics", href: "/#analytics" },
    ],
    company: [
      { name: "About", href: "/#team" },
      { name: "FAQ", href: "/#faq" },
      { name: "Testimonials", href: "/#testimonials" },
      { name: "Contact", href: "/#contact" },
    ],
    legal: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  };

  const renderLinks = (links) =>
    links.map((link) => (
      <li key={link.name}>
        <Link
          to={link.href}
          className="text-gray-400 hover:text-white transition-colors inline-block relative group"
        >
          {link.name}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
    ));

  return (
    <footer className="bg-dark-800 border-t border-white/10">
      <div className="container-custom py-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center pb-3">
              <img
                src="/VBLPlogo.png"
                alt="VBLP Tech Solutions Logo"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>

            <p className="text-gray-400 mb-6">
              Rank higher, convert faster — SEO-driven growth for ambitious
              businesses.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>

              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-colors"
              >
                <Github size={20} />
              </a>

              <a
                href="mailto:info@vblptechsolutions.com"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">{renderLinks(footerLinks.product)}</ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">{renderLinks(footerLinks.company)}</ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">{renderLinks(footerLinks.legal)}</ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            {currentYear} © VBLP Tech Solutions Pvt. Ltd. All rights reserved.
          </div>

          <div className="text-gray-400 text-sm text-center md:text-right">
            VBLP Tech Solutions Pvt. Ltd., Hyderabad — SEO, Web Development &
            Digital Marketing Services.
          </div>
        </div>
      </div>

      {/* Back To Top */}
      <a
        href="/#top"
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 w-12 h-12 z-40
          bg-gradient-to-r from-blue-500 to-purple-500 rounded-full
          flex items-center justify-center
          shadow-lg hover:shadow-blue-500/50
          hover:scale-110
          transition-all duration-300 ease-in-out
          ${
            showTop
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-6 pointer-events-none"
          }
        `}
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </a>
    </footer>
  );
};

export default Footer;
