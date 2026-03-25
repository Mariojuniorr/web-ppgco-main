'use client';

import React, { useState } from 'react';
import styles from './layout.module.css';
import { 
  Home, 
  BookOpen, 
  FileText, 
  Calendar, 
  MessageSquare, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fecha o menu de celular ao clicar em um link
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={styles.layoutContainer}>
      <div className={styles.layoutBg}></div>

      <header className={styles.topbar}>
        <div className={styles.brand}>
          <div className={styles.logoBadge}>PPGCO</div>
          <span className={styles.brandName}>ThesisHub</span>
        </div>

        {/* Hamburger Menu Button (Apenas no Mobile) */}
        <button 
          className={styles.hamburgerBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Menu Principal (No Desktop é Horizontal, no Mobile é Vertical) */}
        <nav className={`${styles.desktopNav} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/dashboard" className={`${styles.navItem} ${styles.navItemActive}`} onClick={closeMenu}>
            <Home className={styles.navItemIcon} />
            <span>Início</span>
          </Link>
          <Link href="/dashboard/disciplinas" className={styles.navItem} onClick={closeMenu}>
            <BookOpen className={styles.navItemIcon} />
            <span>Disciplinas</span>
          </Link>
          <Link href="/dashboard/documentos" className={styles.navItem} onClick={closeMenu}>
            <FileText className={styles.navItemIcon} />
            <span>Documentos</span>
          </Link>
          <Link href="/dashboard/calendario" className={styles.navItem} onClick={closeMenu}>
            <Calendar className={styles.navItemIcon} />
            <span>Calendário</span>
          </Link>
          <Link href="/dashboard/mural" className={styles.navItem} onClick={closeMenu}>
             <MessageSquare className={styles.navItemIcon} />
            <span>Mural</span>
          </Link>
          <Link href="/" className={styles.logoutBtn} title="Sair do sistema">
            <LogOut className={styles.navItemIcon} />
            <span>Sair</span>
          </Link>
        </nav>
      </header>

      <main className={styles.mainContent} style={isMenuOpen ? { overflow: 'hidden' } : {}}>
        {children}
      </main>
    </div>
  );
}
