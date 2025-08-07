import './App.css';
import image from './assets/image.jpg';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='min-h-screen bg-dark-bg text-white font-roboto'>
      {/* Navigation */}
      <nav className='glass sticky top-0 z-50 backdrop-blur-md'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='flex justify-between items-center py-4'>
            <div className='text-xl font-bold text-white font-poppins'>
              Vishnu Paturu
            </div>
            <div className='hidden md:flex space-x-8'>
              <a
                href='#home'
                className='text-gray-300 hover:text-accent-cobalt transition-colors duration-300 font-medium'
              >
                Home
              </a>
              <a
                href='#about'
                className='text-gray-300 hover:text-accent-cobalt transition-colors duration-300 font-medium'
              >
                About
              </a>
              <a
                href='#experience'
                className='text-gray-300 hover:text-accent-cobalt transition-colors duration-300 font-medium'
              >
                Experience
              </a>
              <a
                href='#education'
                className='text-gray-300 hover:text-accent-cobalt transition-colors duration-300 font-medium'
              >
                Education
              </a>
              <a
                href='#projects'
                className='text-gray-300 hover:text-accent-cobalt transition-colors duration-300 font-medium'
              >
                Projects
              </a>
              <a
                href='#contact'
                className='text-gray-300 hover:text-accent-cobalt transition-colors duration-300 font-medium'
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id='home' className='py-20 px-4'>
        <div className='max-w-5xl mx-auto text-center animate-fade-in'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 font-poppins'>
            Hi, I'm <span className='text-accent-cobalt'>Vishnu</span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 font-inter leading-relaxed'>
            Full-Stack Engineer with 5+ years of experience building scalable
            web applications
          </p>
          <div className='flex justify-center space-x-4'>
            <button
              onClick={() => scrollToSection('projects')}
              className='bg-accent-cobalt text-white px-8 py-3 rounded-lg hover:bg-accent-teal transition-all duration-300 font-medium cursor-pointer shadow-lg hover:shadow-xl'
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className='border-2 border-accent-cobalt text-accent-cobalt px-8 py-3 rounded-lg hover:bg-accent-cobalt hover:text-white transition-all duration-300 font-medium cursor-pointer'
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 px-4 bg-dark-surface'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-12 font-poppins animate-slide-up'>
            About Me
          </h2>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='animate-slide-up'>
              <p className='text-lg text-gray-300 leading-relaxed mb-6 font-inter'>
                I'm a passionate Full-Stack Engineer with 5+ years of experience
                building scalable web applications. I specialize in React,
                Node.js, and modern web technologies, with a proven track record
                of delivering high-performance applications that drive business
                value.
              </p>
              <div className='grid grid-cols-2 gap-4'>
                <div className='glass-card p-4 rounded-lg'>
                  <h3 className='text-accent-teal font-semibold mb-2 font-poppins'>
                    Frontend
                  </h3>
                  <p className='text-sm text-gray-400 font-inter'>
                    React, TypeScript, Next.js
                  </p>
                </div>
                <div className='glass-card p-4 rounded-lg'>
                  <h3 className='text-accent-amber font-semibold mb-2 font-poppins'>
                    Backend
                  </h3>
                  <p className='text-sm text-gray-400 font-inter'>
                    Node.js, Python, Java
                  </p>
                </div>
                <div className='glass-card p-4 rounded-lg'>
                  <h3 className='text-accent-purple font-semibold mb-2 font-poppins'>
                    Cloud
                  </h3>
                  <p className='text-sm text-gray-400 font-inter'>
                    AWS, Docker, CI/CD
                  </p>
                </div>
                <div className='glass-card p-4 rounded-lg'>
                  <h3 className='text-accent-cobalt font-semibold mb-2 font-poppins'>
                    Testing
                  </h3>
                  <p className='text-sm text-gray-400 font-inter'>
                    Jest, Cypress, TDD
                  </p>
                </div>
              </div>
            </div>
            <div className='flex justify-center animate-slide-up'>
              <div className='neumorph p-4 rounded-lg'>
                <img
                  src={image}
                  alt='Vishnu Paturu'
                  className='w-64 h-64 rounded-lg object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id='experience' className='py-20 px-4 bg-dark-bg'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-12 font-poppins animate-slide-up'>
            Experience
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {/* Outlier AI */}
            <div className='glass-card p-6 rounded-lg animate-slide-up hover:shadow-xl transition-all duration-300'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-xl font-semibold text-white font-poppins'>
                    Freelance Software Engineer
                  </h3>
                  <p className='text-accent-cobalt font-medium'>Outlier AI</p>
                </div>
                <span className='text-gray-400 text-sm'>
                  Mar 2025 – Present
                </span>
              </div>
              <ul className='text-gray-300 space-y-2 text-sm font-inter'>
                <li>• React dashboard for AI test visualization</li>
                <li>• Node.js backend services for job queues</li>
                <li>• 200+ algorithmic solutions in JS/Python</li>
                <li>• 40+ Docker environments</li>
              </ul>
            </div>

            {/* Happiest Minds */}
            <div className='glass-card p-6 rounded-lg animate-slide-up hover:shadow-xl transition-all duration-300'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-xl font-semibold text-white font-poppins'>
                    Software Engineer
                  </h3>
                  <p className='text-accent-teal font-medium'>
                    Happiest Minds Technologies
                  </p>
                </div>
                <span className='text-gray-400 text-sm'>
                  Oct 2021 – Dec 2022
                </span>
              </div>
              <ul className='text-gray-300 space-y-2 text-sm font-inter'>
                <li>• Next.js project tracking platform</li>
                <li>• React form builder with Formik/Yup</li>
                <li>• Performance optimization</li>
                <li>• Jest testing (28% coverage increase)</li>
              </ul>
            </div>

            {/* VRIZE */}
            <div className='glass-card p-6 rounded-lg animate-slide-up hover:shadow-xl transition-all duration-300'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-xl font-semibold text-white font-poppins'>
                    Software Engineer
                  </h3>
                  <p className='text-accent-amber font-medium'>VRIZE</p>
                </div>
                <span className='text-gray-400 text-sm'>
                  Mar 2021 – Sep 2021
                </span>
              </div>
              <ul className='text-gray-300 space-y-2 text-sm font-inter'>
                <li>• React menu components for Tropical Smoothie Café</li>
                <li>• OAuth integration for Spoonflower</li>
              </ul>
            </div>

            {/* LTIMindtree */}
            <div className='glass-card p-6 rounded-lg animate-slide-up hover:shadow-xl transition-all duration-300'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-xl font-semibold text-white font-poppins'>
                    Software Engineer
                  </h3>
                  <p className='text-accent-purple font-medium'>LTIMindtree</p>
                </div>
                <span className='text-gray-400 text-sm'>
                  Feb 2018 – Mar 2021
                </span>
              </div>
              <ul className='text-gray-300 space-y-2 text-sm font-inter'>
                <li>• Angular components with AG Grid</li>
                <li>• Micro-frontend architecture migration</li>
                <li>• Java microservices for KPI aggregation</li>
                <li>• Performance optimization and mentoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id='education' className='py-20 px-4 bg-dark-surface'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-12 font-poppins animate-slide-up'>
            Education
          </h2>
          <div className='glass-card p-8 rounded-lg animate-slide-up hover:shadow-xl transition-all duration-300'>
            <div className='flex justify-between items-start mb-6'>
              <div>
                <h3 className='text-2xl font-semibold text-white font-poppins mb-2'>
                  MS in Intelligent Systems Engineering
                </h3>
                <p className='text-accent-cobalt font-medium text-lg'>
                  Indiana University Bloomington
                </p>
              </div>
              <span className='text-gray-400 text-sm'>Jan 2023 – Dec 2024</span>
            </div>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <h4 className='text-accent-teal font-semibold mb-3 font-poppins'>
                  Focus Areas
                </h4>
                <ul className='text-gray-300 space-y-2 text-sm font-inter'>
                  <li>• Artificial Intelligence & Machine Learning</li>
                  <li>• Intelligent Systems Design</li>
                  <li>• Data Science & Analytics</li>
                  <li>• Advanced Software Engineering</li>
                </ul>
              </div>
              <div>
                <h4 className='text-accent-amber font-semibold mb-3 font-poppins'>
                  Key Achievements
                </h4>
                <ul className='text-gray-300 space-y-2 text-sm font-inter'>
                  <li>• Advanced coursework in AI/ML</li>
                  <li>• Research in intelligent systems</li>
                  <li>• Practical applications development</li>
                  <li>• Cross-disciplinary learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20 px-4 bg-dark-bg'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-12 font-poppins animate-slide-up'>
            Featured Projects
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {/* Expense Tracker */}
            <div className='glass-card overflow-hidden rounded-lg animate-slide-up hover:shadow-xl transition-all duration-300 group'>
              <div className='bg-gradient-to-br from-accent-cobalt to-accent-teal h-48 flex items-center justify-center'>
                <div className='text-white text-center'>
                  <div className='text-4xl mb-2'>💰</div>
                  <div className='text-lg font-semibold font-poppins'>
                    Expense Tracker
                  </div>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-white mb-2 font-poppins'>
                  Expense Tracker
                </h3>
                <p className='text-gray-300 mb-4 text-sm font-inter'>
                  Full-stack finance app using React, Django, and Chart.js for
                  interactive data visualization
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  <span className='bg-accent-cobalt bg-opacity-20 text-accent-cobalt px-2 py-1 rounded text-xs'>
                    React
                  </span>
                  <span className='bg-accent-teal bg-opacity-20 text-accent-teal px-2 py-1 rounded text-xs'>
                    Django
                  </span>
                  <span className='bg-accent-amber bg-opacity-20 text-accent-amber px-2 py-1 rounded text-xs'>
                    Chart.js
                  </span>
                </div>
                <a
                  href='https://github.com/vistej/expense-tracker'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-accent-cobalt hover:text-accent-teal transition-colors font-medium text-sm'
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* Vocab */}
            <div className='glass-card overflow-hidden rounded-lg animate-slide-up hover:shadow-xl transition-all duration-300 group'>
              <div className='bg-gradient-to-br from-accent-teal to-accent-purple h-48 flex items-center justify-center'>
                <div className='text-white text-center'>
                  <div className='text-4xl mb-2'>📚</div>
                  <div className='text-lg font-semibold font-poppins'>
                    Vocab
                  </div>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-white mb-2 font-poppins'>
                  Vocab
                </h3>
                <p className='text-gray-300 mb-4 text-sm font-inter'>
                  Mobile-first vocabulary PWA using React with IndexedDB,
                  gesture navigation, and offline sync
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  <span className='bg-accent-cobalt bg-opacity-20 text-accent-cobalt px-2 py-1 rounded text-xs'>
                    React
                  </span>
                  <span className='bg-accent-purple bg-opacity-20 text-accent-purple px-2 py-1 rounded text-xs'>
                    PWA
                  </span>
                  <span className='bg-accent-amber bg-opacity-20 text-accent-amber px-2 py-1 rounded text-xs'>
                    IndexedDB
                  </span>
                </div>
                <a
                  href='https://github.com/vistej/vocab'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-accent-cobalt hover:text-accent-teal transition-colors font-medium text-sm'
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* Sudoku */}
            <div className='glass-card overflow-hidden rounded-lg animate-slide-up hover:shadow-xl transition-all duration-300 group'>
              <div className='bg-gradient-to-br from-accent-purple to-accent-amber h-48 flex items-center justify-center'>
                <div className='text-white text-center'>
                  <div className='text-4xl mb-2'>🧩</div>
                  <div className='text-lg font-semibold font-poppins'>
                    Sudoku Game
                  </div>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-white mb-2 font-poppins'>
                  Sudoku Game
                </h3>
                <p className='text-gray-300 mb-4 text-sm font-inter'>
                  Puzzle app built in React with constraint-based difficulty,
                  keyboard input, and real-time validation
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  <span className='bg-accent-cobalt bg-opacity-20 text-accent-cobalt px-2 py-1 rounded text-xs'>
                    React
                  </span>
                  <span className='bg-accent-teal bg-opacity-20 text-accent-teal px-2 py-1 rounded text-xs'>
                    Game Logic
                  </span>
                  <span className='bg-accent-amber bg-opacity-20 text-accent-amber px-2 py-1 rounded text-xs'>
                    Validation
                  </span>
                </div>
                <a
                  href='https://github.com/vistej/sudoku'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-accent-cobalt hover:text-accent-teal transition-colors font-medium text-sm'
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 px-4 bg-dark-surface'>
        <div className='max-w-4xl mx-auto text-center animate-slide-up'>
          <h2 className='text-4xl font-bold mb-12 font-poppins'>
            Get In Touch
          </h2>
          <p className='text-lg text-gray-300 mb-8 font-inter'>
            I'm always interested in new opportunities and exciting projects.
          </p>
          <div className='grid md:grid-cols-3 gap-6'>
            <a
              href='mailto:vishnu.paturu@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='neumorph p-6 rounded-lg hover:shadow-xl transition-all duration-300 group'
            >
              <svg
                className='w-12 h-12 mx-auto mb-4 text-accent-cobalt'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
              </svg>
              <h3 className='text-xl font-semibold mb-2 font-poppins'>Email</h3>
              <p className='text-gray-400 text-sm font-inter'>
                vishnu.paturu@gmail.com
              </p>
            </a>
            <a
              href='https://github.com/vistej'
              target='_blank'
              rel='noopener noreferrer'
              className='neumorph p-6 rounded-lg hover:shadow-xl transition-all duration-300 group'
            >
              <svg
                className='w-12 h-12 mx-auto mb-4 text-accent-cobalt'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                  clipRule='evenodd'
                />
              </svg>
              <h3 className='text-xl font-semibold mb-2 font-poppins'>
                GitHub
              </h3>
              <p className='text-gray-400 text-sm font-inter'>
                github.com/vistej
              </p>
            </a>
            <a
              href='https://linkedin.com/in/vistej'
              target='_blank'
              rel='noopener noreferrer'
              className='neumorph p-6 rounded-lg hover:shadow-xl transition-all duration-300 group'
            >
              <svg
                className='w-12 h-12 mx-auto mb-4 text-accent-cobalt'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                  clipRule='evenodd'
                />
              </svg>
              <h3 className='text-xl font-semibold mb-2 font-poppins'>
                LinkedIn
              </h3>
              <p className='text-gray-400 text-sm font-inter'>
                linkedin.com/in/vistej
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='glass py-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <p className='text-gray-400 font-inter'>
            &copy; 2024 Vishnu Paturu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
