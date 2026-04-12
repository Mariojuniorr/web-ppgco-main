"use client";

import { useState } from "react";
import { Mail, ShieldCheck, Key } from "lucide-react"; 
import Link from "next/link";
import NexusLoader from "@/components/feedback/NexusLoader";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Login clicked! (No integration yet)");
    }, 1500);
  };

  return (
    <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[32px] p-8 md:p-10 w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative z-10 transition-all duration-300">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center space-x-2 mb-6">
           <img src="/logos/Nexus_White.png" alt="Nexus" className="h-7 object-contain" />
        </div>
        <h2 className="text-[22px] font-bold text-white mb-2 tracking-wide">Portal Acadêmico</h2>
        <p className="text-white/60 text-sm font-medium tracking-widest uppercase">PPGCO - UFU</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="h-[18px] w-[18px] text-[#347cd3] group-focus-within:text-[#428cf4] transition-colors" />
          </div>
          <input
            id="email"
            type="email"
            placeholder="E-mail institucional"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-[#362b59]/80 border border-[#4a3978]/80 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#347cd3]/60 focus:border-[#347cd3] hover:bg-[#3d3166] transition-all text-sm font-medium"
          />
        </div>

        {/* Matricula Input (Using ShieldCheck or a distinctive icon to mimic the badge) */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {/* The image uses an ID/badge like icon. Lucide provides Badge/Contact. We'll use ShieldCheck as a placeholder or Contact if imported, using an SVG if needed. But let's use a standard robust icon. 
                Using an ID card icon is ideal. */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b43cb3] group-focus-within:text-[#d44fd3] transition-colors">
              <rect width="18" height="14" x="3" y="5" rx="2" ry="2"/>
              <path d="M7 15h4M15 15h2M7 11h2V9H7v2zm8 0h2V9h-2v2z"/>
            </svg>
          </div>
          <input
            id="matricula"
            type="text"
            placeholder="Matrícula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            required
            className="w-full bg-[#362b59]/80 border border-[#b43cb3]/30 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#b43cb3]/60 focus:border-[#b43cb3] hover:bg-[#3d3166] transition-all text-sm font-medium"
          />
        </div>

        {/* Password Input */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Key className="h-[18px] w-[18px] text-[#efc64b] group-focus-within:text-[#fde27e] transition-colors" />
          </div>
          <input
            id="password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-[#362b59]/80 border border-[#efc64b]/30 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#efc64b]/60 focus:border-[#efc64b] hover:bg-[#3d3166] transition-all text-sm font-medium"
          />
        </div>

        <div className="flex justify-end pt-1 pb-3">
          <Link href="/recuperar-senha" className="text-xs font-bold text-[#efc64b] hover:text-[#fde27e] hover:underline transition-all">
            Esqueceu sua senha?
          </Link>
        </div>

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
            <>Acessar Portal</>
          )}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-white/60 text-xs font-medium">
          Novo usuário?{" "}
          <Link href="/solicitar-cadastro" className="text-[#efc64b] font-bold hover:text-[#fde27e] hover:underline transition-all">
            Solicitar Cadastro
          </Link>
        </p>
      </div>
    </div>
  );
}
