import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Studio',
      subtitle: 'For growing teams',
      monthlyPrice: 49,
      yearlyPrice: 41,
      features: [
        'Smart Deployment',
        'Basic Monitoring',
        'Core Security',
        'Email Support',
        '5 team seats',
        'Basic Analytics',
        'Standard API'
      ],
      popular: false
    },
    {
      name: 'Scale',
      subtitle: 'For scaling businesses',
      monthlyPrice: 89,
      yearlyPrice: 75,
      features: [
        'All Studio features',
        'AI optimization',
        'Advanced monitoring',
        'Enhanced security',
        '24/7 support',
        'Auto-scaling',
        'Full analytics',
        'Priority API'
      ],
      popular: true
    },
    {
      name: 'Supreme',
      subtitle: 'For large organizations',
      monthlyPrice: 249,
      yearlyPrice: 209,
      features: [
        'All Scale features',
        'Dedicated support',
        'Private hosting',
        'Custom security',
        'Training included',
        'Priority features',
        'Custom reporting',
        'Enterprise SLA'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-3 mb-6"
          >
            <span className="text-6xl font-display font-bold text-white/10">005</span>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-2xl">P</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Flexible, transparent plans. Built for clarity and growth.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center space-x-4 glass-effect rounded-full p-2"
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                !isYearly ? 'bg-white text-black' : 'text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                isYearly ? 'bg-white text-black' : 'text-white'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Save 16%</span>
            </button>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className={`glass-effect rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-300 ${
                plan.popular ? 'border-2 border-blue-500/50' : ''
              }`}>
                <div className="text-sm text-gray-400 mb-2">{plan.subtitle}</div>
                <h3 className="text-3xl font-display font-bold mb-6">{plan.name}</h3>
                
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-display font-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  {isYearly && (
                    <div className="text-sm text-green-400 mt-2">
                      Billed yearly (${plan.yearlyPrice * 12})
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full block text-center py-4 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/50'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Select Plan
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Need a custom enterprise solution?</p>
          <a href="#contact" className="text-blue-400 hover:text-blue-300 font-semibold">
            Contact sales for Enterprise Plan →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
