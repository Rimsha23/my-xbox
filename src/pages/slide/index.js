import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import  { Autoplay } from 'swiper/modules';
import Propertie_slider_1 from './Propertie_slider_1.jpg';
import Propertie_slider_2 from './Propertie_slider_2.jpg';


function CardSlider() {
  

  const cards1 = [
    {
      heading: "Orchid de Paradise",
      paragraph: "18B Central Street, San Francisco",
      price: 'Price$185300',
      image: `${Propertie_slider_1}`,
    },
    {
      heading: "Casel de Pharadio",
      paragraph: "18B Central Street, San Francisco",
      price: 'Price$185300',
      image: `${Propertie_slider_1}`,
    },
    {
      heading: "Orchid Casel de Paradise",
      paragraph: "18B Central Street, San Francisco",
      price: 'Price$185300',
      image: `${Propertie_slider_1}`,
    },
  
    {
      heading: "Sindrella Resort Villa",
      paragraph: "18B Central Street, San Francisco",
      price: 'Price$225300',
      image: `${Propertie_slider_2}`,
    },
    {
      heading: "Sindrella Resort Villa",
      paragraph: "18B Central Street, San Francisco",
      price: 'Price$225300',
      image: `${Propertie_slider_2}`,
    },
    {
      heading: "Sindrella Resort Villa",
      paragraph: "18B Central Street, San Francisco",
      price: 'Price$225300',
      image: `${Propertie_slider_2}`,
    },
  ];

  return (
    <div>
      <Swiper
       
        spaceBetween={20}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false, 
        }}
        modules={[Autoplay]}
        breakpoints={{
          1200: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
      
          },
        }}
      >
       
        {cards1.map((card1, index1) => (
         <SwiperSlide className=' w-[700px] h-[130px] '> <div
            key={index1}
            className="bg-gray-200 p-4 shadow-lg shadow-gray-800 rounded-md mb-4 w-full  h-[130px]  flex flex-row"
          >
            <div className='w-[130px] lg:w-[100px] h-[100px]'>
            <img
              src={card1.image}
              alt={card1.heading}
              className="relative mb-4 ml-3 rounded-md h-[100px] w-full mr-4 "
            />
            </div>
            <div className='flex flex-col ml-8 lg:ml-6'>
            <h2 className="text-[15px] text-left font-semibold font-lora mb-2 text-blue-950 cursor-pointer">
              {card1.heading}.
            </h2>
            <p className="text-gray-600 text-left font-lora font-light mb-2 text-[11px]">
              {card1.paragraph}
            </p>
          
              <p className="text-yellow-700 text-left text-sm font-lora">
                {card1.price}
              </p>
              </div>
            </div>
        
          </SwiperSlide>
        ))}

      </Swiper>
      
    
      
    </div>
  );
}

export default CardSlider;
