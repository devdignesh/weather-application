import React from "react";

const SidebarMenuItem = ({ active, icon: Icon, title }) => {
  return (
    <>
      <li className="my-2 xl:px-4 sm:h-12 xl:h-11 h-10 px-4 sm:px-0 ">
        <a
          href="#"
          className={`flex items-center py-2 h-full text-gray-900 duration-300 hover:bg-zinc-600/20 rounded-full group ${active ?  "xl:bg-[#bbd7ec] sm:bg-transparent bg-[#bbd7ec]" : ' '}`}
        >
           {active && (
            <div className="h-full w-1 bg-[#bbd7ec] rounded-md hidden md:block lg:block xl:hidden sm:block"></div>
           )}
          
          <div className="flex flex-row justify-center items-center px-4">
            <span className={` sm:ml-1 xl:ml-0 ${active ? 'text-black sm:text-white lg:text-white xl:text-black' :'text-white'}`}>
              <Icon size={20} />
            </span>
            <span className={`ms-3  ${active ? 'text-black' :'text-white'} capitalize  sm:hidden md:hidden xl:block`}>
              {title}
            </span>
          </div>
        </a>
      </li>
    </>
  );
};

export default SidebarMenuItem;
