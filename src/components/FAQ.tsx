import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Button } from './ui/Button';

const faqs = [
  {
    question: "O que é a iGreen Energy e como funciona a energia solar compartilhada?",
    answer: "A iGreen Energy é uma empresa de tecnologia sustentável pioneira na distribuição de créditos de energia limpa (solar). Nós conectamos fazendas solares diretamente à rede da concessionária local. O cliente final não precisa fazer obras nem gastar com painéis solares; os créditos são abatidos diretamente na conta de luz tradicional dele."
  },
  {
    question: "O cliente final paga alguma taxa para ter o desconto?",
    answer: "Zero reais. A adesão é 100% gratuita, sem taxa de matrícula, sem fidelidade e sem necessidade de comprar nenhum equipamento. Ele apenas transfere parte da sua fatura para receber os créditos com até 15% de desconto garantido."
  },
  {
    question: "Como e quando recebo as minhas comissões como licenciado?",
    answer: "Todos os meses, quando os clientes da sua carteira pagam a conta de luz com desconto, a comissão recorrente (até 4%) é calculada e creditada diretamente na sua conta bancária. Enquanto o cliente estiver economizando e consumindo energia, você continuará faturando mês a mês."
  },
  {
    question: "Posso cadastrar residências e empresas de outros estados?",
    answer: "Sim! A iGreen atua em diversas regiões e concessionárias do Brasil. Como o cadastro é 100% digital pelo celular através de um link ou foto da conta de luz, você pode cadastrar pessoas físicas e jurídicas em qualquer estado atendido pela iGreen."
  },
  {
    question: "Preciso ter experiência prévia em vendas ou no setor elétrico?",
    answer: "Não! Ao adquirir sua licença de negócio, você tem acesso à Universidade iGreen com treinamentos em vídeo passo a passo, materiais de divulgação prontos, scripts de abordagem e mentoria de líderes para você começar do absoluto zero."
  },
  {
    question: "Como funciona a formação de equipe e os bônus de indicação?",
    answer: "Além de cadastrar clientes diretamente, você pode convidar novos parceiros para também se tornarem licenciados. Você ganha R$ 300,00 de bônus imediato por indicação e passa a receber um percentual das contas de energia geradas pela equipe até o 5º nível de profundidade."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-16 sm:py-24 bg-igreen-50/50 px-6 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden scroll-mt-24">
      <div className="max-w-[1000px] mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-igreen-100 text-igreen-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4 text-igreen-primary" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-igreen-950 mb-4 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-normal">
            Tudo o que você precisa saber sobre o modelo de licenciamento e a economia de energia da iGreen.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-igreen-100 shadow-sm overflow-hidden transition-all duration-200 hover:border-igreen-primary/40"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-base sm:text-lg text-igreen-950">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-igreen-primary text-white rotate-180' : 'bg-igreen-50 text-igreen-primary'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions CTA (visível apenas em mobile) */}
        <div className="mt-12 md:hidden bg-white rounded-2xl p-6 border border-igreen-200 text-center shadow-md flex flex-col items-center justify-between gap-4">
          <div className="text-center">
            <h4 className="text-lg font-bold text-igreen-950 mb-1">Ainda tem alguma pergunta específica?</h4>
            <p className="text-sm text-gray-600">Nossa equipe de consultores pode esclarecer todas as suas dúvidas pelo WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/5515992379990?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20a%20iGreen"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-igreen-primary text-white font-bold text-sm hover:bg-igreen-700 transition-all shadow-md"
          >
            <WhatsAppIcon className="w-5 h-5 text-white" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
