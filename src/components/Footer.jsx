import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <img src="/foto/лого.png" alt="logo" className="footer__logo" />
          <p>
            ООО "СТРОЙЭНЕРДЖИ"РФ <br />
            690105, Приморский край, Владивосток, Русская ул, д.73
          </p>
          <p>+7 (994) 016-22-57, Stroyton@inbox.ru</p>
        </div>

        <div className="footer__right">
          <h4>Подписывайся!</h4>
          <div className="footer__socials">
            <a href="#" className="social">
              <img src="/foto/telegram.png" alt="telegram" />
            </a>
            <a href="#" className="social">
              <img src="/foto/vk.png" alt="vk" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
