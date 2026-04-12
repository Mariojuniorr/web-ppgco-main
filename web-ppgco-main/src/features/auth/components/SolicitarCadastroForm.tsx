"use client";

import { useState } from "react";
import { User, Mail, Phone, Key } from "lucide-react"; 
import Link from "next/link";
import NexusLoader from "@/components/feedback/NexusLoader";

export default function SolicitarCadastroForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    matricula: "",
    telefone: "",
    senha: "",
    confirmarSenha: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[32px] p-8 w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative z-10 transition-all duration-300">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-2 mb-4">
           <img src="/logos/Nexus_White.png" alt="Nexus" className="h-6 object-contain" />
        </div>
        <h2 className="text-[22px] font-bold text-white mb-1.5 tracking-wide">Solicitar Cadastro</h2>
        <p className="text-white/60 text-[14px] font-medium">Preencha os dados para criar sua conta</p>
      </div>

      {!success ? (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Nome Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-[18px] w-[18px] text-[#8b5cf6] group-focus-within:text-[#a78bfa] transition-colors" />
            </div>
            <input
              id="nome"
              type="text"
              placeholder="Nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full bg-[#362b59]/80 border border-[#4a3978]/80 rounded-xl py-3 pl-11 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/60 focus:border-[#8b5cf6] hover:bg-[#3d3166] transition-all text-[14px] font-medium"
            />
          </div>

          {/* Email Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-[18px] w-[18px] text-[#347cd3] group-focus-within:text-[#428cf4] transition-colors" />
            </div>
            <input
              id="email"
              type="email"
              placeholder="E-mail institucional"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#362b59]/80 border border-[#4a3978]/80 rounded-xl py-3 pl-11 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#347cd3]/60 focus:border-[#347cd3] hover:bg-[#3d3166] transition-all text-[14px] font-medium"
            />
          </div>

          {/* Matricula Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b43cb3] group-focus-within:text-[#d44fd3] transition-colors">
                <rect width="18" height="14" x="3" y="5" rx="2" ry="2"/><path d="M7 15h4M15 15h2M7 11h2V9H7v2zm8 0h2V9h-2v2z"/>
              </svg>
            </div>
            <input
              id="matricula"
              type="text"
              placeholder="Matrícula"
              value={formData.matricula}
              onChange={handleChange}
              required
              className="w-full bg-[#362b59]/80 border border-[#b43cb3]/30 rounded-xl py-3 pl-11 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#b43cb3]/60 focus:border-[#b43cb3] hover:bg-[#3d3166] transition-all text-[14px] font-medium"
            />
          </div>

          {/* Telefone Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Phone className="h-[18px] w-[18px] text-[#efc64b] group-focus-within:text-[#fde27e] transition-colors" />
            </div>
            <input
              id="telefone"
              type="tel"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
              className="w-full bg-[#362b59]/80 border border-[#efc64b]/30 rounded-xl py-3 pl-11 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#efc64b]/60 focus:border-[#efc64b] hover:bg-[#3d3166] transition-all text-[14px] font-medium"
            />
          </div>

          {/* Senha Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Key className="h-[18px] w-[18px] text-[#5b21b6] group-focus-within:text-[#7c3aed] transition-colors" />
            </div>
            <input
              id="senha"
              type="password"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
              required
              className="w-full bg-[#362b59]/80 border border-[#4a3978]/80 rounded-xl py-3 pl-11 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#5b21b6]/60 focus:border-[#5b21b6] hover:bg-[#3d3166] transition-all text-[14px] font-medium"
            />
          </div>

          {/* Confirmar Senha Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Key className="h-[18px] w-[18px] text-[#2563eb] group-focus-within:text-[#3b82f6] transition-colors" />
            </div>
            <input
              id="confirmarSenha"
              type="password"
              placeholder="Confirmar senha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              required
              className="w-full bg-[#362b59]/80 border border-[#4a3978]/80 rounded-xl py-3 pl-11 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/60 focus:border-[#2563eb] hover:bg-[#3d3166] transition-all text-[14px] font-medium"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#3c1d7c] to-[#347cd3] hover:from-[#32166a] hover:to-[#2e6bb5] text-white font-bold py-3.5 rounded-xl shadow-[0_4px_14px_0_rgba(52,124,211,0.39)] transition-all duration-300 flex justify-center items-center gap-2 transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none text-[15px]"
            >
              {loading ? (
                <>
                    <NexusLoader size={24} color="#ffffff" />
                    <span className="sr-only">Carregando...</span>
                </>
              ) : (
                <>Enviar Solicitação</>
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center py-8 animate-in fade-in zoom-in duration-500">
           <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
           </div>
           <h3 className="text-xl font-bold text-white mb-2">Solicitação Recebida!</h3>
           <p className="text-white/70 text-sm mb-6">
             Seus dados foram enviados para análise da secretaria do PPGCO. Você receberá um retorno em breve.
           </p>
        </div>
      )}

      <div className="mt-6 text-center border-t border-white/5 pt-5">
        <p className="text-white/60 text-[13px] font-medium">
          Já possui conta?{" "}
          <Link href="/" className="text-[#347cd3] font-bold hover:text-[#428cf4] hover:underline transition-all">
            Fazer Login
          </Link>
        </p>
      </div>
    </div>
  );
}
