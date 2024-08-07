"use client";

import React from "react";
import NavigateButton from "@/components/navigate-button";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="p-4 bg-red-400">
      <h1 className="text-2xl">Oops, something went wrong!</h1>
      <p>
        <strong>Error:</strong> {error.message}
      </p>
      <button
        className="px-4 py-2 mr-2 bg-blue-500 hover:bg-blue-700 hover:scale-105 text-white rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
      <NavigateButton route="/" label="Back to Home Page" />
    </div>
  );
};

export default Error;
