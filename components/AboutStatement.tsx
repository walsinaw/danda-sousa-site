import styles from "./AboutStatement.module.css";

export default function AboutStatement() {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        <h2>Psicoterapia é sobre compreender, não sobre ter respostas prontas.</h2>

        <p>Cada pessoa chega à terapia com uma história diferente.</p>
        <p>
          Cada pessoa possui uma história, experiências e caminhos diferentes. Por isso, o processo terapêutico é construído respeitando a sua individualidade, o seu momento e o seu próprio tempo.
        </p>
        <p>
          Na terapia, podemos olhar não apenas para aquilo que você vive hoje, mas também para os significados presentes nas suas emoções, experiências e relações.
          Mais do que encontrar respostas prontas, o processo pode ajudar você a se aproximar de quem realmente é.
        </p>

        <p className={styles.quote}>
          Um espaço para falar.
          <br />
          Um espaço para compreender.
          <br />
          Um espaço para se conhecer.
        </p>

        <a href="#servicos" className="btn btn--outline">
          Conheça meu trabalho
        </a>
      </div>
    </section>
  );
}
