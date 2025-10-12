export interface AppItem {
  id: string;
  path: string;
  title: string;
  subtitle: string;
  description: string;
  iconURL: string;
  heroURL: string;
  linkURL: string;
  categories?: string[]; // e.g., ['Productivity', 'AI']
  tags?: string[]; // e.g., ['notes', 'organizer', 'task manager']
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
    categories: ["Photography", "AI"],
    tags: [
      "photos",
      "images",
      "AI",
      "polaroid",
      "gemini",
      "celebrity",
      "trend",
    ],
  },
  {
    id: "unblur",
    path: "Unblur",
    title: "Unblur",
    subtitle: "Unblur, restore and improve images",
    description:
      "Unblur - Enhance and Sharpen Your Photos with AI Unblur is an advanced AI-powered photo enhancement app designed to bring clarity and detail back to your blurry images. Whether it's a cherished memory or a professional shot, Unblur helps you restore and enhance your photos effortlessly.",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Unblur/large",
    heroURL:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/93/dc/a4/93dca410-d159-3de9-f23f-a822f97eeb46/Frame_1.png/460x0w.webp",
    linkURL: "https://apps.apple.com/app/id6448311065",
    categories: ["Photography", "AI"],
    tags: ["photos", "images", "AI", "restore", "sharpen", "enhance", "remini"],
  },
];
