import { Plus, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Header = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Simulated auth check (replace with your real logic)
    const isLoggedIn = !!localStorage.getItem("token");
    const userName = localStorage.getItem("userName") || "Guest";

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        navigate("/login");
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-8 py-4 bg-transparent text-white">

            <div className="text-2xl font-bold flex items-center">
                <span className="text-red-500">Listy</span>
                <span className="ml-1">Go</span>
            </div>

            <nav className="hidden md:flex space-x-6 text-sm font-medium">
                <a href="/" className="hover:text-red-500">
                    Home
                </a>
                <a href="#" className="hover:text-red-500">
                    Listings
                </a>
                <a href="#" className="hover:text-red-500">
                    Pages
                </a>
                <a href="#" className="hover:text-red-500">
                    Blog
                </a>
                <a href="#" className="hover:text-red-500">
                    Contact Us
                </a>
            </nav>

            <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
                <button
                    onClick={() => setOpen(!open)}
                    className="p-2 rounded-full bg-white text-gray-700 hover:bg-red-500 hover:text-white"
                >
                    <User size={18} />
                </button>

                {open && (
                    <div className="absolute right-0 top-12 w-40 bg-white rounded-md shadow-lg border z-50">
                        {isLoggedIn ? (
                            <>
                                <button
                                    onClick={() => {
                                        navigate("/profile");
                                        setOpen(false);
                                    }}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-100"
                                >
                                    {userName}’s Profile
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-100"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => {
                                        navigate("/login");
                                        setOpen(false);
                                    }}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-100"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => {
                                        navigate("/signup");
                                        setOpen(false);
                                    }}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-100"
                                >
                                    Sign Up
                                </button>
                            </>
                        )}
                    </div>
                )}

                <button
                    onClick={() => navigate("create-event")}
                    className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                    <Plus size={16} className="mr-1" /> Add Event
                </button>
            </div>
        </header>
    );
};

export default Header;
