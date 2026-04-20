import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/_global.scss';
import Gnb from './components/Gnb/Gnb';
import Hero from './components/Hero/Hero';
import SkillStack from './components/SkillStack/SkillStack';
import Profile from './components/Profile/Profile';
import Works from './components/Works/Works';
import Process from './components/Process/Process';
import Strengths from './components/Strengths/Strengths';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('main > *:not(.banner__wrapper)');

      sections.forEach((el, i) => {
        if (i === 0) {
          // Hero: 페이지 로드 시 바로 페이드인
          gsap.fromTo(el,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out', delay: 0.2 }
          );
        } else {
          // 나머지 섹션: 스크롤 시 페이드인
          gsap.fromTo(el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Gnb />
      <main ref={mainRef}>
        <Hero />
        <SkillStack />
        <section id="profile"><Profile /></section>
        <Banner />
        <section id="works"><Works /></section>
        <section id="process"><Process /></section>
        <Strengths />
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}
