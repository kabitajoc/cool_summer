"use client";
import { Button } from "../components/ui/button";
import { signIn } from "next-auth/react";

import Section from "./_section/page";

export default function Home() {
  return (
    <>
     
      <Section />
    </>
    // <div className=" flex justify-center items-center">
    //   <Button variant="link" onClick={handleGithubLogin}>
    //     Login with Github
    //   </Button>

    //   <Button onClick={handleGoogleLogin}>Login with Google</Button>
    // </div>
  );
}
