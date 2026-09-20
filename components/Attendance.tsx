import PhotoPlaceholder from "./PhotoPlaceholder";
import styles from "./Attendance.module.css";

export default function Attendance() {
  return (
    <section id="atendimento" className="section section--alt">
      <div className="container">
        <div className={styles.heading}>
          <span className="eyebrow">Atendimento</span>
          <h2>Como você prefere ser atendido(a)</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <PhotoPlaceholder
              label="Foto · Atendimento online"
              aspectRatio="16 / 10"
              className={styles.image}
            />
            <div className={styles.cardBody}>
              <span className={styles.tag}>Online</span>
              <h3>Online</h3>
              <p>
                Sessões realizadas por videochamada, com praticidade e
                privacidade para que você possa realizar seu acompanhamento
                de onde estiver.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <PhotoPlaceholder
              label="Foto · Atendimento presencial"
              aspectRatio="16 / 10"
              className={styles.image}
            />
            <div className={styles.cardBody}>
              <span className={styles.tag}>Presencial</span>
              <h3>Presencial</h3>
              <p>
                Atendimento em consultório, em um ambiente reservado e
                acolhedor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
