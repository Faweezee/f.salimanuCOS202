"use client";
import React, { useState } from "react";

const Software = () => {
  const [x, setX] = useState(100);
  const [y, setY] = useState(true);
  const [hide, setHide] = useState("Hide");

  function handleChange() {
    setX((prev) => prev + 10);
  }

  function handleChange2() {
    setX((prev) => prev - 10);
  }

  function handleHide() {
    setY(!y);
    setHide(hide === "Hide" ? "Show" : "Hide");
  }

  return (
    <div>
      <div>
        <h1>Software</h1>
        <p>Score: {x}</p>
        <button
          className="bg-slate-700 text-white p-2 cursor-pointer mx-2 rounded-md"
          onClick={handleChange}
        >
          Increase Score
        </button>
        <button
          className="bg-red-700 text-white p-2 cursor-pointer mx-2 rounded-md"
          onClick={handleChange2}
        >
          Decrease Score
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mx-6">
        <section>
          <h2 className="text-4xl font-bold" onClick={handleHide}>
            {hide}
          </h2>
        </section>
        {y && <section className="h-52 bg-green-700"></section>}
      </div>
    </div>
  );
};

export default Software;
