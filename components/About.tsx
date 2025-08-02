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
              About Me
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a Senior Machine Learning Engineer with over 7 years of experience in building 
              and deploying end-to-end machine learning products. Currently working at Symend, 
              I specialize in solving complex problems across natural language processing, 
              computer vision, and automated ML workflows.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My passion lies in translating cutting-edge research into practical business solutions 
              that drive real value. I've successfully delivered 50+ ML projects, from small-scale 
              prototypes to enterprise-grade systems serving millions of users.
            </p>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">MASc in Machine Learning</div>
                    <div className="text-gray-600">University of British Columbia</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">MSc in Engineering</div>
                    <div className="text-gray-600">Cairo University</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">BSc in Engineering</div>
                    <div className="text-gray-600">Cairo University</div>
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Skills</h3>
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

            {/* Expertise Areas */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Areas of Expertise</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center mb-2">
                      <item.icon className="h-5 w-5 text-primary-600 mr-2" />
                      <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">7+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-gray-600">Technologies Mastered</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 