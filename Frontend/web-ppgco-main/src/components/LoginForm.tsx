'use client';

import { useState } from 'react';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login for now
    setTimeout(() => {
      setLoading(false);
      alert(`Login clicked!\nEmail: ${email}`);
    }, 1500);
  };

  return (
    <div className={`glass-panel fade-in ${styles.formContainer}`}>
      <div className={styles.formHeader}>
        <h2>Acesse sua conta</h2>
        <p>Informe suas credenciais para entrar.</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">E-mail Institucional</label>
          <input
            id="email"
            type="email"
            placeholder="usuario@instituicao.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.passwordLabelRow}>
            <label htmlFor="password">Senha</label>
            <a href="#" className={styles.forgotPassword}>Esqueci minha senha</a>
          </div>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <button 
          type="submit" 
          className={`${styles.submitButton} ${loading ? styles.loading : ''}`}
          disabled={loading}
        >
          {loading ? 'Acessando...' : 'Entrar no Sistema'}
        </button>
      </form>
    </div>
  );
}
