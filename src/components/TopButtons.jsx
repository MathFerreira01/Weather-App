import React from "react";

function TopButtons() {
  const cities = [
    {
      id: 1,
      title: "london",
    },
    {
      id: 2,
      title: "Japan",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "USA",
    },
    {
      id: 5,
      title: "Brazil",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium">
            {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
