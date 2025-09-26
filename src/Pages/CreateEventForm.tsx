import React, { useState } from "react";
import Header from "../Components/Header";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from "date-fns";

export interface CreateEventDTO {
    title: string;
    description: string;
    location: string;
    date: string;
}

const CreateEventForm: React.FC = () => {
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

    const handleSubmit = () => {
        const payload: CreateEventDTO = {
            ...formData,
            date: eventDate ? format(eventDate, "yyyy-MM-dd") : "",
        };
        console.log(payload);
    };
    return (
        <>
            {/* <Header/> */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
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

                        {/* Description */}
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

                        {/* Location */}
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

                        {/* Date */}
                        {/* <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Event Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
              required
            />
          </div> */}
                        <div className="w-[350px] max-sm:w-full flex flex-col items-start gap-2.5">
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

                        {/* Submit */}
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
