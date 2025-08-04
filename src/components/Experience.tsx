import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      company: 'DELL TECHNOLOGIES',
      position: 'Senior Software Engineer',
      period: 'July 2022 - Present',
      location: 'Bengaluru, India',
      description:
        'Working as a lead developer in AngularJS to Angular migration server management project. Leading technical initiatives and focusing on product quality.',
      achievements: [
        'Led AngularJS to Angular migration project with focus on server management',
        'Designed project architecture from scratch by gathering requirements and analyzing efforts',
        'Established build pipeline, set up project infrastructure and created test architecture for Angular application',
        'Led team by providing technical support and focusing on quality-oriented programming',
        'Introduced Cypress test framework to the team by creating test infrastructure and conducting deep dive sessions',
      ],
      technologies: [
        'Angular',
        'HTML/CSS',
        'Web Components',
        'Cypress',
        'AngularJS',
      ],
    },
    {
      company: 'SIEMENS HEALTHINEERS',
      position: 'Design And Development Engineer',
      period: 'March 2019 – July 2022',
      location: 'Bengaluru, India',
      description:
        'Full stack developer for a team responsible for developing and delivering two major innovative healthcare solutions for CT Scanners.',
      achievements: [
        'Developed and delivered two major innovative healthcare solutions for CT Scanners',
        'Played role of team Integrator and responsible for regular FI and RI using Azure DevOps build pipeline',
        'Studied, evaluated, and prototyped solution to enhance Angular build pipeline which increased efficiency by 40%',
        'Got exposure in cloud computing through Azure DevOps implementation',
        'Mentored two interns for their Machine Learning based AI Chatbot project',
      ],
      technologies: [
        '.NET Framework',
        'C#',
        'ASP.NET',
        'Angular',
        'HTML/CSS',
        'Azure DevOps',
      ],
    },
    {
      company: 'HAPPIEST MINDS TECHNOLOGIES',
      position: 'Software Engineer',
      period: 'Oct 2016 – Feb 2019',
      location: 'Bengaluru, India',
      description:
        'Worked in Agile methodology for E-Commerce website development and Sitefinity CMS customization.',
      achievements: [
        'Worked in Agile methodology for E-Commerce website and delivered accepted functionality in each sprint',
        'Played key role in feature implementation and enhancement, code refactoring, and defect fixing',
        'Worked in Sitefinity CMS customization, including custom modules and custom functionality implementation',
        'Created POC for the client on the conversion of Sitefinity Ecommerce common codebase from AngularJS to Angular 5',
        'Implemented custom functionality using JavaScript and SQL server',
      ],
      technologies: [
        'JavaScript',
        'SQL Server',
        'Sitefinity CMS',
        'AngularJS',
        'Angular 5',
        'HTML/CSS',
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="section-padding bg-secondary-50 dark:bg-secondary-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            A journey through my professional career, showcasing growth and
            achievements in software development and team leadership
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-primary-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-secondary-800 z-10"></div>

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? 'md:mr-auto md:pr-8'
                      : 'md:ml-auto md:pl-8'
                  }`}>
                  <div className="bg-white dark:bg-secondary-700 rounded-lg shadow-lg p-6 card-hover">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center text-primary-600 dark:text-primary-400 mb-2">
                          <Building size={16} className="mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-secondary-600 dark:text-secondary-400 text-sm mb-1">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-secondary-600 dark:text-secondary-400 text-sm">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-secondary-800 dark:text-secondary-200 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map(
                          (achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="text-sm text-secondary-600 dark:text-secondary-400 flex items-start">
                              <span className="text-primary-500 mr-2">•</span>
                              {achievement}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-secondary-800 dark:text-secondary-200 mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
