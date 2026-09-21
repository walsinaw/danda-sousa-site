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
          <span className={styles.greeting}>Oi, eu sou a Danda!</span>
          <h2>
            Sou psicóloga e utilizo abordagem da Psicologia Analítica.
          </h2>
          <p>Acredito que cada pessoa possui uma história que merece ser escutada com cuidado, respeito e acolhimento.</p>
          <p>
            Na minha prática, busco oferecer um espaço onde você possa falar sobre suas experiências, emoções e questões de forma individualizada, respeitando seu tempo e aquilo que faz sentido para você.
          </p>
          <p>
            A Psicologia Analítica, também conhecida como Psicologia Junguiana, busca compreender não apenas o que vivemos no presente, mas também os significados por trás das nossas experiências e emoções.
          </p>
          <p>E, é claro, sou humana assim como você. Por isso, também busco trazer leveza para as nossas sessões. Acredito que a terapia pode ser um espaço de profundidade, mas também de acolhimento, espontaneidade e, quando fizer sentido, até de algumas risadas no caminho.</p>

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
