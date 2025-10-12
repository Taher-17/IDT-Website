"use client";

import { useState } from "react";
import Link from "next/link";
import { contactEmail, externalAppsURL } from "../constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-0 left-0 z-50 w-full py-8">
      <nav className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-2 sm:px-6">
        {/* Brand */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Link
            href="/"
            className="text-xl font-semibold text-gray-900 dark:text-white hover:opacity-80 transition"
            aria-label="Brand"
          >
            Innovative Digital Technologies
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden relative size-9 flex justify-center items-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-gray-800 dark:text-gray-200 hover:opacity-80 focus:outline-none transition"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full sm:flex sm:items-center sm:justify-end sm:w-auto transition-all duration-300`}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:space-x-8">
            <Link
              href={`${externalAppsURL}`}
              className="font-medium text-gray-700 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 transition"
            >
              Apps
            </Link>
            <Link
              href="/about"
              className="font-medium text-gray-700 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 transition"
            >
              About
            </Link>
            {/* <Link
              href="/blog"
              className="font-medium text-gray-700 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 transition"
            >
              Blog
            </Link> */}
            <a
              href={`mailto:${contactEmail}`}
              className="font-medium text-gray-700 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
