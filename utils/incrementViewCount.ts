import { db } from "@firebase/client";
import { doc, updateDoc, increment } from "firebase/firestore";

/**
 * @description - Like a post and increment the incrementLikeCount count
 * @param articleID
 * @param userID
 */
export default async function incrementViewCount(articleID: string, userID: string) {
  const articleRef = doc(db, "articles", articleID);
  await updateDoc(articleRef, {
    viewedBy: increment(1),
  });
  console.log(articleID, userID);
}
