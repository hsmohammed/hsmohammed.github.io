'use client'

import { HiMail, HiGlobe, HiHeart } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/hsmohammed',
    icon: FaGithub
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hsmohammed/',
    icon: FaLinkedin
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/Hossameldin400',
    icon: FaTwitter
  }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LA</span>
              </div>
              <span className="text-xl font-bold">Lucira AI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Trusted AI consulting with clarity and precision. We deliver cutting-edge 
              machine learning solutions that transform businesses through ethical AI 
              implementation and measurable results.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <HiMail className="h-5 w-5 mr-3 text-primary-400" />
                <a 
                  href="mailto:hossam.mohammed@luciraai.net"
                  className="hover:text-white transition-colors duration-200"
                >
                  hossam.mohammed@luciraai.net
                </a>
              </div>
              <div className="flex items-center">
                <HiGlobe className="h-5 w-5 mr-3 text-primary-400" />
                <span>Vancouver, BC, Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Lucira AI. All rights reserved.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <HiHeart className="h-4 w-4 mx-1 text-red-500" />
              <span>for the future of AI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
