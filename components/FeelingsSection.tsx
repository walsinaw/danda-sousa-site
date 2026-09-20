import styles from "./FeelingsSection.module.css";

const feelings = [
  "Ansiedade que não parece desligar",
  "Pensamentos que continuam mesmo quando o dia termina",
  "Dificuldade para estabelecer limites",
  "Inseguranças que afetam suas relações",
  "Cansaço emocional",
  "Medo de tomar decisões",
  "Sensação de estar sempre tentando dar conta de tudo",
  "Ou simplesmente a vontade de se conhecer melhor",
];

export default function FeelingsSection() {
  return (
    <section className="section section--alt">
      <div className={`container ${styles.wrap}`}>
        <div className={styles.heading}>
          <span className="eyebrow">Identifica-se com algo disso?</span>
          <h2>Talvez você esteja vivendo...</h2>
        </div>

        <ul className={styles.list}>
          {feelings.map((feeling) => (
            <li key={feeling} className={styles.pill}>
              {feeling}
            </li>
          ))}
        </ul>

        <p className={styles.closing}>
          Você não precisa ter todas as respostas para começar.
        </p>
      </div>
    </section>
  );
}
