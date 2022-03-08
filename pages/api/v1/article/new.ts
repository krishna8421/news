import type { NextApiRequest, NextApiResponse } from "next";
import { verifyToken } from "@utils/verifyToken";
import { DecodedIdToken } from "firebase-admin/auth";
import { isEditor } from "@utils/isEditor";
import { IArticle } from "@interface/Article";
import { createArticle } from "@utils/createArticle";
import { updateUser } from "@utils/updateUser";

/**
 *
 * Create a new article
 * - Only Editors can create articles
 *
 * @api {post} /api/v1/article/new Create a new article
 *
 */
export default async function NewArticle(req: NextApiRequest, res: NextApiResponse) {
  /**
   * Only allow POST requests
   */
  if (req.method !== "POST") {
    return res.status(405).send({
      message: "Method Not Allowed",
    });
  }

  /**
   * Check for the Bearer token in the Authorization header
   */
  if (!req.headers.authorization) {
    return res.status(401).send({
      message: "No Token Provided",
    });
  }

  /**
   * Extract the Bearer token from the Authorization header
   */
  const token: string = req.headers.authorization.split(" ")[1];

  /**
   * Verify the token
   */
  let user: DecodedIdToken;
  try {
    user = await verifyToken(token);
  } catch (error: any) {
    return res.status(401).send({
      message: error.message,
    });
  }

  /**
   * User UID is used as the user ID in the users database
   */
  const { uid } = user;

  /**
   * Check for the content in body
   */
  if (!req.body) {
    return res.status(400).send({
      message: "Content not provided",
    });
  }

  const { headline, description, img_url, content, tags } = req.body;

  const article: IArticle = {
    editor_uid: uid,
    headline,
    description,
    img_url,
    content,
    created_at: new Date().toISOString(),
    liked_by: [],
    tags,
  };

  /**
   * Check if the user is an Editor
   */
  const isUserEditor = await isEditor(uid);

  /**
   * If the user is not an Editor, return an error
   */
  if (!isUserEditor) {
    return res.status(403).send({
      message: "You are not an Editor",
    });
  }

  /**
   * If the user is an Editor, Save the article
   */
  let articleID: string;
  try {
    articleID = await createArticle(article);
  } catch (error: any) {
    return res.status(500).send({
      message: error.message,
    });
  }

  /**
   * Add Article ID to the author's article array
   */
  try {
    await updateUser.article.add(articleID, uid);
  } catch (error: any) {
    return res.status(500).send({
      message: error.message,
    });
  }

  /**
   * If the article was saved successfully
   */
  return res.status(200).send({
    message: "Article Saved",
  });
}
