import React, { useState } from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from "date-fns";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Swal from "sweetalert2"

export interface CreateEventDTO {
    title: string;
    description: string;
    location: string;
    date: string;
}

const CreateEventForm: React.FC = () => {
    const navigate =  useNavigate()
    const [formData, setFormData] = useState<CreateEventDTO>({
        title: "",
        description: "",
        location: "",
        date: "",
    });

    const [eventDate, setEventDate] = useState<Date | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault(); 

  const payload: CreateEventDTO = {
    ...formData,
    date: eventDate ? format(eventDate, "yyyy-MM-dd") : "",
  };

  try {

    const response = await axios.post("http://localhost:3001/v1/event", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Event created successfully:", response.data);

   Swal.fire({
      icon: "success",
      title: "Event Created!",
      text: "Your event has been created successfully.",
      confirmButtonColor: "#fc4931",
    });

    setFormData({
      title: "",
      description: "",
      location: "",
      date: "",
    });
    setEventDate(null);

  } catch (error: any) {
    console.error("Error creating event:", error.response?.data || error.message);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.response?.data?.message || "Failed to create event. Please try again.",
      confirmButtonColor: "#fc4931",
    });
  }
};

    return (
        <>
            <section className="py-12 bg-gray-50">
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
                    <button
                        onClick={() => {
                            navigate('/')
                        }}
                        className="flex items-center gap-2 text-[#333] hover:text-[#fc4931] mb-6"
                    >
                        <IoIosArrowRoundBack />
                        <span className="font-medium">Back</span>
                    </button>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Create New Event
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title */}
                        <div>
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Event Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter event title"
                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Write a short description"
                                rows={4}
                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                                required
                            ></textarea>
                        </div>

                        <div>
                            <label
                                htmlFor="location"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Enter location"
                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="w-full max-sm:w-full flex flex-col items-start gap-2.5">
                            <label className="self-stretch text-sm text-[#677069]">
                                Event date <span className="text-[#fc4931]">*</span>
                            </label>
                            <div className="relative w-full">
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        value={eventDate}
                                        onChange={(newDate) => setEventDate(newDate)}
                                        format="MM/dd/yyyy"
                                        slotProps={{
                                            textField: {
                                                fullWidth: true,
                                                placeholder: "Select date",
                                                InputProps: {
                                                    sx: {
                                                        py: 1.75,
                                                        px: 2.5,
                                                        backgroundColor: "#fff",
                                                        borderRadius: "10px",
                                                        border: "1px solid #f2f3f2",
                                                        fontFamily: `'Open Sans', Helvetica`,
                                                        fontSize: "1rem",
                                                        color: "#91929c",
                                                        height: 52,
                                                        "& input": { cursor: "pointer" },
                                                    },
                                                },
                                            },
                                            popper: { placement: "top-start" },
                                        }}
                                    />
                                </LocalizationProvider>
                            </div>

                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
                        >
                            Create Event
                        </button>
                    </form>
                </div>
            </section>
        </>

    );
};

export default CreateEventForm;
