import React from "react";
import NavigateButton from "@/components/navigate-button";

async function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl">📊 Dashboard</h1>
      <NavigateButton route="/dashboard/test-error" label="Test Error" />
      <NavigateButton route="/dashboard/test-loading" label="Test Loading" />
      <NavigateButton route="/" label="Back to Home Page" />
    </div>
  );
}

export default Dashboard;
