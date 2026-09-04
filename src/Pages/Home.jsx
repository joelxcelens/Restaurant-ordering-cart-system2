import React from 'react'

function Home() {
  return (
    <div >
      <section className='hero-section'>

        <div className='hero-section-typo-cont'>
          <div className='hero-typo1'>GOOD FOOD <br /> GOOD MOOD.</div>
          <div className='hero-typo2'>Enjoy delicious meals, refreshing drinks 
            and <br /> tasty snacks prepared with quality ingredients.</div>
            <div>
             
            <button className='explore-menu-butt'>explore MENU!</button>
            </div>
        </div>

        <div className='hero-section-food-image'></div>

      </section>

      {/*====== SECTION 2 ======== */}


      <section className='section-2'>
        

        <div className='section-2-divs'>
          <div className='section-2-div1'>
            <div className='section-2-text'>POPULAR CATEGORIES</div>
            <div className='categories-cont'>
    
               <div className='drink-cont'>
                <div>DRINKS</div>
                </div>

                <div className='meal-cont'>
                <div>MEAL</div>
                </div>

                <div className='snacks-cont'>
                <div>SNACKS</div>
                </div>

                <div className='desserts-cont'>
                <div>DESSERT</div>
                </div>
            </div>
          </div>

          <div className='advertisement'>ADVERTISEMENT</div>
        </div>
      </section>


      {/* ====SECTION 3===== */}

      <section className='section-3'>
        <div className='section-dish-text'>SEVERINGS</div>

        <div className='section-3-home-dishes-cont'>

          <div className='food-container'>

            <div className='dish1'></div>
           <div className='food-details-container'>
            <div className='food-name'>Fried Rice</div>
            <div className='food-price'>#2500</div>
            <div className='food-category'>MEALS</div>
            <div className='availability'>AVAILABLE</div>
            <button >View details</button>
            </div>

          </div>
          

          <div className='food-container'>

            <div className='dish2'></div>
          <div className='food-details-container'>
            <div className='food-name'>Donuts</div>
            <div className='food-price'>#500</div>
            <div className='food-category'>SNACKS</div>
            <div className='availability'>AVAILABLE</div>
            <button >View details</button>
            </div>

          </div>
          
           
          <div className='food-container'>

            <div className='dish3'></div>
             <div className='food-details-container'>
            <div className='food-name'>Matcha</div>
            <div className='food-price'>#4200</div>
            <div className='food-category'>DRINKS</div>
            <div className='availability'>AVAILABLE</div>
            <button>View details</button>
          </div>

          </div>


            <div className='food-container'>

             <div className='dish4'></div>
          <div className='food-details-container'>
            <div className='food-name'>Brownie</div>
            <div className='food-price'>#11500</div>
            <div className='food-category'>DESSERTS</div>
            <div className='availability'>AVAILABLE</div>
            <button>View details</button>
              </div>

            </div>
           
          
        </div>
      </section>


      
    </div>
  )
}

export default Home
