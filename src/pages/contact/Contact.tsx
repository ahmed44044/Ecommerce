import './contact.css'
export default function Contact() {
  return (
    <div className="contact-page container">
      <h1>Contact Us</h1>
      <p>
        Have questions or need help? We're here for you.
        Feel free to reach out to us anytime.
      </p>

      <div className="contact-info">
        <p>📧 support@yourstore.com</p>
        <p>📞 +20 100 123 4567</p>
        <p>📍 Cairo, Egypt</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows={5}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}