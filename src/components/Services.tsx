import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Smartphone, Globe, Users, Database, Zap } from 'lucide-react'

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description:
        'Full-stack web applications with modern frameworks and responsive design. From simple landing pages to complex enterprise solutions.',
      features: [
        'React, Vue.js, Angular Development',
        'Node.js & Python Backend',
        'RESTful APIs & GraphQL',
        'Progressive Web Apps (PWA)',
        'Performance Optimization',
        'SEO & Accessibility',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android. Focus on performance, user experience, and scalability.',
      features: [
        'React Native Development',
        'Flutter Cross-platform Apps',
        'iOS (Swift) & Android (Kotlin)',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Globe size={32} />,
      title: 'Cloud & DevOps',
      description:
        'Cloud infrastructure setup, CI/CD pipelines, and deployment automation. Ensuring scalable and reliable applications.',
      features: [
        'AWS, Azure, Google Cloud',
        'Docker & Kubernetes',
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Monitoring & Logging',
        'Security Best Practices',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Users size={32} />,
      title: 'Technical Consulting',
      description:
        'Strategic technology consulting, architecture design, and technical leadership for growing businesses.',
      features: [
        'System Architecture Design',
        'Technology Stack Selection',
        'Code Review & Audits',
        'Performance Optimization',
        'Security Assessments',
        'Team Mentoring',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Database size={32} />,
      title: 'Database Design',
      description:
        'Database architecture, optimization, and management. From simple CRUD operations to complex data analytics.',
      features: [
        'SQL & NoSQL Databases',
        'Database Optimization',
        'Data Migration',
        'Backup & Recovery',
        'Data Analytics',
        'Real-time Data Processing',
      ],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance Optimization',
      description:
        'Application performance tuning, load testing, and optimization to ensure fast and reliable user experiences.',
      features: [
        'Frontend Optimization',
        'Backend Performance Tuning',
        'Database Query Optimization',
        'CDN & Caching Strategies',
        'Load Testing',
        'Monitoring & Analytics',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  return (
    <section
      id="services"
      className="section-padding bg-secondary-50 dark:bg-secondary-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Comprehensive software development services tailored to your
            business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-secondary-700 rounded-lg shadow-lg p-6 card-hover">
              {/* Service Icon */}
              <div
                className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6`}>
                {service.icon}
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
                {service.title}
              </h3>

              <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start text-sm text-secondary-600 dark:text-secondary-400">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16">
          <div className="bg-white dark:bg-secondary-700 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Let's discuss your requirements and create something amazing
              together. I'm here to help bring your ideas to life with
              cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Get Free Consultation</button>
              <button className="btn-secondary">View Portfolio</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
