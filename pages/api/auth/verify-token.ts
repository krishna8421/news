// import { adminAuth } from "@lib/firebase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function verifyToken(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    if (!req.body.token) {
      return res.status(400).send("No token provided");
    }
    // const token: string = req.body.token;
    // try {
    //   await adminAuth.verifyIdToken(token);
    //   return res.status(200).send("Token is valid");
    // } catch (e: any) {
    //   res.status(400).send("Token is invalid");
    // }
  } else {
    res.status(400).send("Method not allowed");
  }
}
