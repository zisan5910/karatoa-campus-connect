import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Element, scroller } from 'react-scroll';
import { UserCircle, School, BookOpen, Briefcase, FileBadge, Code, HeartHandshake, Mail, Share2, Search, PenTool, Loader2 } from 'lucide-react';

// Lazy load components for better performance
const Certificates = lazy(() => import('./components/Certificates'));
const Contact = lazy(() => import('./components/Contact'));
const Courses = lazy(() => import('./components/Courses'));
const Education = lazy(() => import('./components/Education'));
const Experience = lazy(() => import('./components/Experience'));
const FloatingMenu = lazy(() => import('./components/FloatingMenu'));
const Footer = lazy(() => import('./components/Footer'));
const Family = lazy(() => import('./components/Family'));
const Skills = lazy(() => import('./components/Skills'));

// Import eagerly loaded components
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Signature from './components/Signature';

// Lazy load pages
const Research = lazy(() => import('./pages/Research'));
const Blog = lazy(() => import('./pages/Blog'));

// Import data
import { content, certificates } from './data/content';

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-12">
    <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
  </div>
);

function App() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [activeSection, setActiveSection] = useState<string>('profile');
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [age, setAge] = useState<number>(0);

  // Calculate age on component mount and update daily
  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date('2007-12-31');
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      setAge(age);
    };

    calculateAge();
    const interval = setInterval(calculateAge, 86400000); // Update daily
    return () => clearInterval(interval);
  }, []);

  // Navigation configuration
  const navigationItems = [
    { id: 'profile', icon: <UserCircle size={20} /> },
    { id: 'education', icon: <School size={20} /> },
    { id: 'courses', icon: <BookOpen size={20} /> },
    { id: 'experience', icon: <Briefcase size={20} /> },
    { id: 'certificates', icon: <FileBadge size={20} /> },
    { id: 'skills', icon: <Code size={20} /> },
    { id: 'family', icon: <HeartHandshake size={20} /> },
    { id: 'contact', icon: <Mail size={20} /> },
    { id: 'research', icon: <Search size={20} /> },
    { id: 'blog', icon: <PenTool size={20} /> },
    { id: 'social-links', icon: <Share2 size={20} />, target: 'footer' }
  ];

  // Handle URL-based routing and deep linking
  useEffect(() => {
    const path = window.location.pathname;
    const section = path.substring(1); // Remove leading slash
    
    if (section === 'research') {
      setCurrentPage('research');
    } else if (section === 'blog') {
      setCurrentPage('blog');
    } else if (section && ['profile', 'education', 'courses', 'experience', 'certificates', 'skills', 'family', 'contact'].includes(section)) {
      setCurrentPage('home');
      setActiveSection(section);
      // Small delay to ensure DOM is ready for scrolling
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 800,
          smooth: true,
          offset: -64,
        });
      }, 100);
    } else {
      // Default to home page
      setCurrentPage('home');
      setActiveSection('profile');
    }
  }, []);

  // Update URL when section changes - optimized with useCallback
  const updateURL = useCallback((section: string, page: string = 'home') => {
    const newURL = page === 'home' ? `/${section}` : `/${page}`;
    window.history.pushState({}, '', newURL);
  }, []);

  // Smooth scrolling handler - optimized with useCallback
  const scrollToSection = useCallback((section: string) => {
    if (section === 'research') {
      setCurrentPage('research');
      updateURL('research', 'research');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (section === 'blog') {
      setCurrentPage('blog');
      updateURL('blog', 'blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    setCurrentPage('home');
    updateURL(section);
    scroller.scrollTo(section, {
      duration: 800,
      smooth: true,
      offset: -64,
    });
    setActiveSection(section);
  }, [updateURL]);

  // Back to home handler - optimized with useCallback
  const handleBackToHome = useCallback(() => {
    setCurrentPage('home');
    setActiveSection('profile');
    updateURL('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [updateURL]);

  // Render current page with Suspense for lazy loading
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'research':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <Research language={language} />
          </Suspense>
        );
      case 'blog':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <Blog language={language} />
          </Suspense>
        );
      default:
        return (
          <>
            {/* Profile Section - Eagerly loaded */}
            <Element name="profile">
              <Profile
                language={language}
                content={content as any}
                scrollToSection={scrollToSection}
              />
            </Element>

            {/* Main Content Sections - Lazy loaded */}
            <main>
              <Suspense fallback={<LoadingFallback />}>
                {/* Education Section */}
                <Element name="education">
                  <Education language={language} />
                </Element>

                {/* Courses Section */}
                <Element name="courses">
                  <Courses language={language} />
                </Element>

                {/* Experience Section */}
                <Element name="experience">
                  <Experience language={language} />
                </Element>

                {/* Certificates Section */}
                <Element name="certificates">
                  <Certificates
                    language={language}
                    content={content}
                    certificates={certificates}
                  />
                </Element>

                {/* Skills Section */}
                <Element name="skills">
                  <Skills language={language} />
                </Element>

                {/* Family Information Section */}
                <Element name="family">
                  <Family language={language} age={age} />
                </Element>

                {/* Contact Section */}
                <Element name="contact">
                  <Contact language={language} />
                </Element>
              </Suspense>
            </main>

            {/* Signature Section */}
            <Signature />

            {/* Footer */}
            <Suspense fallback={<LoadingFallback />}>
              <Element name="footer">
                <Footer language={language} />
              </Element>
            </Suspense>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Navigation */}
      <Navigation 
        navigationItems={navigationItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        language={language}
        setLanguage={setLanguage}
        currentPage={currentPage}
        onBackToHome={handleBackToHome}
      />

      {/* Render Current Page */}
      {renderCurrentPage()}

      {/* Professional Floating Menu - Lazy loaded */}
      <Suspense fallback={null}>
        <FloatingMenu />
      </Suspense>
    </div>
  );
}

export default App;
