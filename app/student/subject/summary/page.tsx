"use client";

import { useRouter } from "next/navigation";
import HomeButton from "@/components/buttons/homebutton";
import Container from "@/components/container/container";
import DeleteButton from "@/components/buttons/deletebutton";

export default function SubjectResumePage() {
  const router = useRouter();
  const openAddGradePage = () => router.push("/student/subject/summary/grade");

  return (
    <div>
      {/* Subject 'Summary' Page */}
      <title>
        Grade Manager - Subject Summary
      </title>

      <main>
        <HomeButton />

        <Container width={"w-[750px]"} title={"Summary"}>
          <div className="column-5">
            {/* Code and Name of Subject */}
            <div className="flex flex-row gap-2 text-lg">
              <span className="font-medium">
                (
                Code
                )
              </span>
              -
              <span className="font-medium">
                Name
              </span>
            </div>

            <div className="flex flex-col gap-2">

              {/* Legend of Subject Grade, including a Enumeration of Exam, Score of Exam and your Weight */}
              <div className="flex justify-between pl-5 pr-5 font-bold">
                <legend className="flex w-1/3 justify-center">
                  Exam
                </legend>

                <legend className="flex w-1/3 justify-center">
                  Score
                </legend>

                <legend className="flex w-1/3 justify-center">
                  Weight
                </legend>
              </div>

              {/* Grade Item with X Button */}
              <div className="group relative bg-gray-50 p-2 pl-5 pr-5 rounded-lg">
                <div className="flex justify-between items-center">
                  {/* Exam Enumeration */}
                  <span className="flex w-1/3 justify-center">
                    1
                  </span>
                  
                  {/* Exam Score */}
                  <span className="flex w-1/3 justify-center">
                    0.0
                  </span>


                  {/* Exam Weight */}
                  <span className="flex w-1/3 justify-center">
                    0
                  </span>
                </div>

                {/* Button to Delete a Existing Grade */}
                <DeleteButton/>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              {/* Button to Add Another Grade */}
              <button
                onClick={openAddGradePage}
                className="alternative-button"
              >
                Add Grade
              </button>

              {/* Button to Calculate the Required Grade in the Final Exam */}
              <button className="default-button">
                Calculate Remainder
              </button>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
