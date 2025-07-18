import { NextApiRequest, NextApiResponse } from "next";
import { withCors, errorResponse, successResponse } from "@/utils/apiResponse.util";

export default withCors(function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") {
        return res.status(405).json(errorResponse("Method not allowed"));
  }
  
  res.setHeader("Set-Cookie", "token=; Path=/; HttpOnly; Max-Age=0");

  return res.status(200).json(successResponse())
});
