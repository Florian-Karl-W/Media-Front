import "../Styles/ContactForm.css";

function ContactForm() {
  return (
    <div class="containerform">
      <div class="contact-box">
        <div class="left"></div>
        <div class="right">
          <h2>Contact Us</h2>
          <input type="text" class="field" placeholder="Your Name" />
          <input type="text" class="field" placeholder="Your Email" />
          <input type="text" class="field" placeholder="Phone" />
          <textarea placeholder="Message" class="field"></textarea>
          <button class="btn">Send</button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
