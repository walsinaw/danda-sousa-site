import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        <span className="eyebrow">Novo começo</span>
        <h2>Talvez este seja o momento de começar.</h2>
        <p>
          Você não precisa esperar chegar ao seu limite para procurar ajuda.
          Se existe algo que tem incomodado, se repetido ou ocupado espaço
          demais na sua vida, podemos olhar para isso juntos.
        </p>
        <p style={{ fontWeight: 500, opacity: 1, marginBottom: 30 }}>
          Agende seu primeiro atendimento.
        </p>
        <a href="#contato" className="btn btn--rose">
          Agendar consulta
        </a>
      </div>
    </section>
  );
}
