import './contact.css'
function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact Me</h1>
      <h2>Stay Connected</h2>
      <form>
        <div className="name-div">
          <i className="fa-solid fa-user-tie"></i>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            autoComplete="off"
          />
        </div>

        <div className="email-div">
          <i className="fa-solid fa-envelope"></i>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            autoComplete="off"
          />
        </div>

        <div className="phone-div">
          <i className="fa-solid fa-phone"></i>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter Your Phone No"
            autoComplete="off"
          />
        </div>

        <div className="msg-div">
          <i className="fa-solid fa-comment"></i>
          <label htmlFor="info" id="lbl-area">
            Message:
          </label>
          <textarea
            name="info"
            id="info"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
