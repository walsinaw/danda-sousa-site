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
          Se existe algo que você deseja compreender melhor, se há experiências que continuam fazendo parte da sua história ou simplesmente sente vontade de se conhecer mais profundamente, a terapia pode ser um espaço para esse processo.
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
