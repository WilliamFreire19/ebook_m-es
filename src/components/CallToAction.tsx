import React from 'react';
import { Shield, Star } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-mint/10 to-lavender/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              
              {/* Espaço para a capa do ebook */}
              <div className="lg:w-2/5 p-8 flex items-center justify-center bg-gradient-to-br from-salmon/5 to-mint/5">
                  <img
                    src="/capa_do_ebook.png"
                    alt="Descrição da Capa do Ebook"
                    className="w-64 h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              
              {/* Conteúdo principal */}
              <div className="lg:w-3/5 p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <div className="flex text-salmon">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Mais de 1.000 mães transformadas</span>
                </div>
                
                <h2 className="font-serif font-bold text-3xl lg:text-4xl text-text-primary mb-6">
                  Transforme Sua Maternidade com Amor e Consciência
                </h2>
                
                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                  Descubra os segredos para uma maternidade plena, equilibrada e cheia de amor. 
                  Mais de 60 páginas com tudo que você precisa saber para viver essa fase com confiança.
                </p>
                
                {/* O que está incluído */}
                <div className="mb-8">
                  <h3 className="font-semibold text-text-primary mb-4 text-lg">O que você vai encontrar:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-text-secondary">Preparação emocional para a maternidade</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-text-secondary">Cuidados com o bebê recém-nascido</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-text-secondary">Alimentação e nutrição na gravidez</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-text-secondary">Exercícios e bem-estar físico</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-text-secondary">Confiança e Tranquilidade para os Primeiros Desafios</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-text-secondary">Sinta-se acolhida e confiante em cada passo</span>
                    </div>
                  </div>
                </div>
                
                {/* Preço */}
                <div className="flex items-center justify-between mb-8 p-4 bg-gradient-to-r from-salmon/10 to-mint/10 rounded-xl">
                  <div>
                    <span className="block text-text-secondary line-through text-lg">R$99,90</span>
                    <span className="block text-text-primary font-bold text-3xl">R$14,90</span>
                  </div>
                  <div className="bg-salmon text-white py-2 px-4 rounded-lg font-medium">
                    85% OFF
                  </div>
                </div>
                
                {/* Botão de compra */}
                <a
                    href="https://pay.kirvano.com/2dba0272-97c5-4621-8cac-cd478305607c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-mint hover:bg-mint/90 text-text-primary font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg text-lg mb-4 transform hover:scale-105 text-center"
                  >
                    Quero Meu Ebook Agora!
                  </a>
                {/* Segurança */}
                <div className="flex items-center justify-center text-sm text-text-secondary">
                  <Shield size={16} className="mr-2 text-mint" />
                  <span>Compra 100% segura pela Kirvano</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;