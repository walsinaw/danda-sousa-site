import styles from "./FeelingsSection.module.css";

const feelings = [
  "Compreender melhor o que sente",
  "Olhar para padrões que se repetem na sua vida",
  "Entender melhor suas relações e experiências",
  "Encontrar novos significados para momentos difíceis",
  "Conhecer mais profundamente quem você é",
  "Ter um espaço para falar e ser escutado(a) com acolhimento",
  "Compreender sua história com mais cuidado",
  "Ou simplesmente começar um processo de autoconhecimento",
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
