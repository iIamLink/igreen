import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Laptop, 
  Globe, 
  GraduationCap, 
  Calendar, 
  Briefcase, 
  Headset, 
  MapPin 
} from 'lucide-react';

const benefits = [
  {
    icon: ShieldCheck,
    title: "Direito de Uso da Marca",
    description: "Associe-se a uma marca forte e reconhecida no mercado nacional de energia renovável."
  },
  {
    icon: Laptop,
    title: "Escritório Web 24h",
    description: "Painel web completo para gerenciar clientes, simulações e comissões em tempo real."
  },
  {
    icon: Globe,
    title: "Plataforma Digital & Web",
    description: "Conexões, cadastros e envio de propostas 100% online em qualquer navegador ou dispositivo."
  },
  {
    icon: GraduationCap,
    title: "Universidade iGreen",
    description: "Capacitação completa em produtos, mercado de energia e vendas para alavancar seus resultados."
  },
  {
    icon: Calendar,
    title: "Agenda de Apresentações",
    description: "Ferramenta com flipchart digital integrado para apresentações web e presenciais de alto impacto."
  },
  {
    icon: Briefcase,
    title: "Marketing Kit Digital",
    description: "Acesso a materiais gráficos, vídeos e peças publicitárias para divulgação web e redes sociais."
  },
  {
    icon: Headset,
    title: "Suporte Especializado",
    description: "Atendimento ágil e humanizado tanto para você quanto para sua carteira de clientes."
  },
  {
    icon: MapPin,
    title: "Pontos de Apoio",
    description: "Estrutura física e lojas conceituais disponíveis em polos estratégicos do Brasil."
  }
];

export function Benefits() {
  return (
    <section id="vantagens" className="py-16 sm:py-24 bg-igreen-50 px-8 md:px-12 lg:px-16 relative scroll-mt-24">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-igreen-950 mb-4 sm:mb-6 tracking-tight break-words">
            Liberdade Financeira + <br className="hidden sm:block" />
            <span className="text-igreen-primary">Mundo Sustentável</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-light break-words">
            Toda a infraestrutura de uma empresa bilionária trabalhando a seu favor. Você foca em relacionamentos e negócios, nós entregamos a tecnologia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white p-8 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md border-2 border-transparent hover:border-igreen-primary hover:shadow-[0_20px_40px_rgba(0,135,68,0.1)] transition-all duration-300 group cursor-default flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm bg-igreen-100 text-igreen-primary flex items-center justify-center mb-8 mx-auto group-hover:bg-igreen-primary group-hover:text-white transition-colors duration-300">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-igreen-950 mb-3 group-hover:text-igreen-primary transition-colors">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
