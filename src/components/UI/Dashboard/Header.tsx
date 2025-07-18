import React from "react";
import router from "next/router";
import { Button } from "@/components/UI";
import { useAuthentication } from "@/hooks/authentication.hook";

export const Header: React.FC = () => {
  const { logout } = useAuthentication();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">User Dashboard</h1>
          <Button
            onButtonClick={handleLogout}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
