'use client'

import { motion } from 'framer-motion'
import { HiStar, HiChatAlt2 } from 'react-icons/hi'

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CTO',
    company: 'TechCorp Solutions',
    content: 'Hossam delivered an exceptional ML solution that transformed our customer engagement. His expertise in NLP and ability to translate complex requirements into practical solutions was invaluable.',
    rating: 5,
    image: '/api/placeholder/60/60'
  },
  {
    name: 'Michael Chen',
    position: 'Head of AI',
    company: 'InnovateAI',
    content: 'Working with Hossam was a game-changer for our AI strategy. His deep understanding of both technical implementation and business value helped us achieve results beyond our expectations.',
    rating: 5,
    image: '/api/placeholder/60/60'
  },
  {
    name: 'Emily Rodriguez',
    position: 'Product Manager',
    company: 'DataFlow Systems',
    content: 'Hossam\'s expertise in MLOps and model deployment helped us scale our ML infrastructure efficiently. His systematic approach and attention to detail ensured smooth project delivery.',
    rating: 5,
    image: '/api/placeholder/60/60'
  },
  {
    name: 'David Kim',
    position: 'VP Engineering',
    company: 'SmartManufacturing',
    content: 'The computer vision solution Hossam developed for our quality control system exceeded all our metrics. His technical skills combined with practical business understanding is rare to find.',
    rating: 5,
    image: '/api/placeholder/60/60'
  },
  {
    name: 'Lisa Thompson',
    position: 'AI Director',
    company: 'FutureTech',
    content: 'Hossam\'s strategic approach to AI implementation helped us build a robust foundation for our ML initiatives. His guidance on best practices and architecture decisions was invaluable.',
    rating: 5,
    image: '/api/placeholder/60/60'
  },
  {
    name: 'Robert Wilson',
    position: 'CEO',
    company: 'StartupXYZ',
    content: 'As a startup, we needed someone who could wear multiple hats and deliver quickly. Hossam exceeded our expectations with his end-to-end ML solution and ongoing support.',
    rating: 5,
    image: '/api/placeholder/60/60'
  }
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what industry leaders and clients 
            have to say about working with me.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <HiChatAlt2 className="h-8 w-8 text-primary-600 opacity-20" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">5.0</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how I can help transform your business with AI and machine learning.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 