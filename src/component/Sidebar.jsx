import React from "react";
import SidebarMenuItem from "./widgets/sidebar-menu-item";
import { FaMap } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TbLayoutGridAdd } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  const sidebarItems = [
    { id: 1, active: true, icon: TbLayoutGridAdd, title: "Dashboard" },
    { id: 2, active: false, icon: FaMap, title: "Map" },
    { id: 5, active: false, icon: IoMdSettings, title: "Settings" },
  ];

  return (
    <>
      <aside
        id="logo-sidebar"
        class="fixed font-[Poppins] top-0 bg-[#1e1e1e] left-0 z-40 w-72 sm:w-[75px] md:w-[75px] xl:w-72  h-screen transition-transform -translate-x-full sm:translate-x-0 custom-scrollbar"
        aria-label="Sidebar"
      >
        <div class="h-full  py-5 overflow-y-auto">
          <div className="flex flex-col h-full justify-between">
            <div className="">
              <a
                href="#"
                class="flex flex-row space-x-3 px-4 mx-2 items-center  justify-start mb-5 "
              >
                <TiWeatherPartlySunny className="text-white" size={34} />
                <span className="text-white text-xl block sm:block md:hidden lg:hidden xl:block">Weather</span>
              </a>
              <ul class="sm:mt-6 md:mt-6 xl:mt-8  font-medium ">
                {sidebarItems.map((item) => (
                  <SidebarMenuItem
                    key={item.id}
                    active={item.active}
                    icon={item.icon}
                    title={item.title}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
