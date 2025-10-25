"use client";

import Image from "next/image";
import { FeaturedItem } from "../types/FeaturedItem";

interface FeaturedCardProps {
  item: FeaturedItem;
}

export default function FeaturedCard({ item }: FeaturedCardProps) {
  return (
    <a href={item.linkURL} rel="noopener noreferrer">
      <figure
        className="rounded-2xl ring-1 ring-gray-900/10 dark:ring-white/20 p-8 sm:p-10 text-sm sm:text-base transition-shadow duration-300 flex flex-col sm:flex-row sm:items-center gap-6"
        style={{ backgroundColor: "var(--background)" }}
      >
        {/* Left: Text */}
        <div className="flex flex-col sm:flex-1 items-center sm:items-start text-center sm:text-left gap-4 order-1">
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
        <div className="sm:w-1/2 flex justify-center sm:justify-end order-2">
          <div className="overflow-hidden rounded-xl w-full max-w-[300px]">
            <Image
              src={item.heroURL}
              alt={`${item.title} Hero`}
              width={300}
              height={300}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </figure>
    </a>
  );
}
