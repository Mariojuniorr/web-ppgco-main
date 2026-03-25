# PPGCO Platform - Frontend (web-ppgco-main)

**Frontend Application for the Academic Management System of the Graduate Program in Computer Science (PPGCO) at UFU.**

## 📌 Sobre o Projeto

Este repositório contém o código-fonte do Frontend principal da Plataforma PPGCO. Ele foi construído para modernizar e digitalizar a gestão acadêmica da coordenação, secretaria, professores e alunos da pós-graduação.

O Frontend foi desenvolvido utilizando **Next.js (App Router)** com foco em **Performance** e uma **Experiência de Usuário (UX) Premium**, empregando um design system customizado em *Vanilla CSS* e elementos visuais de *Glassmorphism*.

## 🚀 Tecnologias Utilizadas

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Tipagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: CSS Modules & Vanilla CSS (Sem bibliotecas externas de UI para maior controle)
- **Gerenciador de Pacotes**: npm / pnpm

## 📁 Estrutura do Ecossistema

Esta aplicação Front-end consome duas APIs distintas no Backend:
1. **api-ppgco-main** (Porta padrão: `3000`): Microsserviço principal responsável pelas regras de negócio, banco de dados (MySQL) e gestão acadêmica (alunos, orientadores, defesas, etc.).
2. **api-ppgco-bucket** (Porta padrão: `3001`): Microsserviço de armazenamento dedicado para o envio ágil de arquivos grandes (como monografias e teses), liberando processamento da API principal.

> **Aviso de Portas:** O script de desenvolvimento (`npm run dev`) deste frontend está configurado para rodar nativamente na porta **3002** de forma a evitar conflito com os backends.

## 🏁 Como Executar Localmente

### Pré-requisitos
Certifique-se de que possui o `Node.js` (LTS) e o gerenciador de pacotes da sua preferência (`npm` ou `pnpm`).

1. **Clone o repositório e instale as dependências:**
```bash
git clone https://github.com/SEU_USUARIO/web-ppgco-main.git
cd web-ppgco-main
npm install
```

2. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

3. **Acesse no navegador:**  
Abra [http://localhost:3002](http://localhost:3002)

## 🛡️ Padrões de Qualidade (Commits)
Para manter o rigor exigido num projeto acadêmico de TCC, este repositório adota regras de **Conventional Commits** (`feat:`, `fix:`, `style:`, etc.) e encoraja a criação de **Commits Atômicos** baseados num modelo simplificado do **GitFlow**. Verifique  o arquivo de regras na raiz estrutural caso deseje contribuir e auditar o histórico de versões.
