import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        <span className="eyebrow">Novo começo</span>
        <h2>Talvez este seja o momento de olhar para si.</h2>
        <p>
          Você não precisa ter todas as respostas para começar.

          <br/>
          A terapia pode ser um espaço para olhar para tudo isso com mais profundidade, escutar o que emerge e compreender seu auto conhecimento.
        </p>
        <p style={{ fontWeight: 500, opacity: 1, marginBottom: 30 }}>
          Será um prazer caminhar com você.
        </p>
        <a href="#contato" className="btn btn--rose">
          Agendar consulta
        </a>
      </div>
    </section>
  );
}
