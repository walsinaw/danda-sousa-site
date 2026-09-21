import styles from "./AboutStatement.module.css";

export default function AboutStatement() {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        <h2>Psicoterapia é sobre compreender, não sobre ter respostas prontas.</h2>

        <p>Cada pessoa carrega uma história única, marcada por experiências, relações, escolhas e pelos significados que foi construindo ao longo da vida. Na Psicologia Analítica, compreendemos que nem tudo aquilo que nos atravessa está imediatamente acessível à consciência.</p>
        <p>
          A terapia pode ser um espaço para olhar para os pensamentos, sentimentos e emoções com mais profundidade, aproximando-se também daquilo que permanece no inconsciente e buscando compreender o que esses conteúdos podem revelar sobre a própria história.
        </p>
        <p>
          Durante esse processo, não olhamos apenas para o sintoma ou para aquilo que acontece no presente, mas para a pessoa em sua totalidade: sua história, seus vínculos, seus conflitos, sua dimensão consciente e inconsciente e as diferentes partes de si que compõem sua experiência.
        </p>
        <p>A psicoterapia, então, não se trata de encontrar respostas prontas, mas de construir um espaço onde seja possível escutar a si mesmo. Esse movimento faz parte do processo de individuação: um caminho contínuo de aproximação e integração de diferentes aspectos de si, se tornando mais autêntico consigo e com a sua própria vida.</p>

        <p className={styles.quote}>
          Um espaço para se tornar mais consciente de si.
          <br />
          Um espaço para ter a consciência sobre quem se é.
        </p>

        <a href="#servicos" className="btn btn--outline">
          Conheça meu trabalho
        </a>
      </div>
    </section>
  );
}
