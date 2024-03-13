import React from "react";

export default function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static ">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.linkedin.com/in/anand--gautam">
            <i className="ri-linkedin-box-fill text-gray-400 "></i>
          </a>
          <i className="ri-mail-line text-gray-400 "></i>
          <i className="ri-instagram-line text-gray-400 "></i>
          <i className="ri-github-fill text-gray-400 "></i>
          <i className="ri-profile-line text-gray-400 "></i>
        </div>
        <div className="w-[1px] h-32 bg-[#e3dfdf] sm:hidden"></div>
      </div>
    </div>
  );
}
