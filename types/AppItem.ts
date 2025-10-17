import { AppFeature } from "./AppFeature";

export interface AppMetadata {
  title: string;
  description: string;
  category: string;
  aliases?: string[];
}

export interface AppItem {
  id: string;
  path: string;
  title: string;
  subtitle: string;
  description: string;
  iconURL: string;
  heroURL: string;
  linkURL: string;
  categories?: string[];
  tags?: string[];
  features?: AppFeature[];
  metadata: AppMetadata;
}
