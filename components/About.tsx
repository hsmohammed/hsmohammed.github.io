'use client'

import { motion } from 'framer-motion'
import { HiAcademicCap, HiBriefcase, HiCode, HiLightBulb } from 'react-icons/hi'

const skills = [
  { name: 'Machine Learning', level: 95 },
  { name: 'Deep Learning', level: 90 },
  { name: 'Python', level: 95 },
  { name: 'TensorFlow/PyTorch', level: 90 },
  { name: 'NLP', level: 85 },
  { name: 'Computer Vision', level: 85 },
  { name: 'MLOps', level: 80 },
  { name: 'Cloud Platforms', level: 85 },
]

const expertise = [
  {
    icon: HiCode,
    title: 'Full-Stack ML Development',
    description: 'End-to-end machine learning solutions from data preprocessing to production deployment.'
  },
  {
    icon: HiLightBulb,
    title: 'AI Strategy & Innovation',
    description: 'Strategic AI implementation and innovation consulting for business transformation.'
  },
  {
    icon: HiBriefcase,
    title: 'Enterprise Solutions',
    description: 'Scalable enterprise-grade ML solutions with robust infrastructure and monitoring.'
  },
  {
    icon: HiAcademicCap,
    title: 'Research & Development',
    description: 'Cutting-edge research in generative AI, reinforcement learning, and novel ML approaches.'
  }
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Lucira AI is a specialized AI consulting firm founded on the principle that 
              artificial intelligence should be accessible, ethical, and impactful. We believe 
              in creating AI solutions that not only solve complex business problems but also 
              contribute positively to society.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is to bridge the gap between cutting-edge AI research and practical 
              business applications, ensuring that every solution we deliver drives measurable 
              results while maintaining the highest standards of ethics and transparency.
            </p>

            {/* Founder Bio */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Founder</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Hossameldin Mohammed, Senior Machine Learning Engineer with 7+ years of experience 
                  in building and deploying end-to-end machine learning products. Currently leading 
                  ML initiatives at Symend, specializing in NLP, computer vision, and automated ML workflows.
                </p>
                <a 
                  href="#experience" 
                  className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                >
                  Read full bio →
                </a>
              </div>
            </div>

            {/* Approach & Philosophy */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Approach & Philosophy</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">Ethics First:</span>
                    <span className="text-gray-600"> Every solution prioritizes ethical AI principles and responsible deployment.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">Impact Driven:</span>
                    <span className="text-gray-600"> We focus on measurable business outcomes and sustainable growth.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">Collaboration:</span>
                    <span className="text-gray-600"> We work closely with clients to ensure solutions align with their vision and goals.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-600 to-accent-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Achievements</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-1">3</div>
                  <div className="text-sm text-gray-700">Peer-reviewed Publications</div>
                </div>
                <div className="p-4 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-1">50+</div>
                  <div className="text-sm text-gray-700">Projects Delivered</div>
                </div>
                <div className="p-4 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-1">100%</div>
                  <div className="text-sm text-gray-700">Client Satisfaction</div>
                </div>
                <div className="p-4 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-1">15+</div>
                  <div className="text-sm text-gray-700">Technologies Mastered</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
