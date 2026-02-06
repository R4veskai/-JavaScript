import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="container hero__content">
          <h1>Ремонт и строительство во Владивостоке под ключ</h1>
          <p>
            Предлагаем профессиональные строительные услуги для всех типов проектов, 
            гарантируя высокое качество и удовлетворение клиентов.
          </p>
        <div className="hero__buttons">
          <a href="#contact" className="btn btn-primary">Получить консультацию</a>
          <a href="#projects" className="btn btn-outline">Наши проекты</a>
        </div>
        </div>
      </div>
    </section>
  );
}
