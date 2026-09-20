import styles from "./Services.module.css";

const services = [
  {
    title: "Ansiedade",
    text: "Para momentos em que a preocupação, os pensamentos acelerados ou a sensação de alerta começam a ocupar espaço demais na sua rotina.",
  },
  {
    title: "Autoestima e autoconhecimento",
    text: "Para compreender melhor quem você é, reconhecer suas necessidades e construir uma relação mais saudável consigo mesma.",
  },
  {
    title: "Relacionamentos",
    text: "Para olhar para padrões, conflitos, inseguranças e dificuldades que aparecem nas relações afetivas, familiares ou sociais.",
  },
  {
    title: "Sobrecarga emocional",
    text: "Quando parece que você precisa dar conta de tudo e não encontra espaço para simplesmente respirar.",
  },
  {
    title: "Mudanças e momentos de transição",
    text: "Términos, mudanças profissionais, novas fases da vida, decisões importantes e outros momentos que podem trazer dúvidas e inseguranças.",
  },
  {
    title: "Desenvolvimento emocional",
    text: "Um processo para compreender suas emoções, comportamentos e escolhas com mais consciência.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container">
        <div className={styles.heading}>
          <span className="eyebrow">Serviços</span>
          <h2>Como posso te ajudar?</h2>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={service.title} className={styles.card}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
