import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Banner.scss";

gsap.registerPlugin(ScrollTrigger);

const COLS = 9;
const ROWS = 5;
const CENTER_COL = 4;
const CENTER_ROW = 1;

export default function Banner() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "none" } });

      // phase 1 (0-5): 패럴랙스 — 모든 열 포함
      tl.fromTo(".banner__col-track--even", { y: 0 }, { y: -200, duration: 5 }, 0);
      tl.fromTo(".banner__col-track--odd",  { y: 0 }, { y:  200, duration: 5 }, 0);

      // phase 1→4 전환 (5.0-7.0): center 열만 y:-200 → y:0 으로 복귀
      tl.fromTo(".banner__col-track--center", { y: -200 }, { y: 0, duration: 2.0, ease: "power2.out" }, 5.0);

      // phase 2 (4.0-6.0): 알약 fade out
      tl.fromTo(
        ".banner__pill",
        { opacity: 0.9 },
        { opacity: 0, duration: 1.4, stagger: { amount: 0.4 } },
        4.0
      );

      // phase 3 (6.0-7.3): 가로 flip
      tl.fromTo(".banner__photo--front", { rotateY: 0   }, { rotateY:  90, duration: 0.65 }, 6.0);
      tl.fromTo(".banner__photo--back",  { rotateY: -90 }, { rotateY:   0, duration: 0.65 }, 6.65);

      // phase 4a (6.5-8.5): 배경을 scale 시작 전부터 흰색으로
      tl.fromTo(
        ".banner",
        { backgroundColor: "#191919" },
        { backgroundColor: "#fdfdfd", duration: 2.0 },
        6.5
      );

      // phase 4b (7.0-8.5): 확대
      tl.fromTo(
        ".banner__photo-wrap",
        { scale: 1 },
        { scale: 14, duration: 1.5 },
        7.0
      );

      // phase 5 (8.5-10): banner fade out → works 섹션 노출
      tl.fromTo(
        ".banner",
        { opacity: 1 },
        { opacity: 0, duration: 1.5 },
        8.5
      );

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        animation: tl,
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="banner__wrapper">
      <section className="banner">
        <div className="banner__grid">
          {Array.from({ length: COLS }).map((_, col) => {
            const isCenter = col === CENTER_COL;
            const parity   = col % 2 === 0 ? "even" : "odd";
            const trackCls = [
              "banner__col-track",
              `banner__col-track--${parity}`,
              isCenter ? "banner__col-track--center" : "",
            ].join(" ").trim();

            return (
              <div key={col} className={trackCls}>
                <div className={`banner__col banner__col--${parity}`}>
                  {Array.from({ length: ROWS }).map((_, row) => {
                    if (col === CENTER_COL && row === CENTER_ROW) {
                      return (
                        <div key={row} className="banner__photo-wrap">
                          <img
                            src="/images/circle_bin.png"
                            alt="Kim Se Bin"
                            className="banner__photo banner__photo--front"
                          />
                          <img
                            src="/images/circle_bin_c.png"
                            alt="Kim Se Bin"
                            className="banner__photo banner__photo--back"
                          />
                        </div>
                      );
                    }
                    return (
                      <img
                        key={row}
                        src="/images/circle.png"
                        alt=""
                        className="banner__pill"
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
