import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { ArrowRight, Globe } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-white px-8 md:px-12 lg:px-16 scroll-mt-24">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="bg-igreen-950 rounded-tl-[30px] sm:rounded-tl-[40px] md:rounded-tl-[80px] rounded-br-[30px] sm:rounded-br-[40px] md:rounded-br-[80px] rounded-tr-xl rounded-bl-xl p-8 sm:p-10 md:p-16 lg:p-24 relative overflow-hidden shadow-2xl w-full">
          
          {/* Tech/Eco Pattern */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="absolute top-0 right-0 w-[800px] h-[800px] border-[100px] border-igreen-900 rounded-full translate-x-1/3 -translate-y-1/3" />
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] border-[60px] border-igreen-900 rounded-full -translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 xl:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full min-w-0 flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="inline-flex items-center justify-center lg:justify-start gap-2.5 text-igreen-neon font-bold uppercase tracking-widest text-xs sm:text-sm mb-6">
                <Globe className="w-5 h-5 flex-shrink-0" />
                <span className="leading-none mt-0.5 whitespace-nowrap">Impacto Nacional</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 leading-[1.15] break-words">
                Uma Revolução chamada <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-igreen-neon to-white">iGreen Energy</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-igreen-100 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8 sm:mb-10 break-words">
                <p>
                  A iGreen Energy nasceu em Minas Gerais com o propósito claro de transformar o mundo. Com estrutura robusta e organização impecável, já dominamos MG, GO, MS, MT, PE, RJ, SP e estamos expandindo para todo o Brasil.
                </p>
                <p className="font-medium text-white">
                  Nossa missão é democratizar o acesso à energia limpa (solar e eólica) <span className="text-igreen-neon">sem nenhum custo de investimento</span> para o consumidor final.
                </p>
              </div>

              <div className="flex justify-center w-full lg:justify-start">
                <Button 
                  variant="neon"
                  size="lg" 
                  className="w-full sm:w-auto"
                  href="https://expansao.igreenenergy.com.br/?id=154185&checkout=true&tipolicenca=CONNECT"
                  icon={<ArrowRight className="w-6 h-6" />}
                >
                  Junte-se a nós
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block h-full min-h-[450px] w-full min-w-0"
            >
              <div className="absolute inset-0 bg-igreen-900/40 rounded-tl-[60px] rounded-br-[60px] rounded-tr-xl rounded-bl-xl border border-igreen-800/60 backdrop-blur-md p-10 flex flex-col justify-center gap-8 w-full overflow-hidden">
                 <div className="bg-igreen-950/80 p-8 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md border border-igreen-800/80 hover:border-igreen-500/50 transition-colors w-full">
                    <h4 className="text-igreen-400 font-bold text-xl mb-3 tracking-wide uppercase">Nossa Visão</h4>
                    <p className="text-igreen-100 font-light text-lg">Liderar a transição energética brasileira com tecnologia, transparência e sustentabilidade em cada lar.</p>
                 </div>
                 <div className="bg-igreen-950/80 p-8 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md border border-igreen-800/80 hover:border-igreen-500/50 transition-colors transform translate-x-8">
                    <h4 className="text-igreen-400 font-bold text-xl mb-3 tracking-wide uppercase">Nosso Propósito</h4>
                    <p className="text-igreen-100 font-light text-lg">Criar a maior rede de empreendedores sustentáveis, gerando riqueza enquanto protegemos o planeta.</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
