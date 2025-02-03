"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  
  const router = useRouter();
  const openSignInPage = () => router.push("/student/signin");
  
  return (
    <header className="absolute flex w-full justify-between items-center px-96 py-2 border-[1px] border-gray-200">
      <div className="text-xl font-medium">
        <Link href="/">Grade Manager</Link>
      </div>

      <button 
        onClick={openSignInPage}
        className="default-button"
      >
        Sign In
      </button>
    </header>
  );
}

export default Navbar;