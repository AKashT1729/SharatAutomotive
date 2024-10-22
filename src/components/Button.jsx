import React from "react";
import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/appointment');
  };
  return (
    <>
      <button onClick={handleClick} className="bg-[#FFC300] text-gray-950 py-2 px-4 transition-all duration-300 rounded hover:bg-white hover:border hover:border-[#FFC300] h-12">
        Book Appointment
      </button>
    </>
  );
}

export default Button;
