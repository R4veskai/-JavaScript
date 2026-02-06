import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <img src="/foto/лого.png" alt="logo" />

        <nav className={`nav ${open ? "nav--open" : ""}`}>
          <a href="#services" onClick={() => setOpen(false)}>Услуги</a>
          <a href="#projects" onClick={() => setOpen(false)}>Работы</a>
          <a href="#contact" onClick={() => setOpen(false)}>Консультация</a>
          <a href="#about" onClick={() => setOpen(false)}>О нас</a>
        </nav>

        <div className="header__socials">
          <a href="#" className="social"><img src="/foto/telegram.png" alt="telegram" /></a>
          <a href="#" className="social"><img src="/foto/vk.png" alt="vk" /></a>
          <a href="#" className="social"><img src="/foto/what.png" alt="whatsapp" /></a>
        </div>

        <button className="burger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
