import React, { useState, useEffect } from 'react';
import type { EducationItem, Skill, Project, Experience, Certification, Achievement, Position, CodingProfile } from './types';
import { 
    PROFILE_PHOTO_BASE64,
    EDUCATION_DATA, 
    SKILLS_DATA, 
    PROJECTS_DATA, 
    EXPERIENCE_DATA, 
    CERTIFICATIONS_DATA,
    ACHIEVEMENTS_DATA,
    POSITIONS_DATA,
    CODING_PROFILES_DATA,
    PhoneIcon,
    EmailIcon,
    LinkedInIcon,
    GithubIcon
} from './constants';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Accomplishments', href: '#accomplishments' },
    { name: 'Positions', href: '#positions-of-responsibility' },
    { name: 'Coding Profiles', href: '#coding-profiles' },
  { name: 'Contact', href: '#contact' },
];

// Reusable Section Component
interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}
const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400 tracking-wider uppercase">
      {title}
    </h2>
    {children}
  </section>
);

// Header Component
const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <nav className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-4">

                <div className="flex items-center justify-between h-10">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-white tracking-tight">MVG</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
             <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-900/80 backdrop-blur-sm`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};


// Hero Component
const Hero: React.FC = () => (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-5xl mx-auto">
             <img 
  className="w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-indigo-500/50 shadow-2xl transform transition-transform duration-500 hover:scale-105" 
  src={PROFILE_PHOTO_BASE64} 
  alt="Valli Gayathri Mullapudi" 
/>

            <div className="text-center lg:text-left">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                    Valli Gayathri Mullapudi
                </h1>
                <div className="mt-8 flex justify-center lg:justify-start space-x-6">
                    <a href="mailto:valligayathrimullapudi@gmail.com" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="Email"><EmailIcon /></a>
                    <a href="https://www.linkedin.com/in/valli-gayathri-6aa03a257" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="LinkedIn"><LinkedInIcon /></a>
                    <a href="https://github.com/ValliGayathri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="Github"><GithubIcon /></a>
                    <a href="tel:6302166136" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="Phone"><PhoneIcon /></a>
                </div>
            </div>
        </div>
    </section>
);


// About Component
const About: React.FC = () => (
  <Section id="about" title="About Me">
    <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
      I am a passionate and driven Computer Science student aspiring to build a successful career by contributing my skills. As an organized and dependable candidate, I excel at managing teamwork and approach challenges with a positive attitude. I am eager to apply my knowledge in real-world scenarios and continuously learn and grow in the tech industry.
    </p>
  </Section>
);

// Skills Component
const Skills: React.FC = () => (
  <Section id="skills" title="Skills">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {SKILLS_DATA.map((skillGroup) => (
        <div key={skillGroup.category} className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((item) => (
              <span key={item} className="bg-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

// Projects Component
const Projects: React.FC = () => (
    <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map((project) => (
                <a 
                    key={project.title}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col hover:scale-105 hover:shadow-indigo-500/20 transition-all duration-300"
                >
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-sm font-medium text-indigo-400 mb-3">{project.role}</p>
                    <p className="text-gray-400 flex-grow">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                             <span key={tech} className="bg-gray-700 text-gray-300 text-xs font-mono px-2 py-1 rounded">
                                {tech}
                            </span>
                        ))}
                    </div>
                </a>
            ))}
        </div>
    </Section>
);

// Experience Component
const Experience: React.FC = () => (
    <Section id="experience" title="Experience">
        <div className="space-y-8">
            {EXPERIENCE_DATA.map((exp, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                            <p className="text-md text-gray-400">{exp.company}</p>
                        </div>
                        <span className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{exp.period}</span>
                    </div>
                    <div className="mt-4 border-t border-gray-700 pt-4">
                        <h4 className="font-semibold text-indigo-400">{exp.projectName} - <span className="italic text-gray-300">{exp.projectRole}</span></h4>
                        <p className="text-gray-300 mt-2">{exp.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

// Education Component
const Education: React.FC = () => (
    <Section id="education" title="Education">
        <div className="relative border-l-2 border-indigo-500 ml-4 pl-8 space-y-10">
            {EDUCATION_DATA.map((edu, index) => (
                <div key={index} className="relative">
                    <div className="absolute -left-10 top-1 w-4 h-4 bg-indigo-500 rounded-full border-4 border-gray-900"></div>
                    <p className="text-sm font-medium text-gray-400 -mt-1 mb-1">{edu.period}</p>
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <p className="text-gray-400">{edu.institution}</p>
                    {edu.details && <p className="text-gray-400 text-sm">{edu.details}</p>}
                    <p className="text-indigo-400 font-semibold mt-1">{edu.score}</p>
                </div>
            ))}
        </div>
    </Section>
);

// Combined Certifications & Achievements Component
const Accomplishments: React.FC = () => (
    <Section id="accomplishments" title="Accomplishments">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">Certifications</h3>
                <ul className="space-y-4">
                    {CERTIFICATIONS_DATA.map((cert) => (
                        <li key={cert.name} className="bg-gray-800 p-4 rounded-lg flex items-start">
                            <span className="text-indigo-400 mr-3 mt-1">&#10022;</span>
                            <div>
                                <p className="font-semibold text-gray-200">{cert.name}</p>
                                <p className="text-sm text-gray-400">{cert.issuer} - {cert.date}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">Achievements</h3>
                <ul className="space-y-4">
                    {ACHIEVEMENTS_DATA.map((ach) => (
                         <li key={ach.description} className="bg-gray-800 p-4 rounded-lg flex items-start">
                            <span className="text-indigo-400 mr-3 mt-1">&#10022;</span>
                            <span className="text-gray-300">{ach.description} ({ach.year})</span>
                         </li>
                    ))}
                </ul>
            </div>
        </div>
    </Section>
);

// Positions of Responsibility Component
const PositionsOfResponsibility: React.FC = () => (
    <Section id="positions-of-responsibility" title="Positions of Responsibility">
         <div className="flex flex-col md:flex-row justify-center items-center gap-8">
             {POSITIONS_DATA.map((pos) => (
                <div key={pos.role} className="bg-gray-800 p-6 rounded-lg font-semibold text-gray-200 w-full md:w-auto md:min-w-[300px] shadow-lg hover:shadow-indigo-500/20 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <span className="text-indigo-400 mr-3 text-xl">&#10022;</span>
                    <span>{pos.role}</span>
                </div>
             ))}
        </div>
    </Section>
);

// CodingProfiles Component
const CodingProfiles: React.FC = () => (
    <Section id="coding-profiles" title="Coding Profiles">
        <div className="flex justify-center items-center flex-wrap gap-8">
            {CODING_PROFILES_DATA.map((profile) => (
                <a key={profile.name} href={profile.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-400 hover:text-indigo-400 transition-colors group">
                    <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-indigo-900/50 transition-colors">
                        {profile.icon}
                    </div>
                    <span className="mt-2 text-sm font-medium">{profile.name}</span>
                </a>
            ))}
        </div>
    </Section>
);

// New Footer Component
const NewFooter: React.FC = () => (
    <footer id="contact" className="bg-gray-900 py-20 text-center">
        <div className="max-w-xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600 mb-8">
                Let's Work Together
            </h2>
            <a 
                href="mailto:valligayathrimullapudi@gmail.com" 
                className="inline-block text-white font-bold py-4 px-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:scale-105 transform transition-transform duration-300 shadow-lg"
            >
                Get In Touch
            </a>
             <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400">
                <a href="mailto:valligayathrimullapudi@gmail.com" className="flex items-center space-x-2 hover:text-indigo-400 transition-colors">
                    <EmailIcon />
                    <span>valligayathrimullapudi@gmail.com</span>
                </a>
                <a href="tel:6302166136" className="flex items-center space-x-2 hover:text-indigo-400 transition-colors">
                    <PhoneIcon />
                    <span>6302166136</span>
                </a>
            </div>
            <p className="text-gray-500 mt-16">
                Developed with <span role="img" aria-label="heart">🤍</span> by Valli Gayathri Mullapudi &copy; {new Date().getFullYear()}
            </p>
        </div>
    </footer>
);

function App() {
  return (
    <div className="bg-gray-900">
        <Header />
        <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Accomplishments />
            <PositionsOfResponsibility />
            <CodingProfiles />
        </main>
        <NewFooter />
    </div>
  );
}

export default App;