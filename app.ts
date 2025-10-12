export interface AppItem {
  id: string;
  path: string;
  title: string;
  subtitle: string;
  description: string;
  iconURL: string;
  heroURL: string;
  linkURL: string;
}

export const apps: AppItem[] = [
  {
    id: "polaroidai",
    path: "PolaroidAI",
    title: "Polaroid AI",
    subtitle:
      "Create polaroid-style images with friends, family or celebrities",
    description:
      "Polaroid AI - Create Custom Polaroids with Anyone Turn memories into timeless keepsakes with Polaroid AI. Whether it's you, your friends, or even your favorite celebrities, bring moments to life in the iconic polaroid style.",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Polaroid-AI/large",
    heroURL: "/images/featured/polaroid-ai.jpg",
    linkURL: "https://apps.apple.com/app/id6448311065",
  },
];
