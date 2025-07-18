import { UserData } from "@/constants/user.constants";
import { usersData } from "@/data/user.data";
import { NextApiRequest, NextApiResponse } from "next";
import { withCors, errorResponse, successResponse } from "@/utils/apiResponse.util";

export default withCors(function handler(req: NextApiRequest, res: NextApiResponse) {

   const filteredUserData: UserData[] = []

   usersData.map((user) => {
    filteredUserData.push({id: user.id, name: user.name, permissions: user.permissions})
   })

  if (req.method === "GET") {
    res.status(200).json(successResponse(filteredUserData))    
  } else {
    res.status(404).json(errorResponse("Route not found"))
  }
});