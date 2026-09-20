import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="sobre" className="section section--alt">
      <div className={`container ${styles.grid}`}>
        <div className={styles.photo}>
          <Image
            src="/images/about.jpeg"
            alt="Dândala Sousa"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.copy}>
          <span className="eyebrow">Sobre mim</span>
          <span className={styles.greeting}>Olá, eu sou Danda.</span>
          <h2>
            Sou psicóloga analítica e acredito que cada pessoa possui uma
            história que merece ser escutada com cuidado.
          </h2>
          <p>
            Na minha prática clínica, busco construir um espaço seguro e
            livre de julgamentos, onde você possa falar sobre aquilo que
            muitas vezes é difícil compartilhar em outros lugares.
          </p>
          <p>
            Minha atuação é baseada em [ABORDAGEM], unindo conhecimento
            técnico, ética profissional e uma escuta atenta à singularidade
            de cada pessoa.
          </p>
          <p>
            Mais do que oferecer respostas prontas, meu objetivo é caminhar
            ao seu lado durante o processo de compreender o que você está
            vivendo.
          </p>

          <span className={styles.crp}>CRP 05/84568</span>

          <div>
            <a href="#processo" className="btn btn--rose">
              Conheça nossa trajetória
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
