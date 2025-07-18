import { FE_URL } from "@/constants/api.constants";
import { NextApiRequest, NextApiResponse } from "next";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Another way of implementing CORS is via middlware, but i stick with this approach in this case
const corsHeaders = (res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Origin', FE_URL);
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
};

export const withCors = (handler: (req: NextApiRequest, res: NextApiResponse) => void) => {
  return (req: NextApiRequest, res: NextApiResponse) => {
    corsHeaders(res);

  // Handling OPTIONS in case of CORS requests
  if (req.method === 'OPTIONS') return res.status(204).end();

    return handler(req, res);
  };
};

export const successResponse = <T>(data?: T): ApiResponse<T> => ({
  success: true,
  data,
});

export const errorResponse = (message: string): ApiResponse<null> => ({
  success: false,
  error: message,
});
