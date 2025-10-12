export const metadata = {
  title: "Innovative Digital Technologies - About",
  description:
    "About Innovative Digital Technologies, a New Zealand-based software solutions and iOS development company specializing in apps for Apple platforms, App Store Optimization, Mobile Security, and more.",
};

function AboutContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 flex flex-col gap-8">
        {/* About Us */}
        <div className="gap-12">
          <h1 className="text-3xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            About
          </h1>
          <p className="text-m sm:text-m text-gray-600 dark:text-gray-300 leading-relaxed">
            Innovative Digital Technologies is a New Zealand-based software
            solutions and iOS development company.
          </p>
        </div>

        {/* Apps Section */}
        <div className="gap-4">
          <p className="text-m sm:text-m text-gray-600 dark:text-gray-300 leading-relaxed">
            We specialise in apps for Apple platforms and have designed,
            developed, and released a variety of apps, tools, and software
            across multiple categories, including AI, Productivity, Utilities,
            Developer Tools, and Music.
          </p>
        </div>

        <div className="gap-4">
          <p className="text-m sm:text-m text-gray-600 dark:text-gray-300 leading-relaxed">
            Beyond app development, we are experienced in App Store
            Optimization, Mobile Security, Apple Ads, and Marketing.
          </p>
        </div>

        {/* Contact Section */}
        <div className="gap-4">
          <p className="text-m sm:text-m text-gray-600 dark:text-gray-300 leading-relaxed">
            For inquiries, questions, or collaboration opportunities, please
            contact us via email. We look forward to connecting with you!
          </p>
        </div>
      </section>
    </div>
  );
}

export default function AboutPage() {
  return <AboutContent />;
}
