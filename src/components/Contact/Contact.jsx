import './Contact.scss';

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__inner">
        <p className="contact__eyebrow">CONTACT TO</p>
        <div className="contact__name-wrap">
          <h2 className="contact__name">KIM SE BIN</h2>
        </div>
        <div className="contact__info">
          <span className="contact__info-label">PHONE</span>
          <span className="contact__info-value">010.9098.9474</span>
          <span className="contact__info-label">EMAIL</span>
          <span className="contact__info-value">zczc203@naver.com</span>
        </div>
      </div>
      <div className="contact__footer">
        <span>© 2026.kimsebin_portfolio</span>
      </div>
    </section>
  );
}
