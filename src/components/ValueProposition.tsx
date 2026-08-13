import React from 'react';
import { motion } from 'motion/react';
import { Percent, Zap, TrendingUp } from 'lucide-react';

export function ValueProposition() {
  return (
    <section id="saiba-mais" className="py-16 sm:py-24 bg-white px-8 md:px-12 lg:px-16 relative overflow-hidden scroll-mt-24">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-igreen-50 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto relative z-10 w-full">
        <div className="grid gap-12 sm:gap-16 lg:gap-16 xl:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl mx-auto min-w-0 flex flex-col items-center text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-igreen-primary" />
              <span className="text-igreen-primary font-bold uppercase tracking-widest text-sm">Oportunidade Única</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-igreen-950 leading-[1.15] mb-6 sm:mb-8 break-words text-center">
              Transforme a conta de energia dos seus vizinhos em <span className="text-igreen-primary">lucro</span>.
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 font-light leading-relaxed break-words text-center">
              Você pode gerar até <strong>15% de desconto</strong> para o cliente na conta de luz e receber uma comissão recorrente todos os meses, <span className="text-igreen-primary font-medium border-b-2 border-igreen-primary/30">sem vender nenhum produto físico.</span>
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 w-full text-center">
              <div className="flex flex-col items-center gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md bg-igreen-50 flex items-center justify-center text-igreen-primary group-hover:bg-igreen-primary group-hover:text-white transition-colors duration-300">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-igreen-950 mb-2">Desconto Imbatível</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Ofereça economia real e sem taxas de adesão para residências, comércios e indústrias da sua região.</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md bg-igreen-50 flex items-center justify-center text-igreen-primary group-hover:bg-igreen-primary group-hover:text-white transition-colors duration-300">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-igreen-950 mb-2">Renda Recorrente</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Sua carteira de clientes gera comissões mensais automáticas. Eles economizam, você fatura.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
