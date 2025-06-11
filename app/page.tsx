'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, ExternalLink, Github, Mail, Phone, MapPin, Download, GraduationCap, Code, Award, User, Briefcase, MessageSquare, FileText } from 'lucide-react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'education', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: 'ease-out-cubic' });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Certifications data
  const certifications = [
    {
      id: 1,
      title: "CIDECODE (State Level Hackathon)",
      provider: "CCITR",
      providerLogo: "Images/ccitr.jpg",
      imageUrl: "https://drive.google.com/file/d/1h4GnUwAx3yzL597CSD3yW7mnqf4yqpWq/view?usp=sharing",
      date: "January 2024"
    },
    {
      id: 2,
      title: "ISFCR Summer Intern",
      provider: "ISFCR PESU",
      providerLogo: "Images/ISFCR.png",
      imageUrl: "https://drive.google.com/file/d/1toBeCwIUo13A91on4DfDQra683dBYsur/view?usp=sharing",
      date: "September 2024"
     
    },
    {
      id: 3,
      title: "Software Engineering Job Simulation",
      provider: "Goldmann Sachs",
      providerLogo: "Images/Goldman.png",
      imageUrl: "https://drive.google.com/file/d/1jg1_7O5k9Xh4TZcVRqZEKaoBfPgsMxuF/view?usp=sharing",
      date: "October 2023"
    },
    {
      id: 4,
      title: "Problem Solving Intermediate",
      provider: "HackerRank",
      providerLogo: "Images/hackerrank.png",
      imageUrl: "https://drive.google.com/file/d/1K7hQc95n198xa60-T5aW3-ZLzLSmksLX/view?usp=sharing",
      date: "April 2024"
    },
    {
      id: 5,
      title: "Learn Python",
      provider: "CodeChef",
      providerLogo: "Images/codechef.png",
      imageUrl: "https://drive.google.com/file/d/1IWKiSmxd7ENROxL-TVF-Zqv0p6jGRFj5/view?usp=sharing",
      date: "June 2023"
    },
    {
      id: 6,
      title: "Web Extension Workshop",
      provider: "IEEE Society(PESU)",
      providerLogo: "Images/pesu.png",
      imageUrl: "https://drive.google.com/file/d/11OIhH5FyK1EbNe5eRpBeLSDqNI45uwf-/view?usp=sharing",
      date: "November 2023"
    },
    {
      id: 7,
      title: "Health Hackathon(Weal)",
      provider: "Weal (PESU)",
      providerLogo: "Images/weal.png",
      imageUrl: "https://drive.google.com/file/d/1QpO_P3JSkl1y74hcnW8xSi0lDAjULXyN/view?usp=sharing",
      date: "February 2024"
    },
    {
      id: 8,
      title: "Building Conversational AI using LLMs",
      provider: "PESU I/O",
      providerLogo: "Images/pesuio.png",
      imageUrl: "https://drive.google.com/file/d/1QrnIa0lx7X7nvvIS4-BCa5juHupTgfoi/view?usp=sharing",
      date: "November 2024"
    },
    {
      id: 9,
      title: "Cybersecurity Course",
      provider: "JP Morgan",
      providerLogo: "Images/jpmorgan.png",
      imageUrl: "https://drive.google.com/file/d/1F5aGpX1IkFeM_PorXjvi2TH5FvsfYonR/view?usp=sharing",
      date: "July 2023"
    },
    {
      id: 10,
      title: "Investment Banking",
      provider: "JP Morgan",
      providerLogo: "Images/jpmorgan.png",
      imageUrl: "https://drive.google.com/file/d/1jstATSzUVG_0LloZgOSmwyZkfrQ5nahd/view?usp=sharing",
      date: "June 2023"
    }
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust for responsiveness
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const projects = [
    {
      title: "FTP-Server-with-SSL-Implementation",
      type: "Coded",
      image: "/Images/FTP_img.png",
      technologies: ["Python", "OpenSSL"],
      description: "This is a secure FTP server which has features like Authentication, Directory Listing, Uploading ,Downloading, Quitting out .We have also implemented SSL(Secure Socket Layer) so that the information sent is encrypted and safety of user's details is preserved.",
      github: "https://github.com/manas1331/FTP-Server-with-SSL-Implementation"
    },
    {
      title: "Thermometer using Arduino Nano Microcontroller",
      type: "Hardware",
      image: "/Images/Arduino.jpg",
      technologies: ["Arduino Nano", "Arduino IDE", "C++", "Hardware"],
      description: "Celsius Scale thermometer built using Arduino Nano Microcontroller, lm35 sensor (Thermistor),resistors ,16x2 LCD display ,we can also print the temperature in Fahrenheit and Kelvin scale also.The code is executed using Arduino IDE.",
      github: "https://github.com/manas1331/Thermometer_using_Arduino_nano"
    },
    {
      title: "Depression Detector Website",
      type: "Coded",
      image: "/Images/Depression_Detector.png",
      technologies: ["HTML", "JavaScript", "CSS", "Flask"],
      description: "An interactive website for the weal 24hrs health hackathon with the help of HTML ,CSS, Javascript and used Flask for the backend.This project uses large language models and fine tuning to create a chatbot which can speak with a user, determine whether or not they are depressed, and suggest verbal countermeasures which helps the user.",
      github: "https://github.com/manas1331/Depression-Detector-Website"
    },
    {
      title: "Real Estate Management System",
      type: "Coded",
      image: "/Images/Real_Estate.png",
      technologies: ["Streamlit", "MySQL","MySQL Workbench","Gemini Model"],
      description: "A streamlined real estate management platform built using Streamlit and MySQL for a modern and user-friendly experience. This project offers an efficient way to manage real estate properties with a range of features designed to simplify the process of buying, selling, and tracking properties. ",
      github: "https://github.com/manas1331/Real-Estate-Management-Project"
    },
    {
      title: "Community Skill Sharing Platform",
      type: "Coded",
      image: "/Images/community_skill.jpg",
      technologies: ["Nextjs", "MongoDB Atlas", "Tailwindcss", "Nodejs","Express.js"],
      description: "The Community Skill Sharing Platform is an innovative web application designed to facilitate knowledge exchange between learners and skill providers.It is a peer to peer network. Developed using Next.js and Tailwind CSS for the frontend, Node.js and Express.js for the backend, and MongoDB Atlas for database management",
      github: "https://github.com/manas1331/Community-Skill-Sharing-Platform-Code-Blitz"
    },
    {
      title: "Library_Management_System",
      type: "Coded",
      image: "/Images/Library_Mgt.png",
      technologies: ["Nextjs", "Java", "MongoDB", "Springboot"],
      description: "Traditional library management involves manual record-keeping, leading to inefficiencies such as book misplacement, slow book searching, and difficulty tracking due dates. The LMS(Library Management System) aims to streamline these processes by providing a centralized digital platform for managing library activities.",
      github: "https://github.com/manas1331/Library_Management_System"
    },
    {
      title: "Mental-Health-Tracker",
      type: "Coded",
      image: "/Images/Health_Tracker.png",
      technologies: ["Nextjs", "Express.js", "Gradio", "Llama"],
      description: "This Mental Health Tracking System integrates smartwatch data and conversational AI to monitor and assess users' stress levels. Built with Next.js, Express.js, LLAMA, and Gradio, it provides real-time interaction, personalized remedies, and wellness support. ",
      github: "https://github.com/manas1331/Mental-Health-Tracker"
      
    },
    {
      title: "Car-Price-Predictor",
      type: "Coded",
      image: "/Images/Car_Price.png",
      technologies: ["Streamlit", "CSS","XGBoost","numphy","pandas"],
      description: "This project provides a web-based application for predicting car prices using machine learning models. Users can interact with the model and view predictions in real-time through a user-friendly interface built using streamlit framework.",
      github: "https://github.com/manas1331/Car-Price-Predictor"
    },
    {
      title: "Health Assistant Bot (PESU I/O)",
      type: "Coded",
      image: "/Images/General_Health.png",
      technologies: ["Streamlit", "Gemini", "Llama Index"],
      description: "This project is a Health Assistant Bot built using Google's Gemini model. It is part of the PES University (PESU) IO course. The bot provides assistance in health-related topics, offering actionable steps, health tips,location based services and factual information based on user queries.",
      github: "https://github.com/manas1331/PESU_IO_Project"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-400">Portfolio</h1>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'HOME', icon: User },
                { id: 'about', label: 'ABOUT', icon: User },
                { id: 'projects', label: 'PROJECTS', icon: Briefcase },
                { id: 'skills', label: 'SKILLS', icon: Code },
                { id: 'education', label: 'EDUCATION', icon: GraduationCap },
                { id: 'certificates', label: 'CERTIFICATES', icon: Award },
                { id: 'contact', label: 'CONTACT', icon: MessageSquare }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-500/20 ${
                    activeSection === id ? 'text-blue-400 bg-blue-500/10' : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            {/* Auto-typing Text */}
            <div className="text-3xl md:text-4xl text-blue-400 mb-4 h-12">
              <Typewriter
                options={{
                  strings: [
                    'Hi, I am ',
                    'A Passionate CSE Engineer',
                    'AI & ML, Web Development, Enthusiast',
                    'Welcome to my portfolio website',
                   
                    
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  cursor: '|',
                  wrapperClassName: 'typewriter-wrapper',
                }}
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Manas R
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">Pursuing B.Tech in Computer Science at PES University</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            I'm a sophomore pursuing a B.Tech in Computer Science at PES University, 
            passionate about Software Development, Machine Learning, Web Development, and cutting-edge technologies.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0 ">
              <img
                src="/Images/Profile.png"
                alt="Profile"
                className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-slate-900 shadow-lg"

                style={{
                  boxShadow: "0 0 40px 0 rgba(59,130,246,0.4)" // blue glow
                }}
              />
            </div>
            {/* About Content */}
            <div className="flex-1 flex flex-col items-start text-left">
              <h2 className="text-4xl font-bold text-gray-100 mb-2 flex items-center">
                About Me
              </h2>
              <div className="w-24 h-1 bg-blue-500 mb-6"></div>
              <div className="text-gray-200 text-lg space-y-6 mb-8 max-w-2xl">
                <p>
                My name is Manas R ,I'm a sophomore pursuing a B.Tech in Computer Science at PES University, passionate about Software Development, Machine Learning, Web Development, and cutting-edge technologies.

              Overcoming personal challenges has helped me build resilience and a strong problem-solving mindset—qualities that now drive me to tackle complex technical problems with confidence.
              I believe that when I fully commit to something, I can accomplish remarkable things, and I carry that belief into every professional and academic endeavor.
                </p>
                <p>
                Beyond academics, I enjoy building real-world applications, exploring new technologies, participating in hackathons, and contributing to open-source projects. I'm always excited to collaborate on innovative projects that challenge me to grow and expand my skill set.

As a curious and driven tech enthusiast, I'm constantly seeking opportunities to learn, create, and make an impact through technology.
                </p>
                
              </div>
              {/* Contact Buttons */}
              <div className="flex flex-row flex-wrap gap-4 w-full">
                <a
                  href="mailto:manas.contact17@gmail.com"
                  className="bg-slate-900 hover:bg-blue-700 transition-colors text-white px-8 py-4 rounded-lg flex flex-col items-center w-40"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="mb-2" size={28} />
                  Email
                </a>
                <a
                  href="tel:+917349346884"
                  className="bg-slate-900 hover:bg-blue-700 transition-colors text-white px-8 py-4 rounded-lg flex flex-col items-center w-40"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="mb-2" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg>
                  Phone
                </a>
                <a
                  href="https://www.linkedin.com/in/manas1331/"
                  className="bg-slate-900 hover:bg-blue-700 transition-colors text-white px-8 py-4 rounded-lg flex flex-col items-center w-40"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="mb-2" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/></svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/manas1331"
                  className="bg-slate-900 hover:bg-blue-700 transition-colors text-white px-8 py-4 rounded-lg flex flex-col items-center w-40"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="mb-2" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.588 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
                <a
                  href="https://drive.google.com/file/d/1ALgTBTkITriFS7XKU41b_bQeqGNMDEOS/view?usp=sharing"
                  className="bg-slate-900 hover:bg-blue-700 transition-colors text-white px-8 py-4 rounded-lg flex flex-col items-center w-40"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="mb-2" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 16v-8m0 8l-4-4m4 4l4-4M4 4h16v16H4z" /></svg>
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                className="bg-slate-800/80 rounded-xl border border-blue-500/30 p-6 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className="relative mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.type === 'RESEARCH' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-green-600 text-white'
                    }`}>
                      {project.type}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-blue-400 mb-2 font-medium">🔧 Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-slate-700 text-xs rounded-md text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    <span>Click here for Full Details</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="bg-slate-800/80 rounded-xl border border-blue-500/30 p-6 hover:border-blue-400/50 transition-all duration-300"
              data-aos="zoom-in-up"
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-blue-400 text-2xl">💻</span>
                <h3 className="text-xl font-bold text-white">Programming Languages</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>Python, Java, C, C++, Go, R</li>
                <li>Front End Web Development (HTML, CSS, JavaScript, React, Nextjs, Tailwind CSS)</li>
                <li>Back End Web Development ( MongoDB, MySQL, Flask, Spring Boot)</li>
                <li>Streamlit</li>
              </ul>
            </div>
            <div
              className="bg-slate-800/80 rounded-xl border border-blue-500/30 p-6 hover:border-blue-400/50 transition-all duration-300"
              data-aos="zoom-in-up"
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-blue-400 text-2xl">🤖</span>
                <h3 className="text-xl font-bold text-white">Machine Learning Libraries</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>Scikit-learn</li>
                <li>TensorFlow</li>
                <li>Keras</li>
                <li>Pandas, Numpy, Matplotlib</li>
                <li>Basics of Supervised and Unsupervised Learning</li>
              </ul>
            </div>
            <div
              className="bg-slate-800/80 rounded-xl border border-blue-500/30 p-6 hover:border-blue-400/50 transition-all duration-300"
              data-aos="zoom-in-up"
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-blue-400 text-2xl">🛠️</span>
                <h3 className="text-xl font-bold text-white">Developer Tools</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>Jupyter Notebook</li>
                <li>GitHub,Git</li>
                <li>Visual Studio Code (VS Code)</li>
                <li>Microsoft Office (Advanced Excel, Word)</li>
                <li>SQL, MySQL, MongoDB Atlas</li>
                <li>Docker, Kubernetes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <GraduationCap className="text-blue-400" size={32} />
              <h2 className="text-4xl font-bold text-white">Education</h2>
            </div>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            <div
              className="bg-slate-800/80 rounded-xl border border-blue-500/30 p-8 hover:border-blue-400/50 transition-all duration-300"
              data-aos="zoom-in-up"
            >
              <div className="flex items-start space-x-4">
                <GraduationCap className="text-blue-400 mt-1" size={24} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">People Education Society(PES) University, Bengaluru, India</h3>
                  <div className="flex items-center space-x-2 mb-3 text-gray-400">
                    <span>📅 Dec 2022 - Present</span>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <span>📝</span>
                      <span>Bachelor of Technology, Computer Science and Engineering</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>📊</span>
                      <span>CGPA: 8.35/10</span>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-slate-800/80 rounded-xl border border-blue-500/30 p-8 hover:border-blue-400/50 transition-all duration-300"
              data-aos="zoom-in-up"
            >
              <div className="flex items-start space-x-4">
                <GraduationCap className="text-blue-400 mt-1" size={24} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">RV PU College, Bengaluru, India</h3>
                  <div className="flex items-center space-x-2 mb-3 text-gray-400">
                    <span>📅 June 2020 - Aug 2022</span>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <span>📝</span>
                      <span>State Board (Pre-University College)  </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>📚</span>
                      <span>Physics,Chemistry,Maths,Computer(PCMC)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>📊</span>
                      <span>Percentage: 97.33%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-slate-800/80 rounded-xl border border-blue-500/30 p-8 hover:border-blue-400/50 transition-all duration-300"
              data-aos="zoom-in-up"
            >
              <div className="flex items-start space-x-4">
                <GraduationCap className="text-blue-400 mt-1" size={24} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Baldwin Co-education Extension High School (BCEHS), Bengaluru, India</h3>
                  <div className="flex items-center space-x-2 mb-3 text-gray-400">
                    <span>📅 June 2008   - May 2020</span>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <span>📝</span>
                      <span> ICSE Board</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>📊</span>
                      <span>Percentage: 90.20%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>

        
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-3xl">🌟</span>
              <h2 className="text-4xl font-bold text-white">Certifications</h2>
            </div>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <Slider {...sliderSettings}>
            {certifications.map((cert, idx) => (
              <div key={cert.id} className="px-2">
                <div className="relative bg-slate-900 rounded-xl border border-blue-500/30 p-8 flex flex-col items-center justify-center min-h-[250px] shadow-lg">
                  <span className="absolute top-4 left-4 bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">{cert.id}</span>
                  <img src={cert.providerLogo} alt={cert.provider} className="h-16 w-16 object-contain mb-4 opacity-80" />
                  <h3 className="text-xl font-bold text-white text-center mb-2">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{cert.date}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-gray-300">{cert.provider}</span>
                    <span className="text-gray-500">•</span>
                    <a 
                      href={cert.imageUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <FileText size={14} />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Let's discuss opportunities and collaborate on exciting projects! I will be happy to hear from you! Whether you have a project in mind, a question, or just want to say hello, feel free to reach out.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-slate-800/80 rounded-lg border border-blue-500/30">
                <Mail className="text-blue-400" size={24} />
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-gray-300">manas.contact17@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-slate-800/80 rounded-lg border border-blue-500/30">
                <Phone className="text-blue-400" size={24} />
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <p className="text-gray-300">+91 7349346884</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-slate-800/80 rounded-lg border border-blue-500/30">
                <MapPin className="text-blue-400" size={24} />
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-300">Bengaluru, India</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center space-y-6">
              {/* <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Connect?</h3>
                <p className="text-gray-300 mb-8">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
                </p>
              </div> */}
              
              <a 
                href="https://drive.google.com/file/d/1ALgTBTkITriFS7XKU41b_bQeqGNMDEOS/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all duration-300 hover:scale-105 group"
              >
                <FileText size={20} className="group-hover:rotate-12 transition-transform" />
                <span>View Resume</span>
                
              </a>
              
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/manas1331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/80 rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} className="text-blue-400" />
                </a>
                <a
                  href="mailto:manas.contact17@gmail.com"
                  className="p-3 bg-slate-800/80 rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} className="text-blue-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© Copyright 2025. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        >
          <ArrowUp size={30} className="text-white" />
        </button>
      )}
    </div>
  );
}