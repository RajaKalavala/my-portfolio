import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      name: 'Angular',
      level: 90,
      color: 'from-red-500 to-red-600',
      icon: '⚡',
    },
    {
      name: 'JavaScript/TypeScript',
      level: 95,
      color: 'from-yellow-500 to-yellow-600',
      icon: '🟡',
    },
    {
      name: 'HTML',
      level: 90,
      color: 'from-orange-500 to-orange-600',
      icon: '🌐',
    },
    {
      name: 'CSS',
      level: 85,
      color: 'from-blue-500 to-blue-600',
      icon: '🎨',
    },
    {
      name: 'C#',
      level: 88,
      color: 'from-purple-500 to-purple-600',
      icon: '💎',
    },
    {
      name: 'ASP.NET MVC',
      level: 85,
      color: 'from-green-500 to-green-600',
      icon: '🟢',
    },
    {
      name: 'Web API',
      level: 90,
      color: 'from-indigo-500 to-indigo-600',
      icon: '🔗',
    },
    {
      name: 'Microsoft SQL Server',
      level: 82,
      color: 'from-teal-500 to-teal-600',
      icon: '🗄️',
    },
  ]

  return (
    <section
      id="skills"
      className="section-padding bg-white dark:bg-secondary-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            My expertise in modern web technologies and enterprise development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative">
              <div className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-secondary-200 dark:border-secondary-700">
                {/* Skill Icon */}
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                    </motion.div>
                  </div>

                  {/* Percentage */}
                  <div className="text-center mt-2">
                    <span className="text-sm font-medium text-secondary-600 dark:text-secondary-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-secondary-800 dark:to-secondary-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-secondary-900 dark:text-white">
              Full Stack Expertise
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Specialized in Angular ecosystem, .NET framework, and modern web
              development. Experienced in building scalable applications with
              clean architecture and best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
