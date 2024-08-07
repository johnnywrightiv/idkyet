import React from "react";
import NavigateButton from "@/components/navigate-button";

async function TestLoading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl">✅ Page Loaded</h1>
      <NavigateButton route="/dashboard" label="Back to Dashboard" />
    </div>
  );
}

export default TestLoading;
