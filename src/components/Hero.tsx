import React from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, ChevronDown } from 'lucide-react'

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-secondary-800 dark:to-secondary-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,rgba(156,146,172,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      {/* Floating Illustrations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Code Blocks */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 left-10 text-primary-400 dark:text-primary-600">
          <div className="font-mono text-xs opacity-60">
            <div className="bg-white/10 dark:bg-secondary-800/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-green-400">const</div>
              <div className="text-blue-400">developer</div>
              <div className="text-yellow-400">=</div>
              <div className="text-purple-400">"Raja"</div>
            </div>
          </div>
        </motion.div>

        {/* React Logo */}
        <motion.div
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 0.3, rotate: 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-32 right-20 text-primary-500 dark:text-primary-400">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            className="animate-spin-slow">
            <circle
              cx="30"
              cy="30"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.3"
            />
            <circle
              cx="30"
              cy="30"
              r="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.5"
            />
            <circle cx="30" cy="30" r="5" fill="currentColor" opacity="0.7" />
          </svg>
        </motion.div>

        {/* Mobile Device */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-32 left-20">
          <div className="w-16 h-24 bg-gradient-to-b from-primary-400 to-primary-600 rounded-xl border-2 border-primary-300 dark:border-primary-500 relative">
            <div className="absolute top-1 left-1 right-1 h-8 bg-white dark:bg-secondary-700 rounded-t-lg"></div>
            <div className="absolute bottom-2 left-2 right-2 h-1 bg-primary-300 dark:bg-primary-500 rounded-full"></div>
          </div>
        </motion.div>

        {/* Database Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="absolute bottom-40 right-32">
          <div className="w-12 h-16 bg-gradient-to-b from-green-400 to-green-600 rounded-lg relative">
            <div className="absolute top-1 left-1 right-1 h-2 bg-green-300 dark:bg-green-500 rounded"></div>
            <div className="absolute top-4 left-1 right-1 h-2 bg-green-300 dark:bg-green-500 rounded"></div>
            <div className="absolute top-7 left-1 right-1 h-2 bg-green-300 dark:bg-green-500 rounded"></div>
          </div>
        </motion.div>

        {/* Cloud Icon */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="absolute top-40 left-1/4">
          <div className="w-20 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full relative">
            <div className="absolute -top-2 left-4 w-8 h-8 bg-blue-400 rounded-full"></div>
            <div className="absolute -top-1 left-8 w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="absolute -top-2 right-4 w-8 h-8 bg-blue-400 rounded-full"></div>
          </div>
        </motion.div>

        {/* Floating Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 3, delay: 0.5 }}
          className="absolute top-1/4 right-1/3">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"
              style={{ animationDelay: '0.5s' }}></div>
            <div
              className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"
              style={{ animationDelay: '1s' }}></div>
          </div>
        </motion.div>

        {/* Circuit Lines */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.1, scaleX: 1 }}
          transition={{ duration: 3, delay: 1 }}
          className="absolute top-1/2 left-10 w-32 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent"></motion.div>

        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 0.1, scaleY: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
          className="absolute top-1/3 right-10 w-px h-32 bg-gradient-to-b from-transparent via-primary-400 to-transparent"></motion.div>

        {/* TypeScript Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, delay: 3 }}
          className="absolute top-1/2 right-1/4">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
            TS
          </div>
        </motion.div>

        {/* Node.js Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, delay: 3.5 }}
          className="absolute bottom-1/3 left-1/3">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
            N
          </div>
        </motion.div>

        {/* Floating Brackets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 2, delay: 4 }}
          className="absolute top-1/4 left-1/3 text-primary-400 dark:text-primary-600 font-mono text-2xl">
          {'{'}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 2, delay: 4.5 }}
          className="absolute bottom-1/4 right-1/4 text-primary-400 dark:text-primary-600 font-mono text-2xl">
          {'}'}
        </motion.div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Photo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Placeholder for photo - replace with your actual photo */}
                {/* To use your actual photo, replace this div with: */}
                {/* <img src="/path/to/your/photo.jpg" alt="Raja Kalavala" className="w-full h-full object-cover rounded-full shadow-2xl" /> */}
                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-blue-500 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full"></div>
                </div>

                {/* Main Photo - positioned above border */}
                <img
                  src="/images/raja-kalavala.jpg"
                  alt="Raja Kalavala"
                  className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl z-10 scale-70"
                />

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-pulse z-20"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse z-20"
                  style={{ animationDelay: '0.5s' }}></div>
                <div
                  className="absolute top-1/2 -right-8 w-4 h-4 bg-yellow-500 rounded-full animate-pulse z-20"
                  style={{ animationDelay: '1s' }}></div>
              </motion.div>

              {/* Floating Tech Icons around photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-8 -left-8 w-12 h-12 bg-white dark:bg-secondary-800 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-blue-600 font-bold text-sm">⚛️</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute -bottom-8 -right-8 w-12 h-12 bg-white dark:bg-secondary-800 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-green-600 font-bold text-sm">📱</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute top-1/2 -left-12 w-10 h-10 bg-white dark:bg-secondary-800 rounded-full shadow-lg flex items-center justify-center">
                <div className="text-purple-600 font-bold text-xs">TS</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Raja Kalavala</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl text-secondary-600 dark:text-secondary-300 mb-8">
              Senior Software Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mb-12">
              With over 8 years of experience in web and mobile development, I
              specialize in creating scalable, user-centric applications that
              drive business growth.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <button className="btn-primary flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </button>

              <button className="btn-secondary flex items-center gap-2">
                <Mail size={20} />
                Get In Touch
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="grid grid-cols-3 gap-6 max-w-md">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-1">8+</div>
                <div className="text-sm text-secondary-600 dark:text-secondary-400">
                  Years
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-1">50+</div>
                <div className="text-sm text-secondary-600 dark:text-secondary-400">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-1">15+</div>
                <div className="text-sm text-secondary-600 dark:text-secondary-400">
                  Tech
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.button onClick={scrollToAbout} className="animate-bounce">
            <ChevronDown
              size={24}
              className="text-secondary-400 hover:text-primary-600 transition-colors duration-200"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
