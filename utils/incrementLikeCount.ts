import { db } from "@firebase/client";
import { doc, updateDoc, arrayUnion, increment } from "firebase/firestore";

/**
 * @description - Like a post and increment the incrementLikeCount count
 * @param articleID
 * @param userID
 */
export default async function incrementLikeCount(articleID: string, userID: string) {
  const articleRef = doc(db, "articles", articleID);
  await updateDoc(articleRef, {
    likes: increment(1),
    likedBy: arrayUnion(userID),
  });
  console.log(articleID, userID);
}
