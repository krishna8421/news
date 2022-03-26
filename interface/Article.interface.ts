export type ICategory =
  | "recommended"
  | "business"
  | "entertainment"
  | "technology"
  | "politics"
  | "sports"
  | "entrepreneur"
  | null;

export type IType = null | "hops" | "tcl" | "community" | "influencers";

export interface IArticle {
  editor_uid: string; // Editor's UID
  headline: string; // Article headline
  sub_headline: string; // Article sub headline
  description: string; // Article description
  normal_img_url: string[]; // Article image collection URL from fireStore
  prime_time_img_url: string; // Article prime time
  lime_light_img_url: string; // Article lime light
  content: string; // The content of the article in json format
  created_at: string; // Date the article was created
  liked_by: string[]; // Array of IDs of users who liked the article
  tags: string[]; // Array of tags for the article
  category: ICategory; // Category of the article
  type: IType; // Category 2 of the article
  location: {
    // Location of the article
    city: string; // City
    country: string; // Country
    state: string; // State
  };
  min_age: number; // Min age for the article
}
