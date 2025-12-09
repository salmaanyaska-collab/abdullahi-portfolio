import { Award, Code2, Database, Globe } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'Machine Learning', icon: Code2 },
    { name: 'Data Analysis', icon: Database },
    { name: 'Data Mining', icon: Database },
    { name: 'Predictive Modeling', icon: Globe },
    { name: 'Feature Engineering', icon: Code2 },
    { name: 'Data Visualization', icon: Globe }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Abdullahi Yasin Hersi"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800'
              }}
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Data Science Specialist & ML Engineer</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a final-year Computer Science student specializing in <span className="text-blue-600 dark:text-yellow-400 font-semibold">Data Science</span> at 
              Albukhary International University (AIU), with a proven track record in building production-ready machine learning solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My expertise lies in developing end-to-end ML pipelines—from exploratory data analysis and feature engineering to model training, 
              validation, and deployment. I've successfully delivered projects achieving <span className="font-semibold text-blue-600 dark:text-yellow-400">97% accuracy</span> in 
              sales forecasting and identified critical business insights through advanced clustering and anomaly detection techniques.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in <span className="font-semibold">predictive modeling</span>, <span className="font-semibold">unsupervised learning</span>, 
              and <span className="font-semibold">data mining</span>, with hands-on experience in Python, Scikit-learn, and statistical analysis. 
              My work focuses on transforming complex datasets into actionable business intelligence for retail, logistics, and customer analytics domains.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently seeking <span className="font-semibold text-blue-600 dark:text-yellow-400">internship opportunities</span> where I can apply my 
              technical skills to solve real-world challenges and contribute to data-driven decision-making.
            </p>

            <div>
              <h4 className="text-xl font-semibold mb-4">Spoken Languages</h4>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: 'Somali', level: 'Native' },
                  { name: 'Arabic', level: 'Fluent' },
                  { name: 'English', level: 'Fluent' }
                ].map((lang) => (
                  <div key={lang.name} className="bg-blue-50 dark:bg-slate-800 p-4 rounded-xl text-center">
                    <p className="font-semibold">{lang.name}</p>
                    <p className="text-sm text-blue-600">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Core Skills</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <div key={skill.name} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center border border-gray-200 dark:border-slate-700">
                  <div className="inline-block p-4 bg-blue-600 dark:bg-yellow-400 rounded-xl mb-4">
                    <Icon size={32} className="text-white dark:text-black" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: 'Languages', items: ['Python', 'JavaScript', 'SQL'] },
              { category: 'ML/Data Science', items: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
              { category: 'Databases & Tools', items: ['MySQL', 'Git', 'Jupyter'] }
            ].map((tech) => (
              <div key={tech.category} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{tech.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span key={item} className="px-4 py-2 bg-blue-100 dark:bg-slate-700 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3">
              <Award className="text-blue-600 dark:text-yellow-400" size={36} />
              Certificates & Achievements
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-slate-700 dark:to-slate-600"></div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Certificate {i}</h4>
                  <p className="text-gray-600 dark:text-gray-400">Issuing Organization</p>
                  <p className="text-sm text-blue-600 dark:text-yellow-400 font-medium">Month Year</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
