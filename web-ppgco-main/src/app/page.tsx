import LoginForm from "@/features/auth/components/LoginForm";
import { Zap, ShieldCheck, Award } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen bg-[#f8f9fc] overflow-hidden relative font-sans">

      {/* 
        Left Column (Form) 
        - Mobile: occupies 100% of the screen.
        - Desktop: occupies almost half, adding a massive sweeping border-radius on the right 
          to simulate an organic wave separating the two sections.
      */}
      <div
        className="w-full lg:w-[48%] flex flex-col justify-center items-center px-6 lg:px-12 py-12 relative z-20 
                   bg-[#181137] lg:rounded-br-[350px] lg:rounded-tr-[40px] shadow-2xl transition-all duration-500
                   border-r-0 lg:border-r border-white/5"
      >
        <LoginForm />

        <p className="absolute bottom-6 text-white/30 text-xs font-semibold tracking-wider">
          Universidade Federal de Uberlândia
        </p>
      </div>

      {/* 
        Right Column (Info Dashboard/Features) 
        - Mobile: Hidden completely to focus on the login purple background.
        - Desktop: Flex, contains marketing text and feature highlights.
      */}
      <div className="hidden lg:flex flex-1 flex-col justify-center px-24 xl:px-32 relative z-10 transition-all duration-500">
        <div className="max-w-xl animate-in fade-in slide-in-from-right-8 duration-700 delay-150">
          <h1 className="text-[2.5rem] leading-[1.15] font-extrabold text-[#110c26] mb-4 tracking-tight">
            Gestão Acadêmica <br />
            <span className="text-[#432392] bg-clip-text text-transparent bg-gradient-to-r from-[#432392] to-[#347cd3]">
              Inteligente
            </span>
          </h1>
          <p className="text-[#3c4257] text-[17px] font-medium mb-14 leading-relaxed tracking-wide">
            Nexus transforma a experiência acadêmica com tecnologia moderna e intuitiva.
          </p>

          <div className="space-y-10">
            {/* Feature 1 */}
            <div className="flex items-start gap-6 group">
              <div className="p-3.5 bg-[#ebe9ff] group-hover:bg-[#432392] group-hover:-translate-y-1 transition-all duration-300 rounded-2xl shadow-sm">
                <Zap className="w-6 h-6 text-[#432392] group-hover:text-white transition-colors" />
              </div>
              <div className="pt-1">
                <h3 className="text-[17px] font-bold text-[#110c26] mb-1">Acesso em Tempo Real</h3>
                <p className="text-sm text-[#3c4257]/80 font-medium">Acompanhe seu progresso acadêmico instantaneamente.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-6 group">
              <div className="p-3.5 bg-[#e2f0fd] group-hover:bg-[#347cd3] group-hover:-translate-y-1 transition-all duration-300 rounded-2xl shadow-sm">
                <ShieldCheck className="w-6 h-6 text-[#347cd3] group-hover:text-white transition-colors" />
              </div>
              <div className="pt-1">
                <h3 className="text-[17px] font-bold text-[#110c26] mb-1">Segurança Garantida</h3>
                <p className="text-sm text-[#3c4257]/80 font-medium">Proteção total dos seus dados acadêmicos, sem comprometer a facilidade.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-6 group">
              <div className="p-3.5 bg-[#fae8f7] group-hover:bg-[#b43cb3] group-hover:-translate-y-1 transition-all duration-300 rounded-2xl shadow-sm">
                <Award className="w-6 h-6 text-[#b43cb3] group-hover:text-white transition-colors" />
              </div>
              <div className="pt-1">
                <h3 className="text-[17px] font-bold text-[#110c26] mb-1">Experiência Fluida</h3>
                <p className="text-sm text-[#3c4257]/80 font-medium">Interface moderna e responsiva em todos os dispositivos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Decorative Elements using Tailwind Arbitrary values for glowing blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-60 mix-blend-multiply">
          <div className="w-[800px] h-[800px] bg-gradient-to-tr from-[#347cd3]/10 to-transparent rounded-full blur-[100px] absolute -top-40 -right-20"></div>
          <div className="w-[600px] h-[600px] bg-gradient-to-bl from-[#b43cb3]/10 to-transparent rounded-full blur-[100px] absolute bottom-10 left-10"></div>
        </div>

        <p className="absolute bottom-6 left-24 xl:left-32 text-[#3c4257]/40 text-xs font-semibold uppercase tracking-widest">
          Powered by Nexus
        </p>
      </div>

    </main>
  );
}
