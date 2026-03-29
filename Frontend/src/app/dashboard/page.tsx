"use client";

import {
  Clock,
  Award,
  Zap,
  CheckCircle,
  BookOpen,
  FileText,
  Calendar,
  MessageSquare,
  HelpCircle,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24 transition-colors duration-300">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Card */}
        <div className="mb-8 p-6 bg-gradient-to-r from-[#3c1d7c] to-[#347cd3] rounded-2xl text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Olá, João! 👋</h2>
          <p className="text-white/90">Você está progredindo muito bem no seu curso de pós-graduação.</p>
        </div>

        {/* Quick Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Créditos */}
          <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-[30px] rounded-2xl border border-white/30 dark:border-gray-700/30 p-6 shadow-lg hover:shadow-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="p-3 rounded-xl bg-[#347cd3]/10">
                <BookOpen className="w-6 h-6 text-[#347cd3]" />
              </div>
            </div>
            <h3 className="text-gray-500 dark:text-gray-400 text-sm mb-1">Créditos Concluídos</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">18/24</p>
            <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-[#347cd3] h-2 rounded-full" style={{ width: "75%" }}></div>
            </div>
          </div>

          {/* Publicações */}
          <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-[30px] rounded-2xl border border-white/30 dark:border-gray-700/30 p-6 shadow-lg hover:shadow-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="p-3 rounded-xl bg-[#3c1d7c]/10">
                <Award className="w-6 h-6 text-[#3c1d7c]" />
              </div>
            </div>
            <h3 className="text-gray-500 dark:text-gray-400 text-sm mb-1">Publicações Validadas</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">2</p>
            <p className="text-[#3c1d7c] dark:text-[#b7a7d9] text-sm mt-2">Excelente progresso!</p>
          </div>

          {/* Frequência */}
          <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-[30px] rounded-2xl border border-white/30 dark:border-gray-700/30 p-6 shadow-lg hover:shadow-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="p-3 rounded-xl bg-[#fbeb3e]/20">
                <Clock className="w-6 h-6 text-[#a89600]" />
              </div>
            </div>
            <h3 className="text-gray-500 dark:text-gray-400 text-sm mb-1">Frequência</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">100%</p>
            <p className="text-[#a89600] text-sm mt-2">Em dia</p>
          </div>

          {/* Marcos Temporais */}
          <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-[30px] rounded-2xl border border-white/30 dark:border-gray-700/30 p-6 shadow-lg hover:shadow-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="p-3 rounded-xl bg-[#b43cb3]/10">
                <Zap className="w-6 h-6 text-[#b43cb3]" />
              </div>
            </div>
            <h3 className="text-gray-500 dark:text-gray-400 text-sm mb-1">Para Qualificação</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">120 dias</p>
            <p className="text-[#b43cb3] text-sm mt-2">Prepare-se!</p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Progresso Acadêmico */}
          <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-[30px] rounded-2xl border border-white/30 dark:border-gray-700/30 p-6 shadow-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Progresso Acadêmico</h3>
            
            {/* Circular Progress */}
            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40">
                <svg className="transform -rotate-90 w-40 h-40">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#e5e7eb"
                    className="dark:stroke-gray-700"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 70 * 0.75} ${2 * Math.PI * 70}`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3c1d7c" />
                      <stop offset="100%" stopColor="#347cd3" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">75%</span>
                </div>
              </div>
            </div>

            {/* Linear Progress Bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Disciplinas Obrigatórias</span>
                  <span className="text-gray-900 dark:text-white font-medium">100%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-[#3c1d7c] h-3 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Disciplinas Optativas</span>
                  <span className="text-gray-900 dark:text-white font-medium">60%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-[#347cd3] h-3 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mural de Avisos */}
          <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-[30px] rounded-2xl border border-white/30 dark:border-gray-700/30 p-6 shadow-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Mural de Avisos</h3>
            <div className="space-y-4">
              {[
                { title: "Prorrogação de Matrículas", time: "Hoje, 08:30", icon: FileText, color: "#3c1d7c" },
                { title: "Defesa de Tese - Sala 204", time: "Ontem, 14:00", icon: Calendar, color: "#347cd3" },
                { title: "Publicação de Notas", time: "2 dias atrás", icon: CheckCircle, color: "#b43cb3" },
                { title: "Seminário de Pesquisa", time: "3 dias atrás", icon: MessageSquare, color: "#a89600" },
              ].map((aviso, index) => (
                <div key={index} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/60 dark:hover:bg-gray-700/60 transition-colors cursor-pointer">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${aviso.color}15` }}>
                    <aviso.icon className="w-5 h-5" style={{ color: aviso.color }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 dark:text-white font-medium">{aviso.title}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{aviso.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marcos Temporais Detalhados */}
          <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-[30px] rounded-2xl border border-white/30 dark:border-gray-700/30 p-6 shadow-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Marcos Temporais</h3>
            <div className="space-y-4">
              {[
                { title: "Matrícula Inicial", date: "Março 2025", status: "OK", color: "#10b981" },
                { title: "Qualificação", date: "Julho 2025", status: "Pendente", color: "#fbeb3e" },
                { title: "Defesa", date: "Dezembro 2025", status: "Pendente", color: "#b43cb3" },
              ].map((marco, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-white/40 dark:border-gray-700/40 bg-white/20 dark:bg-gray-800/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: marco.color }}></div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">{marco.title}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{marco.date}</p>
                    </div>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${marco.color}20`,
                      color: marco.color === "#10b981" ? "#10b981" : marco.color === "#fbeb3e" ? "#a89600" : marco.color,
                    }}
                  >
                    {marco.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Card */}
          <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-[30px] rounded-2xl border border-white/30 dark:border-gray-700/30 p-6 shadow-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">FAQ do PPGCO</h3>
            <div className="space-y-3">
              {[
                "Como solicitar trancamento?",
                "Prazos de matrícula",
                "Requisitos para defesa",
                "Documentação necessária",
                "Contato da secretaria",
              ].map((pergunta, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/60 dark:hover:bg-gray-700/60 transition-colors group"
                >
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-[#3c1d7c] dark:group-hover:text-[#b7a7d9]">{pergunta}</span>
                  <HelpCircle className="w-5 h-5 text-gray-400 group-hover:text-[#3c1d7c] dark:group-hover:text-[#b7a7d9]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
