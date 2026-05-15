import React from "react";

const NavigationBar = () => {
  return (
    <div>
      <ul className="flex justify-evenly bg-slate-700 text-white h-20 items-center">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/software">Software</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
