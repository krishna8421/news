import { db } from "@firebase/client";
import { doc, updateDoc, increment, arrayRemove } from "firebase/firestore";

/**
 * @description - Like a post and increment the incrementLikeCount count
 * @param articleID
 * @param userID
 */
export default async function decrementLikeCount(articleID: string, userID: string) {
  const articleRef = doc(db, "articles", articleID);
  await updateDoc(articleRef, {
    likes: increment(-1),
    likedBy: arrayRemove(userID),
  });
  console.log(articleID, userID);
  const userRef = doc(db, "users", userID);
  await updateDoc(userRef, {
    likedArticlesCount: increment(-1),
    likedArticles: arrayRemove(articleID),
  });
}
