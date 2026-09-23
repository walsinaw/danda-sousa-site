import styles from "./Quote.module.css";

export default function Quote() {
  return (
    <section className="section section--navy">
      <div className={`container ${styles.wrap}`}>
        <h2>Um espaço de escuta, acolhimento e respeito</h2>
        <p>
          A terapia pode ser um espaço para voltar o olhar para a própria história, escutar aquilo que emerge e compreender os significados que existem por trás das experiências que vivemos.
        </p>
        <p>
          Um espaço para falar sobre o que dói, sobre o que inquieta, sobre aquilo que ainda não encontrou palavras e também sobre aquilo que deseja transformar e construir.
        </p>
        <p className={styles.closing}>
          Sem pressa. Sem respostas prontas. Cada processo tem seu próprio tempo.
        </p>
      </div>
    </section>
  );
}
