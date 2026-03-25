'use client';

import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.css';
import { 
  Award, 
  BookMarked, 
  Wifi, 
  Clock, 
  Zap, 
  AlertTriangle, 
  CheckCircle,
  FileText
} from 'lucide-react';

export default function Dashboard() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    setOnline(navigator.onLine);
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className={`${styles.dashboardContainer} fade-in`}>
      
      {!online && (
        <div style={{ padding: '1rem', background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444' }}>
          <Wifi size={20} />
          <strong>Modo Offline Ativo.</strong> Os dados estão sendo lidos do cache local e serão sincronizados automaticamente.
        </div>
      )}

      <section className={styles.welcomeSection}>
        <h1>Olá, João!</h1>
        <p>Acompanhe seu progresso e marcos temporais do mestrado no PPGCO.</p>
      </section>

      <section className={styles.statsGrid}>
        
        <div className={`glass-panel ${styles.statCard}`}>
          <div className={styles.statIconWrapper} style={{ color: '#006494', background: 'rgba(0, 100, 148, 0.15)' }}>
            <BookMarked size={24} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>18/24</span>
            <span className={styles.statLabel}>Créditos Concluídos</span>
          </div>
        </div>

        <div className={`glass-panel ${styles.statCard}`}>
          <div className={styles.statIconWrapper} style={{ color: '#247BA0', background: 'rgba(36, 123, 160, 0.15)' }}>
             <Award size={24} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>2</span>
            <span className={styles.statLabel}>Publicações Validadas</span>
          </div>
        </div>

        <div className={`glass-panel ${styles.statCard}`}>
          <div className={styles.statIconWrapper} style={{ color: '#1B98E0', background: 'rgba(27, 152, 224, 0.15)' }}>
            <Clock size={24} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>Em dia</span>
            <span className={styles.statLabel}>Frequência Diária</span>
          </div>
        </div>

        <div className={`glass-panel ${styles.statCard}`}>
          <div className={styles.statIconWrapper} style={{ color: '#13293D', background: 'rgba(19, 41, 61, 0.15)' }}>
             <Zap size={24} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>120 dias</span>
            <span className={styles.statLabel}>Para Qualificação</span>
          </div>
        </div>

      </section>

      <section className={styles.contentGrid}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className={`glass-panel ${styles.chartCard}`}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}><AlertTriangle size={20} color="var(--primary)"/> Progresso Acadêmico</h2>
            </div>
            
            <div className={styles.progressWrapper}>
              
              <div style={{ width: '150px' }}>
                <svg viewBox="0 0 36 36" className={styles.circularChart}>
                  <path className={styles.circleBg}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path className={styles.circle}
                    strokeDasharray="75, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" className={styles.percentage}>75%</text>
                </svg>
              </div>

              <div className={styles.progressDetails}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize:'0.9rem' }}>
                    <span style={{ color: 'var(--text-dark)' }}>Disciplinas Obrigatórias</span>
                    <strong style={{ color: 'var(--primary-hover)' }}>100%</strong>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize:'0.9rem' }}>
                    <span style={{ color: 'var(--text-dark)' }}>Disciplinas Optativas</span>
                    <strong style={{ color: 'var(--primary-hover)' }}>60%</strong>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className={`glass-panel ${styles.timelineCard}`}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}><Clock size={20} color="var(--primary)"/> Marcos Temporais</h2>
            </div>
            
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={`${styles.timelineDot} ${styles.completed}`}></div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineTitle}>Matrícula Inicial</span>
                  <span className={styles.timelineDate}>Março 2025</span>
                  <span className={styles.timelineDesc}>Início do curso de mestrado e alinhamento do projeto.</span>
                </div>
              </div>

              <div className={styles.timelineItem}>
                 <div className={styles.timelineDot}></div>
                 <div className={styles.timelineContent}>
                  <span className={styles.timelineTitle}>Exame de Qualificação</span>
                  <span className={styles.timelineDate}>Previsão: Julho 2026</span>
                  <span className={styles.timelineDesc}>Avaliação prévia da dissertação pela banca examinadora.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className={`glass-panel ${styles.muralCard}`}>
             <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}><FileText size={20} color="var(--primary)"/> Mural de Avisos</h2>
            </div>

            <div className={styles.avisoList}>
              <div className={styles.avisoItem}>
                <div className={styles.avisoHeader}>
                  <span className={styles.avisoTitle}>Prorrogação de Matrículas</span>
                  <span className={styles.avisoTime}>Hoje, 08:30</span>
                </div>
                <div className={styles.avisoBody}>
                  O prazo para matrícula em disciplinas optativas foi estendido até sexta-feira.
                </div>
              </div>

               <div className={styles.avisoItem}>
                <div className={styles.avisoHeader}>
                  <span className={styles.avisoTitle}>Edital de Bolsas CAPES</span>
                  <span className={styles.avisoTime}>Ontem, 14:00</span>
                </div>
                <div className={styles.avisoBody}>
                  Novo edital de bolsas para mestrado disponível na intranet.
                </div>
              </div>
            </div>
          </div>

          <div className={`glass-panel ${styles.muralCard}`}>
             <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}><CheckCircle size={20} color="var(--primary)"/> Tarefas Pendentes</h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
               <label style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', cursor: 'pointer' }}>
                 <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }} />
                 <span style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>Assinar ata de reunião de orientação</span>
               </label>
            </div>
          </div>

        </div>

      </section>
      
    </div>
  );
}
