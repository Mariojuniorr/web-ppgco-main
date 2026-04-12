"use client";

import { useState } from "react";
import { BookOpen, CheckCircle2, AlertCircle, Clock, User, FileText, Plus, X } from "lucide-react";

export function DisciplinasContainer() {
  const [filterStatus, setFilterStatus] = useState("Todas");
  const [filterType, setFilterType] = useState("Todos os Tipos");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24 transition-colors duration-300">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-[#110c26] dark:text-white tracking-tight mb-2">
              Minhas Disciplinas
            </h1>
            <p className="text-[#3c4257] dark:text-gray-400 font-medium">
              Acompanhe seu progresso nas disciplinas do programa
            </p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-4 sm:mt-0 px-6 py-2.5 bg-gradient-to-r from-[#3c1d7c] to-[#347cd3] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transform transition-all active:scale-95 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Solicitar Matrícula
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {/* Total Créditos */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700/50 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-gray-600 dark:text-gray-400 font-medium text-sm">Total de Créditos</h3>
              <BookOpen className="w-5 h-5 text-[#3c1d7c] dark:text-[#b7a7d9]" />
            </div>
            <p className="text-4xl font-black text-[#110c26] dark:text-white mb-1">6</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">de 24 necessários</p>
          </div>

          {/* Obrigatórias */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700/50 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-gray-600 dark:text-gray-400 font-medium text-sm">Obrigatórias</h3>
              <CheckCircle2 className="w-5 h-5 text-[#347cd3]" />
            </div>
            <p className="text-4xl font-black text-[#110c26] dark:text-white mb-1">6</p>
            <p className="text-[#347cd3] text-sm font-medium">100% concluído</p>
          </div>

          {/* Optativas */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700/50 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-gray-600 dark:text-gray-400 font-medium text-sm">Optativas</h3>
              <AlertCircle className="w-5 h-5 text-[#b43cb3]" />
            </div>
            <p className="text-4xl font-black text-[#110c26] dark:text-white mb-1">0</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">de 12 necessários</p>
          </div>

          {/* Cursando */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700/50 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-gray-600 dark:text-gray-400 font-medium text-sm">Cursando</h3>
              <Clock className="w-5 h-5 text-[#a89600]" />
            </div>
            <p className="text-4xl font-black text-[#110c26] dark:text-white mb-1">2</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">disciplinas ativas</p>
          </div>
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex space-x-2">
            {['Todas', 'Cursando', 'Concluídas', 'Pendentes'].map(status => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  filterStatus === status 
                    ? 'bg-[#3c1d7c] text-white shadow-md' 
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700/50'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
          
          <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-gray-700"></div>

          <div className="flex space-x-2">
            {['Todos os Tipos', 'Obrigatórias', 'Optativas'].map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  filterType === type 
                    ? 'bg-[#347cd3] text-white shadow-md' 
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700/50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 flex flex-col justify-between rounded-2xl border border-gray-100 dark:border-gray-700/50 p-6 shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-gray-400 dark:text-gray-500 tracking-wider">PPGC0001</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full">
                  Concluída
                </span>
              </div>
              <h3 className="text-[22px] font-bold text-[#110c26] dark:text-white mb-5">Metodologia de Pesquisa Científica</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-[15px] font-medium">Dr. Carlos Silva</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-[15px] font-medium">Seg 14:00-18:00</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <BookOpen className="w-4 h-4 text-gray-400" />
                  <span className="text-[15px] font-medium">4 créditos • Obrigatória</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-700/50 flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Nota Final:</span>
                <span className="text-[#3c1d7c] dark:text-[#b7a7d9] font-bold text-lg">88</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Frequência:</span>
                <span className="text-gray-900 dark:text-white font-bold text-base">95%</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 flex flex-col justify-between rounded-2xl border border-gray-100 dark:border-gray-700/50 p-6 shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-gray-400 dark:text-gray-500 tracking-wider">PPGC0002</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full">
                  Concluída
                </span>
              </div>
              <h3 className="text-[22px] font-bold text-[#110c26] dark:text-white mb-5">Seminários de Pesquisa I</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-[15px] font-medium">Dra. Ana Santos</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-[15px] font-medium">Qua 16:00-18:00</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <BookOpen className="w-4 h-4 text-gray-400" />
                  <span className="text-[15px] font-medium">2 créditos • Obrigatória</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-700/50 flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Nota Final:</span>
                <span className="text-[#3c1d7c] dark:text-[#b7a7d9] font-bold text-lg">---</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Frequência:</span>
                <span className="text-gray-900 dark:text-white font-bold text-base">---</span>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Matricula Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/40 dark:bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          
          <div className="relative bg-white dark:bg-gray-800 w-full max-w-lg rounded-2xl shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Solicitar Disciplinas</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Selecione as disciplinas que deseja cursar no próximo semestre.</p>
            </div>

            <div className="space-y-4 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {/* Opção de Disciplina 1 */}
              <label className="flex items-start gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer hover:border-[#3c1d7c] dark:hover:border-[#b7a7d9] hover:bg-[#3c1d7c]/5 dark:hover:bg-[#b7a7d9]/10 transition-colors">
                <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300 text-[#3c1d7c] focus:ring-[#3c1d7c]" />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white">Análise de Algoritmos Avançados</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Dr. Marcos Silva • Ter/Qui 14:00-16:00</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] font-bold rounded-md uppercase tracking-wider">Obrigatória • 4 Créditos</span>
                </div>
              </label>

              {/* Opção de Disciplina 2 */}
              <label className="flex items-start gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer hover:border-[#347cd3] dark:hover:border-[#347cd3]/50 hover:bg-[#347cd3]/5 dark:hover:bg-[#347cd3]/10 transition-colors">
                <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300 text-[#347cd3] focus:ring-[#347cd3]" />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white">Computação em Nuvem Edge</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Dra. Beatriz Santos • Qua 08:00-12:00</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-[#347cd3]/10 text-[#347cd3] dark:text-[#7bb0ed] text-[10px] font-bold rounded-md uppercase tracking-wider">Optativa • 4 Créditos</span>
                </div>
              </label>
            </div>

            <button 
              onClick={() => setIsModalOpen(false)}
              className="w-full py-3.5 bg-gradient-to-r from-[#3c1d7c] to-[#347cd3] hover:opacity-90 text-white font-bold rounded-xl shadow-lg transform transition-all active:scale-[0.98]"
            >
              Confirmar Solicitação
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
