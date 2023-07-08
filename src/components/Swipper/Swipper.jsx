import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode } from 'swiper';
import './Swipper.css';
import 'swiper/css/free-mode';
import Badie from './../../Badie Logo.jpg';

const Swipper = () => {
  return (
    <div id="Partners">
      <h1 style={{ color: 'grey', padding: '00px 0px 50px 0px' }}>
        Refered Partners
      </h1>
      <Swiper
        loop={true}
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 1,
          disableOnInteraction: true,
        }}
        freeMode={true}
        speed={5000}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://www.presscentric.com/hubfs/PresscentricSoftwareSolutions_June2021/images/qb_intuitlogo.png"
            alt="quickBook"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://1000logos.net/wp-content/uploads/2021/04/ADP-logo.png"
            alt="ADP"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/square-payments-logo-png-transparent-background-vertical.png"
            alt="Square"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              padding: '40px 0px 0px 0px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={Badie} alt="Badie" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p style={{ width: '150px', color: 'grey', fontSize: '24px' }}>
              Dade Payroll and tax service
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p style={{ width: '150px', color: 'grey', fontSize: '24px' }}>
              ML accounting service
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipper;
