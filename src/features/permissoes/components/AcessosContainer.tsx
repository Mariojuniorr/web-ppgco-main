"use client";

import { useState, useEffect } from "react";
import { Search, Plus, UserCog, User, ShieldAlert, GraduationCap, Building2, Edit2, Trash2 } from "lucide-react";

const OLE_COLORS: Record<string, string> = {
  "Super Admin": "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  "Gestor": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  "Professor": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "Estudante": "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
};

const OLE_ICONS: Record<string, React.ElementType> = {
  "Super Admin": ShieldAlert,
  "Gestor": Building2,
  "Professor": GraduationCap,
  "Estudante": User,
};

// Added instituicao_id to the dummy data to showcase multi-tenant usage
const INITIAL_DUMMY_USERS = [
  { id: 1, name: "João Pedro Silva", email: "joao.silva@ufu.br", role: "Gestor", matricula: "NEX-001", status: "Ativo", instituicao_id: "inst_01" },
  { id: 2, name: "Maria Angélica", email: "maria.angelica@ufu.br", role: "Professor", matricula: "NEX-042", status: "Ativo", instituicao_id: "inst_01" },
  { id: 3, name: "Carlos Eduardo", email: "carlos.eduardo@ufu.br", role: "Estudante", matricula: "11811BSI200", status: "Ativo", instituicao_id: "inst_02" },
  { id: 5, name: "Dr. Roberto Mendes", email: "roberto.mendes@ufu.br", role: "Super Admin", matricula: "ADM-001", status: "Ativo", instituicao_id: "global" },
];

export function AcessosContainer() {
  const [users, setUsers] = useState(INITIAL_DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Simulated Auth context
  // const { userProfile } = useAuth();
  const userProfile = { role: "Gestor", instituicao_id: "inst_01" }; // Fique à vontade para mudar para Super Admin e testar

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [formData, setFormData] = useState({ name: "", email: "", matricula: "", role: "Estudante", status: "Ativo" });

  // REGRAS DE NEGÓCIO - Multi-tenant
  const filteredUsers = users.filter((u) => {
    // 1. Filtro de Instituição (Multi-tenant security)
    if (userProfile.role !== "Super Admin" && u.instituicao_id !== userProfile.instituicao_id && u.instituicao_id !== "global") {
      return false; 
    }

    // 2. Filtro de Busca da Tela
    const matchSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        u.matricula.toLowerCase().includes(searchTerm.toLowerCase());
    return matchSearch;
  });

  const openAddModal = () => {
    setEditingUser(null);
    setFormData({ name: "", email: "", matricula: "", role: "Estudante", status: "Ativo" });
    setIsModalOpen(true);
  };

  const openEditModal = (user: any) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email, matricula: user.matricula, role: user.role, status: user.status });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingUser) {
      setUsers(users.map(u => u.id === editingUser.id ? { ...u, ...formData } : u));
    } else {
      const newUser = { id: Date.now(), ...formData, instituicao_id: userProfile.instituicao_id };
      setUsers([newUser, ...users]);
    }
    closeModal();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8 animate-in fade-in duration-500 relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight flex items-center gap-3">
            <div className="p-2.5 bg-purple-100 dark:bg-purple-500/20 rounded-xl">
              <UserCog className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            </div>
            Controle de Acessos
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">
            Gerencie perfis. (Você é <strong>{userProfile.role}</strong> da instituição: {userProfile.instituicao_id})
          </p>
        </div>

        {/* Apenas Super Admins e Gestores podem adicionar usuários */}
        {(userProfile.role === "Super Admin" || userProfile.role === "Gestor") && (
          <button 
            onClick={openAddModal}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#3c1d7c] to-[#347cd3] hover:from-[#32166a] hover:to-[#2e6bb5] text-white rounded-xl shadow-lg transition-all transform active:scale-95 font-semibold"
          >
            <Plus className="w-5 h-5" />
            Novo Usuário
          </button>
        )}
      </div>

      <div className="bg-white/70 dark:bg-gray-800/40 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 rounded-3xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <div className="relative w-full sm:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar por nome, e-mail ou matrícula..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl py-2.5 pl-10 pr-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all font-medium"
            />
          </div>
          <div className="w-full sm:w-auto flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
            <span>Visíveis para você:</span>
            <span className="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
              {filteredUsers.length} usuários
            </span>
          </div>
        </div>

        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700/50 text-gray-500 dark:text-gray-400 text-sm font-semibold tracking-wide">
                <th className="pb-4 pl-4 font-semibold uppercase">Usuário</th>
                <th className="pb-4 font-semibold uppercase">Matrícula</th>
                <th className="pb-4 font-semibold uppercase">Perfil</th>
                <th className="pb-4 font-semibold uppercase">Status</th>
                <th className="pb-4 text-right font-semibold uppercase pr-4">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800/50">
              {filteredUsers.map((user) => {
                const RoleIcon = OLE_ICONS[user.role] || User;
                return (
                  <tr key={user.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/20 transition-colors group">
                    <td className="py-4 pl-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex flex-shrink-0 items-center justify-center text-gray-700 dark:text-gray-300 font-bold text-sm">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900 dark:text-white">{user.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-sm font-medium font-mono text-gray-700 dark:text-gray-300">{user.matricula}</td>
                    <td className="py-4">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold ${OLE_COLORS[user.role]}`}>
                        <RoleIcon className="w-3.5 h-3.5" />
                        {user.role}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${user.status === "Ativo" ? "bg-green-500" : "bg-red-500"}`}></span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{user.status}</span>
                      </div>
                    </td>
                    <td className="py-4 pr-4 text-right">
                      {/* Lógica de permissão de ação granular */}
                      {(userProfile.role === "Super Admin" || (userProfile.role === "Gestor" && user.role !== "Super Admin")) && (
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => openEditModal(user)} className="p-2 text-gray-400 hover:text-blue-500 rounded-lg">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button onClick={() => setUsers(users.filter(u => u.id !== user.id))} className="p-2 text-gray-400 hover:text-red-500 rounded-lg">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={closeModal} />
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              {editingUser ? "Editar Usuário" : "Cadastrar Novo Usuário"}
            </h3>
            <form onSubmit={handleSave} className="space-y-4">
               <div>
                <label className="block text-sm font-semibold mb-1">Nome Completo</label>
                <input required type="text" className="w-full border rounded-xl px-4 py-2" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                  <label className="block text-sm font-semibold mb-1">E-mail</label>
                  <input required type="email" className="w-full border rounded-xl px-4 py-2" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                 </div>
                 <div>
                  <label className="block text-sm font-semibold mb-1">Matrícula</label>
                  <input required type="text" className="w-full border rounded-xl px-4 py-2" value={formData.matricula} onChange={e => setFormData({...formData, matricula: e.target.value})} />
                 </div>
               </div>
               <div className="flex justify-end gap-2 mt-4">
                  <button type="button" onClick={closeModal} className="px-4 py-2 border rounded-xl">Cancelar</button>
                  <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-xl">Salvar</button>
               </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
