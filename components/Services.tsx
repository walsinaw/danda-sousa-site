import styles from "./Services.module.css";

const services = [
  {
    title: "Autoconhecimento",
    text: "Um espaço para compreender quem você é, sua história, emoções e aquilo que existe por trás da forma que você se relaciona com si mesma.",
  },
  {
    title: "Emoções",
    text: "Vamos buscar acolher e compreender o que você sente, compreendendo melhor as suas emoções e os seus significados.",
  },
  {
    title: "Relações e Vínculos",
    text: "Ampliar o olhar para os comportamentos presentes em suas relações, reconhecendo seus limites, necessidade e maneiras de conectar com o outro.",
  },
  {
    title: "Identidade e Individuação",
    text: "Explorar quem você é para além de expectativas externas, se aproximando dos diferentes aspectos que você carrega, construindo assim um caminho mais autêntico.",
  },
  {
    title: "Infância e Desenvolvimento",
    text: "Um espaço de escuta e acolhimento para que a criança possa se expressar, elaborar e compreender suas emoções por meio de recursos lúdicos",
  },
  {
    title: "Conflitos Internos e Mudanças",
    text: "Atravessar momentos de transformação e novas fases da vida, compreendendo comportamentos, sentimentos e situações  que possam se repetir, investigando suas raízes.",
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
