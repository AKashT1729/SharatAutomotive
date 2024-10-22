import React, { useState } from "react";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    vehicle: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
  const { name, vehicle, phone } = formData;
  const message = `Name: ${name}\nVehicle: ${vehicle}\nPhone Number: ${phone}`;
  const whatsappUrl = `https://wa.me/7775944485?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex items-center justify-center max-h-screen my-10">
      <div className="max-w-lg w-full p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold mb-4">Request A Call Back</h1>
        <p className="text-gray-600 mb-6">
          Please fill out the form below to request a call back.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="vehicle"
              className="block text-sm font-medium text-gray-700"
            >
              Vehicle:
            </label>
            <input
              type="text"
              id="vehicle"
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className=" w-full bg-[#FFC300] text-gray-950 py-2 px-4 transition-all duration-300 rounded hover:bg-white hover:border hover:border-[#FFC300] h-12"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Appointment;
