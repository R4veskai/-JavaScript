import "./Services.css";

const services = [
  { title: "Сварочные работы", img: "/foto/сварка.jpg" },
  { title: "Монтаж кровли и фасада", img: "/foto/монтаж.jpg" },
  { title: "Земляные работы", img: "/foto/земляные.jpg" },
  { title: "Электрика", img: "/foto/электрика.jpg" },
  { title: "Стены и перегородки", img: "/foto/стены.jpg" },
  { title: "Штукатурно малярные работы", img: "/foto/штукатурка.jpg" },
  { title: "Монолитные работы", img: "/foto/монолит.jpg" },
  { title: "Сантехника", img: "/foto/сантехника.jpg" },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Мы предлагаем широкий спектр услуг</h2>

        <div className="services__grid">
          {services.map((item, i) => (
            <div className="service-card" key={i}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}