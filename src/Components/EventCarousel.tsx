import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import EventCard from "./EventCard";
import img from "../assets/mfs.jpg"

const events = [
  {
    image: img,
    category: "Cardiology",
    title: "Dr. Frances Sutton",
    description: "MBBS, DM (Cardiology). Sunday - Friday: 9am - 5pm",
    location: "New Jersey, USA",
    price: "$50",
    author: "Alina Fraser",
    tag: "Appointment",
  },
  {
    image: img,
    category: "Italian",
    title: "The Shapes of Pasta Food",
    description: "Delicious authentic Italian pasta made fresh daily.",
    location: "The Square Plaza, NJ, USA",
    price: "$250",
    author: "Eva Martin",
    tag: "Open Now",
  },
  {
    image: img,
    category: "Music",
    title: "Maya Kandon Music Concert",
    description: "An amazing night of live music and entertainment.",
    location: "The Square Plaza, NJ, USA",
    price: "$50",
    author: "Kian Bailey",
  },
  {
    image: img,
    category: "Mexican",
    title: "Mexican Food in Chicago",
    description: "Authentic Mexican flavors brought to your city.",
    location: "Pulaski St, Chicago, IL, USA",
    price: "$220",
    author: "Alina Fraser",
    tag: "Open Now",
  },
   {
    image: img,
    category: "Mexican",
    title: "Mexican Food in Chicago",
    description: "Authentic Mexican flavors brought to your city.",
    location: "Pulaski St, Chicago, IL, USA",
    price: "$220",
    author: "Alina Fraser",
    tag: "Open Now",
  },
   {
    image: img,
    category: "Mexican",
    title: "Mexican Food in Chicago",
    description: "Authentic Mexican flavors brought to your city.",
    location: "Pulaski St, Chicago, IL, USA",
    price: "$220",
    author: "Alina Fraser",
    tag: "Open Now",
  },
   {
    image: img,
    category: "Mexican",
    title: "Mexican Food in Chicago",
    description: "Authentic Mexican flavors brought to your city.",
    location: "Pulaski St, Chicago, IL, USA",
    price: "$220",
    author: "Alina Fraser",
    tag: "Open Now",
  },
];

const EventCarousel: React.FC = () => {
  return (
    <section id="event" className="py-16 bg-gray-50">
      <div className="text-center mb-10">
        <p className="text-red-500 text-sm uppercase font-semibold">
          Our Latest Listing
        </p>
        <h2 className="text-3xl font-bold">New Listings in Our Directory</h2>
        <p className="text-gray-500 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1028: {slidesPerView: 4}
          }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <EventCard {...event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EventCarousel;
