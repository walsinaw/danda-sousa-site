import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contato" className="section section--alt">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Contato</span>
          <h2>Vamos conversar?</h2>
          <p>
            Se você ainda tem dúvidas sobre a terapia ou gostaria de entender
            como funciona o atendimento, entre em contato.
            <br />
            Será um prazer conversar com você!
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.details}>
            <span className="eyebrow" style={{ marginBottom: 4 }}>
              Telefone / WhatsApp
            </span>
            <a href="https://wa.link/qqx4y7" target="_blank" rel="noopener noreferrer">
              (22) 99846-7628
            </a>
          </div>

          <div style={{ height: 26 }} />

          <div className={styles.details}>
            <span className="eyebrow" style={{ marginBottom: 4 }}>
              Instagram
            </span>
            <a
              href="https://instagram.com/psidandasousa"
              target="_blank"
              rel="noopener noreferrer"
            >
              @psidandasousa
            </a>
          </div>

          <div style={{ height: 34 }} />

          <a href="https://wa.link/qqx4y7" className="btn btn--primary">
            Agendar atendimento
          </a>
        </div>
      </div>
    </section>
  );
}
