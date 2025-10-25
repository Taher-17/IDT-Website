import { contactEmail, externalAppsURL } from "../data/constants";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-1xl text-center px-4 py-16">
      <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Innovative iOS Apps
        <br />
        and Solutions
      </h1>
      <p className="mt-8 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
        We design and build high-quality iOS apps and digital solutions that{" "}
        <br />
        empower businesses and users alike with the latest technology and AI
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        {/* Primary Button */}
        <a
          href="/apps"
          className="w-50 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-md ring-1 ring-inset ring-blue-300/30 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-200 bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-400"
        >
          Explore Our Apps
        </a>

        {/* Secondary Button */}
        <a
          href={`mailto:${contactEmail}`}
          className="w-50 rounded-lg px-6 py-3 text-sm font-semibold text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-200 bg-white dark:bg-gray-800 dark:text-white dark:ring-white/20 dark:hover:bg-gray-700"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
