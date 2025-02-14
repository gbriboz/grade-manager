"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  const router = useRouter();
  const openAddSubjectPage = () => router.push("/student/subject/add");
  
  return (
    <div>
      <main>
        <Navbar/>

        <div className="centralized">
          <button className="default-button" onClick={openAddSubjectPage}>
            Add Subject
          </button>
        </div>
      </main>
    </div>
  );
}