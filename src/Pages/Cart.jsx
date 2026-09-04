import React from "react";

function Cart() {
  return (
    <div className="about-page cart-about-page">
      <section className="about-story cart-about-story">
        <div className="story-text cart-story-text">
          <p className="about-kicker">OUR STORY</p>
          <h2>🍴 About Us</h2>

          <p>
            At <strong>[Restaurant Name]</strong>, food is more than just a meal
            — it’s an experience. We started with a simple vision: to bring
            people together around fresh, flavorful dishes made with care and
            passion. Every recipe on our menu is crafted from locally sourced
            ingredients, blending tradition with creativity to satisfy every
            craving.
          </p>

          <div className="about-highlights cart-about-highlights">
            <div className="highlight-card">
              <span>🌿</span>
              <p>Fresh, seasonal produce in every dish.</p>
            </div>
            <div className="highlight-card">
              <span>🍷</span>
              <p>Warm hospitality and unforgettable flavors.</p>
            </div>
            <div className="highlight-card">
              <span>❤️</span>
              <p>Made for memorable moments and shared stories.</p>
            </div>
          </div>

          <p className="cart-section-title">
            <strong>Our Philosophy</strong>
          </p>
          <ul className="cart-about-list">
            <li>
              Fresh, seasonal produce is at the heart of everything we serve.
            </li>
            <li>
              We believe in honest cooking — no shortcuts, just authentic
              flavors.
            </li>
            <li>
              Every guest is part of our family, and we want you to feel at
              home.
            </li>
          </ul>

          <p className="cart-section-title">
            <strong>What You’ll Find Here</strong>
            <br />
            From hearty classics to modern twists, our menu offers something for
            everyone. Whether you’re stopping by for a quick bite, celebrating
            with friends, or enjoying a quiet dinner, we’ve designed our dishes
            to make every moment memorable.
          </p>

          <p className="cart-section-title">
            <strong>Our Promise</strong>
            <br />
            We’re committed to quality, hospitality, and community. When you
            dine with us, you’re not just enjoying a meal — you’re sharing in
            our story.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Cart;
