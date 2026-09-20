import styles from "./Quote.module.css";

export default function Quote() {
  return (
    <section className="section section--navy">
      <div className={`container ${styles.wrap}`}>
        <h2>Um espaço de escuta, acolhimento e respeito</h2>
        <p>
          A terapia pode ser um espaço para olhar para sua história com cuidado, compreender suas emoções e dar novos significados às suas experiências.
        </p>
        <p>
          Um espaço reservado para falar sobre o que dói, sobre o que
          preocupa, sobre aquilo que ainda não consegue compreender e também
          sobre aquilo que deseja construir.
        </p>
        <p className={styles.closing}>
          Sem pressa e sem respostas prontas. Cada processo tem seu próprio tempo.
        </p>
      </div>
    </section>
  );
}
