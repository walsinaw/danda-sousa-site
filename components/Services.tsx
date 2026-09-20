import styles from "./Services.module.css";

const services = [
  {
    title: "Autoconhecimento",
    text: "Um espaço para compreender melhor quem você é, suas experiências, emoções e a forma como se relaciona consigo mesma.",
  },
  {
    title: "Emoções",
    text: "Um olhar cuidadoso para compreender o que suas emoções podem estar expressando e os significados presentes em suas experiências.",
  },
  {
    title: "História pessoal",
    text: "Compreender sua história e olhar para suas raízes pode ajudar a perceber aspectos que fazem parte da forma como você vive e se relaciona hoje.",
  },
  {
    title: "Momentos de mudança",
    text: "Mudanças e novas fases podem despertar dúvidas, inseguranças e diferentes sentimentos. A terapia pode ser um espaço para atravessar esses momentos com mais consciência.",
  },
  {
    title: "Individuação",
    text: "Um processo de aproximação de quem você realmente é, integrando sua história, suas experiências e as possibilidades de quem você pode se tornar.",
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
