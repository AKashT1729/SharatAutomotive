import React from "react";
import Card from "./Card";

function Services() {
  const servicesData = [
    {
      name: "Dent & Paint Repair",
      description:
        "Restore your car's appearance with our expert dent removal and paint repair services, ensuring it looks as good as new.",
    },
    {
      name: "Bumper Repair",
      description:
        "Restore your car's bumper to its original look with our expert repair services.",
    },
    {
      name: "Accidental Repair",
      description:
        "Restore your vehicle to its pre-accident condition with our comprehensive repair services. We handle everything from minor dings to major collisions and professional repair process.",
    },
    {
      name: "Scratch Repair",
      description:
        "Restore your vehicle's surface by eliminating unsightly scratches and imperfections, ensuring a smooth and polished finish.",
    },
  ];

  return (
    <div className="top-0 w-full min-h-screen px-4">
      <div className="text-center ">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold py-6">
          Services
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Our vehicles are equipped with state-of-the-art technology to ensure
          maximum safety and efficiency.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 my-8">
        {servicesData.map((service, index) => (
          <Card
            key={index}
            name={service.name}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
