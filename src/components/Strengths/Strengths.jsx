import './Strengths.scss';

const strengths = [
  {
    label: 'Action First',
    title: '빠른 실행력',
    desc: '아이디어를 빠르게 실제로 구현하는 능력을 갖추고 있습니다. 완벽함보다 빠른 실행과 개선을 지향합니다.',
    img: null,
  },
  {
    label: 'Detail-Oriented',
    title: '디테일 집착',
    desc: '픽셀 단위의 정밀함부터 사용자 행동 패턴까지, 작은 디테일이 큰 경험의 차이를 만든다고 믿습니다.',
    img: null,
  },
  {
    label: 'Communication',
    title: '원활한 소통',
    desc: '디자이너와 개발자 사이에서 브릿지 역할을 하며, 팀 내 원활한 소통을 이끌어냅니다.',
    img: null,
  },
];

export default function Strengths() {
  return (
    <section className="strengths">
      <div className="container">
        <div className="strengths__header">
          <p className="strengths__eyebrow">STRENGTHS</p>
          <h2 className="strengths__title">What I Bring</h2>
        </div>
        <div className="strengths__grid">
          {strengths.map((item, i) => (
            <div key={i} className="strengths__card">
              <div className="strengths__card-thumb">
                <span className="strengths__card-label">{item.label}</span>
              </div>
              <h3 className="strengths__card-title">{item.title}</h3>
              <p className="strengths__card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
