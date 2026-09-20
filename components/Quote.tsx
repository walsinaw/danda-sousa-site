import styles from "./Quote.module.css";

export default function Quote() {
  return (
    <section className="section section--navy">
      <div className={`container ${styles.wrap}`}>
        <h2>Um espaço de escuta e acolhimento.</h2>
        <p>
          A terapia precisa ser um lugar onde você possa existir sem precisar
          se explicar o tempo todo.
        </p>
        <p>
          Um espaço reservado para falar sobre o que dói, sobre o que
          preocupa, sobre aquilo que ainda não consegue compreender e também
          sobre aquilo que deseja construir.
        </p>
        <p className={styles.closing}>
          Aqui, cada processo tem seu próprio tempo.
        </p>
      </div>
    </section>
  );
}
