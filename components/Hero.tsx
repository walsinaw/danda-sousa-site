import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="topo" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Psicoterapia online e presencial</span>
          <h1>Um espaço para você se escutar.</h1>
          <p>
            Nem sempre é fácil entender o que sentimos, muito menos colocar
            tudo em palavras.
          </p>
          <p>
            A psicoterapia pode ser um espaço de pausa, acolhimento e
            reflexão para compreender melhor suas emoções, sua história e a
            forma como você se relaciona consigo e com o mundo.
          </p>
          <span className={styles.cue}>Vamos conversar?</span>
          <a href="#contato" className="btn btn--primary">
            Agendar atendimento
          </a>
        </div>

        <div className={styles.photo}>
          <Image
            src="/images/hero.webp"
            alt="Dândala Sousa, psicóloga"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
