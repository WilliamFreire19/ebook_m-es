import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Heart className="text-salmon mr-2" size={24} />
            <span className="font-serif font-medium text-xl">
              Maternidade Consciente
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-white/80 hover:text-salmon transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/80 hover:text-salmon transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-white/80 hover:text-salmon transition-colors">
              FAQ
            </a>
            <a href="#" className="text-white/80 hover:text-salmon transition-colors">
              Contacto
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Dra. Helena Costa. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;