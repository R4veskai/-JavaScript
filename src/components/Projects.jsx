import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Наши реализованные проекты</h2>
        <p>Погрузитесь в мир наших завершённых 
            проектов и найдите вдохновение для вашего следующего строительства.</p>

        <div className="projects__grid">
            <img src="/foto/1.jpg" alt="project"/>
            <img src="/foto/2.jpg" alt="project"/>
            <img src="/foto/3.jpg" alt="project"/>
            <img src="/foto/4.jpg" alt="project"/>
            <img src="/foto/5.jpg" alt="project"/>
            <img src="/foto/6.jpg" alt="project"/>
            <img src="/foto/7.jpg" alt="project"/>
            <img src="/foto/8.jpg" alt="project"/>
        </div>
      </div>
    </section>
  );
}