import React from 'react';

const Plan: React.FC = () => {
  const chapters = [
    {
      title: "Gestação",
      description: "Entenda as mudanças trimestre a trimestre, cuidados essenciais, preparação emocional.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "bg-mint"
    },
    {
      title: "Parto",
      description: "Conheça os tipos de parto, como criar o seu plano, o que levar para a maternidade.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "bg-sky"
    },
    {
      title: "Pós-Parto",
      description: "Adaptação em casa, recuperação física e emocional, lidar com visitas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      color: "bg-lavender"
    },
    {
      title: "Amamentação",
      description: "Primeiros passos, posições, superação de desafios, extração e armazenamento.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "bg-salmon"
    },
    {
      title: "Cuidados com o Bebé",
      description: "Higiene, umbigo, fraldas, sono, saúde, cólicas, sinais de alerta.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "bg-cream"
    },
    {
      title: "Autocuidado",
      description: "A importância de cuidar de si, baby blues, nutrição, retomar atividades.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "bg-sky"
    }
  ];

  return (
    <section id="plano" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-16 bg-cream/30 -skew-y-2"></div>
      <div className="absolute -left-32 bottom-0 w-80 h-80 rounded-full bg-sky opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-1 pt-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-text-primary mb-6">
            O Seu Roteiro Completo para uma Maternidade Mais Serena
          </h2>
          
          <p className="text-text-secondary text-lg">
            O ebook está estruturado para acompanhá-la passo a passo, oferecendo tudo o que precisa, 
            organizado de forma clara e acessível, para consultar sempre que precisar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((chapter, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className={`p-4 ${chapter.color}/20 flex justify-center`}>
                <div className={`${chapter.color} p-3 rounded-full text-white`}>
                  {chapter.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif font-medium text-xl text-text-primary mb-3">
                  {chapter.title}
                </h3>
                
                <p className="text-text-secondary">
                  {chapter.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Plan;