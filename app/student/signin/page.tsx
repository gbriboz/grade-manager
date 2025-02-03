"use client";

import HomeButton from "@/components/buttons/homebutton";
import Container from "@/components/container/container";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div>
      
      {/* Student 'Sign In' Page */}
      <title>
        Grade Manager - Sign In
      </title>

      <main>
        <HomeButton/>
        
        <Container width={"w-[480px]"} title={"Sign In"}>
          <div className="flex flex-col gap-5">
            
            {/* Email Input */}
            <input type="email" placeholder="Email" className="default-input pl-2 pr-2"/>

            {/* Password Input */}
            <input type="password" placeholder="Password" className="default-input pl-2 pr-2"/>

            {/* Redirect to 'Sign Up' Page */}
            <div className="flex flex-row justify-center items-center gap-2">
              Do Not Have an Account?
              <Link href="/student/signup" className="default-underlined-button">
                Sign Up
              </Link>
            </div>

            {/* Button to Sign In */}
            <button className="default-button">
              Sign In
            </button>
          </div>
        </Container>
      </main>
    </div>
  );
}