import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Navbar from "@/components/dashboard/navbar/Navbar";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import React from "react";
import AdminSidebar from "./sidebar/AdminSidebar";
import AdminHeader from "./AdminHeader";

interface AdminWrapperProps {
  children: React.ReactNode;
}

const AdminWrapper: React.FC<AdminWrapperProps> = ({ children }) => {
  return (
    <div className="w-full flex bg-[#0B0E12]">
      <div className="hidden laptop:block bg-[#0E151B] w-[240px] max-w-full">
        <AdminSidebar />
      </div>
      <div className="w-full flex flex-col py-10 px-10">
        <div className= "w-full flex justify-end items-center sticky top-0 z-50 bg-[#0B0E12]">
        <AdminHeader />
        </div>
        {children}
        </div>
    </div>
  );
};

export default AdminWrapper;
