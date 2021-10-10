import Header from '../Components/Header';
import gsap from 'gsap';
export default function About() {
    let timeline = gsap.timeline();
  return (
    <div className="App">
      <Header timeline= {timeline}/>
    </div>
  );
}