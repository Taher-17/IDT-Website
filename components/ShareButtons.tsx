"use client";

import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaLink,
} from "react-icons/fa";
import { useState } from "react";

interface ShareButtonsProps {
  url: string;
  title?: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex gap-4 items-center mt-4">
      {/* Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title || ""
        )}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600 transition"
        aria-label="Share on Twitter"
      >
        <FaTwitter size={20} />
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-800 transition"
        aria-label="Share on Facebook"
      >
        <FaFacebookF size={20} />
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          url
        )}&title=${encodeURIComponent(title || "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 transition"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedinIn size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
          title || ""
        )} ${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-600 transition"
        aria-label="Share on WhatsApp"
      >
        <FaWhatsapp size={20} />
      </a>

      {/* Copy link */}
      <button
        onClick={handleCopy}
        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
        aria-label="Copy link"
      >
        <FaLink size={20} />
      </button>

      {copied && <span className="text-sm text-green-500 ml-2">Copied!</span>}
    </div>
  );
}
