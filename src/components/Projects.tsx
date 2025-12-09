import { ArrowRight } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Sales Prediction for Rossmann Stores',
      description: 'ML pipeline forecasting daily sales across 1,115 stores using ensemble methods (RF, DT, Ridge). Achieved RMSE = 1360.76 with 5-fold CV R² = 0.9706.',
      category: 'Machine Learning',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Random Forest'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      link: 'https://github.com/salmaanyaska-collab/salmaanyaska-collab.github.io',
      github: 'https://github.com/salmaanyaska-collab/salmaanyaska-collab.github.io'
    },
    {
      title: 'Product Clustering for Customer Segmentation',
      description: 'K-Means clustering on Rossmann data to identify 4 distinct product segments. Used PCA visualization and Silhouette Score validation.',
      category: 'Data Science',
      technologies: ['Python', 'K-Means', 'PCA', 'Seaborn'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      link: 'https://github.com/salmaanyaska-collab/salmaanyaska-collab.github.io',
      github: 'https://github.com/salmaanyaska-collab/salmaanyaska-collab.github.io'
    },
    {
      title: 'Logistics Anomaly Detection & Data Mining',
      description: 'End-to-end analysis of 10,999 logistics records. Applied Isolation Forest, FP-Growth association rules, and clustering to detect anomalies.',
      category: 'Data Mining',
      technologies: ['Python', 'Isolation Forest', 'FP-Growth', 'mlxtend'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      link: 'https://github.com/salmaanyaska-collab/salmaanyaska-collab.github.io',
      github: 'https://github.com/salmaanyaska-collab/salmaanyaska-collab.github.io'
    },
    {
      title: 'Albukhary Zero Hunger Platform',
      description: 'Full-stack donation management platform supporting beneficiary applications, donor contributions, volunteer engagement, and meal distribution tracking with secure authentication.',
      category: 'Social Impact',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
      link: 'https://github.com/salmaanyaska-collab/Albukhary_zero_hunger_platform-main',
      github: 'https://github.com/salmaanyaska-collab/Albukhary_zero_hunger_platform-main'
    },
    {
      title: 'Carbon Footprint Calculator',
      description: 'Full-stack web application for calculating and tracking personal carbon emissions. Features user authentication, real-time calculations, and environmental impact visualization.',
      category: 'Environmental Tech',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80',
      link: 'https://github.com/salmaanyaska-collab/carbon-footprint-project',
      github: 'https://github.com/salmaanyaska-collab/carbon-footprint-project'
    },
    {
      title: 'Car Rental Management System',
      description: 'Full-featured system with booking, inventory, and automated billing',
      category: 'Enterprise Software',
      technologies: ['Java', 'MySQL', 'JavaFX'],
      image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://github.com/salmaanyaska-collab/salmaanyaska-collab.github.io',
      github: 'https://github.com/salmaanyaska-collab/salmaanyaska-collab.github.io'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-100 dark:bg-zinc-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white dark:text-white">
                <p className="text-yellow-400 dark:text-yellow-400 text-sm font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-200 dark:text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-black/50 dark:bg-black/50 text-yellow-400 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black text-sm font-bold rounded hover:bg-yellow-500 transition-colors"
                >
                  VIEW PROJECT
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
