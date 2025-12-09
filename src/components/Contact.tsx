import { Mail, Send, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Let's Build Something</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Got a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Illustration Side */}
          <div className="relative">
            <div className="bg-yellow-400 rounded-2xl p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border-4 border-black rounded-full"></div>
              <div className="absolute bottom-20 left-8">
                <svg width="100" height="100" viewBox="0 0 100 100" className="text-black">
                  <path d="M10,50 Q30,10 50,50 T90,50" stroke="currentColor" strokeWidth="3" fill="none"/>
                </svg>
              </div>
              
              {/* Main illustration placeholder */}
              <div className="relative z-10 text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
                  <div className="text-6xl">💡</div>
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Let's Build Something</h3>
                <p className="text-black/80">Transform your ideas into reality</p>
              </div>

              {/* Bottom decoration */}
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-pink-500 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-zinc-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-zinc-700 rounded focus:border-blue-500 dark:focus:border-yellow-400 outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">EMAIL ADDRESS</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-zinc-700 rounded focus:border-blue-500 dark:focus:border-yellow-400 outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-900 dark:text-white font-semibold mb-2">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-zinc-700 rounded focus:border-blue-500 dark:focus:border-yellow-400 outline-none resize-none transition-colors"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 dark:bg-yellow-400 text-white dark:text-black px-8 py-4 rounded font-bold hover:bg-blue-700 dark:hover:bg-yellow-300 transition-all shadow-lg"
              >
                <Send size={20} />
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold text-xl mb-4">Abdullahi Yasin Hersi</h4>
              <p className="text-gray-400">Data Science & Computer Science Student</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">QUICK LINKS</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-yellow-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">CONNECT</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/abdullahiyasin" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/abdullahiyasin" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:your.email@example.com" 
                  className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors"
                  title="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center py-6 border-t border-zinc-800">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Abdullahi Yasin Hersi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact
