"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface NavigateButtonProps {
  route: string;
  label: string;
}

const NavigateButton: React.FC<NavigateButtonProps> = ({ route, label }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 mt-2 bg-blue-500 hover:bg-blue-700 hover:scale-105 text-white rounded"
    >
      {label}
    </button>
  );
};

export default NavigateButton;
