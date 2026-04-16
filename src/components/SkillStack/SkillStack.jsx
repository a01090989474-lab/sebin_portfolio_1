import "./SkillStack.scss";

const skills = [
  { img: "/images/sk_ps.png",    activeImg: "/images/sk_ps_c.png",    angle: "0deg"  },
  { img: "/images/sk_react.png", activeImg: "/images/sk_react_c.png", angle: "-2deg" },
  { img: "/images/sk_fg.png",    activeImg: "/images/sk_fg_c.png",    angle: "2deg"  },
  { img: "/images/sk_js.png",    activeImg: "/images/sk_js_c.png",    angle: "0deg"  },
  { img: "/images/sk_vc.png",    activeImg: "/images/sk_vc_c.png",    angle: "-2deg" },
  { img: "/images/sk_gh.png",    activeImg: "/images/sk_gh_c.png",    angle: "2deg"  },
];

const REPEAT = 12;

export default function SkillStack() {
  return (
    <section className="skill-stack">
      <div className="skill-stack__label">
        <span>SKILL STACK</span>
      </div>
      <div className="skill-stack__track-wrap">
        {skills.map(({ img, activeImg, angle }, rowIndex) => (
          <div
            key={rowIndex}
            className="skill-stack__row"
            style={{ "--angle": angle }}
          >
            <div className={`skill-stack__track${rowIndex % 2 === 1 ? " skill-stack__track--reverse" : ""}`}>
              {Array.from({ length: REPEAT }).map((_, i) => (
                <span key={i} className="skill-stack__item">
                  <img src={img}       className="skill-stack__icon skill-stack__icon--default" />
                  <img src={activeImg} className="skill-stack__icon skill-stack__icon--active" />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
