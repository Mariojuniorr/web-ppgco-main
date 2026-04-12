import React from "react";
import { Zap, ShieldCheck, Award } from "lucide-react";

interface AuthLayoutProps {
  children: React.ReactNode;
  centerOnly?: boolean;
}

export default function AuthLayout({ children, centerOnly = false }: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen bg-[#f8f9fc] overflow-hidden relative font-sans">
      {/* Container for the form */}
      <div
        className={`w-full flex flex-col justify-center items-center px-6 lg:px-12 py-12 relative z-20 
                   bg-[#201540] shadow-[20px_0_40px_rgba(32,21,64,0.15)] transition-all duration-500
                   ${centerOnly ? 'min-h-screen flex-1' : 'lg:w-[50%] lg:rounded-br-[350px] lg:rounded-tr-[40px] border-r-0 lg:border-r border-white/5'}`}
      >
        <div className="w-full max-w-md animate-in fade-in zoom-in-95 duration-500">
          {children}
        </div>

        <p className="absolute bottom-6 text-white/30 text-xs font-semibold tracking-wider">
          Universidade Federal de Uberlândia
        </p>

        {/* Decorative background vectors for centered layout to not look too plain */}
        {centerOnly && (
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-[0.2] mix-blend-screen">
             <div className="w-[800px] h-[800px] bg-gradient-to-tr from-[#347cd3]/20 to-transparent rounded-full blur-[120px] absolute -top-40 -left-60"></div>
             <div className="w-[600px] h-[600px] bg-gradient-to-tl from-[#b43cb3]/20 to-transparent rounded-full blur-[100px] absolute bottom-0 right-0"></div>
          </div>
        )}
      </div>

      {/* Right Column (Info Dashboard/Features) */}
      {!centerOnly && (
        <div className="hidden lg:flex flex-1 flex-col justify-center px-16 xl:px-32 relative z-10 transition-all duration-500">
          <div className="max-w-xl animate-in fade-in slide-in-from-right-8 duration-700 delay-150">
            <h1 className="text-[2.5rem] leading-[1.15] font-extrabold text-[#110c26] mb-4 tracking-tight">
              Gestão Acadêmica <br />
              <span className="text-[#347cd3] bg-clip-text text-transparent bg-gradient-to-r from-[#432392] to-[#347cd3]">
                Inteligente
              </span>
            </h1>
            <p className="text-[#3c4257] text-[17px] font-medium mb-12 leading-relaxed tracking-wide">
              Nexus transforma a experiência acadêmica com tecnologia moderna e intuitiva.
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-center gap-6 group bg-white shadow-sm border border-gray-100 p-5 rounded-2xl transition duration-300 hover:shadow-md">
                <div className="p-3.5 bg-[#ebe9ff] rounded-2xl flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#432392]" />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-[16px] font-bold text-[#110c26] mb-0.5">Acesso em Tempo Real</h3>
                  <p className="text-[13px] text-[#3c4257]/80 font-medium">Acompanhe seu progresso acadêmico instantaneamente.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-6 group bg-white shadow-sm border border-gray-100 p-5 rounded-2xl transition duration-300 hover:shadow-md">
                <div className="p-3.5 bg-[#e2f0fd] rounded-2xl flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#347cd3]" />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-[16px] font-bold text-[#110c26] mb-0.5">Segurança Garantida</h3>
                  <p className="text-[13px] text-[#3c4257]/80 font-medium">Proteção total dos seus dados acadêmicos, sem comprometer a facilidade.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-6 group bg-white shadow-sm border border-gray-100 p-5 rounded-2xl transition duration-300 hover:shadow-md">
                <div className="p-3.5 bg-[#fae8f7] rounded-2xl flex-shrink-0">
                  <Award className="w-6 h-6 text-[#b43cb3]" />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-[16px] font-bold text-[#110c26] mb-0.5">Experiência Fluida</h3>
                  <p className="text-[13px] text-[#3c4257]/80 font-medium">Interface moderna e responsiva em todos os dispositivos.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative background vectors */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-[0.15] mix-blend-multiply">
            <div className="w-[800px] h-[800px] bg-gradient-to-tr from-[#347cd3] to-transparent rounded-full blur-[120px] absolute -top-40 -right-20"></div>
            <div className="w-[600px] h-[600px] bg-gradient-to-bl from-[#b43cb3] to-transparent rounded-full blur-[100px] absolute bottom-10 left-10"></div>
          </div>

          <p className="absolute bottom-6 left-16 xl:left-32 text-[#3c4257]/40 text-xs font-semibold uppercase tracking-widest">
            Powered by Nexus
          </p>
        </div>
      )}
    </main>
  );
}
