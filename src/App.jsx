import './styles/_global.scss';
import Gnb from './components/Gnb/Gnb';
import Hero from './components/Hero/Hero';
import SkillStack from './components/SkillStack/SkillStack';
import Profile from './components/Profile/Profile';
import Works from './components/Works/Works';
import Process from './components/Process/Process';
import Strengths from './components/Strengths/Strengths';
import Contact from './components/Contact/Contact';

export default function App() {
  return (
    <>
      <Gnb />
      <main>
        <Hero />
        <SkillStack />
        <section id="profile"><Profile /></section>
        <section id="works"><Works /></section>
        <section id="process"><Process /></section>
        <Strengths />
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}
