import Header from "../Components/Header";
import gsap from "gsap";
import ContactPage from "../Components/ContactPage";
import ContactForm from "../Components/ContactForm";

export default function Contact() {
  let timeline = gsap.timeline();
  return (
    <div className="App">
      <Header timeline={timeline} />
      <ContactPage />
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
