"use client";

import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar/>

        <div className="flex justify-center w-screen h-screen items-center">
          <button className="default-button">
            Add Subject
          </button>
        </div>
      </main>
    </div>
  );
}
