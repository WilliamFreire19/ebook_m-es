import React from "react";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const contentElement = document.getElementById("sobre");
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-background flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/background.jpeg')`,
        }}
      />{" "}
      {/* Div da imagem de fundo. Pode ser auto-fechada se não tiver filhos diretos. */}
      {/* EFEITO ESFUMAÇADO INFERIOR */}
      <div
        className="absolute bottom-0 left-0 w-full h-[25%] z-0" // Ajuste a altura (h-[25%]) conforme necessário
        style={{
          background: `linear-gradient(to top, #F8F4EC 10%, transparent 100%)`,
          // Opcional: para um esfumaçado mais suave começando mais opaco:
          // background: `linear-gradient(to top, #F8F4EC 0%, rgba(248, 244, 236, 0) 70%)`,
        }}
      />
      {/* FIM DO EFEITO ESFUMAÇADO */}
      {/* Decorative shapes */}
      {/* Estas formas decorativas ficarão sobre o efeito esfumaçado se não tiverem z-index ou se vierem depois no DOM */}
      <div className="absolute top-32 -left-16 w-64 h-64 rounded-full bg-mint opacity-40 blur-2xl animate-float"></div>
      <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-salmon opacity-30 blur-3xl animate-float-delay"></div>
      <div className="absolute top-1/3 right-10 w-40 h-40 rounded-full bg-sky opacity-30 blur-xl animate-float"></div>
      {/* Conteúdo Principal (com z-1, ficará sobre o esfumaçado e as formas) */}
      <div className="container mx-auto px-4 md:px-6 relative z-1">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight mb-6">
            Maternidade com Amor e Consciência
          </h1>

          <h2 className="font-serif italic text-xl md:text-2xl text-text-secondary mb-8">
            O Guia Essencial para a Sua Jornada de Primeira Viagem
          </h2>

          <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
            Navegue pela gravidez, parto e primeiros meses com a confiança e o
            apoio que você merece. Um companheiro indispensável criado por quem
            entende tanto a ciência quanto o coração de mãe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#cta"
              className="bg-mint hover:bg-mint/90 text-text-primary font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg text-lg"
            >
              Quero o meu Ebook Agora!
            </a>

            <a
              href="#sobre"
              className="bg-transparent hover:bg-lavender/30 text-text-primary border-2 border-lavender py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg text-lg"
            >
              Saber Mais
            </a>
          </div>
        </div>

        <div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={scrollToContent}
        >
          <ChevronDown className="text-text-primary opacity-70" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
