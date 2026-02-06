import "./Advantages.css";

const items = [
  {
    title: "Широкий спектр услуг",
    text: "Выполняем все виды строительных работ под ключ, от фундамента до отделки.",
  },
  {
    title: "Опыт и профессионализм",
    text: "Многолетний опыт в строительстве позволяет нам выполнять проекты любой сложности.",
  },
  {
    title: "Современные технологии",
    text: "Применяем современные методы и материалы для обеспечения высокого качества работ.",
  },
  {
    title: "Соблюдение сроков",
    text: "Строго соблюдаем установленные сроки, чтобы вы могли планировать свои задачи.",
  },
  {
    title: "Индивидуальный подход",
    text: "Разрабатываем проекты с учётом ваших пожеланий и особенностей объекта.",
  },
  {
    title: "Гарантии качества",
    text: "Предоставляем гарантии на все выполненные работы и используемые материалы.",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="advantages">
      <div className="container">
        <h2>Почему стоит выбрать нашу строительную компанию</h2>

        <div className="advantages__grid">
          {items.map((item, i) => (
            <div className="advantages__item" key={i}>
              <div className="advantages__number">{i + 1}</div>
              <div className="advantages__text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
