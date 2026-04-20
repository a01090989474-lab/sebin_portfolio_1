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

      // [Phase 1] 열 이동 속도 향상 (Duration 5 -> 3)
      tl.fromTo(
        ".banner__col-track--even",
        { y: 0 },
        { y: -200, duration: 3 },
        0,
      );
      tl.fromTo(
        ".banner__col-track--odd",
        { y: 0 },
        { y: 200, duration: 3 },
        0,
      );

      // [Phase 2] 센터 열 복귀 (시간 단축)
      tl.fromTo(
        ".banner__col-track--center",
        { y: -200 },
        { y: 0, duration: 1.2, ease: "power2.out" },
        3.0,
      );

      // [Phase 3] 알약 Fade Out 및 주변 열 제거 (지저분한 잔상 방지)
      tl.to(".banner__pill", { opacity: 0, duration: 0.8, stagger: 0.05 }, 2.5);
      // 확대 시작 전, 센터 열을 제외한 모든 트랙을 투명하게 만들어 검은 배경 노출 방지
      tl.to(
        ".banner__col-track:not(.banner__col-track--center)",
        { opacity: 0, duration: 0.5 },
        3.5,
      );

      // [Phase 4] 카드 뒤집기 (Flip)
      tl.fromTo(
        ".banner__photo--front",
        { rotateY: 0 },
        { rotateY: 90, duration: 0.5 },
        3.8,
      );
      tl.fromTo(
        ".banner__photo--back",
        { rotateY: -90 },
        { rotateY: 0, duration: 0.5 },
        4.3,
      );

      // [Phase 5] 배경색 전환 및 확대 (Scale up)
      // 배경색을 확대가 정점에 도달하기 전에 미리 흰색으로 변경
      tl.to(".banner", { backgroundColor: "#fdfdfd", duration: 0.8 }, 4.0);

      tl.fromTo(
        ".banner__photo-wrap",
        { scale: 1 },
        {
          scale: 30, // 스케일 값을 14에서 30으로 키워 화면을 완전히 덮음
          duration: 1.2,
          ease: "power2.in",
        },
        4.5,
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
            const parity = col % 2 === 0 ? "even" : "odd";
            const trackCls = [
              "banner__col-track",
              `banner__col-track--${parity}`,
              isCenter ? "banner__col-track--center" : "",
            ]
              .join(" ")
              .trim();

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
