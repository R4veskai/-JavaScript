import "./ContactForm.css";

export default function ContactForm() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__content">
        <h2>Получите бесплатную консультацию</h2>
        <p>Наши специалисты ответят на ваши вопросы и дадут экспертные советы</p>

        <form className="contact__form">
          <input type="text" placeholder="Имя" />
          <input type="tel" placeholder="Номер телефона" />
          <button className="btn btn-primary">Отправить запрос</button>
        </form>
      </div>
    </section>
  );
}