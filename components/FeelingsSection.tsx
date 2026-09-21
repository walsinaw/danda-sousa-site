import styles from "./FeelingsSection.module.css";

const feelings = [
  "Entender melhor seus sentimentos e comportamentos",
  "Continuar seu processo de individuação",
  "Aprender a escolher o que você sente",
  "Compreender vínculos que parecem ser difíceis",
  "Se permitir mudar",
  "Falar e ser escutado com acolhimento",
];

export default function FeelingsSection() {
  return (
    <section className="section section--alt">
      <div className={`container ${styles.wrap}`}>
        <div className={styles.heading}>
          <span className="eyebrow">Identifica-se com algo disso?</span>
          <h2>Talvez você esteja buscando...</h2>
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
