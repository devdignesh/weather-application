import React from "react";
import classNames from "classnames";

const NavIcon = ({ icon: Icon, active, className }) => {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <a
      onClick={handleClick}
      href=""
      className={classNames(
        "bg-[#1e1e1e] rounded-full w-12 h-12 hover:bg-zinc-700/50 duration-200 relative",
        className
      )}
    >
      <span className=" h-full text-gray-400 flex justify-center items-center text-center">
        <Icon size={18} />
      </span>
      {active ? (
        <span className="absolute top-[12px] right-[16px] h-1 w-1 bg-[#da4545] rounded-full "></span>
      ) : (
        ""
      )}
    </a>
  );
};

export default NavIcon;
