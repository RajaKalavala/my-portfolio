import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-700' },
        { name: 'Next.js', level: 88, color: 'from-gray-600 to-gray-800' },
        { name: 'Vue.js', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'Tailwind CSS', level: 92, color: 'from-cyan-500 to-blue-500' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90, color: 'from-green-600 to-green-700' },
        { name: 'Python', level: 88, color: 'from-blue-600 to-blue-800' },
        { name: 'Express.js', level: 85, color: 'from-gray-600 to-gray-700' },
        { name: 'Django', level: 80, color: 'from-green-700 to-green-800' },
        { name: 'PostgreSQL', level: 85, color: 'from-blue-500 to-blue-600' },
      ],
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 88, color: 'from-blue-500 to-cyan-500' },
        { name: 'Flutter', level: 85, color: 'from-blue-600 to-blue-700' },
        { name: 'iOS (Swift)', level: 75, color: 'from-gray-600 to-gray-700' },
        {
          name: 'Android (Kotlin)',
          level: 78,
          color: 'from-green-600 to-green-700',
        },
      ],
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', level: 85, color: 'from-orange-500 to-orange-600' },
        { name: 'Docker', level: 80, color: 'from-blue-500 to-blue-600' },
        { name: 'Kubernetes', level: 75, color: 'from-blue-600 to-blue-700' },
        { name: 'CI/CD', level: 82, color: 'from-green-500 to-green-600' },
        {
          name: 'Terraform',
          level: 70,
          color: 'from-purple-500 to-purple-600',
        },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            A comprehensive set of skills developed over 8+ years of
            professional experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-secondary-700 rounded-lg shadow-lg p-6 card-hover">
              <h3 className="text-xl font-bold mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-secondary-800 dark:text-secondary-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-secondary-600 dark:text-secondary-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-secondary-200 dark:bg-secondary-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                        }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Additional <span className="gradient-text">Skills</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Git',
              'REST APIs',
              'GraphQL',
              'MongoDB',
              'Redis',
              'Elasticsearch',
              'Jest',
              'Cypress',
              'Webpack',
              'Vite',
              'Nginx',
              'Jenkins',
              'Agile',
              'Scrum',
              'JIRA',
              'Figma',
              'Adobe XD',
              'Sketch',
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                className="bg-secondary-100 dark:bg-secondary-600 px-4 py-2 rounded-lg text-center text-sm font-medium text-secondary-700 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200">
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
