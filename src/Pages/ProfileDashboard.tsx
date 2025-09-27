import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../assets/mfs.jpg";
import profile from "../assets/default-profile.png";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  profilePhoto?: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
}

const ProfileDashboard: React.FC = () => {
  const [bookedEvents, setBookedEvents] = useState<Event[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
      const parsedUser: User = JSON.parse(savedUser);
      setUser(parsedUser);

      const fetchBookings = async () => {
        try {
          const res = await axios.get<{ data: any[] }>(
            `http://localhost:3001/v1/booking`,
            {
              headers: {
                Authorization: `Bearer ${savedToken}`,
              },
            }
          );

          const events = res.data.data.map((booking) => booking.event);
          setBookedEvents(events);
        } catch (error) {
          console.error("Error fetching booked events:", error);
        }
      };

      fetchBookings();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="relative bg-gradient-to-r from-red-400 via-red-500 to-red-600 h-56 rounded-b-2xl">
        <div className="absolute -bottom-16 left-10 flex items-center">
          <img
            src={user?.profilePhoto || profile}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
          <div className="ml-6 text-white mt-6">
            <p className="text-sm opacity-90">Member Since 2025</p>
            <h1 className="text-2xl font-bold text-black">
              {user ? `${user.firstName} ${user.lastName}` : "Guest"}
            </h1>
            <p className="text-gray-800">{user?.email}</p>
          </div>
        </div>
      </div>

      <div className="mt-20 px-10 border-b border-gray-200">
        <ul className="flex gap-8 text-gray-600 font-medium">
          <li className="pb-3 border-b-2 border-red-500 text-red-500 cursor-pointer">
            Home
          </li>
          <li className="pb-3 hover:text-red-500 cursor-pointer">My Orders</li>
          <li className="pb-3 hover:text-red-500 cursor-pointer">Settings</li>
          <li className="pb-3 hover:text-red-500 cursor-pointer">About</li>
          <li className="pb-3 hover:text-red-500 cursor-pointer">More</li>
        </ul>
      </div>

      <div className="px-10 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-purple-500">
            <p className="text-gray-600">Booked Events</p>
            <p className="text-2xl font-bold text-purple-600">
              {bookedEvents.length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-gray-600">Organized Events</p>
            <p className="text-2xl font-bold text-gray-800">0</p>
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Booked Events ({bookedEvents.length})
          </h2>

          {bookedEvents.length === 0 ? (
            <p className="text-gray-500">No booked events yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {bookedEvents.map((event) => (
                <div
                  key={event.id}
                  className="relative bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={img}
                      alt={event.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                      })}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-500">{event.description}</p>
                    <p className="text-xs text-gray-400 mt-2">
                       {event.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
