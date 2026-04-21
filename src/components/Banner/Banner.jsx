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
  const bannerRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "none" } });

      tl.fromTo(".banner__col-track--even", { y: 0 }, { y: -200, duration: 3 }, 0);
      tl.fromTo(".banner__col-track--odd", { y: 0 }, { y: 200, duration: 3 }, 0);
      tl.fromTo(
        ".banner__col-track--center",
        { y: -200 },
        { y: 0, duration: 1.2, ease: "power2.out" },
        3.0
      );

      tl.to(".banner__pill", { opacity: 0, duration: 0.6 }, 2.5);
      tl.fromTo(".banner__photo--front", { rotateY: 0 }, { rotateY: 90, duration: 0.6 }, 2.5);
      tl.fromTo(".banner__photo--back", { rotateY: -90 }, { rotateY: 0, duration: 0.6 }, 3.1);

      tl.to(
        ".banner__photo-wrap",
        { scale: 100, duration: 2.5, ease: "power2.in" },
        4.5
      );
      tl.to(".banner", { backgroundColor: "#fdfdfd", duration: 2.5, ease: "power2.in" }, 4.5);
      tl.to(".banner__photo-wrap", { opacity: 0, duration: 0.5 }, 7.0);
      tl.to({}, { duration: 1 });

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: bannerRef.current,
        pinSpacing: true,
        scrub: 1,
        animation: tl,
        onLeave: () => gsap.set(".banner", { backgroundColor: "#fdfdfd" }),
        onEnterBack: () => gsap.set(".banner", { backgroundColor: "#fdfdfd" }),
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="banner__wrapper">
      <section ref={bannerRef} className="banner">
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
                            alt="Front"
                            className="banner__photo banner__photo--front"
                          />
                          <img
                            src="/images/circle_bin_c.png"
                            alt="Back"
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
