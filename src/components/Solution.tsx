import React from 'react';

const Solution: React.FC = () => {
  return (
    <section id="solucao" className="py-20 bg-cream/30 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -left-32 top-20 w-96 h-96 rounded-full bg-mint opacity-20 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-72 h-72 rounded-full bg-lavender opacity-30 blur-2xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-1">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-text-primary mb-6">
            Você Não Está Sozinha Nesta Jornada Transformadora
          </h2>
          
          <p className="text-text-secondary text-lg">
            Sentir-se perdida entre conselhos contraditórios, noites sem dormir e a avalanche de novas emoções é normal. 
            A Dra. Helena compreende profundamente – ela passou por isso, mesmo sendo médica.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <p className="text-text-secondary text-lg mb-6">
              Este ebook não é apenas sobre o 'como fazer', mas sobre o 'como sentir'. Abordamos desde as mudanças no seu corpo e mente durante a gestação, a preparação para o parto (seja ele qual for), os desafios reais da amamentação, os cuidados essenciais com o bebé (sono, banho, cólicas), até à importância vital do seu próprio autocuidado.
            </p>
            
            <p className="text-text-secondary text-lg mb-8">
              Com depoimentos reais de outras mães e guias práticos, você encontrará validação para os seus sentimentos e estratégias eficazes para cada etapa. Permita-se viver esta fase com menos ansiedade e mais amor, guiada por quem entende tanto a ciência quanto o coração de mãe.
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-salmon/30">
              <h3 className="font-serif text-xl text-text-primary mb-4">O que este ebook não é:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-salmon mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-text-secondary">Não é um manual de maternidade perfeita – porque ela não existe</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-salmon mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-text-secondary">Não é um conjunto de regras rígidas – cada mãe e bebé são únicos</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-salmon mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-text-secondary">Não é só mais informação técnica – é um equilíbrio entre ciência e acolhimento</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-xl">
              <img 
                src="https://www.brubrelelbabys.com.br/assets/uploads/medias/medium2/blog-vinculo-612e34ac42616.jpg" 
                alt="Mãe e bebê em momento de conexão e carinho" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/40 to-transparent"></div>
            </div>
            
            <div className="absolute -top-5 -right-5 md:top-auto md:-bottom-8 md:-left-8 bg-mint/20 backdrop-blur-sm p-5 rounded-lg max-w-xs border-r-4 border-mint">
              <p className="text-text-primary font-serif italic">
                "Há muita pressão para sermos mães perfeitas, mas a verdade é que somos humanas, estamos a aprender. Este livro acolhe-nos nessa realidade."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;