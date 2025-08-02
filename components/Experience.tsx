'use client'

import { motion } from 'framer-motion'
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi'

const experience = [
  {
    company: 'Symend',
    position: 'Senior Machine Learning Engineer',
    duration: '2022 - Present',
    location: 'Calgary, Canada',
    description: 'Leading ML initiatives for customer engagement optimization, developing NLP solutions for automated communication systems.',
    achievements: [
      'Built end-to-end ML pipelines processing millions of customer interactions',
      'Developed advanced NLP models for sentiment analysis and intent classification',
      'Implemented MLOps practices reducing model deployment time by 60%',
      'Led a team of 3 ML engineers on critical customer engagement projects'
    ],
    technologies: ['Python', 'TensorFlow', 'NLP', 'AWS', 'Docker', 'Kubernetes']
  },
  {
    company: 'Previous Company',
    position: 'Machine Learning Engineer',
    duration: '2020 - 2022',
    location: 'Vancouver, Canada',
    description: 'Developed computer vision solutions for industrial automation and quality control systems.',
    achievements: [
      'Designed computer vision models achieving 95%+ accuracy in defect detection',
      'Optimized ML models for real-time processing on edge devices',
      'Reduced false positive rates by 40% through advanced model tuning',
      'Collaborated with cross-functional teams to integrate ML solutions'
    ],
    technologies: ['Python', 'PyTorch', 'OpenCV', 'Computer Vision', 'Edge Computing']
  },
  {
    company: 'Research Institution',
    position: 'Research Assistant',
    duration: '2018 - 2020',
    location: 'Vancouver, Canada',
    description: 'Conducted research in generative machine learning and reinforcement learning applications.',
    achievements: [
      'Published 3 peer-reviewed papers on generative AI and RL',
      'Developed novel algorithms for imitation learning in robotics',
      'Presented research at top-tier ML conferences (ICML, NeurIPS)',
      'Mentored 5 graduate students in ML research projects'
    ],
    technologies: ['Python', 'PyTorch', 'Reinforcement Learning', 'Generative AI', 'Research']
  }
]

const projects = [
  {
    title: 'Customer Engagement AI Platform',
    description: 'Built a comprehensive AI platform for personalized customer communication and engagement optimization.',
    impact: 'Increased customer response rates by 35% and reduced churn by 25%',
    technologies: ['NLP', 'Recommendation Systems', 'AWS', 'Real-time Processing']
  },
  {
    title: 'Industrial Quality Control System',
    description: 'Developed computer vision system for automated quality inspection in manufacturing.',
    impact: 'Reduced defect detection time by 80% and improved accuracy to 98%',
    technologies: ['Computer Vision', 'Edge Computing', 'Real-time Analytics']
  },
  {
    title: 'MLOps Automation Framework',
    description: 'Created automated ML pipeline for model training, validation, and deployment.',
    impact: 'Reduced model deployment time from weeks to hours',
    technologies: ['MLOps', 'CI/CD', 'Kubernetes', 'Monitoring']
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gray-50">
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
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A track record of delivering impactful machine learning solutions across various industries 
            and domains.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-16">
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-3">
                    <HiBriefcase className="h-5 w-5 text-primary-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">{job.position}</h3>
                  </div>
                  <div className="text-lg font-semibold text-primary-600 mb-2">
                    {job.company}
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <HiCalendar className="h-4 w-4 mr-2" />
                    {job.duration}
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <HiLocationMarker className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="text-sm font-semibold text-primary-600 mb-1">Impact:</div>
                  <p className="text-sm text-gray-700">{project.impact}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 