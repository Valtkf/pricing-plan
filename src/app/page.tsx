"use client";

import { useState } from "react";

export default function Home() {
  const [isClick, setIsClick] = useState<string>("");

  const handleClick = (button: string) => {
    setIsClick(button);
  };

  return (
    <main className="bg-[#010B25] flex min-h-screen flex-col items-center justify-between p-8">
      <div className="flex flex-col justify-center items-center">
        <button className="border-[1px] border-[#97BAFF66] bg-[#041642] w-[150px] h-[36px] rounded-3xl text-sm text-[#97BAFF66]">
          Nos offres
        </button>
        <h1 className="text-4xl font-bold mt-4">Des prix en accord avec</h1>
        <h1 className="text-4xl font-bold mt-4"> notre vision</h1>
        <div className="flex flex-row text-white gap-x-4 mt-4">
          <button
            className={`border-[1px] border-white rounded-[10px] w-[275px] h-[45px] ${
              isClick === "monthly" ? "bg-radial-gradient" : ""
            }`}
            onClick={() => handleClick("monthly")}
          >
            Paiement Mensuel
          </button>
          <button
            className={`border-[1px] border-white rounded-[10px] w-[275px] h-[45px] ${
              isClick === "yearly" ? "bg-radial-gradient" : ""
            }`}
            onClick={() => handleClick("yearly")}
          >
            Paiement Annuel
          </button>
        </div>
      </div>
    </main>
  );
}
