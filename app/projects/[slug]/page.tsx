'use client';

import { ArrowLeft, ExternalLink, Github, Calendar, Users, Star, Code } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const projectsData = {
  'research-paper-on-generative-ai': {
    title: 'Research Paper on Generative AI',
    type: 'RESEARCH',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'An in-depth research study on generative artificial intelligence models and their applications in modern technology. This paper explores the latest advancements in AI generation techniques and their potential impact on various industries.',
    longDescription: 'This comprehensive research paper delves into the fascinating world of generative artificial intelligence, exploring cutting-edge models like GPT, DALL-E, and other transformer-based architectures. The study examines the underlying mechanisms that enable AI systems to create human-like text, images, and other content. We investigate the training methodologies, data requirements, and computational resources needed for these models, while also addressing ethical considerations and potential societal impacts. The research includes case studies from various domains including healthcare, education, creative industries, and business automation.',
    technologies: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Python', 'TensorFlow', 'PyTorch'],
    features: [
      'Comprehensive literature review of generative AI models',
      'Performance analysis of different architectures',
      'Ethical implications and bias mitigation strategies',
      'Real-world application case studies',
      'Future research directions and recommendations'
    ],
    duration: '6 months',
    team: '3 researchers',
    status: 'Published',
    year: '2023'
  },
  'e-learning-platform': {
    title: 'E-Learning Platform',
    type: 'CODED',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A comprehensive e-learning platform built with modern web technologies, featuring course management, interactive content delivery, and student progress tracking.',
    longDescription: 'This full-stack e-learning platform provides a comprehensive solution for online education. The system supports multiple user roles including students, instructors, and administrators. Students can enroll in courses, track their progress, take quizzes, and interact with multimedia content. Instructors can create and manage courses, upload content, grade assignments, and monitor student performance through detailed analytics. The platform features a responsive design, real-time messaging, video streaming capabilities, and secure payment integration for course purchases.',
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Node.js', 'AWS S3', 'JWT Authentication'],
    features: [
      'User authentication and role-based access control',
      'Course creation and management system',
      'Interactive video player with progress tracking',
      'Quiz and assignment management',
      'Real-time chat and discussion forums',
      'Payment gateway integration',
      'Analytics dashboard for instructors',
      'Mobile-responsive design'
    ],
    duration: '4 months',
    team: '4 developers',
    status: 'Deployed',
    year: '2023',
    github: 'https://github.com/manasr/elearning-platform',
    live: 'https://elearning-demo.vercel.app'
  },
  'national-disaster-management': {
    title: 'National Disaster Management',
    type: 'CODED',
    image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A web application designed for disaster management and emergency response coordination, featuring real-time alerts, resource tracking, and communication tools.',
    longDescription: 'This disaster management system is designed to facilitate efficient coordination between emergency response teams, government agencies, and citizens during natural disasters. The platform integrates real-time weather data, GPS tracking, and communication tools to provide comprehensive disaster preparedness and response capabilities. The system includes modules for risk assessment, resource allocation, evacuation planning, and post-disaster recovery coordination. It features an intuitive dashboard for emergency coordinators and a mobile-friendly interface for field workers and citizens.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Flask', 'MySQL', 'Google Maps API', 'WebSocket'],
    features: [
      'Real-time disaster alert system',
      'Interactive maps with affected area visualization',
      'Resource inventory and allocation tracking',
      'Emergency contact management',
      'Evacuation route planning',
      'Volunteer coordination system',
      'Incident reporting and documentation',
      'Multi-language support'
    ],
    duration: '5 months',
    team: '5 members',
    status: 'Beta Testing',
    year: '2023',
    github: 'https://github.com/manasr/disaster-management'
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors">
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <h1 className="text-xl font-bold">Manas R</h1>
          </div>
        </div>
      </nav>

      {/* Project Header */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.type === 'RESEARCH' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-green-600 text-white'
                }`}>
                  {project.type}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">{project.year}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">{project.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar size={18} />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Users size={18} />
                  <span>{project.team}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Star size={18} />
                  <span>{project.status}</span>
                </div>
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 border border-blue-500 hover:bg-blue-500/10 rounded-lg transition-colors"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            <div className="lg:order-first">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-xl border border-blue-500/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Project Overview</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed">{project.longDescription}</p>
              </div>

              <h3 className="text-2xl font-bold mt-12 mb-6 text-blue-400">Key Features</h3>
              <div className="grid gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-slate-800/80 rounded-lg border border-blue-500/20">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-slate-800/80 rounded-xl border border-blue-500/30 p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6 text-blue-400 flex items-center space-x-2">
                  <Code size={20} />
                  <span>Tech Stack</span>
                </h3>
                <div className="space-y-3">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-blue-500/20">
                  <h4 className="font-bold mb-4 text-white">Project Stats</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration</span>
                      <span className="text-white">{project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Team Size</span>
                      <span className="text-white">{project.team}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status</span>
                      <span className="text-green-400">{project.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Year</span>
                      <span className="text-white">{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Other Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(projectsData)
              .filter(([key]) => key !== slug)
              .slice(0, 2)
              .map(([key, otherProject]) => (
                <Link
                  key={key}
                  href={`/projects/${key}`}
                  className="group bg-slate-800/80 rounded-xl border border-blue-500/30 p-6 hover:border-blue-400/50 transition-all duration-300"
                >
                  <img
                    src={otherProject.image}
                    alt={otherProject.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      otherProject.type === 'RESEARCH' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-green-600 text-white'
                    }`}>
                      {otherProject.type}
                    </span>
                    <ExternalLink size={16} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {otherProject.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{otherProject.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Manas R. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}