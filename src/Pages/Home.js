import Header from '../Components/Header';
import gsap from 'gsap';
import MainContent from '../Components/MainContent'
export default function Home() {
  let timeline = gsap.timeline();
  return (
    <div className="App">
      <Header timeline= {timeline}/>
      <MainContent timeline= {timeline}/>
    </div>
  );
}

