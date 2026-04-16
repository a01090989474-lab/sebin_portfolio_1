import './Contact.scss';

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact__inner">
          <p className="contact__eyebrow">CONTACT TO</p>
          <h2 className="contact__title">
            Let's work<br />
            <span className="contact__title--blue">together.</span>
          </h2>
          <p className="contact__desc">
            새로운 프로젝트나 협업에 대한 이야기를 나눠요.<br />
            언제든지 연락 주세요.
          </p>
          <div className="contact__links">
            <a href="mailto:example@email.com" className="contact__link contact__link--primary">
              Email me →
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="contact__link">
              GitHub
            </a>
            <a href="#" className="contact__link">
              Resume
            </a>
          </div>
        </div>
      </div>
      <div className="contact__footer">
        <span>© 2025 Portfolio. All rights reserved.</span>
      </div>
    </section>
  );
}
