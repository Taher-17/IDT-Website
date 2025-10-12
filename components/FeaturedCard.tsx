"use client";

import Image from "next/image";
import { FeaturedItem } from "../featured";

interface FeaturedCardProps {
  item: FeaturedItem;
}

export default function FeaturedCard({ item }: FeaturedCardProps) {
  return (
    <a href={item.linkURL} target="_blank" rel="noopener noreferrer">
      <figure
        className="rounded-2xl ring-1 ring-gray-900/10 dark:ring-white/20 p-8 sm:p-10 text-sm sm:text-base transition-shadow duration-300 flex flex-col sm:flex-row gap-6"
        style={{ backgroundColor: "var(--background)" }}
      >
        {/* Left: App Icon and Text */}
        <div className="flex flex-col sm:w-1/3 items-center sm:items-start text-center sm:text-left gap-4">
          <Image
            src={item.iconURL}
            alt={`${item.title} Icon`}
            width={64}
            height={64}
            className="rounded-xl"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="sm:w-2/3 relative">
          <Image
            src={item.heroURL}
            alt={`${item.title} Hero`}
            width={1920} // optional: limit max width
            height={1080} // optional: limit max height
            className="object-contain w-full h-auto rounded-xl"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </figure>
    </a>
  );
}
