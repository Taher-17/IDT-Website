export interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  iconURL: string;
  heroURL: string;
  linkURL: string;
}

export const featuredItems: FeaturedItem[] = [
  {
    id: "polaroidai",
    title: "Polaroid AI",
    description:
      "Create polaroid-style images with friends, family or celebrities",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Polaroid-AI/large",
    heroURL: "/images/featured/polaroid-ai.jpg",
    linkURL: "https://apps.apple.com/app/id6448311065",
  },
];
