"use client";

import { ReactNode } from "react";

type ContainerProps = {
  width: string;
  title: string;
  children: ReactNode
};

const Container = ({ width, title, children }: ContainerProps) => {
  return (
    <div className="flex  min-h-screen justify-center items-center">
      <div className={`flex flex-col ${width} p-10 border-[1px] border-gray-200 text-neutral-800 rounded-lg`}>
        <h1 className="flex justify-center items-center text-2xl font-semibold mb-5">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}

export default Container;