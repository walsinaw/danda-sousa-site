import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="topo" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Psicoterapia online e presencial</span>
          <h1>Um espaço para você se autoconhecer.</h1>
          <p>
            A psicoterapia pode ser um espaço para olhar para si com mais profundidade, acolher aquilo que emerge e compreender os significados que existem por trás das suas experiências. Na perspectiva da Psicologia Analítica, buscamos também olhar para a própria história e para os conteúdos que habitam o inconsciente, reconhecendo como eles podem atravessar nossas escolhas, relações e a maneira como nos percebemos.
          </p>
          <p>
            Mais do que buscar respostas prontas, o processo terapêutico pode ser um caminho de encontro consigo mesmo — de compreender, elaborar e, aos poucos, construir uma relação mais consciente com quem você é.
          </p>
          <span className={styles.cue}>Se permita olhar para si.</span>
          <a href="#contato" className="btn btn--primary">
            Agendar atendimento
          </a>
        </div>

        <div className={styles.photo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="Dândala Sousa, psicóloga" />
        </div>
      </div>
    </section>
  );
}
