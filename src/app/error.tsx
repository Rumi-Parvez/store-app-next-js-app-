"use client";

import { useEffect } from "react";
import Link from "next/link";

import {
  FaExclamationTriangle,
  FaHome,
  FaRedo,
} from "react-icons/fa";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

const ErrorPage = ({
  error,
  reset,
}: ErrorPageProps) => {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-12">

      <div className="text-center max-w-xl">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="bg-error/10 p-6 rounded-full">
            <FaExclamationTriangle className="text-error text-5xl" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mt-6">
          Something Went Wrong
        </h1>

        {/* Description */}
        <p className="text-base-content/60 mt-4 leading-7">
          We couldn`t complete your request right now.
          Please try again or return to the home page.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">

          <button
            onClick={() => reset()}
            className="btn btn-primary"
          >
            <FaRedo />
            Try Again
          </button>

          <Link
            href="/"
            className="btn btn-outline"
          >
            <FaHome />
            Go Home
          </Link>

        </div>

      </div>

    </main>
  );
};

export default ErrorPage;