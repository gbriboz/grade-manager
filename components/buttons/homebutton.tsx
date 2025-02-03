"use client";

import { useRouter } from "next/navigation";

const HomeButton = () => {
  const router = useRouter();
  const backToHomePage = () => router.push("/");
  
  return (
    <button 
      onClick={backToHomePage}
      className="absolute top-20 left-20 default-underlined-button"
    >
      Back To Home Page
    </button>
  );
}

export default HomeButton;