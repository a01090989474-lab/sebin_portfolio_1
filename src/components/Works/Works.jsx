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
      "ASCEND는 사용자 데이터를 분석해 AI 기반의 맞춤 식단과 운동 커리큘럼을 제공하는 차세대 다이어트 OTT입니다. 모든 영상에 상세한 운동 설명을 포함하고, 시청 중 관심 있는 운동 장비나 식품을 즉시 구매할 수 있는 커머스 UI를 통해 다이어트에 필요한 모든 것을 한번에 제공하는 ALL-IN-ONE 서비스입니다.",
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
  return (
    <section className="works">
      <div className="works__title-wrap">
        <h2 className="works__title">MY WORKS</h2>
      </div>

      <div className="works__list">
        {works.map((work, i) => (
          <div key={i} className="works__item">
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
                  <span className="works__label">Part</span>
                  <p className="works__value">{work.part}</p>
                </div>

                <div className="works__row">
                  <span className="works__label">Tools</span>
                  <div className="works__tools">
                    {work.tools.map((tool, j) => (
                      <img
                        key={j}
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
                    className="works__btn works__btn--outline"
                  >
                    View Figma
                  </a>
                  <a
                    href={work.siteUrl}
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
