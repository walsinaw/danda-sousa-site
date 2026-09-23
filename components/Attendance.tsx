import Image from "next/image";
import styles from "./Attendance.module.css";

export default function Attendance() {
  return (
    <section id="atendimento" className="section section--alt">
      <div className="container">
        <div className={styles.heading}>
          <span className="eyebrow">Atendimento</span>
          <h2>Como você prefere ser atendido(a)?</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={`${styles.photo} ${styles.image}`}>
              <Image
                src="/images/online.jpeg"
                alt="Atendimento online"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.tag}>Online</span>
              <h3>Online Particular</h3>
              <p>
                As sessões online são realizadas por Google Meet ou WhatsApp, em um ambiente reservado, confortável e tranquilo. Com duração de 30 ou 50 minutos.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={`${styles.photo} ${styles.image}`}>
              <Image
                src="/images/presencial.jpg"
                alt="Atendimento presencial"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.tag}>Presencial</span>
              <h3>Presencial Particular</h3>
              <p>
                Atendimento presencial em consultório, com duração de 30 ou 50 minutos.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={`${styles.photo} ${styles.image}`}>
              <Image
                src="/images/infantil.png"
                alt="Atendimento presencial infantil e TEA"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.tag}>Presencial</span>
              <h3>Presencial Convênio</h3>
              <p>
                Atendimentos voltados ao público infantil e de
                pessoas no Transtorno do Espectro Autista (TEA). Os
                atendimentos são realizados por meio de planos de saúde conveniados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
