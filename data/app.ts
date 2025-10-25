import { AppFeature } from "@/types/AppFeature";
import { AppItem, AppMetadata } from "@/types/AppItem";

function createAppItem(
  item: Partial<AppItem> & {
    id: string;
    path: string;
    title: string;
    subtitle: string;
    description: string;
    iconURL: string;
    heroURL: string;
    metadata?: AppMetadata;
  }
): AppItem {
  return {
    ...item,
    linkURL: item.linkURL ?? `https://apps.apple.com/app/id${item.id}`,
    categories: item.categories,
    tags: item.tags,
    metadata: item.metadata ?? {
      title: item.title,
      description: item.description,
      category: "Application",
    },
  };
}

function createFeature(title: string, description: string): AppFeature {
  return {
    title: title,
    description: description,
  };
}

export const apps: AppItem[] = [
  createAppItem({
    id: "6752937087",
    path: "PolaroidAI",
    title: "Polaroid AI - Turn Memories Into Timeless Polaroids",
    subtitle:
      "Create Polaroid-Style Images with Friends, Family, or Celebrities",
    description:
      "Polaroid AI is an AI-powered photo app that transforms your photos into classic Polaroid-style keepsakes. Capture friends, family, or even celebrities, and bring moments to life in a timeless instant-photo format.",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Polaroid-AI/large",
    heroURL: "/images/featured/polaroid-ai.jpg",
    categories: ["Photography", "AI"],
    tags: [
      "AI",
      "Polaroid",
      "Photo Editing",
      "Image Enhancement",
      "Instant Photos",
      "Memories",
      "Celebrity Photos",
      "Creative AI",
      "Photo Trends",
      "Meme",
    ],
    features: [
      createFeature(
        "Transform Your Photos Into Classic Polaroids",
        "Polaroid AI recreates the distinctive style, colors, and borders of instant Polaroid photos, giving your images a nostalgic look."
      ),
      createFeature(
        "AI-Powered Customization",
        "Upload any photo — of friends, family, or celebrities — and let our AI generate authentic Polaroid-style images instantly."
      ),
      createFeature(
        "Multiple Styles & Filters",
        "Choose from a variety of Polaroid styles, vintage filters, and modern effects to make your images truly unique."
      ),
      createFeature(
        "Easy to Share and Save",
        "Download your AI-generated Polaroids in high resolution or share directly to social media platforms like Instagram, Threads, or TikTok."
      ),
      createFeature(
        "Perfect for Fun or Keepsakes",
        "Whether it's creating memes, celebrating memories, or making gifts, Polaroid AI makes every photo special."
      ),
    ],
    metadata: {
      title: "Polaroid AI - AI Polaroid Photo Generator | Creative Memories",
      description:
        "Polaroid AI turns your photos into classic Polaroid-style keepsakes using AI. Capture friends, family, or celebrities and create timeless, shareable images instantly.",
      category: "Photography",
      aliases: [
        "ai-polaroid-generator",
        "polaroid-photo-app",
        "polaroid-ai-images",
        "instant-polaroid-photos",
      ],
    },
  }),
  createAppItem({
    id: "6752533857",
    path: "Unblur",
    title: "Unblur – AI Photo Enhancer",
    subtitle: "Restore, Sharpen, and Enhance Your Images",
    description:
      "Unblur is an AI-powered photo enhancer that restores clarity, sharpens details, and improves image quality instantly. Perfect for old photos, professional shots, or everyday memories.",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Unblur/large",
    heroURL:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/93/dc/a4/93dca410-d159-3de9-f23f-a822f97eeb46/Frame_1.png/460x0w.webp",
    categories: ["Photography", "AI"],
    tags: [
      "AI",
      "photo enhancement",
      "image restoration",
      "sharpen",
      "Unblur",
      "enhance",
      "Remini",
      "photos",
    ],
    features: [
      createFeature(
        "Restore Blurry Photos Instantly",
        "Using advanced AI, Unblur brings your old, blurry, or low-quality photos back to life with enhanced clarity and detail."
      ),
      createFeature(
        "Sharpen and Enhance Images",
        "Improve the sharpness, texture, and quality of any photo — perfect for social media, work, or personal memories."
      ),
      createFeature(
        "AI-Powered Smart Enhancement",
        "Unblur intelligently detects areas that need improvement, preserving natural details while removing blur or noise."
      ),
      createFeature(
        "Easy and Fast",
        "Simply upload a photo and let Unblur do the work — no manual editing or technical skills required."
      ),
      createFeature(
        "Perfect for Professionals and Memories",
        "Enhance product shots, professional images, or cherished personal photos effortlessly with AI technology."
      ),
    ],
    metadata: {
      title: "Unblur – AI Photo Enhancer | Restore, Sharpen & Enhance Images",
      description:
        "Unblur is an AI-powered app that restores clarity, sharpens details, and enhances photo quality instantly. Perfect for old, blurry, or low-quality photos, professional shots, and social media images.",
      category: "Photography",
      aliases: [
        "ai-photo-enhancer",
        "photo-restoration",
        "image-enhancer",
        "unblur-images",
        "sharpen-photos",
      ],
    },
  }),
  createAppItem({
    id: "6746662820",
    path: "Optrix",
    title: "AI Headshot Generator for Professional Profiles",
    subtitle: "Trusted by Professionals",
    description:
      "Create professional AI headshots for LinkedIn, resumes, and social media in seconds. Try Optrix - your AI headshot generator.",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Optrix/large",
    heroURL: "/images/featured/optrix.png",
    categories: [],
    tags: [
      "AI",
      "Headshots",
      "Professional Photos",
      "LinkedIn",
      "Profile Picture",
    ],
    features: [
      createFeature(
        "Why Choose Optrix - The Smarter AI Headshot Generator",
        "From LinkedIn profiles to corporate bios, Optrix delivers professional AI headshots that look real, polished, and ready to impress."
      ),
      createFeature(
        "How Optrix Creates Studio-Quality AI Headshots",
        "Upload your selfies, choose your style, and let our AI generate realistic professional portraits — no cameras, studios, or photographers needed."
      ),
      createFeature(
        "Get Realistic AI Headshots in Seconds",
        "Our advanced AI models deliver lifelike lighting, sharp details, and natural facial features — all within minutes."
      ),
      createFeature(
        "Trusted by Thousands of Professionals Worldwide",
        "From entrepreneurs to recruiters, Optrix is the go-to AI headshot generator for creating premium-quality portraits that stand out."
      ),
    ],
    metadata: {
      title:
        "AI Headshot Generator | Professional Headshots in Seconds - Optrix",
      description:
        "Create professional AI headshots for LinkedIn, resumes, and social media in seconds. Try Optrix - your AI headshot generator.",
      category: "PhotographyApplication",
      aliases: ["ai-headshot-generator", "professional-headshots"],
    },
  }),
  createAppItem({
    id: "1625641475",
    path: "SongSwipe",
    title: "SongSwipe – Discover Music with a Swipe",
    subtitle:
      "Swipe to find your next favorite song and build playlists effortlessly",
    description:
      "SongSwipe lets you discover new music instantly with a fun, swipe-based interface. Swipe right to like, swipe left to skip — it’s that simple. Explore trending tracks, hidden gems, and curated playlists personalized to your taste. Whether you’re into pop, rap, indie, or chill vibes, SongSwipe helps you find songs you’ll love and create playlists in seconds.",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.SongSwipe/large",
    heroURL:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f1/21/fb/f121fb18-ec77-e1e0-f669-24de81da49d1/Screenshot_1.png/460x0w.webp",
    categories: ["Music", "AI"],
    tags: [
      "music discovery",
      "AI recommendations",
      "playlist generator",
      "song finder",
      "music app",
      "spotify alternative",
      "song swiping",
      "discover new artists",
    ],
    features: [
      createFeature(
        "Swipe to Discover",
        "Find songs that match your taste — swipe right to save or left to skip, just like your favorite dating apps."
      ),
      createFeature(
        "AI Music Recommendations",
        "Smart algorithms learn what you love and curate personalized song suggestions every time you open the app."
      ),
      createFeature(
        "Instant Playlist Builder",
        "Automatically create playlists from the songs you've liked with one tap — perfect for Spotify or Apple Music."
      ),
      createFeature(
        "Explore Trending Tracks",
        "Stay ahead of the curve with daily trending picks and hidden indie gems."
      ),
      createFeature(
        "Share Your Vibes",
        "Easily share playlists and your top discoveries with friends directly from the app."
      ),
    ],
    metadata: {
      title: "SongSwipe - AI Music Discovery & Playlist Generator",
      description:
        "Discover new music effortlessly with SongSwipe. Swipe to like, skip, and build playlists from personalized AI recommendations. Your next favorite song is just a swipe away.",
      category: "Music",
      aliases: [
        "ai-music-app",
        "music-discovery",
        "playlist-maker",
        "song-finder",
        "spotify-song-finder",
        "music-recommendation-app",
      ],
    },
  }),
  createAppItem({
    id: "6744641144",
    path: "JustBookIt",
    title: "JustBookIt – AI Travel Planner & Trip Generator",
    subtitle: "Plan your dream holiday in seconds with AI",
    description:
      "JustBookIt is your AI-powered travel planner that instantly creates personalized trips, itineraries, and destinations based on your vibe. Whether you want a relaxing beach escape, an adventurous mountain getaway, or a romantic city break — JustBookIt finds and plans it all for you in seconds.",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.JustBookIt/large",
    heroURL:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/72/61/27/7261275f-337e-4c6b-682a-c18c42fe75cb/Frame_22.png/460x0w.webp",
    categories: ["Travel", "AI"],
    tags: [
      "AI Travel",
      "Trip Planner",
      "AI Itinerary",
      "Holiday Generator",
      "Travel Assistant",
      "AI Vacation Planner",
      "Weekend Getaway",
      "Smart Travel",
      "Vibe Travel",
    ],
    features: [
      createFeature(
        "Instant AI Trip Planning",
        "Tell JustBookIt your vibe — relaxing, adventurous, cultural, or romantic — and get a full travel plan in seconds."
      ),
      createFeature(
        "Personalized Destination Picks",
        "Discover hidden gems and trending destinations perfectly matched to your preferences and budget."
      ),
      createFeature(
        "Smart AI Itineraries",
        "Get daily schedules, restaurant suggestions, activities, and travel tips — all generated by AI and customizable by you."
      ),
      createFeature(
        "All-in-One Travel Assistant",
        "From packing tips to visa info, JustBookIt handles every part of your trip so you can focus on the fun."
      ),
      createFeature(
        "Share & Book Easily",
        "Save, share, or instantly book your dream holiday directly from your AI-generated plan."
      ),
    ],
    metadata: {
      title: "JustBookIt - AI Travel Planner & Vacation Generator",
      description:
        "Plan your dream holiday in seconds with JustBookIt. Discover personalized AI travel itineraries, destination ideas, and vacation plans based on your vibe and preferences.",
      category: "Travel",
      aliases: [
        "ai-travel-planner",
        "ai-trip-generator",
        "travel-ai",
        "vacation-planner",
        "smart-travel-app",
      ],
    },
  }),
  createAppItem({
    id: "6477750417",
    path: "AILogo",
    title: "AI Logo - Logo Maker & Brand Designer",
    subtitle: "Create stunning professional logos in seconds with AI",
    description:
      "AI Logo helps you design unique, professional-quality logos instantly using the power of artificial intelligence. Whether you’re launching a startup, building a personal brand, or rebranding your business, AI Logo makes logo creation effortless. Generate unlimited logo ideas, customize colors, fonts, and layouts — no design skills required.",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.AI-Logo/large",
    heroURL: "/images/featured/ai-logo.png",
    categories: ["Design", "AI", "Business"],
    tags: [
      "logo maker",
      "ai logo generator",
      "brand design",
      "business logo",
      "startup branding",
      "graphic design",
      "logo creator",
      "branding tool",
    ],
    features: [
      createFeature(
        "AI-Powered Logo Generation",
        "Get unique logo designs instantly — powered by advanced AI trained on thousands of professional logo styles."
      ),
      createFeature(
        "Customizable Designs",
        "Edit colors, fonts, icons, and layouts to perfectly match your brand's identity — all inside the app."
      ),
      createFeature(
        "Instant Branding Kit",
        "Export your logo with matching color palettes and social media assets for a complete brand look."
      ),
      createFeature(
        "Perfect for Startups & Creators",
        "Save time and money with a fast, professional, and affordable alternative to hiring a designer."
      ),
      createFeature(
        "High-Resolution Exports",
        "Download logos in HD formats suitable for websites, print, and social media profiles."
      ),
    ],
    metadata: {
      title: "AI Logo - AI Logo Maker & Brand Design Generator",
      description:
        "Design a professional logo in seconds with AI Logo. Generate, customize, and export beautiful logos instantly — perfect for startups, creators, and businesses.",
      category: "Design",
      aliases: [
        "ai-logo-generator",
        "ai-logo-maker",
        "logo-design-app",
        "brand-logo-creator",
        "startup-logo-generator",
      ],
    },
  }),
  createAppItem({
    id: "6443593416",
    path: "ActivityBuilder",
    title: "ActivityBuilder",
    subtitle: "Customise your Lock Screen",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.ActivityBuilder/large",
    heroURL:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/de/ae/d2/deaed26a-b778-365d-1fe1-68438b4b9b0b/934a4b22-9252-4d14-b7e4-aa55bfdbb5d4_17_opaque.png/460x0w.png",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1531442783",
    path: "MusicView",
    title: "MusicView",
    subtitle: "Spotify and Music Widget",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.MusicView/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6450147372",
    path: "MusicViewPro",
    title: "MusicView Pro",
    subtitle: "Interactive Music Widgets",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.MusicView-Pro/large",
    heroURL:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/5e/6e/be/5e6ebe77-d6f9-7ff3-2833-396da1dda3a7/9f91232d-ac68-47b5-9d95-7765c8728641_1_opaque.png/460x0w.webp",
    categories: [],
    tags: [],
    features: [],
  }),
  createAppItem({
    id: "6459730205",
    path: "ControlBar",
    title: "ControlBar",
    subtitle: "Music Widget Control & Actions",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.ControlBar/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1601556396",
    path: "FloatingPlayer",
    title: "FloatingPlayer",
    subtitle: "Picture in Picture for Music",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.FloatingPlayer/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1533776006",
    path: "SocialStats",
    title: "Social Stats Widget",
    subtitle: "Social Media Profile Widgets",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.FollowersWidget/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1631920238",
    path: "LockLauncher",
    title: "LockLauncher",
    subtitle: "Lock Screen Widgets & Launcher",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.LockLauncher/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1511127976",
    path: "RCReporting",
    title: "RCReporting",
    subtitle: "RevenueCat Client & Dashboard",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.rcreporting/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1588593096",
    path: "TodayTab",
    title: "TodayTab",
    subtitle: "Customise your Safari Start Page",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.TodayTab/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1614122341",
    path: "SongList",
    title: "SongList",
    subtitle: "Listen Later - Songs & Albums",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.SongList/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1584323787",
    path: "Applytics",
    title: "Applytics",
    subtitle: "App Sales & Metrics Reporting",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.applytics/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1575124462",
    path: "ContactsBot",
    title: "ContactsBot",
    subtitle: "The powerful contacts app",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.ContactsBot/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1548808907",
    path: "SecurityKit",
    title: "SecurityKit",
    subtitle: "Security tools for developers",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.SecurityKit/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1566114294",
    path: "StrengthBot",
    title: "StrengthBot",
    subtitle: "Gym Strength Tracker & Manager",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.StrengthBot/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1537880763",
    path: "WallWidgets",
    title: "- (Dash) Transparent",
    subtitle: "Transparent widgets & overlays",
    description: "",
    iconURL:
      "https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/5a/ee/ea/5aeeeaba-1e23-2548-3c6c-d7e61d30787e/AppIcon-1x_U007emarketing-0-10-0-85-220.png/460x0w.webp",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1471935296",
    path: "ColorBox",
    title: "Color Box",
    subtitle: "A simple fun game",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.ColorBox/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1445374719",
    path: "RaindropWeather",
    title: "Raindrop Weather",
    subtitle: "A simple weather app",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.RaindropWeather/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1441608877",
    path: "AddOne",
    title: "Add One",
    subtitle: "Challenge your concentration",
    description: "",
    iconURL:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/1a/76/fc/1a76fce2-5572-cf63-0d95-9d5e6076a1bd/AppIcon-0-1x_U007emarketing-0-0-85-220-0-7.png/460x0w.webp",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1335515793",
    path: "ColorJump",
    title: "Color Jump!",
    subtitle: "Simple and Addictive!",
    description: "",
    iconURL:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/e0/2c/62/e02c6232-c94d-4d3c-3736-a5e9c9bc7a43/AppIcon-1x_U007emarketing-85-220-0-5.png/460x0w.webp",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1441410830",
    path: "ShadowConnect",
    title: "Shadow Connect",
    subtitle: "A Shadowsocks Client",
    description: "",
    iconURL:
      "https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/57/14/c9/5714c9d5-c35e-5b55-a1b1-9688c9d3701c/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/460x0w.webp",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1439282798",
    path: "NCEAStudy",
    title: "NCEA Study",
    subtitle: "NCEA Past Papers",
    description: "",
    iconURL:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/2c/5f/49/2c5f4956-d833-dc72-47aa-522b23b197f2/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1410669066",
    path: "OpenTunnel",
    title: "OpenTunnel",
    subtitle: "An OpenVPN Client",
    description: "",
    iconURL:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/4e/3d/53/4e3d5325-9624-c565-02d8-fe1d2bef00d9/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-10.png/460x0w.webp",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1338576676",
    path: "iHost",
    title: "iHost - HTML Live",
    subtitle: "An essential for developers",
    description: "",
    iconURL:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/ab/92/d1/ab92d17b-4e5b-0c75-7438-fa4b8aea9e91/AppIcon-1x_U007emarketing-85-220-0-9.png/460x0w.webp",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "1671710414",
    path: "AdView",
    title: "AdView",
    subtitle: "AdMob & AdSense earnings",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.adview/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6447479401",
    path: "SongView",
    title: "SongView",
    subtitle: "Music Live Activities Widget",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.songview/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6448161962",
    path: "IdeaLog",
    title: "IdeaLog",
    subtitle: "Log, organise and manage your ideas",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.IdeaLog/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6447813867",
    path: "HealthBot",
    title: "HealthBot",
    subtitle: "Smart Food Tracking",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.HealthBot/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6472991036",
    path: "AIImage",
    title: "AI Image",
    subtitle: "AI Image Generator",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.AI-Image/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6473685152",
    path: "AIPhotoEnhancer",
    title: "AI Photo Enhancer",
    subtitle: "Create AI Image Variations",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Image-Enhancer/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6473822623",
    path: "AIVoice",
    title: "AI Voice",
    subtitle: "Text to Speech with AI",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.AI-Voice/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6474997090",
    path: "GoalTracker",
    title: "Goal Tracker",
    subtitle: "Track and achieve your goals",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Goal-Tracker/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6476844199",
    path: "AIEmail",
    title: "AI Email",
    subtitle: "Create emails with AI",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.AI-Email/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6477149776",
    path: "GrammarCheck",
    title: "Grammar Check",
    subtitle: "AI Grammar Check",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Grammar-Check/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6477567025",
    path: "QuitVaping",
    title: "Quit Vaping",
    subtitle: "Quit Vaping Now!",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Quit-Vaping/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6478188140",
    path: "AIWriter",
    title: "AI Writer",
    subtitle: "AI Writing Assistant",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.AI-Writer/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6478903277",
    path: "VoiceGenerator",
    title: "Voice Generator",
    subtitle: "AI Powered Voice Generation",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Voice-Generator/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6480380935",
    path: "AIMusic",
    title: "AI Music",
    subtitle: "AI Powered Music Generation",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.AI-Music/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6502046156",
    path: "SongCover",
    title: "SongCover – AI Music Cover Generator",
    subtitle: "Create AI Song Covers in Any Style or Voice",
    description:
      "SongCover lets you generate custom AI song covers with your favorite voices, genres, and artists. Turn any track into a new experience — from rock to pop to lo-fi — all powered by cutting-edge AI voice synthesis.",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Song-Cover/large",
    heroURL:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/42/86/19/42861935-f67f-5d08-4f29-fc010bfc53ef/Screenshot_1.jpg/460x0w.webp",
    categories: ["Music", "AI"],
    tags: [
      "AI Music",
      "Song Cover",
      "AI Singing",
      "Music Generator",
      "Voice Clone",
      "Cover Songs",
      "AI Artist",
      "Remix",
      "Jammable",
    ],
    features: [
      createFeature(
        "Generate AI Song Covers Instantly",
        "Upload or select a song and let SongCover transform it into a fresh version using AI-generated voices and styles."
      ),
      createFeature(
        "Choose Your Favorite Artist Style",
        "Reimagine your favorite songs in the voice or style of different artists — from pop icons to rock legends."
      ),
      createFeature(
        "AI Voice Customization",
        "Adjust tone, pitch, and expression to create realistic and expressive performances powered by AI."
      ),
      createFeature(
        "Share Your AI Covers",
        "Easily save and share your AI-generated covers on TikTok, Instagram, or with friends."
      ),
      createFeature(
        "Music Creativity, Redefined",
        "Perfect for musicians, creators, and fans who want to explore how AI can remix, reinterpret, and personalize music."
      ),
    ],
    metadata: {
      title:
        "SongCover - AI Music Cover Generator | Create AI Song Covers Instantly",
      description:
        "Create AI song covers in any voice or genre with SongCover. Generate, customize, and share AI-powered covers of your favorite songs instantly.",
      category: "Music",
      aliases: [
        "ai-song-cover-generator",
        "ai-music-cover",
        "ai-singing-app",
        "voice-clone-music",
        "music-cover-ai",
      ],
    },
  }),
  createAppItem({
    id: "6714471349",
    path: "CashGrid",
    title: "Cash Grid",
    subtitle: "A new way to track your savings",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.CashGrid/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6737711207",
    path: "AIDesign",
    title: "AI Design",
    subtitle: "Your personal AI Designer",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.AI-Design/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6739771702",
    path: "DogIdentifier",
    title: "Dog Identifier",
    subtitle: "Identify dogs in just a tap",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Dog-Identifier/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6739974423",
    path: "CatIdentifier",
    title: "Cat Identifier",
    subtitle: "Identify cats in just a tap",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Cat-Identifier/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6741510597",
    path: "InteriorDesign",
    title: "Interior Design",
    subtitle: "Design your dream home",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Interior-Design/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6743953933",
    path: "ToonKit",
    title: "Cartoon Image: ToonKit",
    subtitle: "Cartoonify any image",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Cartoon-Image/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6746059887",
    path: "VibeShift",
    title: "VibeShift",
    subtitle: "Switch up your vibe",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.VibeShift/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6746120652",
    path: "VidSum",
    title: "VidSum",
    subtitle: "Summarize Videos",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.VidSum/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6749494534",
    path: "CampaignManager",
    title: "Campaign Manager",
    subtitle: "Manage your App Ad Campaigns",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Campaign-Manager/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
  createAppItem({
    id: "6749884844",
    path: "BeardFilter",
    title: "Beard Filter",
    subtitle: "Customize your look",
    description: "",
    iconURL:
      "https://www.appatar.io/com.innovativedigitaltechnologies.Beard-Filter/large",
    heroURL: "",
    categories: [],
    tags: [],
  }),
];
