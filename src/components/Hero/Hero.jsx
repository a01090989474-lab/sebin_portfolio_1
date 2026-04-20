import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Hero.scss";

const IMAGES = [
  "/images/main_1.png",
  "/images/main_2.png",
  "/images/main_3.png",
  "/images/main_4.png",
  "/images/main_5.png",
];

const TOTAL = IMAGES.length * 2; // 10 images on the circle
const ANGLE_STEP = 360 / TOTAL; // 36° between each

export default function Hero() {
  const ringRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    tweenRef.current = gsap.to(ringRef.current, {
      rotation: "+=360",
      duration: 50,
      repeat: -1,
      ease: "none",
    });

    return () => tweenRef.current.kill();
  }, []);

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.resume();

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

        <div className="hero__images">
          <div ref={ringRef} className="hero__ring">
            {Array.from({ length: TOTAL }).map((_, i) => (
              <div
                key={i}
                className="hero__img"
                style={{ "--angle": `${i * ANGLE_STEP}deg` }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={IMAGES[i % IMAGES.length]} alt="" />
              </div>
            ))}
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
