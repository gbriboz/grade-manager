"use client";

import { useRouter } from "next/navigation";

const BackToSubject = () => {
  const router = useRouter();
  const backToSubjectPage = () => router.push("/student/subject/summary");
  
  return (
    <button 
      onClick={backToSubjectPage}
      className="absolute top-20 left-20 default-underlined-button"
    >
      Back To Subject Page
    </button>
  );
}

export default BackToSubject;