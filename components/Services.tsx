'use client'

import { motion } from 'framer-motion'
import { 
  HiChip, 
  HiEye, 
  HiChatAlt2, 
  HiCog, 
  HiChartBar, 
  HiLightningBolt 
} from 'react-icons/hi'

const services = [
  {
    icon: HiChip,
    title: 'Machine Learning Development',
    description: 'End-to-end ML solutions from data preprocessing to model deployment. Custom algorithms tailored to your specific business needs.',
    features: ['Custom ML Models', 'Data Pipeline Design', 'Model Optimization', 'Production Deployment']
  },
  {
    icon: HiEye,
    title: 'Computer Vision Solutions',
    description: 'Advanced computer vision applications including object detection, image classification, and video analysis.',
    features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Real-time Processing']
  },
  {
    icon: HiChatAlt2,
    title: 'Natural Language Processing',
    description: 'NLP solutions for text analysis, sentiment analysis, chatbots, and language understanding systems.',
    features: ['Text Analysis', 'Sentiment Analysis', 'Chatbots', 'Language Models']
  },
  {
    icon: HiCog,
    title: 'ML Infrastructure & Automation',
    description: 'Build robust ML infrastructure with automated workflows, monitoring, and scalable deployment systems.',
    features: ['MLOps Pipeline', 'Model Monitoring', 'Auto-scaling', 'CI/CD Integration']
  },
  {
    icon: HiChartBar,
    title: 'Data Science Consulting',
    description: 'Strategic data science consulting to help you make data-driven decisions and uncover business insights.',
    features: ['Data Strategy', 'Analytics Implementation', 'Business Intelligence', 'Performance Metrics']
  },
  {
    icon: HiLightningBolt,
    title: 'AI Strategy & Implementation',
    description: 'Comprehensive AI strategy development and implementation roadmap for your organization.',
    features: ['AI Roadmap', 'Technology Assessment', 'Team Training', 'ROI Optimization']
  }
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
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
            My Consulting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI and machine learning solutions designed to transform your business 
            and drive measurable results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how AI and machine learning can drive your business forward.
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
              Schedule a Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 