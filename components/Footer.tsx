"use client";

import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { contactEmail, tiktokURL, instagramURL } from "@/data/constants";

export default function Footer() {
  return (
    <footer className="py-8 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand / Text */}
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          © {new Date().getFullYear()} Innovative Digital Technologies. All
          rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          <Link
            href={`${tiktokURL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            <FaTiktok size={20} />
          </Link>

          <Link
            href={`${instagramURL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition"
          >
            <FaInstagram size={20} />
          </Link>

          <a
            href={`mailto:${contactEmail}`}
            className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
