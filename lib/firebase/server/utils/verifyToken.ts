import { auth } from "@firebase/server";
import { DecodedIdToken } from "firebase-admin/auth";

/**
 *
 * Verify Firebase auth token
 *
 * @param token - Client side token
 * @returns {Promise<DecodedIdToken>} - User data
 * @throws {Error} - If token is invalid
 *
 */
export async function verifyToken(token: string): Promise<DecodedIdToken> {
  try {
    /**
     * Verify token
     */
    return await auth.verifyIdToken(token, true);
  } catch (error: any) {
    /**
     * Throw Error If the token is invalid
     */
    throw new Error(error.message.split(".")[0]);
  }
}
