import { Search } from "lucide-react";

const Hero = () => {
    return (
        <section
            className="relative h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80')",
            }}
        >
            {/* Overlay */}
             <div className="absolute inset-0 bg-black/50"></div>


            {/* Hero Content */}
            <div className="relative z-10 text-center text-white px-4">
                <p className="uppercase tracking-widest text-sm font-medium mb-2">
                    Discover & Connect With Great Places Around The World
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                    Let’s Discover This City
                </h1>


                {/* Search Bar */}
                <div className="flex flex-col md:flex-row items-center bg-white rounded-full shadow-lg overflow-hidden max-w-4xl mx-auto mb-6">
                    <input
                        type="text"
                        placeholder="What are you looking for"
                        className="flex-1 px-4 py-3 text-gray-700 outline-none"
                    />
                    <select className="px-4 py-3 mr-3 border-t md:border-t-0 md:border-l outline-none text-gray-600">
                        <option>Select Location</option>
                        <option>Lagos</option>
                        <option>Abuja</option>
                    </select>
                    <select className="px-4 py-3 border-t md:border-t-0 md:border-l outline-none text-gray-600">
                        <option>Select Category</option>
                        <option>Restaurant</option>
                        <option>Shopping</option>
                        <option>Hotel</option>
                    </select>
                    <button className="bg-red-500 hover:bg-red-600 rounded-full text-white px-6 py-3 ml-3 flex items-center">
                        <Search size={18} className="mr-2" /> Search
                    </button>
                </div>


                {/* Tags */}
                <div className="flex flex-wrap justify-center space-x-2 text-sm">
                    {[
                        "Let’s Discover This City",
                        "Restaurant",
                        "Shopping",
                        "Hotel",
                        "Museum",
                    ].map((tag) => (
                        <span
                            key={tag}
                            className="bg-transparent border border-solid border-white text-gray-300 px-3 py-1 rounded-full shadow-sm mb-2 cursor-pointer hover:bg-red-500 hover:text-white"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero