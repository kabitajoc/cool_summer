import React from "react";
import Image from "next/image";
import Link from "next/link";

import reset from "@/assets/HomeImages/Reset.png";
import { Button } from "@src/components/ui/button";

const ResetPassword = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Reset Your Password
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter your email and we'll send you a link to reset your password.
              Please check it.
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
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
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
              <p className="mt-2 text-sm text-red-600" id="email-error">
                We can not find your email.
              </p>
            </div>
            <div>
              <Button>Send</Button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <Link
              href="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden lg:flex items-center justify-center bg-white">
        <div className="w-full h-full flex items-center justify-center">
          <Image src={reset} alt="Reset Password Image" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
