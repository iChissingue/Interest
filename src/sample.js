import React, { useState, useEffect } from 'react';

export default function Calculator() {
  // Guardamos apenas números puros nos estados para evitar erros de cálculo
  const [loanAmount, setLoanAmount] = useState(0);
  const [daysAmount, setDaysAmount] = useState(0);

  // Estados para os resultados numéricos
  const [regularInterest, setRegularInterest] = useState(0);
  const [moraInterest, setMoraInterest] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  // Função única e segura para exibir valores formatados na tela
  const formatCurrency = (value) => {
    return value.toLocaleString('pt-PT', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Efeito simples: roda a matemática pura sem máscaras de texto no meio
  useEffect(() => {
    const loan = parseFloat(loanAmount) || 0;
    const days = parseInt(daysAmount, 10) || 0;

    const regular = loan * 0.10;
    const mora = loan * (0.10 / 30) * days;
    const total = regular + mora;

    setRegularInterest(regular);
    setMoraInterest(mora);
    setTotalInterest(total);
  }, [loanAmount, daysAmount]);

   return (
    <div className="min-h-screen bg-gradient-to-tr from-emerald-50 via-teal-50 to-emerald-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-3xl p-8 shadow-xl shadow-emerald-900/5">
        
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <h2 className="text-slate-800 text-2xl font-bold tracking-tight">
            CALCULADORA DE JUROS
          </h2>
          <p className="text-emerald-600 text-sm font-medium mt-1">
            Mensais e de Mora
          </p>
        </div>

        {/* Formulário de Entradas */}
        <div className="space-y-5">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between shadow-sm">
            <label htmlFor="loan" className="text-slate-500 text-sm font-medium flex items-center gap-2">
              💵 Valor do Empréstimo (MT):
            </label>
            <input
              id="loan"
              type="number"
              value={loanAmount === 0 ? '' : loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="text-right text-slate-800 text-lg font-semibold w-1/2 focus:outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="0"
            />
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between shadow-sm">
            <label htmlFor="days" className="text-slate-500 text-sm font-medium flex items-center gap-2">
              📅 Dias de Atraso:
            </label>
            <input
              id="days"
              type="number"
              value={daysAmount === 0 ? '' : daysAmount}
              onChange={(e) => setDaysAmount(e.target.value)}
              min="0"
              className="text-right text-slate-800 text-lg font-semibold w-1/2 focus:outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="0"
            />
          </div>
        </div>

        <hr className="border-slate-200/60 my-6" />

        {/* Bloco de Resultados */}
        <div className="space-y-4">
          <h3 className="text-slate-800 text-center text-xs font-bold tracking-wider uppercase mb-2">
            Resultado
          </h3>

          <div className="flex justify-between items-center text-slate-600 text-sm px-2">
            <span>📈 Juros de 10%:</span>
            <span className="font-semibold text-slate-800">
              {formatCurrency(regularInterest)} MT
            </span>
          </div>

          <div className="flex justify-between items-center text-slate-600 text-sm px-2">
            <span>⚠️ Juros de Mora <span className="text-xs text-slate-400">({daysAmount || 0} dias)</span>:</span>
            <span className="font-semibold text-slate-800">
              {formatCurrency(moraInterest)} MT
            </span>
          </div>

          {/* Destaque do Total */}
          <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-4 flex justify-between items-center mt-6">
            <span className="text-emerald-800 font-bold text-base">
              Total de Juros:
            </span>
            <span className="text-emerald-600 font-extrabold text-xl">
              {formatCurrency(totalInterest)} MT
            </span>
          </div>
        </div>

      
        <p className="text-center text-slate-400 text-xs mt-6 tracking-wide">
          Only for MasterMind & Poupança Virtual purposes
        </p>
      </div>
    </div>
  );
}