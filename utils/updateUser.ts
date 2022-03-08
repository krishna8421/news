import { db } from "@lib/firebase/server";

/**
 * Updates a user in the database
 */
export const updateUser = {
  article: {
    /**
     * Updates the articles array of a user
     *
     * @param {string} articleID - The articleID to add
     * @param {string} uid - UID of the user
     *
     */
    add: async (articleID: string, uid: string) => {
      try {
        const doc = await db.collection("users").doc(uid);
        const oldArr = (await doc.get()).data()?.article;
        if (!oldArr) {
          await doc.set({
            article: [articleID],
          });
        } else {
          /**
           * Filter out duplicates
           */
          const newSet = new Set([...oldArr, articleID]);
          const newArr = Array.from(newSet);
          /**
           * Adds article ID to the user's articles array
           *
           * TODO: Use arrayUnion
           */
          await doc.update({
            article: newArr,
          });
        }
      } catch (error: any) {
        throw new Error(error.message.split(".")[0]);
      }
    },
  },
};
