import { useEffect, useRef } from "react";
import "./Works.scss";

const works = [
  {
    title: "Aesop Website Renewal",
    description:
      "이솝 공식몰의 브랜드 감성을 온라인에서 온전히 구현한 프론트엔드 이커머스 프로젝트. 사용자 인터뷰를 통해 발견한 페인포인트를 기반으로 기획했으며, 상품 탐색부터 결제·마이페이지까지 실제 쇼핑 플로우를 완성했습니다.",
    period: "2026.02.20 - 03.25",
    part: "Plan 45%  Design 40%  Coding 60%",
    tools: [
      { src: "/images/fg.png", alt: "Figma" },
      { src: "/images/ps.png", alt: "Photoshop" },
      { src: "/images/react.png", alt: "React" },
      { src: "/images/js.png", alt: "js" },
      { src: "/images/git.png", alt: "GitHub" },
      { src: "/images/claude.png", alt: "Claude" },
    ],
    figmaUrl: "https://buly.kr/3YFKiCj",
    siteUrl: "https://giiit.vercel.app/",
    image: "/images/aesop.png",
  },
  {
    title: "DIET OTT - ASCEND",
    description:
      "사용자 데이터 분석을 통한 개인화된 건강 관리와 콘텐츠 시청을 결합한 차세대 미디어 플랫폼입니다. 모든 운동 영상에 상세 가이드를 포함하여 정보 접근성을 높였으며, 콘텐츠 내에 삽입된 커머스 기능을 통해 정보 탐색부터 구매까지의 과정을 단축하는 데 초점을 맞추어 기획 및 디자인되었습니다.",
    period: "2026.02.20 - 03.25",
    part: "Plan 40%  Design 45%",
    tools: [
      { src: "/images/fg.png", alt: "Figma" },
      { src: "/images/ps.png", alt: "Photoshop" },
      { src: "/images/Ai.png", alt: "ai" },
      { src: "/images/react.png", alt: "React" },
      { src: "/images/js.png", alt: "js" },
      { src: "/images/gpt.png", alt: "gpt" },
      { src: "/images/gemini.png", alt: "gemini" },
      { src: "/images/notion.png", alt: "notion" },
      { src: "/images/git.png", alt: "git" },
    ],
    figmaUrl: "https://buly.kr/FAfLReS",
    siteUrl: "https://ascend-ott.vercel.app/",
    image: "/images/ascend.png",
  },
];

export default function Works() {
  const containerRef = useRef(null);

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
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    );

    containerRef.current
      .querySelectorAll(".fade-in")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="works" ref={containerRef}>
      <div className="works__title-wrap fade-in">
        <h2 className="works__title">MY WORKS</h2>
      </div>

      <div className="works__list">
        {works.map((work, i) => (
          <div key={i} className="works__item fade-in">
            <h3 className="works__name">{work.title}</h3>

            <div className="works__content">
              <div className="works__info">
                <div className="works__row">
                  <span className="works__label">Description</span>
                  <p className="works__desc">{work.description}</p>
                </div>
                <div className="works__row">
                  <span className="works__label">Period</span>
                  <p className="works__value">{work.period}</p>
                </div>
                <div className="works__row">
                  <span className="works__label">Contribution</span>
                  <p className="works__value">{work.part}</p>
                </div>
                <div className="works__row">
                  <span className="works__label">Tools</span>
                  <div className="works__tools">
                    {work.tools.map((tool, index) => (
                      <img
                        key={index}
                        src={tool.src}
                        alt={tool.alt}
                        className="works__tool-icon"
                      />
                    ))}
                  </div>
                </div>

                <div className="works__buttons">
                  <a
                    href={work.figmaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="works__btn works__btn--outline"
                  >
                    View Figma
                  </a>
                  <a
                    href={work.siteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="works__btn works__btn--outline"
                  >
                    View Site
                  </a>
                </div>
              </div>

              <div className="works__images">
                <img
                  src={work.image}
                  alt={work.title}
                  className={`works__img${i === 1 ? " works__img--large" : ""}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
