import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <div className={styles.logo}>Dândala Sousa</div>
            <div className={styles.role}>Psicóloga | CRP 05/84568</div>
          </div>

          <div className={styles.location}>
            Atendimento online e presencial
            <br />
            Campos dos Goytacazes/RJ
          </div>

          <div className={styles.contactList}>
            <a href="tel:22998467628">22 99846-7628</a>
            <a
              href="https://instagram.com/psidandasousa"
              target="_blank"
              rel="noopener noreferrer"
            >
              @psidandasousa
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 Dândala Sousa. Todos os direitos reservados.</span>
          <span className={styles.made}>
            Feito por <span className={styles.madeBadge}>WAW</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
