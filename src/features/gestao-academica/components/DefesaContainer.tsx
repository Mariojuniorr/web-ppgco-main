"use client";

import { GraduationCap, CheckCircle2, Calendar, MapPin, Users, Edit3 } from "lucide-react";

export function DefesaContainer() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24 transition-colors duration-300">
      <main className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-2">
          <GraduationCap className="w-10 h-10 text-[#3c1d7c] dark:text-[#b7a7d9]" />
          <h1 className="text-3xl font-extrabold text-[#110c26] dark:text-white tracking-tight">
            Dissertação e Defesa
          </h1>
        </div>
        <p className="text-[#3c4257] dark:text-gray-400 font-medium mb-10">
          Acompanhe o processo de qualificação e defesa do seu trabalho
        </p>

        {/* Timeline Component */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700/50 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow mb-8 relative">
          <h3 className="text-xl font-bold text-[#110c26] dark:text-white mb-8">Linha do Tempo</h3>
          
          <div className="flex items-center justify-between relative mt-4 px-4 sm:px-8">
            {/* The line connecting them */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 dark:bg-gray-700 -translate-y-1/2 z-0"></div>

            {/* Step 1: Qualificação */}
            <div className="relative z-10 flex flex-col items-center sm:flex-row sm:gap-4 bg-white dark:bg-gray-800 px-4">
              <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-7 h-7 text-green-500" />
              </div>
              <div className="mt-3 sm:mt-0 text-center sm:text-left">
                <h4 className="font-bold text-gray-900 dark:text-white">Qualificação</h4>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">2025-07-15</p>
              </div>
            </div>

            {/* Step 2: Dissertação */}
            <div className="relative z-10 flex flex-col items-center sm:flex-row-reverse sm:gap-4 bg-white dark:bg-gray-800 px-4">
              <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-400 font-bold text-xl">
                2
              </div>
              <div className="mt-3 sm:mt-0 text-center sm:text-right">
                <h4 className="font-bold text-gray-900 dark:text-white">Dissertação</h4>
                <p className="text-sm font-medium text-gray-400 dark:text-gray-500">Não agendada</p>
              </div>
            </div>
          </div>
        </div>

        {/* Qualification Details Panel */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700/50 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
          {/* Action icon */}
          <button className="absolute top-8 right-8 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors">
            <Edit3 className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-[#fffced] dark:bg-[#a89600]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-[#a89600]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#110c26] dark:text-white mb-2">Qualificação</h2>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full">
                <Calendar className="w-3 h-3" />
                Agendada
              </span>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#110c26] dark:text-white mb-4">
            Aplicações de Deep Learning em Visão Computacional: Uma Revisão Sistemática
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-sm sm:text-base">
            Este trabalho apresenta uma revisão sistemática sobre as principais aplicações de Deep Learning na área de Visão Computacional, 
            abordando técnicas de CNN, RNN e Transformers aplicadas a tarefas de classificação, detecção e segmentação de imagens.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8 text-sm text-gray-600 dark:text-gray-400 font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#3c1d7c] dark:text-[#b7a7d9]" />
              14/07/2025 às 14:00
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#347cd3]" />
              Sala 204 - Bloco A
            </div>
          </div>

          {/* Banca Examinadora */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-gray-500" />
              <h4 className="font-bold text-[#110c26] dark:text-white">Banca Examinadora</h4>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 font-bold text-sm">
                  CS
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Dr. Carlos Silva</p>
                  <p className="text-xs text-gray-500">Orientador (Presidente)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 font-bold text-sm">
                  MR
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Dra. Maria Ribeiro</p>
                  <p className="text-xs text-gray-500">Avaliadora Interna</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
