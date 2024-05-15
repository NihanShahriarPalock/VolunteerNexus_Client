import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


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
              
            </p>
            <p className='mt-6 text-center text-emerald-950 font-semibold text-4xl'>

            </p>
          </div>

          <SwiperSlide>
            <div className="relative h-screen bg-center bg-no-repeat bg-cover backdrop-blur-lg  bg-[url('https://i.ibb.co/cN4MfSH/vv-1.jpg')]">
              <div className='absolute inset-0 bg-black opacity-50'></div>
              <div className='absolute inset-0 flex justify-center items-center'>
                <div className='text-center'>
                  <p className='text-6xl text-white '>
                    Make a Difference in Society <br /> Volunteer with Passion &
                    Purpose!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* slide 2  */}
          <SwiperSlide>
            <div className="relative h-screen bg-center bg-no-repeat bg-cover backdrop-blur-lg  bg-[url('https://i.ibb.co/KDvXTfj/vv-3.jpg')]">
              <div className='absolute inset-0 bg-black opacity-50'></div>
              <div className='absolute inset-0 flex justify-center items-center'>
                <div className='text-center'>
                  <p className='text-6xl text-white '>
                    Make a Difference in Society <br /> Volunteer with Passion &
                    Purpose!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* slide 3  */}
          <SwiperSlide>
            <div className="relative h-screen bg-center bg-no-repeat bg-cover backdrop-blur-lg  bg-[url('https://i.ibb.co/styH9Cs/ff.jpg')]">
              <div className='absolute inset-0 bg-black opacity-50'></div>
              <div className='absolute inset-0 flex justify-center items-center'>
                <div className='text-center'>
                  <p className='text-6xl text-white '>
                    Start your journey with us <br /> and be part of something
                    meaningful
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
