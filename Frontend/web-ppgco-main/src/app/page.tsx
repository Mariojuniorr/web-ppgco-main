import LoginForm from '@/components/LoginForm';
import styles from './page.module.css';

export default function LoginPage() {
  return (
    <main className={styles.mainContainer}>
      {/* Decorative background elements for premium feel */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={styles.blob3}></div>
      
      <div className={styles.contentWrapper}>
        <div className={`${styles.logoContainer} fade-in`}>
          <div className={styles.logoCircle}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.brandTexts}>
            <span className={styles.logotype}>ThesisHub</span>
            <span className={styles.university}>Plataforma Acadêmica</span>
          </div>
        </div>
        
        <div className={`${styles.formSection} fade-in`} style={{ animationDelay: '0.1s' }}>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
