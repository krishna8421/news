import { db } from "@lib/firebase/server";
import { IArticle } from "@interface/Article";

/**
 *
 * Create a new article and save to database
 *
 * @param {IArticle} article - Article to be created
 * @returns {Promise<string>} - Article ID
 * @throws {Error} - If any error occurs
 *
 */
export const createArticle = async (article: IArticle): Promise<string> => {
  try {
    /**
     * Create a new article
     */
    const articleRef = await db.collection("articles").add(article);
    /**
     * Return article ID
     */
    return articleRef.id;
  } catch (error: any) {
    /**
     * Throw error
     */
    throw new Error(error.message.split(".")[0]);
  }
};
