import React from "react";
import { twMerge } from "tailwind-merge";
interface SidebarProps {
  children: React.ReactNode;
}
const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className={twMerge(`flex h-full`)}>
        <div className="hidden md:flex flex-col h-full">
            <h1>
                helooo
            </h1>
        </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
