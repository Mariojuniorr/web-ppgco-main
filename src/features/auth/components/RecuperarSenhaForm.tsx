"use client";

import { useState } from "react";
import { Mail } from "lucide-react"; 
import Link from "next/link";
import NexusLoader from "@/components/feedback/NexusLoader";

export default function RecuperarSenhaForm() {
  const [email, setEmail] = useState("");
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

  return (
    <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[32px] p-8 md:p-10 w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative z-10 transition-all duration-300">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-6">
           <img src="/logos/Nexus_White.png" alt="Nexus" className="h-7 object-contain" />
        </div>
        <h2 className="text-[26px] font-bold text-white mb-2 tracking-wide">Recuperar Senha</h2>
        <p className="text-white/70 text-[15px] font-medium px-4">
          Digite seu e-mail para receber o link de recuperação
        </p>
      </div>

      {!success ? (
        <form onSubmit={handleSubmit} className="space-y-6">
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
              className="w-full bg-[#362b59]/80 border border-[#4a3978]/80 rounded-xl py-4 pl-11 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#347cd3]/60 focus:border-[#347cd3] hover:bg-[#3d3166] transition-all text-[15px] font-medium"
            />
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
              <>Enviar Link de Recuperação</>
            )}
          </button>
          
          <div className="mt-8 border border-white/10 rounded-xl p-4 bg-white/5 text-center">
             <p className="text-white/80 text-[13px] font-medium leading-relaxed">
               Enviaremos um link para redefinir sua senha. <br /> Verifique sua caixa de entrada e spam.
             </p>
          </div>
        </form>
      ) : (
        <div className="text-center py-6 animate-in fade-in zoom-in duration-500">
           <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
           </div>
           <h3 className="text-xl font-bold text-white mb-2">E-mail Enviado!</h3>
           <p className="text-white/70 text-sm mb-8">
             Confira sua caixa de entrada pelo link de redefinição.
           </p>
           <button
             onClick={() => setSuccess(false)}
             className="text-[#347cd3] hover:text-[#428cf4] text-sm font-bold hover:underline transition-all"
           >
             Tentar com outro e-mail
           </button>
        </div>
      )}

      <div className="mt-8 text-center border-t border-white/5 pt-6">
        <Link href="/" className="text-white/60 font-semibold hover:text-white transition-all text-sm flex items-center justify-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
           Voltar para o Login
        </Link>
      </div>
    </div>
  );
}
