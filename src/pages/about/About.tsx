import './about.css'

export default function About() {
  return (
    <div className="about-page container">
      <h1>About Our Store</h1>

      <div className="about-card">
        <p>
          We are an online shopping platform dedicated to providing high-quality
          products at competitive prices.
        </p>
      </div>

      <div className="about-card">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver a smooth and enjoyable shopping experience.
        </p>
      </div>

      <div className="about-card">
        <h2>Our Vision</h2>
        <p>
          To become one of the most trusted online shopping destinations.
        </p>
      </div>

      <div className="about-card">
        <h2>Why Choose Us</h2>
        <div className="about-features">
          <div className="feature">✅ High quality products</div>
          <div className="feature">🚚 Fast delivery</div>
          <div className="feature">🔒 Secure payments</div>
          <div className="feature">💬 24/7 Support</div>
        </div>
      </div>
    </div>
  );
}
