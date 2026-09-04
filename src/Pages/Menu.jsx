import React from "react";

function Menu() {
  return (
    <div className="menu-page">
      <input
        type="text"
        name="text"
        className="Search"
        placeholder="Search"
        required
      />
      {/* Phase 1 */}
      <div className="hot-deals">
        <div className="hot-deals-heading">
          <p className="deals">TODAY'S SPECIALS</p>
          <h1>Hot Deals</h1>
          <p>Good food, great mood, one perfect combo.</p>
        </div>

        <div className="hot-deals-grid">
          <div className="hot-deal-card">
            <img src="/assets/img/break.jpg" alt="Breakfast combo" />
            <div className="hot-deal-info">
              <span className="deal-tag">MORNING FAVOURITE</span>
              <h2>Breakfast Combo</h2>
              <p>Start bright with a filling plate made for a fresh morning.</p>
              <div className="deal-footer">
                <strong>$8.99</strong>
                <button type="button">Order now</button>
              </div>
            </div>
          </div>

          <div className="hot-deal-card">
            <img src="/assets/img/1rice.jpg" alt="Lunch combo" />
            <div className="hot-deal-info">
              <span className="deal-tag">LUNCH PICK</span>
              <h2>Rice Lunch Combo</h2>
              <p>
                A satisfying midday classic with bold flavour in every bite.
              </p>
              <div className="deal-footer">
                <strong>$12.99</strong>
                <button type="button">Order now</button>
              </div>
            </div>
          </div>

          <div className="hot-deal-card">
            <img src="/assets/img/dine.jpg" alt="Dinner combo" />
            <div className="hot-deal-info">
              <span className="deal-tag">EVENING SPECIAL</span>
              <h2>Dinner Combo</h2>
              <p>
                Slow down and enjoy a delicious dinner worth coming home to.
              </p>
              <div className="deal-footer">
                <strong>$16.99</strong>
                <button type="button">Order now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="specials">
        <div className="specials-heading">
          <p className="specials-para">FAVOURITE PICKS</p>
          <h1>Special Combo</h1>
          <p>Small bites, big cravings, and flavour in every plate.</p>
        </div>

        <div className="specials-grid">
          <div className="special-card">
            <img src="/assets/img/spag.jpg" alt="Assorted spaghetti" />
            <div className="special-card-info">
              <span className="deal-tag">PASTA LOVE</span>
              <h2>Assorted spaghetti</h2>
              <p>Rich, savoury and perfect for a hungry appetite.</p>
              <div className="deal-footer">
                <strong>$10.99</strong>
                <button type="button">Order now</button>
              </div>
            </div>
          </div>

          <div className="special-card">
            <img src="/assets/img/beans.jpg" alt="Tasty beans" />
            <div className="special-card-info">
              <span className="deal-tag">HEARTY BOWL</span>
              <h2>Tasty Beans</h2>
              <p>Comforting, filling and packed with a bold home-style taste.</p>
              <div className="deal-footer">
                <strong>$9.49</strong>
                <button type="button">Order now</button>
              </div>
            </div>
          </div>

          <div className="special-card">
            <img src="/assets/img/hotdog.jpg" alt="Egg snacks" />
            <div className="special-card-info">
              <span className="deal-tag">SNACK TIME</span>
              <h2>Egg snacks</h2>
              <p>Quick, tasty and satisfying for a midday bite or late snack.</p>
              <div className="deal-footer">
                <strong>$7.99</strong>
                <button type="button">Order now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
