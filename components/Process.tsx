import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Primeiro contato",
    text: "Entre em contato para tirar suas dúvidas, conhecer o funcionamento dos atendimentos e entender se este é o momento de iniciar seu processo terapêutico.",
  },
  {
    number: "02",
    title: "Primeiro encontro",
    text: "Um primeiro momento para conhecermos melhor sua demanda, sua história e aquilo que trouxe você até a terapia.",
  },
  {
    number: "03",
    title: "Construção do processo",
    text: "A partir dos nossos encontros, construímos um espaço de escuta, reflexão e autoconhecimento, respeitando o seu tempo e a sua individualidade.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="section">
      <div className="container">
        <div className={styles.heading}>
          <h2>Seu processo é construído no seu tempo</h2>
          <p>
            Cada pessoa chega à terapia com uma história e necessidades diferentes. Por isso, o processo é individualizado e construído a partir daquilo que você vive e deseja compreender.
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
