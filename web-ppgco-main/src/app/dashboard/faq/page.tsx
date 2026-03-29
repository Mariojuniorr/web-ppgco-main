"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "Matrícula",
    question: "Como solicitar trancamento de matrícula?",
    answer: "Para solicitar o trancamento, acesse a seção 'Documentos', clique em 'Solicitações' e escolha a opção 'Trancamento de Matrícula'. Preencha o formulário com a justificativa e anexe os documentos necessários. O prazo de análise é de até 15 dias úteis."
  },
  {
    category: "Matrícula",
    question: "Quais são os prazos de matrícula?",
    answer: "As matrículas são realizadas semestralmente. Para o primeiro semestre: janeiro e fevereiro. Para o segundo semestre: julho e agosto. Fique atento ao calendário acadêmico disponível no portal."
  },
  {
    category: "Matrícula",
    question: "Posso trancar disciplinas individualmente?",
    answer: "Sim, é possível trancar disciplinas individuais até a data limite estabelecida no calendário acadêmico (geralmente 30 dias após o início das aulas). Acesse 'Disciplinas' e selecione a opção 'Solicitar Trancamento'."
  },
  {
    category: "Defesa",
    question: "Quais são os requisitos para defesa?",
    answer: "Para defender sua dissertação/tese, você deve: ter integralizado todos os créditos obrigatórios, ter pelo menos uma publicação validada pelo programa, estar com a frequência regular, e ter aprovação do orientador para agendamento da banca."
  },
  {
    category: "Defesa",
    question: "Como agendar a defesa?",
    answer: "O agendamento da defesa é feito através do sistema, na seção 'Documentos > Defesa'. Você deve preencher o formulário com os dados da banca, anexar a versão preliminar do trabalho e aguardar aprovação da coordenação."
  },
  {
    category: "Documentos",
    question: "Que documentação preciso apresentar regularmente?",
    answer: "Você deve apresentar: relatórios semestrais de atividades, comprovantes de publicações acadêmicas, certificados de participação em eventos, e formulários de acompanhamento assinados pelo orientador."
  },
  {
    category: "Documentos",
    question: "Como validar publicações no sistema?",
    answer: "Acesse 'Documentos > Publicações', clique em 'Adicionar Publicação' e preencha os dados (título, veículo, autores, etc.). Anexe o comprovante de publicação ou aceite. A coordenação validará em até 10 dias úteis."
  },
  {
    category: "Bolsas",
    question: "Como solicitar bolsa de estudos?",
    answer: "As solicitações de bolsa são feitas através de editais específicos publicados no portal. Acesse 'Mural de Avisos' para acompanhar os editais abertos. Requisitos gerais incluem: desempenho acadêmico, dedicação exclusiva e disponibilidade de bolsas."
  },
  {
    category: "Secretaria",
    question: "Qual o horário de atendimento da secretaria?",
    answer: "A secretaria atende de segunda a sexta-feira, das 8h às 12h e das 14h às 18h. Para agendamento de atendimento presencial, utilize o sistema ou entre em contato pelo e-mail: ppgco@ufu.br"
  },
  {
    category: "Secretaria",
    question: "Como entrar em contato com a coordenação?",
    answer: "Você pode entrar em contato através do e-mail: coordenacao.ppgco@ufu.br ou pelo telefone (34) 3239-4163. Para assuntos específicos com seu orientador, utilize o sistema de mensagens interno."
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 pb-24 h-full">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Encontre respostas rápidas para suas dúvidas sobre o PPGCO
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar pergunta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3c1d7c] transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-[#3c1d7c] text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-transparent dark:border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQ.length > 0 ? (
            filteredFAQ.map((item, index) => (
              <div
                key={index}
                className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-[30px] border border-white/30 dark:border-gray-700/30 rounded-2xl overflow-hidden transition-all hover:shadow-lg"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all"
                >
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#3c1d7c]/10 text-[#3c1d7c] dark:bg-[#3c1d7c]/20 dark:text-[#b7a7d9] mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                Nenhuma pergunta encontrada. Tente outro termo de busca.
              </p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-12 p-6 bg-gradient-to-r from-[#3c1d7c] to-[#347cd3] rounded-2xl text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Não encontrou sua resposta?</h2>
          <p className="mb-4 text-white/90">
            Entre em contato com a secretaria do PPGCO para suporte personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:ppgco@ufu.br"
              className="px-6 py-3 bg-white text-[#3c1d7c] rounded-lg font-semibold hover:shadow-lg transition-all text-center"
            >
              Enviar E-mail
            </a>
            <a
              href="tel:+553432394163"
              className="px-6 py-3 bg-white/20 backdrop-blur-xl text-white rounded-lg font-semibold hover:bg-white/30 transition-all text-center"
            >
              Ligar: (34) 3239-4163
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
