"use client";

import HomeButton from "@/components/buttons/homebutton";
import Container from "@/components/container/container";

export default function AddSubjectPage() {
  return (
    <div>

      {/* Subject 'Add' Page */}
      <title>
        Grade Manager - Subject Name
      </title>

      <main>
        <HomeButton/>

        <Container width={"w-[750px]"} title={"Add Subject"}>
          <div className="column-5">

            {/* 'Code' of Subject Input */}
            <input type="text" placeholder="Subject Code" className="default-input pl-2 pr-2"/>

            {/* 'Name' of Subject Input */}
            <input type="text" placeholder="Subject Name" className="default-input pl-2 pr-2"/>
            
            {/* Button to Next Part of Subject Form */}
            <button className="default-button">
              Next
            </button>
          </div>
        </Container>
      </main>
    </div>
  );
}