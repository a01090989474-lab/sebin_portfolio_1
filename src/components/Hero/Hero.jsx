import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <p className="hero__sub">Portfolio 2026</p>
        <h1 className="hero__title">
          <span className="hero__title--point">Breaking conventions</span>
          <br />
          with a free and open perspective,
          <br />
          <span className="hero__title--point">I design experiences</span> that
          <br />
          keep users coming back for more.
        </h1>
        <p className="hero__desc">
          자유롭고 열린 시각으로 관습을 깨뜨리며, 사용자가 계속 찾게 되는 경험을
          설계합니다.
        </p>

        {/* public/images/ 폴더에 이미지 파일 넣고 아래 src 경로 수정 */}
        <div className="hero__images">
          <div className="hero__img">
            <img src="/images/main_1.png" alt="" />
          </div>
          <div className="hero__img">
            <img src="/images/main_2.png" alt="" />
          </div>
          <div className="hero__img">
            <img src="/images/main_3.png" alt="" />
          </div>
          <div className="hero__img">
            <img src="/images/main_4.png" alt="" />
          </div>
          <div className="hero__img">
            <img src="/images/main_5.png" alt="" />
          </div>
        </div>

        <div className="hero__scroll">
          <span>scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </div>
    </section>
  );
}
