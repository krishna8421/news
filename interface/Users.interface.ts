export interface IUsers {
  user_uid: string; // User UID from Firebase Auth
  name: string; // User name
  email: string; // User email
  created_at: string; // User creation date
  ip_address: string[]; // User IP addresses
  preferences_tag: string[]; // User preferences tags
  editor: boolean; // Editor role
  article: string[]; // User posts IDs
  liked_article: string[]; // User liked posts IDs array
}
