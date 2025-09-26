import { Plus, User } from "lucide-react";

const Header = () => {
return (
<header className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-8 py-4 bg-transparent text-white">
{/* Logo */}
<div className="text-2xl font-bold flex items-center">
<span className="text-red-500">Listy</span>
<span className="ml-1">Go</span>
</div>


{/* Navigation */}
<nav className="hidden md:flex space-x-6 text-sm font-medium">
<a href="#" className="hover:text-red-500">Home</a>
<a href="#" className="hover:text-red-500">Listings</a>
<a href="#" className="hover:text-red-500">Pages</a>
<a href="#" className="hover:text-red-500">Blog</a>
<a href="#" className="hover:text-red-500">Contact Us</a>
</nav>


{/* Right Section */}
<div className="flex items-center space-x-4">
<button className="p-2 rounded-full bg-white text-gray-700 hover:bg-red-500 hover:text-white">
<User size={18} />
</button>
<button className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
<Plus size={16} className="mr-1" /> Add Listing
</button>
</div>
</header>
);
};

export default Header