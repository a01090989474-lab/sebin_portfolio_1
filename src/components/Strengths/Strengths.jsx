import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Strengths.scss";

gsap.registerPlugin(ScrollTrigger);

const photosTop = [
  {
    src: "/images/like_1.jpg",
    rotate: -20,
    offset: -25,
    offsetX: -280,
    width: 300,
  },
  {
    src: "/images/like_2.jpg",
    rotate: -10,
    offset: -55,
    offsetX: -80,
    width: 200,
  },
  {
    src: "/images/like_3.jpg",
    rotate: 10,
    offset: -50,
    offsetX: 80,
    width: 350,
  },
  {
    src: "/images/like_4.jpg",
    rotate: 24,
    offset: -10,
    offsetX: 250,
    width: 200,
  },
];

const photosBottom = [
  {
    src: "/images/like_5.jpg",
    rotate: 7,
    offset: 100,
    offsetX: -250,
    width: 200,
  },
  {
    src: "/images/like_6.jpg",
    rotate: 6,
    offset: 130,
    offsetX: -120,
    width: 350,
  },
  {
    src: "/images/like_7.jpg",
    rotate: -4,
    offset: 120,
    offsetX: 0,
    width: 300,
  },
  {
    src: "/images/like_8.jpg",
    rotate: -5,
    offset: 90,
    offsetX: 120,
    width: 220,
  },
];

const cards = [
  {
    title: (
      <>
        Embrace
        <br />
        Uncertainty
      </>
    ),
    subtitle: "막막한 순간일수록 먼저 움직입니다.",
    desc: (
      <>
        완벽한 준비보다 첫 발을 내딛는 것이
        <br />더 많은 것을 가르쳐준다고 믿습니다.
      </>
    ),
    tags: ["#퍼스트펭귄", "#엄홍길", "#일단 해"],
    img: "/images/st_1.jpg",
  },
  {
    title: (
      <>
        Good
        <br />
        Energy
      </>
    ),
    subtitle: "분위기는 성과만큼 중요하다고 생각합니다.",
    desc: (
      <>
        밝은 에너지와 열린 소통으로
        <br />
        팀이 더욱 성장할 수 있도록 함께합니다.
      </>
    ),
    tags: ["#노홍철", "#웃으면", "#복이 와요"],
    img: "/images/st_2.jpg",
  },
  {
    title: (
      <>
        Always
        <br />
        Iterating
      </>
    ),
    subtitle: "어제보다 나은 오늘이 될 수 있도록 노력합니다.",
    desc: (
      <>
        피드백을 두려워하지 않고, 오히려 성장의 재료로 삼아
        <br />
        매일 조금씩 나아갑니다.
      </>
    ),
    tags: ["#성장", "#스펀지밥", "#오히려 좋아"],
    img: "/images/st_3.jpg",
  },
];

export default function Strengths() {
  const sectionRef = useRef(null);
  const lineFillRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".strengths__heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".strengths__heading",
            start: "top 85%",
          },
        }
      );

      const isMobile = window.innerWidth <= 768;
      const cardElements = gsap.utils.toArray(".strengths__card");

      if (!isMobile) {
        const tl = gsap.timeline();

        cardElements.forEach((card, i) => {
          if (i !== 0) {
            tl.fromTo(
              card,
              { opacity: 0, y: 30, visibility: "hidden" },
              { opacity: 1, y: 0, visibility: "visible", duration: 1 },
              `card${i}`,
            );
          } else {
            gsap.set(card, { opacity: 1, visibility: "visible" });
          }

          if (i === cardElements.length - 1) {
            tl.to({}, { duration: 0.5 });
          }
        });

        ScrollTrigger.create({
          trigger: ".strengths__card-section",
          start: "top top",
          end: "+=2500",
          pin: true,
          scrub: 1,
          animation: tl,
          onUpdate: (self) => {
            if (lineFillRef.current) {
              lineFillRef.current.style.height = `${self.progress * 100}%`;
            }
          },
        });
      }

      gsap.fromTo(
        ".strengths__gallery-text span",
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".strengths__gallery-text",
            start: "top 88%",
          },
        }
      );

      const photos = gsap.utils.toArray(".strengths__photo");
      photos.forEach((photo) => {
        ScrollTrigger.create({
          trigger: photo,
          start: "top 90%",
          onEnter: () => photo.classList.add("is-visible"),
          once: true,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="strengths" ref={sectionRef}>
      <h2 className="strengths__heading">STRENGTHS</h2>

      <div className="strengths__card-section">
        <div className="strengths__card-sticky">
          <div className="strengths__line">
            <div className="strengths__line-fill" ref={lineFillRef} />
          </div>

          <div className="strengths__card-container">
            {cards.map((card, i) => (
              <div key={i} className="strengths__card">
                <div className="strengths__card-info">
                  <h3 className="strengths__card-title">{card.title}</h3>
                  <p className="strengths__card-subtitle">{card.subtitle}</p>
                  <p className="strengths__card-desc">{card.desc}</p>
                  <div className="strengths__card-tags">
                    {card.tags.map((tag, j) => (
                      <span key={j}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="strengths__card-img">
                  <img src={card.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="strengths__gallery" ref={galleryRef}>
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
          <span>전시회 관람, 여행, 요리 등 취미 활동을 통한</span>
          <span>다양한 경험으로 성장의 기회를 만들어 나가고있습니다.</span>
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
