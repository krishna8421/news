export interface IArticle {
  editor_uid: string; // Editor's UID
  headline: string; // Article headline
  description: string; // Article description
  img_url: string[]; // Article image collection URL from fireStore
  content: string; // The content of the article in json format
  created_at: string; // Date the article was created
  liked_by: string[]; // Array of IDs of users who liked the article
  tags: string[]; // Array of tags for the article
}
