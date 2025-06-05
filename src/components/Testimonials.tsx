import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Este ebook transformou a minha experiência como mãe de primeira viagem. Senti-me muito mais confiante e preparada, mesmo nos momentos mais desafiantes.",
    name: "Sofia Martins",
    role: "Mãe da Clara, 1 meses",
    image: "https://i.pinimg.com/736x/9f/15/0e/9f150ede7b4ef2363c24658d7e6ab4d5.jpg"
  },
  {
    quote: "Quando o meu bebé teve cólicas, foi o guia da Dra. Helena que me ajudou a manter a calma e a encontrar soluções que realmente funcionaram.",
    name: "Marcia Pereira",
    role: "Mãe do Miguel, 8 meses",
    image: "https://i.pinimg.com/736x/6d/9e/cf/6d9ecfccdc30d6bd6bc6d632881cf55f.jpg"
  },
  {
    quote: "A abordagem da Dra. Helena é tão acolhedora! Finalmente um guia que não nos faz sentir culpadas por não sermos 'perfeitas'. Recomendo a todas as futuras mães.",
    name: "Catarina Oliveira",
    role: "Mãe da Laura, 3 meses",
    image: "https://i.pinimg.com/736x/f0/42/ce/f042cef388683690c3897e2f658ab6c7.jpg"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-cream opacity-30 blur-2xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-mint opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-1">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-text-primary mb-6">
            O Que Dizem as Mães Que Já Leram
          </h2>
          
          <p className="text-text-secondary text-lg">
            Descubra como o ebook "Maternidade com Amor e Consciência" tem ajudado milhares de mães a viverem 
            esta fase especial com mais confiança e tranquilidade.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop view */}
          <div className="hidden md:block">
            <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="absolute inset-0 -rotate-2 bg-salmon/20 rounded-full"></div>
                    <img 
                      src={testimonials[current].image} 
                      alt={testimonials[current].name} 
                      className="relative w-48 h-48 object-cover rounded-full mx-auto border-4 border-white shadow-md"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-salmon opacity-40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-1.783.145c-1.878.153-3.044.697-3.513 1.614-.276.54-.319 1.123-.195 1.674.204.913.906 1.924 2.223 3.048l.995.952-1.387 1.444-.995-.952c-1.986-1.903-3-3.597-3.346-5.189-.276-1.273-.116-2.539.693-3.665zM15.691 6.292C17.094 4.771 19.217 4 22 4h1v2.819l-1.783.145c-1.878.153-3.044.697-3.513 1.614-.276.54-.319 1.123-.195 1.674.204.913.906 1.924 2.223 3.048l.995.952-1.387 1.444-.995-.952c-1.986-1.903-3-3.597-3.346-5.189-.276-1.273-.116-2.539.693-3.665z" />
                  </svg>
                  
                  <blockquote className="font-serif italic text-text-secondary text-xl mb-6">
                    {testimonials[current].quote}
                  </blockquote>
                  
                  <div>
                    <p className="font-medium text-text-primary text-lg">{testimonials[current].name}</p>
                    <p className="text-text-secondary">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      current === index ? 'bg-salmon scale-125' : 'bg-lavender/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              <button 
                onClick={prev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-text-primary hover:text-salmon transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={next}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-text-primary hover:text-salmon transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Mobile view */}
          <div className="md:hidden">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-center mb-6">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name} 
                  className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-white shadow-md"
                />
              </div>
              
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-salmon opacity-40 mb-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-1.783.145c-1.878.153-3.044.697-3.513 1.614-.276.54-.319 1.123-.195 1.674.204.913.906 1.924 2.223 3.048l.995.952-1.387 1.444-.995-.952c-1.986-1.903-3-3.597-3.346-5.189-.276-1.273-.116-2.539.693-3.665zM15.691 6.292C17.094 4.771 19.217 4 22 4h1v2.819l-1.783.145c-1.878.153-3.044.697-3.513 1.614-.276.54-.319 1.123-.195 1.674.204.913.906 1.924 2.223 3.048l.995.952-1.387 1.444-.995-.952c-1.986-1.903-3-3.597-3.346-5.189-.276-1.273-.116-2.539.693-3.665z" />
              </svg>
              
              <blockquote className="font-serif italic text-text-secondary text-lg mb-6 text-center">
                {testimonials[current].quote}
              </blockquote>
              
              <div className="text-center">
                <p className="font-medium text-text-primary text-lg">{testimonials[current].name}</p>
                <p className="text-text-secondary">{testimonials[current].role}</p>
              </div>
              
              <div className="flex justify-center mt-6 space-x-4">
                <button 
                  onClick={prev}
                  className="bg-lavender/20 p-2 rounded-full text-text-primary hover:bg-lavender/40 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex items-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        current === index ? 'bg-salmon scale-125' : 'bg-lavender/50'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    ></button>
                  ))}
                </div>
                
                <button 
                  onClick={next}
                  className="bg-lavender/20 p-2 rounded-full text-text-primary hover:bg-lavender/40 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;