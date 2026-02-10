import React from "react";
import react from "@/assets/react.svg";
export default function CardComponent() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-48 object-contain" src={react} alt="test" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">우와 신기하다</h2>
        <p className="text-gray-600 mt-2">tailwindcss적용 힘들다...</p>
        <button className="mt-4 px-4 py-2 bg-navy-500 text-white rounded-lg hover:bg-navy-600">
          공부하자
        </button>
      </div>
    </div>
  );
}
