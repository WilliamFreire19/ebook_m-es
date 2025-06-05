import React from 'react';

const Author: React.FC = () => {
  return (
    <section id="autora" className="py-20 bg-lavender/20 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -right-32 bottom-0 w-96 h-96 rounded-full bg-sky opacity-20 blur-3xl"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-16 bg-background -skew-y-2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-1 pt-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 -rotate-3 bg-salmon/20 rounded-2xl"></div>
              <div className="absolute inset-0 rotate-3 bg-mint/20 rounded-2xl"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/public/autora.jpg" 
                  alt="Dra. Helena Costa" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-text-primary mb-6">
              Conheça a Dra. Helena Costa: Médica, Especialista e Mãe
            </h2>
            
            <p className="text-text-secondary text-lg mb-6">
              A Dra. Helena Costa é médica pediatra e especialista em saúde materno-infantil, com mais de 15 anos de experiência. Mas a sua maior escola foram os seus três filhos.
            </p>
            
            <p className="text-text-secondary text-lg mb-6">
              Ela une o rigor científico da medicina com a sensibilidade e a experiência real da maternidade. Cansada de ver mães a sentirem-se culpadas ou perdidas pela busca da perfeição, a Dra. Helena criou este guia com uma abordagem humana, realista e acolhedora.
            </p>
            
            <p className="text-text-secondary text-lg mb-8">
              A sua missão é empoderar mães de primeira viagem com informação de qualidade e apoio emocional, para que vivam a maternidade com mais confiança, amor e consciência.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-salmon opacity-70 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                
                <blockquote className="font-serif italic text-text-secondary text-lg">
                  "Acredito que a informação de qualidade, aliada à confiança na sua intuição de mãe, é a chave para uma maternidade mais tranquila e consciente. Meu objetivo é ajudar-lhe a encontrar o seu próprio caminho, respeitando a sua individualidade e a do seu bebé."
                </blockquote>
              </div>
              <div className="text-right mt-4">
                <p className="font-medium text-text-primary">— Dra. Helena Costa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;