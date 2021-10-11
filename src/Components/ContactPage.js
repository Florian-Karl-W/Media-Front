import "../Styles/Contact.css";
import ScrollDownArrow from "../Images/scroll-down-arrow.svg";

function ContactPage() {
  return (
    <div className="contact_content">
      <h2>Get in touch </h2>
      <div className="hero__scrollDown">
        <p>Scroll</p>
        <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
      </div>
    </div>
  );
}

export default ContactPage;
