import { useEffect, useRef } from "react";
import "./Profile.scss";

export default function Profile() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    sectionRef.current.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="profile" ref={sectionRef}>
      <div className="container">
        <h2 className="profile__title fade-in">PROFILE</h2>

        <div className="profile__intro fade-in">
          <p className="profile__quote">
            "단순히 예쁜 결과물을 넘어 사용자의 경험, 본질을 탐구합니다"
          </p>
          <p className="profile__sub">
            현재에 안주하지 않고 끊임없이 탐구하고, 다양한 시안을 연구하며
            검증하는 능동적인 실행력을 갖추었습니다.
            <br />
            사용자가 다음 여정을 기대하게 만드는, 논리적이고도 매력적인 경험을
            설계하는 디자이너로 성장하겠습니다.
          </p>
        </div>

        <div className="profile__card fade-in">
          <div className="profile__photo">
            <img src="/images/profile.jpg" alt="김세빈 프로필" />
          </div>

          <div className="profile__info">
            <div className="profile__contact-row">
              <div className="profile__contact-item">
                <label>NAME</label>
                <span>김세빈 / KIM SE BIN</span>
              </div>
              <div className="profile__contact-item">
                <label>BIRTH</label>
                <span>1998.09.08</span>
              </div>
              <div className="profile__contact-item">
                <label>PHONE</label>
                <span>010.9098.8474</span>
              </div>
              <div className="profile__contact-item">
                <label>EMAIL</label>
                <span>zczc203@naver.com</span>
              </div>
            </div>

            <div className="profile__section">
              <h3 className="profile__section-title">EDUCATION</h3>
              <ul className="profile__list">
                <li>
                  <span className="profile__date">2025.10 - 2026.03</span>
                  <div className="profile__detail">
                    <span className="profile__edu-name">
                      UX UI 디자인 웹 프론트엔드개발 부트캠프
                      <br />
                      (생성형AI활용 / 피그마)
                    </span>
                    <span className="profile__org">이젠아카데미DX교육센터</span>
                  </div>
                </li>
                <li>
                  <span className="profile__date">2017.03 - 2019.02</span>
                  <div className="profile__detail">
                    <span>아동보육과</span>
                    <span className="profile__org">유한대학교</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="profile__section">
              <h3 className="profile__section-title">CAREER DETAILS</h3>
              <ul className="profile__list">
                <li>
                  <span className="profile__date">2024.04 - 2025.07</span>
                  <div className="profile__detail">
                    <span>고객응대, 수하물 처리 및 발권</span>
                    <span className="profile__org">(주)에이티에스제주</span>
                  </div>
                </li>
                <li>
                  <span className="profile__date">2023.01 - 2023.11</span>
                  <div className="profile__detail">
                    <span>매장 운영 및 베이커리 제조</span>
                    <span className="profile__org">(주)붐컴퍼니</span>
                  </div>
                </li>
                <li>
                  <span className="profile__date">2020.07 - 2022.03</span>
                  <div className="profile__detail">
                    <span>만 0 - 1세 담임교사</span>
                    <span className="profile__org">시립장현행복어린이집</span>
                  </div>
                </li>
                <li>
                  <span className="profile__date">2019.03 - 2020.03</span>
                  <div className="profile__detail">
                    <span>만 2세 담임교사</span>
                    <span className="profile__org">예손어린이집</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
