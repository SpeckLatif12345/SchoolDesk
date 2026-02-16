import { Outlet } from "react-router-dom";
import TopNav from "./Topnav";

export default function Layout() {
  return (
    <div className="min-h-screen bg-blue-200 text-gray-800">
      <TopNav />

      <main className="w-full mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
