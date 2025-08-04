import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'AI Chat Assistant',
      description:
        'An intelligent chatbot powered by machine learning for customer support and automated responses.',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'Fitness Tracking App',
      description:
        'A comprehensive fitness tracking mobile app with workout plans, progress analytics, and social features.',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase', 'Google Fit API', 'Charts'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Real Estate Dashboard',
      description:
        'A data visualization dashboard for real estate analytics with interactive charts and property management.',
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['Vue.js', 'D3.js', 'Express.js', 'PostgreSQL', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Food Delivery App',
      description:
        'A food delivery platform with restaurant listings, order tracking, and payment integration.',
      image:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop',
      category: 'mobile',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'featured', label: 'Featured' },
  ]

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'featured') return project.featured
    return project.category === activeFilter
  })

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating technical skills and
            creative problem-solving
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900'
              }`}>
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="bg-white dark:bg-secondary-700 rounded-lg shadow-lg overflow-hidden card-hover">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="bg-white text-secondary-900 p-2 rounded-full hover:bg-primary-100 transition-colors duration-200">
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-white text-secondary-900 p-2 rounded-full hover:bg-primary-100 transition-colors duration-200">
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary-100 dark:bg-secondary-600 text-secondary-700 dark:text-secondary-300 text-xs rounded font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                    <Eye size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 bg-secondary-100 dark:bg-secondary-600 hover:bg-secondary-200 dark:hover:bg-secondary-500 text-secondary-700 dark:text-secondary-300 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12">
          <button className="btn-primary">View All Projects</button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
