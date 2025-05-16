import butterChicken from './assets/butterchicken.jpg';
import cookingSafety from './assets/cooking-safety.jpg';
import skewers from './assets/skewers.jpg';
import ribs from './assets/ribs.mp4';
import biriyani from './assets/biriyani.mp4';
import lasagna from './assets/lasagna.mp4';
import './home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Home = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        effect="fade"
        className="home-swiper"
      >
        <SwiperSlide>
          <div className="home">
            <img src={cookingSafety} alt="banner" />
            <div className="banner-text">
              <h1>Welcome to Zaiqa</h1>
              <p>Taste the Flavor</p>
              <p>Your one-stop destination for delicious food and unforgettable experiences.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="home">
            <img src={butterChicken} alt="banner" />
            <div className="banner-text">
              <h1>Spice Up Your Life</h1>
              <p>Indulge in the richness of flavors and traditional recipes.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="home">
            <img src={skewers} alt="banner" />
            <div className="banner-text">
              <h1>Feast Begins Here</h1>
              <p>grilled with flavors, crafted with love.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="intro">
        <p>🌶️ Spices that dance on your tongue</p>
        <p>🍽️ Plates full of color, culture, and crave-worthy taste</p>
        <p>📖 Zaiqa — where every meal tells a story.</p>
      </div>

      <div className="hot">
        <h2>Hot Picks 🔥</h2>
      </div>

      <div className="special-cards">
        <div className="special-cards-wrapper">
          <div className="card">
            <video src={biriyani} autoPlay muted loop />
            <p>Fragrant basmati, slow-cooked spices, tender meat —this biryani is more than food, it’s a feeling</p>
          </div>

          <div className="card">
            <video src={lasagna} autoPlay muted loop />
            <p>Straight from the oven and into your heart — Melted cheese, savory sauce, and layers of love</p>
          </div>

          <div className="card">
            <video src={ribs} autoPlay muted loop />
            <p>Juicy lamb, kissed by flame and dusted with roasted pistachios — a harmony of texture and taste</p>
          </div>
        </div>
        <button className="explore">
          <a href="/menu">Explore our Menu <i className="fa-solid fa-arrow-right-long"></i></a>
        </button>
      </div>
    </div>
  );
};

export default Home;
