import React from "react";

const NavigationBar = () => {
  return (
    <div className="bg-[#222052] text-white">
      <div className="flex justify-between p-5">
       
        <div className="bg-white text-[#222052] rounded-3xl p-5 ">
          <h1 className="font-bold underline decoration-4">ASSIGNMENT</h1>
          <h1 className="text-justify">learn it, do it</h1>
        </div>

        <div className="flex gap-10">
          <h1>HOME</h1>
          <h1>ABOUT</h1>
          <h1>COURSE</h1>
          <h1>EVENTS</h1>
          <h1>CONTRACT</h1>
        </div>

        <div className="flex gap-5">
          <h1>Secarch</h1>
          <h1>profile</h1>
        </div>
      </div>

      <div className="text-center">
        <h1>TETHERS PROFILE</h1>
      </div>
    </div>
  );
};

export default NavigationBar;
