import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
 <div className="home__row">
          <Product
            id="4903851"
            title="HP EliteBook 840 G4 14 inches Full HD Laptop, Touch Screen, Core i7-7600U 2.8GHz up to 3.9GHz, 16GB RAM, 512GB Solid State Drive, Windows 10 Pro 64Bit, CAM (Renewed)"
            price={645.00}
            rating={3}
            image="https://m.media-amazon.com/images/I/41yh9kLbBSL._AC_SY120_.jpg"
          />
          <Product
            id="23445940"
            title="A Promised Land Hardcover – November 17, 2020
            by Barack Obama  (Author)"
            price={23.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg"
          />
          <Product
            id="3254354315"
            title="Holy Stone HS175 Drone with Camera for Adults 2K UHD, GPS Auto Return, 5GHz FPV RC Quadcopter Follow Me, Waypoints, Circle Fly, Optical Flow, Headless Mode, 2 Batteries for 40 Min and Carrying Case"
            price={169.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/41kb-c0yioL._AC_SY120_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="Handcrafted Natural Calcite Table Lamp, Dimmable Bedside Lamp for Bedroom Living Room, Unique LED Lamp for Night Table by Phiestina,
             One-of-a-Kind Crystal Texture Within, Pentagon, Natural White"
            price={129.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/413AYX2ch5L._AC_SR160,160_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321342"
            title="Balance Bike for Kids Toddler,12'' No Pedal Training Bicycle for 2,3,4 Years Old with Adjustable Seat Height, Airless Tire, Multiple Colors"
            price={49.96}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/416kFkneoIL._SR215,215__.jpg"
          />
          <Product
            id="49538014"
            title="Holy Stone HS700D FPV Drone with 4K FHD Camera Live Video and GPS Return Home, RC Quadcopter for Adults Beginners with Brushless Motor, Follow Me, 5G WiFi Transmission, Modular Battery Advanced Selfie"
            price={229.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71PyaexPorL._AC_SY240_.jpg"
          />
          <Product
            id="90829334"
            title="HOPAI Washcloths Bamboo Towel Set 10 Pack for Bathroom-Hotel-Spa-Kitchen Multi-Purpose Fingertip Towels & Face Cloths..."
            price={13.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/41O0RuQR9ZL._AC_SY200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829330"
            title="Sony X900H 65 Inch TV: 4K Ultra HD Smart LED TV with HDR, Game Mode for Gaming, 
            and Alexa Compatibility - 2020 Model"
            price={1398.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/612U-Yeox0L._AC_SY450_.jpg"
          />
          <Product
            id="90829330"
            title="Friorange Sport Workout Hypoxic Mask Running Mask"
            price={15.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/71vvujr3T0L._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
