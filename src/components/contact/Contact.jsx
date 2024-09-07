import { Component, createRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";

class Contact extends Component {
  constructor() {
    super();
    this.form = createRef();
    this.sendEmail = this.sendEmail.bind(this); // Bind sendEmail method
  }

  sendEmail(e) {
    e.preventDefault();

    if (!this.form.current) return; // Ensure the form is defined

    const formData = new FormData(this.form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Create a log message
 
    e.target.reset(); // Reset the form
  }

  render() {
    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <div className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>pbadal392@gmail.com</h5>
              <a href="mailto:pbadal392@gmail.com">Send a message</a>
            </div>

            <div className="contact__option">
              <BsLinkedin className="contact__option-icon" />
              <h4>Linkedin</h4>
              <h5>Prajapati Badal</h5>
              <a href="https://www.linkedin.com/in/badal-prajapati-b30352156/">
                Send a message
              </a>
            </div>
            <div className="contact__option">
              <RiWhatsappLine className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>+91 7016394406</h5>
              <a href="https://api.whatsapp.com/send?phone=917016394406">
                Send a message
              </a>
            </div>
          </div>
          <form ref={this.form} onSubmit={this.sendEmail} action="">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
