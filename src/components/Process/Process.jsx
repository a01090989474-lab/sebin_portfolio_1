import './Process.scss';

const steps = [
  {
    num: '01',
    title: 'Research',
    desc: '사용자 조사 및 시장 분석을 통해 문제를 정의하고, 사용자의 니즈와 페인 포인트를 파악합니다.',
  },
  {
    num: '02',
    title: 'Define',
    desc: '수집된 데이터를 분석하여 핵심 문제를 명확히 정의하고 해결 방향을 설정합니다.',
  },
  {
    num: '03',
    title: 'Design',
    desc: '와이어프레임부터 고해상도 프로토타입까지, 사용자 경험을 중심으로 디자인합니다.',
  },
  {
    num: '04',
    title: 'Develop',
    desc: '디자인을 실제 코드로 구현하며, 성능과 접근성을 고려한 인터페이스를 개발합니다.',
  },
];

export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <div className="process__header">
          <p className="process__eyebrow">PROCESS</p>
          <h2 className="process__title">How I Work</h2>
        </div>
        <div className="process__list">
          {steps.map((step, i) => (
            <div key={i} className="process__item">
              <span className="process__num">{step.num}</span>
              <div className="process__divider" />
              <div className="process__body">
                <h3 className="process__name">{step.title}</h3>
                <p className="process__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
