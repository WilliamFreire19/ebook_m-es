import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <Heart className="text-salmon mr-2" size={24} />
          <span className="font-serif font-medium text-text-primary text-xl">
            Maternidade Consciente
          </span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#sobre" className="text-text-primary hover:text-salmon transition-colors">
            Sobre o Ebook
          </a>
          <a href="#solucao" className="text-text-primary hover:text-salmon transition-colors">
            Benefícios
          </a>
          <a href="#plano" className="text-text-primary hover:text-salmon transition-colors">
            Conteúdo
          </a>
          <a href="#autora" className="text-text-primary hover:text-salmon transition-colors">
            Autora
          </a>
        </nav>
        
        <a 
          href="#cta" 
          className="hidden md:block bg-salmon hover:bg-salmon/90 text-text-primary py-2 px-6 rounded-full transition-all duration-300 hover:shadow-md"
        >
          Obter o Ebook
        </a>
        
        <button className="md:hidden text-text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;