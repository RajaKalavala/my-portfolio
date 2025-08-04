import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Smartphone, Globe, Users, Database, Zap } from 'lucide-react'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Full Stack Development',
      description:
        'End-to-end web and mobile application development with modern technologies',
    },
    {
      icon: <Database size={24} />,
      title: 'Healthcare Solutions',
      description:
        'Designing and developing quality-oriented healthcare applications',
    },
    {
      icon: <Globe size={24} />,
      title: 'E-Commerce & Server Apps',
      description:
        'Robust server applications and e-commerce platform development',
    },
    {
      icon: <Zap size={24} />,
      title: 'Problem Solving',
      description:
        'Strong analytical approach with excellent problem-solving skills',
    },
  ]

  return (
    <section
      id="about"
      className="section-padding bg-secondary-50 dark:bg-secondary-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            An efficient Full Stack Developer with a proven track record in
            healthcare, e-commerce, and server application development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <h3 className="text-2xl font-bold mb-6">
              Efficient Full Stack Developer with 8+ Years of Experience
            </h3>

            <div className="space-y-4 text-secondary-600 dark:text-secondary-400">
              <p>
                I am an efficient Full Stack Developer with over 8 years of
                experience in developing end-to-end Web and Mobile-based
                applications. My expertise spans across both backend and
                frontend technologies, enabling me to deliver comprehensive
                solutions that meet complex business requirements.
              </p>

              <p>
                Throughout my career, I've built a strong history in designing
                and developing quality-oriented applications across diverse
                domains including Healthcare, E-Commerce, and Server
                applications. This experience has given me deep insights into
                industry-specific challenges and regulatory requirements.
              </p>

              <p>
                My approach combines technical expertise with a strong
                analytical mindset and problem-solving skills. I believe in
                writing clean, maintainable code and staying current with
                emerging technologies to deliver exceptional user experiences
                and robust backend systems.
              </p>
            </div>

            {/* Personal Info */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <span className="font-semibold text-secondary-800 dark:text-secondary-200">
                  Name:
                </span>
                <span className="ml-2 text-secondary-600 dark:text-secondary-400">
                  Raja Kalavala
                </span>
              </div>
              <div>
                <span className="font-semibold text-secondary-800 dark:text-secondary-200">
                  Email:
                </span>
                <span className="ml-2 text-secondary-600 dark:text-secondary-400">
                  rajakalavala55@gmail.com
                </span>
              </div>
              <div>
                <span className="font-semibold text-secondary-800 dark:text-secondary-200">
                  Location:
                </span>
                <span className="ml-2 text-secondary-600 dark:text-secondary-400">
                  Bengaluru, India
                </span>
              </div>
              <div>
                <span className="font-semibold text-secondary-800 dark:text-secondary-200">
                  Experience:
                </span>
                <span className="ml-2 text-secondary-600 dark:text-secondary-400">
                  8+ Years
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-secondary-700 p-6 rounded-lg shadow-lg card-hover">
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  {highlight.icon}
                </div>
                <h4 className="font-semibold text-lg mb-2">
                  {highlight.title}
                </h4>
                <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
