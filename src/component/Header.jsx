import React from "react";
import Input from "./widgets/Input";
import NavIcon from "./widgets/NavIcon";
import { FaRegBell } from "react-icons/fa";
import ProfileImage from "./widgets/profileImage";
import { FiSearch } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import useSelectedCityStore from '../store/useSelectedCityStore'; 

const Header = () => {

  const selectedCity = useSelectedCityStore((state) => state.selectedCity);

  return (
    <div className="bg-[#0c0b0b] w-full sticky top-0 z-10 drop-shadow-lg ">
      <div className="sm:p-3 md:p-4 p-2  flex flex-row justify-between items-center ">
        <div className="flex flex-row justify-center items-center sm:hidden">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center justify-center ms-3 text-sm text-gray-500 rounded-lg sm:hidden  focus:outline-none focus:ring-2 "
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex w-full flex-row  justify-between items-center">
          <div className="flex flex-row space-x-4">
            <div className="w-full flex flex-row justify-center items-center">
              <NavIcon icon={FaRegBell} active={true} className="sm:block hidden"/>
              
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <span>
                <HiLocationMarker className="text-white" />
              </span>
              <span className="text-white w-24 capitalize text-base font-light text-nowrap">
                {selectedCity}
              </span>
            </div>
          </div>
          <Input className="sm:block hidden" />

          <div>
            <div className="w-full flex flex-row justify-center items-center space-x-2">
              <NavIcon
                icon={FiSearch}
                active={false}
                className="block sm:hidden"
              />

              <div className="sm:pl-4 ">
                <ProfileImage src="/images/person/person6.jpg" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
