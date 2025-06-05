import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative shape */}
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-cream opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-1">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-text-primary mb-6">
              O Que é o Ebook?
            </h2>
            
            <p className="text-text-secondary text-lg mb-6">
              Este ebook é o seu companheiro indispensável desde a descoberta da gravidez até aos primeiros desafios e alegrias com o seu recém-nascido. Escrito pela Dra. Helena Costa, médica pediatra e mãe, oferece uma combinação única de conhecimento científico atualizado, conselhos práticos testados e acolhimento genuíno para todas as suas dúvidas e emoções.
            </p>
            
            <p className="text-text-secondary text-lg mb-8">
              Esqueça a pressão da perfeição; aqui encontrará um guia realista para viver a sua maternidade de forma mais tranquila e consciente.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-lavender/30 flex items-start">
                <div className="rounded-full bg-mint/30 p-2 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-text-primary mb-1">Conhecimento Científico</h3>
                  <p className="text-text-secondary text-sm">Baseado nas mais recentes evidências e pesquisas na área da saúde materno-infantil</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm border border-lavender/30 flex items-start">
                <div className="rounded-full bg-sky/30 p-2 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-text-primary mb-1">Acolhimento Emocional</h3>
                  <p className="text-text-secondary text-sm">Validação dos seus sentimentos e emoções nesta fase tão especial e desafiante</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm border border-lavender/30 flex items-start">
                <div className="rounded-full bg-salmon/30 p-2 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-text-primary mb-1">Guias Práticos</h3>
                  <p className="text-text-secondary text-sm">Instruções passo a passo para cuidados diários e situações comuns do dia-a-dia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/public/Imagem2.jpg" 
                alt="Mãe segurando seu bebê com carinho" 
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/30 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-md max-w-xs border-l-4 border-mint">
              <p className="text-text-secondary italic text-sm">
                "Este ebook foi como ter uma amiga experiente e uma médica ao meu lado 24 horas por dia. Não sei como teria sobrevivido aos primeiros meses sem ele!"
              </p>
              <p className="text-text-primary font-medium text-right mt-2">— Mariana, mãe do Tomás</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;