import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const teamMembers = [
    {
      name: 'Philip van der Bosch',
      role: 'Founder & Head of Operations',
      bio: "As head of operations, I drive our mission of pioneering AI-powered infrastructure. I'm dedicated to turning complexity into clarity with scalable, intelligent tools that revolutionize how businesses operate.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop'
    },
    {
      name: 'Tygo Brouwer',
      role: 'Chief Data Scientist',
      bio: 'I co-founded Platform to fundamentally change how businesses leverage technology. As the lead architect of our AI technology, I guide the innovation and development of Platform\'s intelligent infrastructure.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop'
    }
  ];

  return (
    <section id="team" className="section-padding bg-dark-800 relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-3 mb-6"
          >
            <span className="text-6xl font-display font-bold text-white/10">007</span>
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
            Meet the Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Get to know the team behind the work. Makers, thinkers, and problem-solvers.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="glass-effect rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold mb-2">{member.name}</h3>
                <div className="text-blue-400 mb-4">{member.role}</div>
                <p className="text-gray-400 leading-relaxed mb-6">{member.bio}</p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold text-lg">
            Join our Slack community →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
