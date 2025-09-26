import React from "react";


const ProfileDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with gradient */}
      <div className="relative bg-gradient-to-r from-red-400 via-red-500 to-red-600 h-56 rounded-b-2xl">
        <div className="absolute -bottom-16 left-10 flex items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
          <div className="ml-6 text-white">
            <p className="text-sm opacity-90">Member Since 2025</p>
            <h1 className="text-2xl font-bold">Daniel Igwe</h1>
          </div>
        </div>
      </div>

      {/* Tabs */}
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
        {/* Highlights */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-purple-500">
            <p className="text-gray-600">Booked Events</p>
            <p className="text-2xl font-bold text-purple-600">2</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-gray-600">Organized Events</p>
            <p className="text-2xl font-bold text-gray-800">0</p>
          </div>
        </div>

        {/* Saved Events */}
        <div className="md:col-span-3">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Saved Events (2)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Event Card 1 */}
            <div className="relative bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/400x200"
                  alt="Event"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  27 SEP
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Boundless Bonds
                </h3>
                <p className="text-sm text-gray-500">
                  Nurturing the Mind-Body Connection
                </p>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="relative bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/400x200"
                  alt="Event"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  01 OCT
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Referral Marketing
                </h3>
                <p className="text-sm text-gray-500">
                  Live Perth Networking for Growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
