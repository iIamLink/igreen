import React from 'react';
import { motion } from 'motion/react';
import { Users, UserPlus } from 'lucide-react';

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-white px-8 md:px-12 lg:px-16 scroll-mt-24">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-igreen-950 mb-4 sm:mb-6 tracking-tight break-words">
            Como Funciona o Faturamento?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-light break-words">
            Modelos de ganhos simplificados, transparentes e altamente escaláveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-igreen-50 rounded-tl-[30px] sm:rounded-tl-[40px] md:rounded-tl-[60px] rounded-br-[30px] sm:rounded-br-[40px] md:rounded-br-[60px] rounded-tr-xl rounded-bl-xl p-6 sm:p-10 lg:p-14 border border-igreen-100 relative overflow-hidden group hover:bg-igreen-100 transition-colors duration-500 w-full min-w-0 flex flex-col items-center text-center"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-bl-[150px] -z-10 group-hover:scale-110 transition-transform duration-700" />
            
            <div className="w-20 h-20 bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm flex items-center justify-center text-igreen-primary mb-10 shadow-sm border border-igreen-50 mx-auto">
              <UserPlus className="w-10 h-10" />
            </div>
            
            <div className="inline-block px-4 py-1.5 bg-igreen-primary text-white text-xs font-bold uppercase tracking-widest rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm mb-6 shadow-md">
              Módulo 1
            </div>
            
            <h3 className="text-3xl font-black text-igreen-950 mb-6">
              Clientes Diretos
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
              Você receberá <strong className="text-igreen-primary font-bold">até 4%</strong> do valor pago na conta de energia de CADA cliente que você trouxer.
            </p>
            
            <ul className="space-y-4 text-igreen-900 font-medium">
               <li className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-igreen-primary" />
                  Renda passiva todos os meses
               </li>
               <li className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-igreen-primary" />
                  Sem limites territoriais no Brasil
               </li>
            </ul>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-igreen-950 rounded-tl-[30px] sm:rounded-tl-[40px] md:rounded-tl-[60px] rounded-br-[30px] sm:rounded-br-[40px] md:rounded-br-[60px] rounded-tr-xl rounded-bl-xl p-6 sm:p-10 lg:p-14 border border-igreen-900 relative overflow-hidden group hover:border-igreen-primary transition-colors duration-500 w-full min-w-0 flex flex-col items-center text-center"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-igreen-900 rounded-bl-[150px] -z-10 group-hover:scale-110 transition-transform duration-700" />
            
            <div className="w-20 h-20 bg-igreen-900 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm flex items-center justify-center text-igreen-neon mb-10 shadow-sm border border-igreen-800 mx-auto">
              <Users className="w-10 h-10" />
            </div>
            
            <div className="inline-block px-4 py-1.5 bg-igreen-neon text-igreen-950 text-xs font-bold uppercase tracking-widest rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm mb-6 shadow-md">
              Módulo 2
            </div>
            
            <h3 className="text-3xl font-black text-white mb-6">
              Formação de Equipe
            </h3>
            
            <p className="text-lg text-igreen-100/80 leading-relaxed mb-8 font-light">
              Expanda sua rede. Cadastre novos Licenciados e receba <strong className="text-igreen-neon font-bold">R$300,00</strong> de comissão bônus por indicação.
            </p>

            <div className="bg-igreen-900/50 p-6 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md border border-igreen-700/50 text-igreen-100 w-full">
               <p className="font-medium text-sm leading-relaxed">
                  Você também ganha um percentual sobre as contas de energia indicadas pela sua equipe de licenciados, <strong className="text-igreen-neon">até o 5º nível de profundidade</strong>.
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
