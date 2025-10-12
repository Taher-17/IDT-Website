import { externalAppsURL } from "@/constants";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";

function AboutContent() {
  return (
    <div className="bg-gray-100 dark:bg-black">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col">
        {/* About Us */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Innovative Digital Technologies is a New Zealand-based software
            solutions and iOS development company. We focus on creating
            high-quality, innovative apps and digital products that empower
            businesses and users alike.
          </p>
        </div>

        {/* Apps Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-8">
            Our Apps
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            We specialise in iOS apps and have designed, developed, and released
            a variety of apps, from productivity and utilities to music and
            developer tools. Explore our full catalog and discover what we have
            to offer.
          </p>

          <a
            href={externalAppsURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue sm:text-xl leading-relaxed"
          >
            Download Our Apps
          </a>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-4 mt-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Reach out to us via email for support, enquiries, or to discuss new
            app ideas.
          </p>
        </div>
      </section>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}
