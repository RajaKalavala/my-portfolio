import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Smartphone, Globe, Users } from 'lucide-react'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Web Development',
      description:
        'Full-stack development with modern frameworks and cloud technologies',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile app development',
    },
    {
      icon: <Globe size={24} />,
      title: 'Cloud & DevOps',
      description: 'Deployment, CI/CD, and infrastructure management',
    },
    {
      icon: <Users size={24} />,
      title: 'Team Leadership',
      description: 'Leading development teams and mentoring junior developers',
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
            A passionate senior software engineer with a proven track record of
            delivering high-quality solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <h3 className="text-2xl font-bold mb-6">
              Senior Software Engineer with 8+ Years of Experience
            </h3>

            <div className="space-y-4 text-secondary-600 dark:text-secondary-400">
              <p>
                I am a dedicated software engineer with over 8 years of
                experience in web and mobile development. My journey in
                technology has been driven by a passion for creating innovative
                solutions that solve real-world problems.
              </p>

              <p>
                Throughout my career, I've worked on diverse projects ranging
                from enterprise web applications to mobile apps used by millions
                of users. I specialize in React, Node.js, Python, and mobile
                development with React Native and Flutter.
              </p>

              <p>
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest industry trends and best practices.
                My approach combines technical expertise with strong
                problem-solving skills to deliver exceptional user experiences.
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
                  raja@example.com
                </span>
              </div>
              <div>
                <span className="font-semibold text-secondary-800 dark:text-secondary-200">
                  Location:
                </span>
                <span className="ml-2 text-secondary-600 dark:text-secondary-400">
                  San Francisco, CA
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
