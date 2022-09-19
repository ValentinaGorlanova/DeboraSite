import type { NextApiRequest, NextApiResponse } from "next";

import jsonWebToken from "jsonwebtoken";

const SECRET_KEY = "SecretKey@apiGethash";

const NOT_FOUND_STATUS = 400;
const UNAUTHORIZATION_STATUS = 401;
const BAD_REQUEST_STATUS = 400;
const OK_STATUS = 200;

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === "GET") return response.status(OK_STATUS).json({ msg: "okk" });

  const { accessToken } = request.body;

  if (!accessToken) return response.status(BAD_REQUEST_STATUS).json({ msg: "ACCESS_TOKEN é obrigatório" });

  try {
    const result = jsonWebToken.verify(accessToken, SECRET_KEY);
    console.log(result);
    console.log("ok");
    return response.status(OK_STATUS).json({ msg: "ACCESS_TOKEN é valido" });
  } catch (err) {
    console.log("err");
    return response.status(UNAUTHORIZATION_STATUS).json({ msg: "ACCESS_TOKEN é inválido" });
  }
}
