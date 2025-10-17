"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import type { AppItem } from "@/types/AppItem";

interface Props {
  apps: AppItem[];
}

export default function AppsList({ apps }: Props) {
  const [search, setSearch] = useState("");

  const searchTerm = search.trim().toLowerCase();

  const filteredApps = apps.filter((app) => {
    const title = app.title?.toLowerCase() || "";
    const subtitle = app.subtitle?.toLowerCase() || "";
    return title.includes(searchTerm) || subtitle.includes(searchTerm);
  });
  return (
    <>
      {/* Search Input */}
      <div className="relative mb-6 mt-6">
        <input
          type="text"
          placeholder="Search apps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-96 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          style={{ backgroundColor: "var(--background)" }}
        />
      </div>
      {/* App Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredApps.map((app) => (
          <Link key={app.id} href={`/apps/${app.path}`}>
            <figure
              className="rounded-2xl ring-1 ring-gray-900/10 dark:ring-white/20 p-6 flex flex-col gap-2"
              style={{ backgroundColor: "var(--background)" }}
            >
              {/* Icon + Title/Subtitle Horizontal */}
              <div className="flex items-center gap-4">
                <Image
                  src={app.iconURL}
                  alt={`${app.title} Icon`}
                  width={80}
                  height={80}
                  className="rounded-2xl flex-shrink-0"
                />
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {app.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {app.subtitle}
                  </p>
                </div>
              </div>
            </figure>
          </Link>
        ))}

        {filteredApps.length === 0 && (
          <p className="text-gray-600 dark:text-gray-400 text-center py-8">
            No apps found matching your search.
          </p>
        )}
      </div>
    </>
  );
}
