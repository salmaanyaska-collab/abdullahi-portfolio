import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:bg-black relative overflow-hidden">
      {/* Background Image with Overlay - Only visible in dark mode */}
      <div className="absolute inset-0 z-0 dark:block hidden">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Small Label */}
          <div className="inline-block">
            <span className="px-4 py-2 bg-yellow-400 text-black text-sm font-bold rounded">
              PORTFOLIO
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white leading-tight">
            My Work
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Data Science & Computer Science Student
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-300 transition-all inline-flex items-center gap-2"
            >
              VIEW MY PROJECTS
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
