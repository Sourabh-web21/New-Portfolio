import { useEffect } from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

const AppContent = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    // Apply theme class to document
    document.documentElement.className = isDark ? 'theme-dark' : 'theme-light';

    // Smooth scrolling for anchor links
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark
        ? 'bg-slate-900 text-white'
        : 'bg-white text-gray-900'
    }`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
