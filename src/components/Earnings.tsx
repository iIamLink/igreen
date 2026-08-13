import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Store, 
  Beer, 
  ShoppingCart, 
  Hotel, 
  Building2, 
  GraduationCap, 
  Factory, 
  Home, 
  Target, 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  Zap,
  Users,
  Calendar,
  Sparkles
} from 'lucide-react';

const businessExamples = [
  { icon: Store, name: "1 Padaria", value: "R$ 4.500,00" },
  { icon: Beer, name: "1 Bar / Lanchonete", value: "R$ 3.000,00" },
  { icon: ShoppingCart, name: "1 Supermercado", value: "R$ 30.000,00" },
  { icon: Hotel, name: "1 Hotel / Pousada", value: "R$ 10.000,00" },
  { icon: Building2, name: "1 Condomínio", value: "R$ 20.000,00" },
  { icon: GraduationCap, name: "1 Escola", value: "R$ 10.000,00" },
  { icon: Factory, name: "1 Indústria", value: "R$ 20.000,00" },
];

export function Earnings() {
  const [activeTab, setActiveTab] = useState<'residential' | 'business'>('residential');
  const [cadastrosPorMes, setCadastrosPorMes] = useState<number>(15);

  const valorMedioConta = 300; // R$ 300 média residencial
  const comissaoPercentual = 0.04; // 4%
  const ganhoPorConta = valorMedioConta * comissaoPercentual; // R$ 12,00 por conta/mês
  const metaMensal = 5000; // R$ 5.000,00 por mês
  
  // Total de cadastros necessários para R$ 5.000/mês
  const totalCadastrosNecessarios = Math.ceil(metaMensal / ganhoPorConta); // 417 cadastros
  
  // Tempo exato em meses para atingir a meta
  const mesesParaMeta = Math.max(1, Math.ceil(totalCadastrosNecessarios / cadastrosPorMes));

  // Formatação humana de anos e meses (Ex: "2 anos e 4 meses" em vez de "2.3 anos")
  const formatarTempo = (totalMeses: number) => {
    const anos = Math.floor(totalMeses / 12);
    const meses = totalMeses % 12;
    
    if (anos === 0) {
      return `${meses} ${meses === 1 ? 'mês' : 'meses'}`;
    }
    if (meses === 0) {
      return `${anos} ${anos === 1 ? 'ano' : 'anos'}`;
    }
    return `${anos} ${anos === 1 ? 'ano' : 'anos'} e ${meses} ${meses === 1 ? 'mês' : 'meses'}`;
  };

  // Marcos de evolução ordenados cronologicamente sem ultrapassar a meta
  const step1 = Math.max(1, Math.round(mesesParaMeta * 0.25));
  const step2 = Math.max(step1 + 1, Math.round(mesesParaMeta * 0.5));
  const step3 = Math.max(step2 + 1, Math.round(mesesParaMeta * 0.75));

  const milestones = [
    {
      meses: step1,
      cadastros: Math.min(totalCadastrosNecessarios, step1 * cadastrosPorMes),
      isGoal: false,
    },
    {
      meses: step2,
      cadastros: Math.min(totalCadastrosNecessarios, step2 * cadastrosPorMes),
      isGoal: false,
    },
    {
      meses: step3,
      cadastros: Math.min(totalCadastrosNecessarios, step3 * cadastrosPorMes),
      isGoal: false,
    },
    {
      meses: mesesParaMeta,
      cadastros: totalCadastrosNecessarios,
      isGoal: true,
    }
  ];

  return (
    <section id="ganhos" className="py-16 sm:py-24 bg-white px-6 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden scroll-mt-24">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-igreen-50 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-2">
          <div className="inline-flex items-center gap-2 bg-igreen-50 border border-igreen-200 text-igreen-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-igreen-primary" />
            Simulador de Faturamento
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-igreen-950 mb-3 sm:mb-4 tracking-tight break-words">
            Seu Potencial de Ganhos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-normal break-words max-w-2xl mx-auto">
            Construa uma renda recorrente sólida. Veja a simulação com residências ou comércios da sua região.
          </p>

          {/* Navigation Toggle */}
          <div className="mt-8 inline-flex p-1.5 bg-gray-100/90 rounded-2xl border border-gray-200/80 shadow-inner">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('residential');
              }}
              className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-xl font-bold text-sm sm:text-base cursor-pointer transition-all duration-200 ${
                activeTab === 'residential'
                  ? 'bg-igreen-primary text-white shadow-md'
                  : 'text-gray-600 hover:text-igreen-950 hover:bg-gray-200/60'
              }`}
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Plano Residencial</span>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('business');
              }}
              className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-xl font-bold text-sm sm:text-base cursor-pointer transition-all duration-200 ${
                activeTab === 'business'
                  ? 'bg-igreen-primary text-white shadow-md'
                  : 'text-gray-600 hover:text-igreen-950 hover:bg-gray-200/60'
              }`}
            >
              <Store className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Plano Empresas</span>
            </button>
          </div>
        </div>

        {/* Tab Content Container */}
        <div className="w-full">
          {activeTab === 'residential' ? (
            /* Residential Plan View */
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start animate-in fade-in duration-200">
              {/* Left Column: Breakdown & Rhythm */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Highlight Card: Target R$ 5.000 */}
                <div className="bg-gradient-to-br from-igreen-950 to-igreen-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-igreen-800/60 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-igreen-500/15 rounded-full blur-[70px] pointer-events-none" />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-igreen-neon/20 border border-igreen-neon/30 flex items-center justify-center text-igreen-neon">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-igreen-400">Objetivo de Renda Recorrente</span>
                      <h3 className="text-xl sm:text-2xl font-black text-white">R$ 5.000,00 por mês</h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-igreen-100/90 leading-relaxed font-light mb-6">
                    Com contas de luz residenciais na média de <strong>R$ 300,00</strong>, cada cliente cadastrado gera para você <strong>R$ 12,00 todos os meses (4%)</strong> de forma 100% automática e vitalícia.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-igreen-800/80">
                    <div className="bg-igreen-900/60 rounded-2xl p-4 border border-igreen-700/40 text-center">
                      <div className="text-xs text-igreen-300 font-medium mb-1">Média por Conta</div>
                      <div className="text-xl sm:text-2xl font-black text-white">R$ 300,00</div>
                      <div className="text-[11px] text-igreen-400 mt-0.5">Residencial</div>
                    </div>
                    <div className="bg-igreen-900/60 rounded-2xl p-4 border border-igreen-700/40 text-center">
                      <div className="text-xs text-igreen-300 font-medium mb-1">Seu Ganho por Conta</div>
                      <div className="text-xl sm:text-2xl font-black text-igreen-neon">R$ 12,00</div>
                      <div className="text-[11px] text-igreen-400 mt-0.5">4% todo mês</div>
                    </div>
                    <div className="bg-igreen-900/60 rounded-2xl p-4 border border-igreen-700/40 text-center">
                      <div className="text-xs text-igreen-300 font-medium mb-1">Total de Cadastros</div>
                      <div className="text-xl sm:text-2xl font-black text-white">417</div>
                      <div className="text-[11px] text-igreen-400 mt-0.5">para R$ 5k/mês</div>
                    </div>
                  </div>
                </div>

                {/* Cadence & Speed Selector */}
                <div className="bg-igreen-50/70 border border-igreen-200/80 rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-igreen-950 flex items-center gap-2">
                        <Users className="w-5 h-5 text-igreen-primary" />
                        Ritmo de Cadastros por Mês
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        Quantos cadastros residenciais você planeja fazer mensalmente?
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-igreen-200 shadow-sm self-start sm:self-auto">
                      {[5, 10, 15, 20, 30, 50].map((qtd) => (
                        <button
                          key={qtd}
                          type="button"
                          onClick={() => setCadastrosPorMes(qtd)}
                          className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                            cadastrosPorMes === qtd
                              ? 'bg-igreen-primary text-white shadow-sm'
                              : 'text-gray-600 hover:text-igreen-950 hover:bg-gray-100'
                          }`}
                        >
                          {qtd}/mês
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pace Result Summary Banner */}
                  <div className="bg-white rounded-2xl p-5 border border-igreen-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-igreen-primary text-white flex items-center justify-center font-black text-xl flex-shrink-0">
                        {cadastrosPorMes}
                      </div>
                      <div>
                        <div className="font-bold text-igreen-950 text-sm sm:text-base">
                          {cadastrosPorMes} cadastros por mês
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500">
                          Equivale a 1 cadastro a cada {Math.max(1, Math.round(30 / cadastrosPorMes))} {Math.round(30 / cadastrosPorMes) === 1 ? 'dia' : 'dias'}
                        </div>
                      </div>
                    </div>

                    <div className="text-left sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 w-full sm:w-auto">
                      <div className="text-xs font-bold uppercase tracking-wider text-igreen-primary">Aumento na sua renda</div>
                      <div className="text-lg sm:text-xl font-black text-igreen-primary">
                        +R$ {(cadastrosPorMes * ganhoPorConta).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/mês
                      </div>
                      <div className="text-[11px] text-gray-500">adicionados todo mês</div>
                    </div>
                  </div>

                  {/* Milestones Timeline */}
                  <div className="mt-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-igreen-primary" />
                      Evolução da sua renda ao longo do tempo:
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                      {milestones.map((m, idx) => {
                        const valorMes = Math.min(metaMensal, m.cadastros * ganhoPorConta);
                        return (
                          <div 
                            key={idx} 
                            className={`p-3.5 rounded-2xl border text-center transition-all ${
                              m.isGoal 
                                ? 'bg-igreen-primary text-white border-igreen-primary shadow-md ring-2 ring-igreen-neon' 
                                : 'bg-white text-igreen-950 border-igreen-100 shadow-sm'
                            }`}
                          >
                            <div className={`text-[11px] font-bold uppercase tracking-wide mb-1 ${m.isGoal ? 'text-igreen-neon' : 'text-gray-400'}`}>
                              {m.isGoal ? 'Meta Atingida' : `${m.meses} ${m.meses === 1 ? 'Mês' : 'Meses'}`}
                            </div>
                            <div className="font-black text-base sm:text-lg">
                              R$ {valorMes.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                            </div>
                            <div className={`text-[10px] mt-0.5 font-medium ${m.isGoal ? 'text-white/90' : 'text-gray-500'}`}>
                              {m.meses} {m.meses === 1 ? 'mês' : 'meses'} • {m.cadastros >= totalCadastrosNecessarios ? `${totalCadastrosNecessarios} clientes` : `${m.cadastros} clientes`}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

              </div>

              {/* Right Column: Execution Card & Summary */}
              <div className="lg:col-span-5">
                <div className="bg-igreen-950 rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl border border-igreen-800/80 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-52 h-52 bg-igreen-neon/10 rounded-full blur-[60px] pointer-events-none" />

                  <div className="flex items-center gap-2 text-igreen-neon text-xs font-bold uppercase tracking-widest mb-6">
                    <Clock className="w-4 h-4" />
                    Tempo Estimado para a Meta
                  </div>

                  <div className="text-center py-5 bg-igreen-900/50 rounded-2xl border border-igreen-800/60 mb-6">
                    <div className="text-xs text-igreen-300 uppercase tracking-wider font-semibold mb-1.5">
                      Fazendo {cadastrosPorMes} cadastros por mês
                    </div>
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                      {mesesParaMeta} <span className="text-2xl sm:text-3xl text-igreen-neon font-bold">meses</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-igreen-950/80 border border-igreen-primary/40 text-xs sm:text-sm text-igreen-neon font-bold">
                      <Clock className="w-3.5 h-3.5 text-igreen-neon" />
                      <span>{formatarTempo(mesesParaMeta)}</span>
                    </div>
                  </div>

                  {/* Summary Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-igreen-100/90">
                      <CheckCircle2 className="w-4 h-4 text-igreen-neon flex-shrink-0 mt-0.5" />
                      <span><strong>417 clientes ativos</strong> pagando em média R$ 300/mês de energia.</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-igreen-100/90">
                      <CheckCircle2 className="w-4 h-4 text-igreen-neon flex-shrink-0 mt-0.5" />
                      <span><strong>R$ 125.100,00</strong> em volume total de energia sob sua gestão mensal.</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-igreen-100/90">
                      <CheckCircle2 className="w-4 h-4 text-igreen-neon flex-shrink-0 mt-0.5" />
                      <span><strong>R$ 5.004,00 todos os meses</strong> depositados na sua conta recorrentemente.</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-igreen-100/90">
                      <CheckCircle2 className="w-4 h-4 text-igreen-neon flex-shrink-0 mt-0.5" />
                      <span>Sem precisar cobrar ou vender produto físico. A concessionária faz a compensação.</span>
                    </div>
                  </div>

                  {/* Big Final Total Highlight */}
                  <div className="border-t border-igreen-800/80 pt-6 text-center">
                    <div className="text-xs text-igreen-400 font-bold uppercase tracking-wider mb-1">
                      Renda Recorrente Conquistada
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-igreen-200 to-igreen-neon">
                      R$ 5.000,00 <span className="text-base sm:text-lg font-bold text-igreen-400">/ mês</span>
                    </div>
                    <p className="text-[11px] text-igreen-300/70 font-light mt-3 leading-relaxed">
                      * O cliente economiza até 15% na conta de luz dele sem gastar 1 centavo, garantindo altíssima fidelização e retenção da sua carteira.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* Business Plan View */
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start animate-in fade-in duration-200">
              {/* Examples Grid */}
              <div className="lg:col-span-7">
                <div className="flex items-center justify-between mb-6 px-2">
                  <h3 className="text-2xl font-bold text-igreen-950">Exemplos de Negócios Locais</h3>
                  <span className="text-xs font-semibold bg-igreen-100 text-igreen-primary px-3 py-1 rounded-full">Comércios da Região</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {businessExamples.map((item, index) => (
                    <div
                      key={index}
                      className="bg-igreen-50/80 border border-igreen-100 rounded-2xl p-4 sm:p-5 flex items-center gap-4 hover:border-igreen-primary/40 hover:bg-white hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-igreen-primary flex-shrink-0 group-hover:bg-igreen-primary group-hover:text-white transition-colors duration-300">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-igreen-950 text-base truncate">{item.name}</div>
                        <div className="text-xs sm:text-sm text-gray-500 font-medium">Média da conta: {item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Calculation Box */}
              <div className="lg:col-span-5 relative">
                <div className="bg-igreen-950 rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden w-full flex flex-col items-center text-center">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-igreen-500/20 rounded-full blur-[80px] pointer-events-none" />

                  <h3 className="text-xl font-bold text-igreen-400 mb-6 sm:mb-8 uppercase tracking-widest text-xs sm:text-sm">
                    Cenário com Comércios
                  </h3>
                  
                  <div className="space-y-6 sm:space-y-7 relative z-10 w-full flex flex-col items-center">
                    <div>
                      <div className="text-igreen-100/70 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1">
                        Total de Contas (Soma dos Exemplos)
                      </div>
                      <div className="text-3xl sm:text-4xl font-black tracking-tight break-words">
                        R$ 97.500,00
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 text-igreen-neon w-full max-w-[200px]">
                      <div className="h-[2px] bg-igreen-800 flex-1" />
                      <div className="font-black text-xl">x 4%</div>
                      <div className="h-[2px] bg-igreen-800 flex-1" />
                    </div>

                    <div>
                      <div className="text-igreen-100/70 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1">
                        Comissão Recorrente Mensal
                      </div>
                      <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-igreen-300 tracking-tight break-words">
                        R$ 3.900<span className="text-2xl">,00</span>
                      </div>
                      <div className="mt-1 text-sm sm:text-base text-igreen-400 font-bold">/ todo mês</div>
                    </div>
                  </div>

                  <div className="mt-8 bg-igreen-900/60 rounded-xl p-4 text-xs text-igreen-100/80 leading-relaxed border border-igreen-800/50 relative z-10 font-light w-full text-left">
                    * Comércios e indústrias consom faturas maiores, acelerando ainda mais sua renda recorrente com menos cadastros necessários.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
