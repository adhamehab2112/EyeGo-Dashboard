"use client";

import AuthGuard from "../Components/AuthGuard/AuthGuard";
import Dashboard from "../Components/DashBoardComponent/Dashboard";

export default function DashboardPage() {
  return (
    <>
      <AuthGuard>
        <Dashboard/>
      </AuthGuard>
    </>
  );
}
