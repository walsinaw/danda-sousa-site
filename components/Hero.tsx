import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="topo" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Psicoterapia online e presencial</span>
          <h1>Um espaço para você se auto conhecer.</h1>
          <p>
            Nem sempre é fácil compreender o que sentimos, de onde vêm determinados padrões ou por que algumas experiências continuam fazendo parte da nossa história.
          </p>
          <p>
            A psicoterapia pode ser um espaço de escuta, acolhimento e reflexão para olhar para si com mais cuidado e compreender os significados por trás das suas emoções e experiências.
          </p>
          <span className={styles.cue}>Se permitir olhar para si também é um primeiro passo.</span>
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
