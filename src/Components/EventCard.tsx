import React from "react";
import { FaBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import img from "../assets/mfs.jpg";

interface EventCardProps {
  id: string; // eventId
  title: string;
  description: string;
  location: string;
  date: string;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  description,
  location,
}) => {
 const handleBooking = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "Not Logged In",
        text: "Please log in to book an event",
        confirmButtonColor: "#fc4931",
      });
      return;
    }

    const payload = { eventId: id };

    const response = await axios.post(
      "http://localhost:3001/v1/booking",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token.startsWith("Bearer ") ? token : `Bearer ${token}`,
        },
      }
    );

    Swal.fire({
      icon: "success",
      title: "Booked!",
      text: "Your event has been booked successfully",
      confirmButtonColor: "#fc4931",
    });

    console.log("Booking successful:", response.data);
  } catch (error: any) {
    Swal.fire({
      icon: "error",
      title: "Booking Failed",
      text: error.response?.data?.message || "Could not book this event",
      confirmButtonColor: "#fc4931",
    });
    console.error("Booking error:", error);
  }
};


  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition mb-10">
      {/* Image */}
      <div className="relative">
        <img src={img} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          Music
        </span>
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          India
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
        <p className="text-sm text-gray-400 mt-2">{location}</p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-red-500 font-bold">55</p>
          <div className="flex gap-3 text-gray-400">
            <FaBookmark
              className="cursor-pointer hover:text-red-500"
              onClick={handleBooking}
            />
            <FaShareAlt className="cursor-pointer hover:text-blue-500" />
            <FaEye className="cursor-pointer hover:text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
