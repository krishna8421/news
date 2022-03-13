import { db } from "@firebase/server";

/**
 *
 * Check if the user has editor rights
 *
 * @param {string} userId - The user id
 * @returns {Promise<boolean>} - Returns if the user has editor rights
 *
 */
export const isEditor = async (userId: string): Promise<boolean> => {
  let doc;
  try {
    /**
     * Get the user document
     */
    doc = await db.collection("users").doc(userId).get();
  } catch {
    /**
     * If any error occurs, return false
     */
    return false;
  }
  const user = doc.data();
  /**
   * If the user is found, return the editor status
   */
  if (user) {
    return user.editor;
  }
  /**
   * If the user is not found, return false
   */
  return false;
};
