"use client";

import React from "react";
import Image from "next/image";
import signup from "@/assets/HomeImages/signup.png";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { Twitter } from "lucide-react";
import { signIn } from "next-auth/react";

const page = () => {
  const handleGithubLogin = () => {
    signIn("github", { callbackUrl: "/" });
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };
  return (
    <>
      <div className=" flex ">
        <div className="flex-1 hidden lg:flex items-center justify-center">
          <Image src={signup} alt="Signup Image" />
        </div>
        <div className="flex-1 flex items-center justify-center bg-gray-100">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <div className="mt-8 space-y-6">
              <div className=" border text-center">
                <Button variant={"authorize"} onClick={handleGoogleLogin}>
                  {" "}
                  Continue with Google
                </Button>
              </div>
              <div className="flex justify-center align-center border text-center">
                <Button variant={"authorize"} onClick={handleGithubLogin}>
                  Continue with Github
                </Button>
                <Twitter className=" inline-block " />
              </div>
              <div className="mt-6">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <Link
                        href="/resetPassword"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Button> Sign in</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
