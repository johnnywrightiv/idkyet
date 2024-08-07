import React from "react";
import NavigateButton from "@/components/navigate-button";
import ErrorBanner from "@/components/error-banner";

function TestErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl">❌ Test Error</h1>
      <ErrorBanner />
      <NavigateButton route="/dashboard" label="Back to Dashboard" />
    </div>
  );
}

export default TestErrorPage;
