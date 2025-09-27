import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import EventCard from "./EventCard";
import axios from "axios";

interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  userName: string
}


const EventCarousel: React.FC = () => {

   const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get<Event[]>("http://localhost:3001/v1/event");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if(loading){
    <p>Loading</p>
  }

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
