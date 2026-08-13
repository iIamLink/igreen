import React, { useState } from 'react';
import { Star, Quote, Play, CheckCircle2, UserCheck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  city: string;
  metric: string;
  metricLabel: string;
  quote: string;
  hasVideo?: boolean;
  videoUrl?: string; // Espaço reservado para URL do vídeo do YouTube / Vimeo / MP4
  avatarUrl?: string; // Espaço reservado para foto real do licenciado
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Eduardo',
    role: 'Licenciado Master',
    city: 'Sorocaba - SP',
    metric: 'R$ 8.400+',
    metricLabel: 'Renda recorrente mensal',
    quote: 'Comecei indicando apenas para amigos e comércios da minha rua. Em menos de 8 meses, construí uma base que paga minhas contas com energia limpa todos os meses no piloto automático.',
    hasVideo: true,
    rating: 5,
  },
  {
    id: 2,
    name: 'Juliana Mendes',
    role: 'Licenciada Executiva',
    city: 'Belo Horizonte - MG',
    metric: '140+ Clientes',
    metricLabel: 'Ativos na carteira',
    quote: 'O que mais me impressionou foi a facilidade de venda: eu não vendo nada, eu ofereço desconto sem custo para o cliente. A adesão é altíssima e o suporte da iGreen é impecável.',
    hasVideo: true,
    rating: 5,
  },
  {
    id: 3,
    name: 'Roberto Silveira',
    role: 'Licenciado iGreen',
    city: 'Campinas - SP',
    metric: 'R$ 5.200+',
    metricLabel: 'Comissão mensal',
    quote: 'Trabalho em tempo parcial enquanto mantenho meu emprego formal. A licença iGreen me deu a liberdade financeira que eu buscava há anos sem precisar de estoque nem cobrança.',
    hasVideo: false,
    rating: 5,
  },
  {
    id: 4,
    name: 'Fernanda Rocha',
    role: 'Licenciada iGreen',
    city: 'Goiânia - GO',
    metric: '95 Clientes',
    metricLabel: 'Residenciais e PMEs',
    quote: 'A melhor decisão que tomei no último ano. Conectei padarias, mercados e residências. É o único modelo onde todo mundo ganha: o cliente economiza e eu recebo todo dia 15.',
    hasVideo: true,
    rating: 5,
  },
  {
    id: 5,
    name: 'Marcos Vinicius',
    role: 'Licenciado Sênior',
    city: 'Curitiba - PR',
    metric: 'R$ 12.000+',
    metricLabel: 'Recorrência mensal',
    quote: 'Com o treinamento inicial e a plataforma digital, consegui expandir minha carteira para outros estados sem sair de casa. O mercado de energia solar por assinatura é gigantesco.',
    hasVideo: false,
    rating: 5,
  },
];

export function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);

  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-igreen-50 px-6 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden scroll-mt-24">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-igreen-100 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-igreen-100 rounded-full blur-[90px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-igreen-primary/20 text-igreen-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-sm">
            <UserCheck className="w-4 h-4 text-igreen-primary" />
            <span>Histórias Reais de Sucesso</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-igreen-950 mb-4 sm:mb-6 tracking-tight">
            O que dizem os nossos <span className="text-igreen-primary">Licenciados</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Pessoas comuns que transformaram suas realidades financeiras levando economia e sustentabilidade para famílias e empresas de todo o Brasil.
          </p>
        </div>

        {/* Testimonials Grid (5 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {testimonialsData.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md hover:shadow-xl hover:border-igreen-primary/40 transition-all duration-300 flex flex-col justify-between relative group ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Top Quote Icon & Rating */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-igreen-50 flex items-center justify-center text-igreen-primary group-hover:bg-igreen-primary group-hover:text-white transition-colors duration-300">
                    <Quote className="w-5 h-5" />
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-medium italic">
                  "{item.quote}"
                </p>

                {/* Metric Badge */}
                <div className="mb-6 p-3.5 rounded-2xl bg-igreen-50/70 border border-igreen-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-500 font-semibold block uppercase tracking-wider">{item.metricLabel}</span>
                    <span className="text-lg sm:text-xl font-black text-igreen-primary">{item.metric}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-igreen-primary shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-igreen-primary" />
                  </div>
                </div>

                {/* Placeholder para Vídeo ou Mídia Futura */}
                {item.hasVideo && (
                  <div 
                    onClick={() => setSelectedVideo(item)}
                    className="mb-6 rounded-2xl bg-igreen-950 text-white p-4 flex items-center justify-between cursor-pointer hover:bg-igreen-900 transition-colors group/media"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setSelectedVideo(item);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-igreen-primary text-white flex items-center justify-center shadow group-hover/media:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-igreen-neon uppercase tracking-wider">Depoimento em Vídeo</div>
                        <div className="text-xs text-igreen-100/80">Clique para assistir relato completo</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Author Footer */}
              <div className="pt-5 border-t border-gray-100 flex items-center gap-3.5">
                {/* Avatar Placeholder / Foto */}
                <div className="w-12 h-12 rounded-full bg-igreen-primary text-white font-black text-base flex items-center justify-center shadow-md flex-shrink-0">
                  {item.avatarUrl ? (
                    <img 
                      src={item.avatarUrl} 
                      alt={item.name} 
                      className="w-full h-full object-cover rounded-full" 
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span>{item.name.split(' ').map(n => n[0]).join('')}</span>
                  )}
                </div>

                <div>
                  <h4 className="font-bold text-igreen-950 text-sm sm:text-base leading-tight">
                    {item.name}
                  </h4>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">
                    <span className="text-igreen-primary font-bold">{item.role}</span> • {item.city}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="mt-12 sm:mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-igreen-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-igreen-950">
              Quer fazer parte desse time de licenciados de sucesso?
            </h3>
            <p className="text-sm text-gray-600">
              Converse com nosso time e conheça como funciona a licença passo a passo.
            </p>
          </div>

          <a
            href="https://wa.me/5515992379990?text=Ol%C3%A1%2C%20vi%20os%20depoimentos%20dos%20licenciados%20e%20gostaria%20de%20tirar%20d%C3%BAvidas"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-igreen-neon text-igreen-950 font-black text-sm uppercase tracking-wider hover:bg-igreen-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg flex-shrink-0"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Quero ser Licenciado</span>
          </a>
        </div>

      </div>

      {/* Modal Placeholder para Reprodução de Vídeos Futuros */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="bg-igreen-950 text-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-igreen-800 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold p-2"
              aria-label="Fechar"
            >
              ✕
            </button>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-igreen-primary text-white flex items-center justify-center mx-auto shadow-lg">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>

              <h4 className="text-xl font-bold text-white">
                Depoimento de {selectedVideo.name}
              </h4>
              
              <p className="text-sm text-igreen-100/80 leading-relaxed">
                Este espaço está preparado para a reprodução do vídeo ou anexo de depoimento gravado ({selectedVideo.city}).
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  className="px-6 py-2.5 rounded-xl bg-igreen-primary text-white font-bold text-sm hover:bg-igreen-700 transition-colors"
                >
                  Fechar Visualização
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
