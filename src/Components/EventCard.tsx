import React from "react";
import { FaHeart, FaShareAlt, FaEye } from "react-icons/fa";

interface EventCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  location: string;
  price: string;
  tag?: string;
  author: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  category,
  title,
  description,
  location,
  price,
  tag,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition mb-10">
      {/* Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {category}
        </span>
        {tag && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>

        <p className="text-sm text-gray-400 mt-2">{location}</p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-red-500 font-bold">{price}</p>
          <div className="flex gap-3 text-gray-400">
            <FaHeart className="cursor-pointer hover:text-red-500" />
            <FaShareAlt className="cursor-pointer hover:text-blue-500" />
            <FaEye className="cursor-pointer hover:text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
