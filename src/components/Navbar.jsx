import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 64;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 64;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  // Update active section based on scroll position
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const handleScrollSpy = () => {
      const sections = ['home', 'features', 'knowledge-spaces', 'about'];
      const navbarHeight = 64;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navbarHeight && rect.bottom > navbarHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [location.pathname]);

  const navLinks = [
    { id: 'home', text: 'الصفحة الرئيسية' },
    { id: 'knowledge-spaces', text: 'فضاءات العلم' },
    { id: 'about', text: 'قصتنا ورؤيتنا' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-dark shadow-xl" dir="rtl">
      <div className="w-full justify-start px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Right side - Logo and Name */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img src="src\assets\Logo.svg" className="h-8 sm:h-10 w-auto" alt="Logo" />
          </Link>

          {/* Center - Navigation Links */}
          <div className="flex-1 hidden md:flex justify-start mr-8 lg:mr-12">
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavigation(e, link.id)}
                  className={`text-sm sm:text-base transition-colors ${
                    location.pathname === '/' && activeSection === link.id 
                      ? 'text-[#33D3D3]' 
                      : 'text-white hover:text-[#33D3D3]'
                  }`}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-white hover:text-[#33D3D3] transition-colors order-1 md:order-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Left side - Login and Register buttons */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="text-white hover:text-[#33D3D3] px-3 sm:px-6 py-2 transition-colors text-sm sm:text-base hidden sm:block">
                انشاء حساب
              </button>
              <button className="bg-[#33D3D3] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:bg-opacity-90 transition-colors text-sm sm:text-base">
                الدخول
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2 space-y-2">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavigation(e, link.id)}
                className={`block px-3 py-2 text-base transition-colors ${
                  location.pathname === '/' && activeSection === link.id 
                    ? 'text-[#33D3D3]' 
                    : 'text-white hover:text-[#33D3D3]'
                }`}
              >
                {link.text}
              </a>
            ))}
            <a href="#" className="block text-white hover:text-[#33D3D3] transition-colors px-3 py-2 text-base">انشاء حساب</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 