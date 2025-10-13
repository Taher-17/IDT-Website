export interface AdConfig {
  homeBannerEnabled: boolean;
  detailBannerEnabled: boolean;
  activityBannerEnabled: boolean;
  successBannerEnabled: boolean;
  favouritesBannerEnabled: boolean;
  openAdEnabled: boolean;
  startInterstitialEnabled: boolean;
  openInterstitialEnabled: boolean;
  preferInterstitialToOpen: boolean;
  useFallbackBannerOptionsOnly: boolean;
  showRewardedOnStartOption: boolean;
  useVideoForRewarded: boolean;
  fallbackBannerOptions: BannerOption[];
}

export interface Offer {
  identifier: string;
  offeringType: string | null;
  customOfferingID: string | null;
  title: string;
  message: string;
  proIncluded: boolean;
  actionURL: string;
  imageURL?: string;
  buttonText: string;
}

export interface PaywallConfig {
  offeringType: string;
  customOfferingID: string | null;
  offer: Offer | null;
}

export interface BannerOption {
  isEnabled: boolean;
  title: string;
  subtitle: string;
  imageURL: string;
  actionURL: string;
}

export interface ActivityBuilderConfig {
  adConfig: AdConfig;
  paywallConfig: PaywallConfig;
}
