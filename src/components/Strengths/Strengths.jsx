import { useEffect, useRef, useState } from "react";
import "./Strengths.scss";

const cards = [
  {
    title: "Embrace Uncertainty",
    subtitle: "막막한 순간일수록 먼저 움직입니다.",
    desc: "완벽한 준비보다 첫 발을 내딛는 것이 더 많은 것을 가르쳐준다고 믿습니다.",
    tags: ["#퍼스트펭귄", "#엄홍길", "#일단 해"],
    img: "/images/st_1.jpg",
  },
  {
    title: "Good Energy",
    subtitle: "분위기는 성과만큼 중요하다고 생각합니다.",
    desc: "밝은 에너지와 열린 소통으로 팀이 더욱 성장할 수 있도록 함께합니다.",
    tags: ["#노홍철", "#웃으면", "#복이 와요"],
    img: "/images/st_2.jpg",
  },
  {
    title: "Always Iterating",
    subtitle: "어제보다 나은 오늘이 될 수 있도록 노력합니다.",
    desc: "피드백을 두려워하지 않고, 오히려 성장의 재료로 삼아 매일 조금씩 나아갑니다.",
    tags: ["#성장", "#스폰지밥", "#오히려 좋아"],
    img: "/images/st_3.jpg",
  },
];

const photosTop = [
  {
    src: "/images/like_1.jpg",
    rotate: -22,
    offset: 30,
    offsetX: -120,
    width: 249,
  },
  { src: "/images/like_2.jpg", rotate: -7, offset: 10, offsetX: 0, width: 220 },
  { src: "/images/like_3.jpg", rotate: 12, offset: 0, offsetX: 50, width: 220 },
  {
    src: "/images/like_4.jpg",
    rotate: 6,
    offset: 40,
    offsetX: 100,
    width: 220,
  },
];

const photosBottom = [
  {
    src: "/images/like_5.jpg",
    rotate: -5,
    offset: 40,
    offsetX: -130,
    width: 220,
  },
  {
    src: "/images/like_6.jpg",
    rotate: 9,
    offset: 70,
    offsetX: -40,
    width: 220,
  },
  {
    src: "/images/like_7.jpg",
    rotate: -4,
    offset: 60,
    offsetX: 30,
    width: 220,
  },
  {
    src: "/images/like_8.jpg",
    rotate: 5,
    offset: 40,
    offsetX: 100,
    width: 220,
  },
];

export default function Strengths() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = cardSectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      const index = Math.min(
        Math.floor(progress * cards.length),
        cards.length - 1,
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lineProgress = `${((activeIndex + 1) / cards.length) * 100}%`;

  return (
    <section className="strengths">
      <h2 className="strengths__heading">STRENGTHS</h2>

      <div className="strengths__card-section" ref={cardSectionRef}>
        <div className="strengths__card-sticky">
          <div className="strengths__line">
            <div
              className="strengths__line-fill"
              style={{ height: lineProgress }}
            />
          </div>
          {cards.map((card, i) => (
            <div
              key={i}
              className={`strengths__card ${i === activeIndex ? "is-active" : ""}`}
            >
              <div className="strengths__card-info">
                <h3 className="strengths__card-title">{card.title}</h3>
                <p className="strengths__card-subtitle">{card.subtitle}</p>
                <p className="strengths__card-desc">{card.desc}</p>
                <div className="strengths__card-tags">
                  {card.tags.map((tag, j) => (
                    <span key={j} className="strengths__card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="strengths__card-img">
                <img src={card.img} alt={card.title} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="strengths__gallery">
        <div className="strengths__photos">
          {photosTop.map((photo, i) => (
            <div
              key={i}
              className="strengths__photo"
              style={{
                "--rotate": `${photo.rotate}deg`,
                "--offset": `${photo.offset}px`,
                "--offsetX": `${photo.offsetX ?? 0}px`,
                "--width": `${photo.width ?? 220}px`,
                "--height": photo.height ? `${photo.height}px` : "auto",
              }}
            >
              <img src={photo.src} alt="" />
            </div>
          ))}
        </div>
        <p className="strengths__gallery-text">
          전시회 관람, 여행, 요리 등 취미 활동을 통한
          <br />
          다양한 경험으로 성장의 기회를 만들어 나가고있습니다.
        </p>
        <div className="strengths__photos">
          {photosBottom.map((photo, i) => (
            <div
              key={i}
              className="strengths__photo"
              style={{
                "--rotate": `${photo.rotate}deg`,
                "--offset": `${photo.offset}px`,
                "--offsetX": `${photo.offsetX ?? 0}px`,
                "--width": `${photo.width ?? 220}px`,
                "--height": photo.height ? `${photo.height}px` : "auto",
              }}
            >
              <img src={photo.src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
