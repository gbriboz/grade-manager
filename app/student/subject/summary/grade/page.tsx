"use client";

import BackToSubject from "@/components/buttons/backToSubject";
import Container from "@/components/container/container";

export default function AddGradePage() {
  return (
    <div>
      <title>
        Grade Manager - Add Grade
      </title>

      {/*'Add Grade' Page*/}
      <main>
        <BackToSubject/>
        
        <Container width={"w-[480px]"} title={"Add Grade"}>
          <div className="column-5">
            <input type="text" placeholder="Grade Score" className="default-input pl-2 pr-2"/>

            <input type="text" placeholder="Grade Weight" className="default-input pl-2 pr-2"/>
          
            <button className="default-button">
              Add Grade
            </button>
          </div>
        </Container>
      </main>
    </div>
  );
}