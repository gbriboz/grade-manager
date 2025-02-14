"use client";

import HomeButton from "@/components/buttons/homebutton";
import Container from "@/components/container/container";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div>
      
      {/* Student 'Sign Up' Page */}
      <title>
        Grade Manager - Sign Up
      </title>
      
      <main>
        <HomeButton/>
        
        <Container width={"w-[480px]"} title={"Sign Up"}>
          <div className="column-5">
            <div className="flex flex-row gap-2">

              {/* First and Last Names Inputs */}
              <input type="text" placeholder="First Name" className="default-input pl-2 pr-2"/>

              <input type="text" placeholder="Last Name" className="default-input pl-2 pr-2"/>
            </div>

            {/* Email Input */}
            <input type="email" placeholder="Email" className="default-input pl-2 pr-2"/>

            {/* Password Input */}
            <input type="password" placeholder="Password" className="default-input pl-2 pr-2"/>

            {/* Redirect to 'Sign In' Page */}
            <div className="flex flex-row justify-center items-center gap-2">
              Already Have an Account?
              <Link href="/student/signin" className="default-underlined-button">
                Sign In
              </Link>
            </div>

            {/* Button to Sign Up */}
            <button className="default-button">
              Sign Up
            </button>
          </div>
        </Container>
      </main>
    </div>
  );
}