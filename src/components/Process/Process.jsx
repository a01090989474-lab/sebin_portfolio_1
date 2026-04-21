import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Process.scss";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Research & Discovery",
    desc: "포트폴리오를 만들기 전, 제 자신을 먼저 들여다봤습니다.\n내가 어떤 것에 끌리는지, 어떤 방식으로 생각하고 만드는지를 정리하며\n나를 처음 보는 사람에게 어떤 인상을 남기고 싶은지를 먼저 정의했습니다.",
    type: "portrait",
    img: "/images/process_1.png",
  },
  {
    num: "02",
    title: "Reference & Inspiration",
    desc: "수많은 포트폴리오 사이트를 찾아보며 눈에 담았습니다.\n레이아웃이 정보를 어떻게 전달하는지, 인터랙션이 어떤 경험을 만들어내는지를\n분석하며 단순한 참고를 넘어 방향을 잡는 과정으로 삼았습니다.",
    type: "landscape",
    img: "/images/process_2.png",
  },
  {
    num: "03",
    title: "Planning & Design",
    desc: "폰트와 컬러로 전체적인 무드를 먼저 잡았습니다.\n어떤 흐름으로 이야기를 풀어갈지, 섹션마다 어떤 감정을 전달할지\n고민하며 한 화면 한 화면을 설계했습니다.",
    type: "portrait",
    img: "/images/process_3.png",
  },
  {
    num: "04",
    title: "Development & Deploy",
    desc: "디자인을 실제 코드로 옮기며 인터랙션과 애니메이션을 구현했습니다.\nReact와 SCSS로 컴포넌트를 구조화하고, 성능과 접근성을 고려하며\n완성도 높은 포트폴리오를 배포했습니다.",
    type: "landscape",
    img: "/images/process_4.png",
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process__title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".process__title",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    if (isMobile) return () => ctx.revert();

    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    const track = trackRef.current;
    let moveX = 0;
    let animFrame;

    const calcMoveX = () => {
      moveX = Math.max(0, track.scrollWidth - window.innerWidth + 160);
      wrapper.style.height = `${window.innerHeight + moveX}px`;
    };

    const updateInner = () => {
      const rect = wrapper.getBoundingClientRect();
      if (rect.top > 0) {
        inner.style.position = "relative";
        inner.style.top = "";
        inner.style.left = "";
        inner.style.width = "";
      } else if (rect.bottom <= window.innerHeight) {
        inner.style.position = "absolute";
        inner.style.bottom = "0";
        inner.style.top = "auto";
        inner.style.left = "0";
        inner.style.width = "100%";
      } else {
        inner.style.position = "fixed";
        inner.style.top = "0";
        inner.style.left = "0";
        inner.style.bottom = "";
        inner.style.width = "100%";
      }
    };

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      updateInner();

      if (rect.top <= 0 && rect.bottom > window.innerHeight) {
        const progress = Math.min(1, Math.max(0, -rect.top / (wrapper.offsetHeight - window.innerHeight)));
        gsap.set(track, { x: -progress * moveX });
      } else if (rect.top > 0) {
        gsap.set(track, { x: 0 });
      } else {
        gsap.set(track, { x: -moveX });
      }
    };

    const onResize = () => {
      calcMoveX();
      onScroll();
    };

    calcMoveX();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      ctx.revert();
      cancelAnimationFrame(animFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      inner.style.position = "";
      inner.style.top = "";
      inner.style.left = "";
      inner.style.width = "";
      inner.style.bottom = "";
    };
  }, []);

  return (
    <section className="process" ref={sectionRef}>
      <h2 className="process__title">PROCESS</h2>
      <div className="process__sticky-wrapper" ref={wrapperRef}>
        <div className="process__content-inner" ref={innerRef}>
          <div className="process__track-container">
            <div className="process__track" ref={trackRef}>
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`process__card process__card--${step.type}`}
                  style={i === 1 || i === 3 ? { marginTop: "40px" } : undefined}
                >
                  <span className="process__num">{step.num}</span>
                  <div className="process__img-wrap">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="process__img"
                    />
                  </div>
                  <div className="process__body">
                    <h3 className="process__name">{step.title}</h3>
                    <p className="process__desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
