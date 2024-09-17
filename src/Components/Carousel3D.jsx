import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel3D = () => {
  return (
    <section className=" bg-gray-900 p-10">
      <h2 className="text-4xl font-bold text-center mb-6 text-white">
        Recent Release
      </h2>
      <section className="carousel-3D-swiper-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Added Autoplay module here
          spaceBetween={10}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          className="carousel-3D-swiper w-full mx-auto"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="swiper-slide inset-0 bg-black opacity-60 shadow-inner hover:opacity-100 transition-all duration-1000 ease-in-out">
              <div className="image-wrapper aspect-video shadow-md shadow-white hover:shadow-red-600 rounded-lg">
                <img
                  className="aspect-video object-cover rounded-lg"
                  src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
                  alt="Slide 1"
                />
              </div>
              <div className="details text-center mt-4">
                <h3 className="text-lg font-bold">Lorem ipsum dolor</h3>
                <span className="block text-gray-500">Web Designer</span>
                <p className="text-gray-700">Lorem ipsum dolor</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="swiper-slide inset-0 bg-black opacity-60 shadow-inner hover:opacity-100 transition-all duration-1000 ease-in-out">
              <div className="image-wrapper aspect-video shadow-md shadow-white hover:shadow-red-600">
                <img
                  className="aspect-video object-cover"
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
                  alt="Slide 2"
                />
              </div>
              <div className="details text-center mt-4">
                <h3 className="text-lg font-bold">Lorem ipsum dolor</h3>
                <span className="block text-gray-500">Web Designer</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="swiper-slide inset-0 bg-black opacity-60 shadow-inner hover:opacity-100 transition-all duration-1000 ease-in-out">
              <div className="image-wrapper aspect-video shadow-md shadow-white hover:shadow-red-600">
                <img
                  className="aspect-video object-cover"
                  src="https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
                  alt="Slide 3"
                />
              </div>
              <div className="details text-center mt-4">
                <h3 className="text-lg font-bold">Lorem ipsum dolor</h3>
                <span className="block text-gray-500">Web Designer</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="swiper-slide inset-0 bg-black opacity-60 shadow-inner hover:opacity-100 transition-all duration-1000 ease-in-out">
              <div className="image-wrapper aspect-video shadow-md shadow-white hover:shadow-red-600">
                <img
                  className="aspect-video object-cover"
                  src="https://images.pexels.com/photos/8422523/pexels-photo-8422523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
                  alt="Slide 4"
                />
              </div>
              <div className="details text-center mt-4">
                <h3 className="text-lg font-bold">Lorem ipsum dolor</h3>
                <span className="block text-gray-500">Web Designer</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <div className="swiper-slide inset-0 bg-black opacity-60 shadow-inner hover:opacity-100 transition-all duration-1000 ease-in-out">
              <div className="image-wrapper aspect-video shadow-md shadow-white hover:shadow-red-600">
                <img
                  className="aspect-video object-cover"
                  src="https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
                  alt="Slide 5"
                />
              </div>
              <div className="details text-center mt-4">
                <h3 className="text-lg font-bold">Lorem ipsum dolor</h3>
                <span className="block text-gray-500">Web Designer</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 6 */}
          <SwiperSlide>
            <div className="swiper-slide inset-0 bg-black opacity-60 shadow-inner hover:opacity-100 transition-all duration-1000 ease-in-out">
              <div className="image-wrapper aspect-video shadow-md shadow-white hover:shadow-red-600">
                <img
                  className="aspect-video object-cover"
                  src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
                  alt="Slide 6"
                />
              </div>
              <div className="details text-center mt-4">
                <h3 className="text-lg font-bold">Lorem ipsum dolor</h3>
                <span className="block text-gray-500">Web Designer</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide inset-0 bg-black opacity-60 shadow-inner hover:opacity-100 transition-all duration-1000 ease-in-out">
              <div className="image-wrapper aspect-video shadow-md shadow-white hover:shadow-red-600">
                <img
                  className="aspect-video object-cover"
                  src="https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
                  alt="Slide 5"
                />
              </div>
              <div className="details text-center mt-4">
                <h3 className="text-lg font-bold">Lorem ipsum dolor</h3>
                <span className="block text-gray-500">Web Designer</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
};

export default Carousel3D;
