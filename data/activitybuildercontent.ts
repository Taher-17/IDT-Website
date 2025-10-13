import {
  ActivityBuilderConfig,
  Offer,
  BannerOption,
  PaywallConfig,
  AdConfig,
} from "@/types/ActivityBuilderConfig";

export const AIWriterOffer: Offer = {
  identifier: "AIWriterAppNewCover",
  offeringType: null,
  customOfferingID: null,
  title: "Undetectable AI Writer",
  message: "Perfect for essays, letters and assignments!",
  proIncluded: true,
  actionURL: "https://apps.apple.com/us/app/id6478188140",
  imageURL:
    "https://www.appatar.io/com.innovativedigitaltechnologies.AI-Writer/large",
  buttonText: "Download for FREE",
};

export const AILogoOffer: Offer = {
  identifier: "AILogoApp",
  offeringType: null,
  customOfferingID: null,
  title: "AI Logo Generator",
  message: "Generate Logos & Icons with AI",
  proIncluded: true,
  actionURL:
    "https://apps.apple.com/us/app/ai-logo-generator-logo-maker/id6477750417",
  imageURL:
    "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/e7/27/a7/e727a74e-fda7-88ef-2abd-b4bd2221dc2c/AppIcon-1x_U007ephone-0-85-220-0.png/460x0w.webp",
  buttonText: "Download for Free",
};

export const DefaultPaywallConfig: PaywallConfig = {
  offeringType: "CURRENT",
  customOfferingID: null,
  offer: null,
};

const createBanner = (
  title: string,
  subtitle: string,
  imageURL: string,
  actionURL: string,
  isEnabled: boolean = true
): BannerOption => ({
  isEnabled,
  title,
  subtitle,
  imageURL,
  actionURL,
});

const banners: BannerOption[] = [
  createBanner(
    "MusicView Pro",
    "Interactive Music Widgets",
    "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/1d/8d/da/1d8ddad1-fbfb-8990-022b-1f34cba21cd2/AppIcon-1x_U007epad-0-85-220-0.png/460x0w.png",
    "https://apple.co/44XLv4l"
  ),
  createBanner(
    "AI Logo Generator",
    "Generate logos with AI",
    "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/e7/27/a7/e727a74e-fda7-88ef-2abd-b4bd2221dc2c/AppIcon-1x_U007ephone-0-85-220-0.png/460x0w.webp",
    "https://apps.apple.com/us/app/ai-logo-generator-logo-maker/id6477750417"
  ),
  createBanner(
    "AI Writer",
    "Write essays with AI",
    "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/97/8d/29/978d29f5-14d9-f09b-0185-6aa849d07f54/AppIcon-1x_U007ephone-0-85-220-0.png/460x0w.webp",
    "https://apps.apple.com/us/app/ai-writer-ai-writing-writebot/id6478188140"
  ),
  createBanner(
    "ControlBar",
    "Music Menu Bar",
    "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/d4/88/e3/d488e38e-e24e-4871-ca2c-cc4fed4f830e/AppIcon-1x_U007ephone-0-85-220-0.png/460x0w.webp",
    "https://apple.co/3EJQQ4z"
  ),
  createBanner(
    "SongSwipe",
    "Discover New Music",
    "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/f7/8e/03/f78e0301-18a9-827e-3470-7139236d9d28/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp",
    "https://apple.co/3mAjdw5"
  ),
  createBanner(
    "Social Stats Widget",
    "Social Media Profile Widgets",
    "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/38/b1/f1/38b1f10e-07e2-bd38-cc40-934d2cde8377/AppIcon-1x_U007emarketing-0-10-0-85-220.png/460x0w.webp",
    "https://apple.co/3J5CP2T"
  ),
  createBanner(
    "AI Song Cover",
    "Create a cover for any song!",
    "https://appatar.io/com.innovativedigitaltechnologies.Song-Cover/large",
    "https://apps.apple.com/us/app/ai-song-cover-music-generator/id6502046156"
  ),
  createBanner(
    "AI Interior Design",
    "Design your dream home",
    "https://www.appatar.io/com.innovativedigitaltechnologies.Interior-Design/large",
    "https://apps.apple.com/app/id6741510597"
  ),
  createBanner(
    "JustBookIt",
    "AI Powered Travel Planner",
    "https://www.appatar.io/com.innovativedigitaltechnologies.JustBookIt/large",
    "https://apps.apple.com/us/app/travel-planner-justbookit/id6744641144"
  ),
  createBanner(
    "FloatingPlayer",
    "Picture in Picture music player for iOS",
    "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/0b/42/c5/0b42c52e-5629-8961-e3e5-c53486082771/AppIcon-1x_U007emarketing-0-10-0-85-220.png/460x0w.png",
    "https://apple.co/3WMe00A"
  ),
];

export const DefaultAdConfig: AdConfig = {
  homeBannerEnabled: true,
  detailBannerEnabled: true,
  activityBannerEnabled: true,
  successBannerEnabled: true,
  favouritesBannerEnabled: true,
  openAdEnabled: true,
  startInterstitialEnabled: true,
  openInterstitialEnabled: true,
  preferInterstitialToOpen: true,
  useFallbackBannerOptionsOnly: false,
  showRewardedOnStartOption: true,
  useVideoForRewarded: true,
  fallbackBannerOptions: banners,
};
