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

const TOTAL = IMAGES.length * 2;
const ANGLE_STEP = 360 / TOTAL;

export default function Hero() {
  const ringRef = useRef(null);
  const tweenRef = useRef(null);
  const subRef = useRef(null);
  const titleLineRefs = useRef([]);
  const descRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to(subRef.current, { opacity: 1, y: 0, duration: 0.6 })
      .to(
        titleLineRefs.current,
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.12 },
        "+=0.1"
      )
      .to(descRef.current, { opacity: 1, y: 0, duration: 0.6 }, "+=0.1");

    tweenRef.current = gsap.to(ringRef.current, {
      rotation: "+=360",
      duration: 50,
      repeat: -1,
      ease: "none",
    });

    return () => {
      tl.kill();
      tweenRef.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.resume();

  return (
    <section className="hero">
      <div className="hero__inner">
        <p ref={subRef} className="hero__sub">
          Portfolio 2026
        </p>
        <h1 className="hero__title">
          <span
            ref={(el) => { titleLineRefs.current[0] = el; }}
            className="hero__title-line"
          >
            <span className="hero__title--point">Breaking conventions</span>
          </span>
          <span
            ref={(el) => { titleLineRefs.current[1] = el; }}
            className="hero__title-line"
          >
            with a free and open perspective,
          </span>
          <span
            ref={(el) => { titleLineRefs.current[2] = el; }}
            className="hero__title-line"
          >
            <span className="hero__title--point">I design experiences</span> that
          </span>
          <span
            ref={(el) => { titleLineRefs.current[3] = el; }}
            className="hero__title-line"
          >
            keep users coming back for more.
          </span>
        </h1>
        <p ref={descRef} className="hero__desc">
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

          <div className="hero__scroll">
            <span>scroll</span>
            <div className="hero__scroll-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
