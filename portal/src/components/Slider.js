// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./styles/Slider.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);


const Slider = () => {
  return (
    <>
      <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
        "delay": 5000,
        "disableOnInteraction": false
      }} navigation={true} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/OnePlusNordNewLaunch/28th/GW/D23753221_OnePlus_Nord_New_launch_GW_Design_SIM_Tall_hero_1500x600._CB668899827_.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Mauritian/3000x1200_Hero-Tall_JPN._CB667162087_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/Herotator/WFH/Offer/V2/WFH-Herotator-hero_3000x1200._CB405299567_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Stores/SL_Clearance/GW/PC_bunk/ClearanceStore_SL_PCBunk._CB659141515_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/WW84/Launch/3000x1200_Hero-Tall_JPN._CB669639161_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OP/BTS/D22170942_IN_OP_School_from_home_Apr21_3000x1200_3._CB668235271_.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default Slider
