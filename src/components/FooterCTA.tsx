import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { WhatsAppIcon } from './WhatsAppIcon';

export function FooterCTA() {
  return (
    <section className="py-16 sm:py-24 bg-igreen-50 px-8 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Decorative large leaf shape in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square bg-igreen-100/50 rounded-tl-[150px] md:rounded-tl-[300px] rounded-br-[150px] md:rounded-br-[300px] rounded-tr-[50px] rounded-bl-[50px] rotate-45 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-igreen-950 mb-6 sm:mb-8 tracking-tight break-words">
            Seu Futuro Começa <span className="text-igreen-primary">Hoje</span>.
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 sm:mb-12 font-light leading-relaxed max-w-2xl mx-auto break-words">
            Faça seu cadastro agora. Leve economia real de até 15% para a sua região e garanta uma renda recorrente sólida com a iGreen Energy.
          </p>

          <div className="bg-white p-6 sm:p-10 md:p-12 rounded-tl-[30px] md:rounded-tl-[60px] rounded-br-[30px] md:rounded-br-[60px] rounded-tr-xl rounded-bl-xl shadow-[0_20px_50px_rgba(0,160,74,0.1)] border-2 border-igreen-50 mb-10 w-full min-w-0 flex flex-col items-center text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-igreen-950 mb-2 sm:mb-3 break-words">Pronto para dar o próximo passo?</h3>
            <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 font-medium break-words">Nossa equipe está online agora no WhatsApp para tirar todas as suas dúvidas.</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full">
               <Button 
                 size="lg" 
                 className="w-full sm:w-auto px-12"
                 href="https://expansao.igreenenergy.com.br/?id=154185&checkout=true&tipolicenca=CONNECT"
               >
                 Quero ser Licenciado
               </Button>
               <Button 
                 size="lg" 
                 variant="outline"
                 className="w-full sm:w-auto px-12"
                 icon={<WhatsAppIcon className="w-5 h-5 text-igreen-primary" />}
                 href="https://wa.me/5515992379990?text=Ol%C3%A1%2C%20tenho%20d%C3%BAvidas%20sobre%20a%20licen%C3%A7a%20da%20Igreen"
               >
                 Tirar Dúvidas
               </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
