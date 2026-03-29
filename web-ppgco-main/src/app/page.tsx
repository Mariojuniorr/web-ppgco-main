import LoginForm from '@/components/LoginForm';
import styles from './page.module.css';

export default function LoginPage() {
  return (
    <main className={styles.mainContainer}>
      {/* Decorative background elements for premium feel */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      
      <div className={styles.contentWrapper}>
        <div className={styles.brandSection}>
          <div className={styles.logoBadge}>PPGCO</div>
          <h1 className={`${styles.title} fade-in`}>O Futuro da Pos-Graduacao</h1>
          <p className={`${styles.subtitle} fade-in`} style={{ animationDelay: '0.2s' }}>
            Acesso ao sistema de gestao academica da UFU.
          </p>
        </div>
        
        <div className={styles.formSection}>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
