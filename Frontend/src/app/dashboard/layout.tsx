import React from 'react';
import styles from './layout.module.css';
import { 
  Home, 
  BookOpen, 
  FileText, 
  Calendar, 
  MessageSquare, 
  LogOut
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.layoutBg}></div>

      <header className={styles.topbar}>
        <div className={styles.brand}>
          <div className={styles.logoBadge}>PPGCO</div>
          <span className={styles.brandName}>ThesisHub</span>
        </div>

        <nav className={styles.navList}>
          <Link href="/dashboard" className={`${styles.navItem} ${styles.navItemActive}`}>
            <Home className={styles.navItemIcon} />
            <span className={styles.navText}>Início</span>
          </Link>
          <Link href="/dashboard/disciplinas" className={styles.navItem}>
            <BookOpen className={styles.navItemIcon} />
            <span className={styles.navText}>Disciplinas</span>
          </Link>
          <Link href="/dashboard/documentos" className={styles.navItem}>
            <FileText className={styles.navItemIcon} />
            <span className={styles.navText}>Documentos</span>
          </Link>
          <Link href="/dashboard/calendario" className={styles.navItem}>
            <Calendar className={styles.navItemIcon} />
            <span className={styles.navText}>Calendário</span>
          </Link>
          <Link href="/dashboard/mural" className={styles.navItem}>
             <MessageSquare className={styles.navItemIcon} />
            <span className={styles.navText}>Mural</span>
          </Link>
        </nav>

        <Link href="/" className={styles.logoutBtn} title="Sair do sistema">
          <LogOut className={styles.navItemIcon} />
          <span className={styles.navText}>Sair</span>
        </Link>
      </header>

      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
