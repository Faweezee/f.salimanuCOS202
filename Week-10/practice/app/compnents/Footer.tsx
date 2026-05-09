import React from "react";
function Footer() {
  return (
    <div>
      <p className="py-[105px] text-center text-2xl text-white bg-orange-700">
        &copy;PAU {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
