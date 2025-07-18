import { NextApiRequest, NextApiResponse } from "next";
import { PASSWORD, USERNAME } from "@/constants/user.constants";
import { withCors, errorResponse, successResponse } from "@/utils/apiResponse.util";

export default withCors(function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method !== "POST") {
    return res.status(405).json(errorResponse("Method not allowed"));
  }

  const { username, password } = req.body;

  if (username !== USERNAME || password !== PASSWORD) {
    return res.status(401).json(errorResponse("Invalid credentials"));
  }

  const token = "TOKEN_HERE";

  res.setHeader("Set-Cookie", `token=${token}; Path=/; HttpOnly`);

  return res.status(200).json(successResponse({token: token}))
});
