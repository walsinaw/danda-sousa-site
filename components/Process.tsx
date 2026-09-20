import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Primeiro contato",
    text: "Você entra em contato para tirar suas dúvidas e conhecer melhor o funcionamento dos atendimentos.",
  },
  {
    number: "02",
    title: "Primeira sessão",
    text: "Um primeiro momento para conversarmos sobre o que trouxe você até aqui e entendermos suas necessidades.",
  },
  {
    number: "03",
    title: "Construção do processo",
    text: "A partir disso, construímos juntos um espaço de acompanhamento, reflexão e cuidado.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="section">
      <div className="container">
        <div className={styles.heading}>
          <h2>Seu processo não precisa ser igual ao de ninguém.</h2>
          <p>
            A terapia acontece de forma individualizada. Durante as sessões,
            vamos compreender suas demandas, sua história e os aspectos que
            estão presentes no momento atual para construir um processo que
            faça sentido para você.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
