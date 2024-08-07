import React from "react";
import NavigateButton from "@/components/navigate-button";

async function TestLoading() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay

  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1 className="text-2xl">✅ Page Loaded</h1>
      <NavigateButton route="/" label="Back to Home Page" />
    </div>
  );
}

export default TestLoading;
