"use client";

import { useState } from "react";
import { Mail, User, Key } from "lucide-react";
import NexusLoader from "@/components/feedback/NexusLoader";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login for now
    setTimeout(() => {
      setLoading(false);
      alert("Login clicked! (No integration yet)");
    }, 1500);
  };

  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[32px] p-8 md:p-12 w-full max-w-md shadow-2xl relative z-10 transition-all duration-300 hover:bg-white/[0.07]">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center space-x-2 mb-4">
           {/* Nexus Logo Image could go here. Let's use the provided Nexus_White as an image */}
           <img src="/logos/Nexus_White.png" alt="Nexus" className="h-6 object-contain" />
        </div>
        <h2 className="text-2xl font-semibold text-white mb-2 tracking-wide">Portal Acadêmico</h2>
        <p className="text-white/60 text-sm font-medium tracking-widest uppercase">PPGCO - UFU</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Email Input */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-white/40 group-focus-within:text-white/80 transition-colors" />
          </div>
          <input
            id="email"
            type="email"
            placeholder="E-mail institucional"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#6246bc] focus:bg-white/10 transition-all"
          />
        </div>

        {/* Matricula Input */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-white/40 group-focus-within:text-white/80 transition-colors" />
          </div>
          <input
            id="matricula"
            type="text"
            placeholder="Matrícula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#6246bc] focus:bg-white/10 transition-all"
          />
        </div>

        {/* Password Input */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Key className="h-5 w-5 text-white/40 group-focus-within:text-white/80 transition-colors" />
          </div>
          <input
            id="password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#6246bc] focus:bg-white/10 transition-all"
          />
        </div>

        <div className="flex justify-end pt-1 pb-3">
          <a href="#" className="text-sm font-semibold text-[#efc64b] hover:text-[#d3ad3b] hover:underline transition-all">
            Esqueceu sua senha?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#3c1d7c] to-[#347cd3] hover:from-[#32166a] hover:to-[#2e6bb5] text-white font-semibold py-4 rounded-xl shadow-lg transition-all duration-300 flex justify-center items-center gap-2 transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {loading ? (
            <>
                <NexusLoader size={26} color="#ffffff" />
                <span className="sr-only">Carregando...</span>
            </>
          ) : (
            <>
              Acessar Portal
            </>
          )}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-white/60 text-sm">
          Novo usuário?{" "}
          <a href="#" className="text-[#efc64b] font-semibold hover:underline">
            Solicitar Acesso
          </a>
        </p>
      </div>
    </div>
  );
}
