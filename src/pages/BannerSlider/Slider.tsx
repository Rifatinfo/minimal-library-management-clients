// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import Slider_one from './Slider_one';
import Slider_two from './Slider_two';
import Slider_three from './Slider_three';



const Slider = () => {
    return (
        <div style={{ height: "90vh" }}>
            <Swiper
                direction="vertical"
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{ clickable: true }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><Slider_one/></SwiperSlide>
                <SwiperSlide><Slider_two/></SwiperSlide>
                <SwiperSlide><Slider_three/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
