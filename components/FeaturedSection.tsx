import FeaturedCard from "@/components/FeaturedCard";
import { featuredItems } from "@/featured";

export default function FeaturedSection() {
  return (
    <div className="bg-gray-100 dark:bg-black">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <section className="max-w-7xl mx-auto flex flex-col gap-8 py-16">
          <div>
            <h1 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Featured
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Our recently featured projects
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {featuredItems.map((item) => (
              <FeaturedCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
