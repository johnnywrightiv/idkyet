import React from "react";
import NavigateButton from "@/components/navigate-button";

async function TestError() {
  const throwError = true;

  if (throwError) {
    throw new Error("This is a test error to check error handling.");
  }

  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1 className="text-2xl">Test Page</h1>
      <NavigateButton route="/" label="Back to Home Page" />
    </div>
  );
}

export default TestError;
