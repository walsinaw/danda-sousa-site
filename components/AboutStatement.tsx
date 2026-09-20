import styles from "./AboutStatement.module.css";

export default function AboutStatement() {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        <h2>Psicoterapia é sobre compreender, não sobre ter respostas prontas.</h2>

        <p>Cada pessoa chega à terapia com uma história diferente.</p>
        <p>
          Por isso, o processo terapêutico é construído a partir da sua
          individualidade, respeitando seu tempo, suas experiências e aquilo
          que faz sentido para você.
        </p>
        <p>
          Meu trabalho é oferecer uma escuta profissional, ética e acolhedora
          para que você possa olhar para suas experiências com mais clareza e
          desenvolver novas formas de lidar com aquilo que hoje causa
          sofrimento.
        </p>

        <p className={styles.quote}>
          Um espaço para falar.
          <br />
          Um espaço para compreender.
          <br />
          Um espaço para você.
        </p>

        <a href="#servicos" className="btn btn--outline">
          Conheça meu trabalho
        </a>
      </div>
    </section>
  );
}
