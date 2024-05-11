import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { Bounce } from "react-awesome-reveal";
// import { Typewriter } from "react-simple-typewriter";

const Slider = () => {
  return (
    <>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper relative lg:h-[calc(100vh-90px)]'>
          <div className='absolute z-20 lg:left-1/2 transform lg:-translate-x-1/2 top-5 md:top-14 lg:top-1/4 flex flex-col items-center'>
            <p className='text-emerald-950 text-center font-bold text-3xl md:text-5xl'>
              {/* <Bounce duration='2000'> Welcome To Earthy Crafts</Bounce> */}
            </p>
            <p className='mt-6 text-center text-emerald-950 font-semibold text-4xl'>
              {/* <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={25}
                loop={100}
                typeSpeed={75}
                words={[
                  "Where Nature Inspires Creativity",
                  "Handcrafted with Love and Nature's Touch",
                  "Crafting Nature's Beauty into Art",
                ]}
              /> */}
            </p>
          </div>
          <SwiperSlide>
            <div>
              <div className="relative  h-screen bg-center opacity-80  bg-no-repeat bg-cover bg-[url('https://i.ibb.co/kGMQrNG/slider55.png')]"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
                          <div className="relative  h-screen bg-center opacity-80  bg-no-repeat bg-cover bg-[url('https://i.ibb.co/GTnNK3W/slider-2.jpg')]">
                              <p>Heelo</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="relative  h-screen bg-center opacity-80  bg-no-repeat bg-cover bg-[url('https://i.ibb.co/8cp6cSF/slider-3.jpg')]"></div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div>
              <div className="relative  h-screen bg-center opacity-80  bg-no-repeat bg-cover bg-[url('https://i.ibb.co/mh4zJVQ/slider-4.jpg')]"></div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
