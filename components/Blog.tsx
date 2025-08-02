'use client'

import { motion } from 'framer-motion'
import { HiArrowRight, HiCalendar, HiTag } from 'react-icons/hi'
import Link from 'next/link'

const blogPosts = [
  {
    title: 'The Future of MLOps: Automating Model Deployment',
    excerpt: 'Exploring the latest trends in MLOps and how automation is revolutionizing model deployment pipelines.',
    category: 'MLOps',
    date: '2024-01-15',
    readTime: '5 min read',
    slug: 'mlops-automation'
  },
  {
    title: 'Understanding Transformer Architecture in NLP',
    excerpt: 'A deep dive into transformer models and their impact on natural language processing applications.',
    category: 'NLP',
    date: '2024-01-10',
    readTime: '8 min read',
    slug: 'transformer-architecture'
  },
  {
    title: 'AI Strategy for Enterprise: A Comprehensive Guide',
    excerpt: 'How to develop and implement an effective AI strategy that aligns with business objectives.',
    category: 'Strategy',
    date: '2024-01-05',
    readTime: '12 min read',
    slug: 'ai-strategy-enterprise'
  }
]

const categories = ['ML', 'NLP', 'MLOps', 'Strategy', 'Computer Vision', 'Research']

export default function Blog() {
  return (
    <section className="section-padding bg-gray-50">
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
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends in AI and machine learning through our 
            expert analysis and practical insights.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <span className="text-primary-600 font-medium">AI Insights</span>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <HiCalendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center transition-colors duration-200"
                  >
                    Read More
                    <HiArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-primary-50 hover:border-primary-200 transition-colors duration-200"
              >
                <HiTag className="h-4 w-4 inline mr-2 text-primary-600" />
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="btn-primary">
              Read More Articles
            </Link>
            <button className="btn-outline">
              Subscribe to Newsletter
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
