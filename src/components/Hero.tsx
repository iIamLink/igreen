import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Zap, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section id="inicio" className="relative min-h-[90vh] lg:min-h-0 bg-igreen-950 flex flex-col justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20">
      {/* Dynamic Background Tech-Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff661a_1px,transparent_1px),linear-gradient(to_bottom,#00ff661a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Glowing Energy Orb */}
      <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-igreen-neon/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[30vw] bg-igreen-primary/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 py-16 sm:py-20 lg:py-12 xl:py-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24 text-center lg:text-left">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex-1 w-full min-w-0 flex flex-col items-center lg:items-start"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm bg-igreen-900/80 border border-igreen-800 text-igreen-neon text-sm font-bold uppercase tracking-wider mb-8 backdrop-blur-md">
            <Zap className="w-4 h-4 fill-igreen-neon" />
            <span>O Futuro da Energia</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6 sm:mb-8 break-words text-center lg:text-left">
            Energia que <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-igreen-neon to-white">
              Gera Renda.
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-igreen-100/70 max-w-xl mb-10 sm:mb-12 font-light leading-relaxed text-center lg:text-left">
            Seja um Licenciado <strong className="text-white font-semibold">iGreen Energy</strong>. Construa liberdade financeira levando economia real para residências e empresas.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 w-full">
            <Button 
              variant="neon"
              size="lg" 
              className="w-full sm:w-auto shadow-[0_0_20px_rgba(0,255,102,0.3)]"
              icon={<WhatsAppIcon className="w-6 h-6" />}
              href="https://wa.me/5515992379990?text=Ol%C3%A1%2C%20tenho%20d%C3%BAvidas%20sobre%20a%20licen%C3%A7a%20da%20Igreen"
            >
              Falar com Consultor
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="w-full sm:w-auto border-igreen-primary text-white hover:bg-igreen-primary hover:text-white"
              href="#vantagens"
            >
              Descobrir Vantagens
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-md md:flex-1 md:max-w-none relative mx-auto"
        >
          {/* Hero Value Card */}
          <div className="relative w-full">
            <div className="relative bg-gradient-to-br from-igreen-900/90 via-igreen-950 to-[#06180e] rounded-3xl sm:rounded-[36px] shadow-2xl overflow-hidden border border-igreen-800/60 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl">
              
              {/* Header inside Card */}
              <div className="flex justify-between items-center gap-2 pb-5 border-b border-igreen-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-igreen-800/40 rounded-xl flex items-center justify-center border border-igreen-700/50 flex-shrink-0 text-igreen-neon">
                    <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm sm:text-base">Geração Distribuída</div>
                    <div className="text-xs text-igreen-100/80 font-medium">Modelo de Negócio Sustentável</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-igreen-900/80 border border-igreen-700/60 px-3 py-1.5 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-igreen-neon animate-pulse flex-shrink-0" />
                  <span className="text-igreen-neon text-xs font-semibold whitespace-nowrap">Conexão Ativa</span>
                </div>
              </div>

              {/* Two Explanatory Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full mt-6">
                
                {/* 15% Desconto */}
                <div className="bg-igreen-950/70 p-5 sm:p-6 rounded-2xl border border-igreen-800/70 flex flex-col justify-between text-left relative overflow-hidden group hover:border-igreen-primary/50 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-igreen-neon bg-igreen-900/60 px-2.5 py-1 rounded-md border border-igreen-800">
                      Para o Cliente
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">Sem custo de adesão</span>
                  </div>
                  
                  <div className="my-2">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                      Até 15%
                    </div>
                    <div className="text-sm font-semibold text-igreen-neon mt-1">
                      Desconto na Conta de Luz
                    </div>
                  </div>

                  <p className="text-xs text-gray-300/90 leading-relaxed font-light mt-2 pt-2 border-t border-igreen-900/80">
                    O cliente economiza todos os meses sem precisar instalar placas solares e sem pagar taxas.
                  </p>
                </div>

                {/* 4% Comissão */}
                <div className="bg-gradient-to-br from-igreen-900/60 to-igreen-950/90 p-5 sm:p-6 rounded-2xl border border-igreen-primary/60 flex flex-col justify-between text-left relative overflow-hidden group hover:border-igreen-neon/50 transition-colors shadow-lg">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-igreen-neon bg-igreen-950/80 px-2.5 py-1 rounded-md border border-igreen-primary/60">
                      Para o Licenciado
                    </span>
                    <span className="text-[11px] text-igreen-neon/80 font-medium">Recorrente vitalício</span>
                  </div>

                  <div className="my-2">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                      Até 4%
                    </div>
                    <div className="text-sm font-semibold text-igreen-neon mt-1">
                      Comissão Mensal Contínua
                    </div>
                  </div>

                  <p className="text-xs text-gray-300/90 leading-relaxed font-light mt-2 pt-2 border-t border-igreen-900/80">
                    Você recebe uma porcentagem sobre todas as contas pagas pela sua carteira de clientes, mês a mês.
                  </p>
                </div>

              </div>

              {/* Bottom Subtle Note */}
              <div className="mt-5 pt-4 border-t border-igreen-800/40 flex items-center justify-between text-xs text-igreen-200/70">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-igreen-neon" />
                  Homologado pelo marco legal da energia limpa
                </span>
                <span className="hidden sm:inline font-medium text-igreen-neon/80">100% Digital</span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
