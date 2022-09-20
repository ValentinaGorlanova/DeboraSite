import type { NextApiRequest, NextApiResponse } from "next";

import jsonWebToken from "jsonwebtoken";

const SECRET_KEY = "SecretKey@apiGethash";

const EMAIL_LOGIN = "api@debora.com.br";
const PASSWORD_LOGIN = "123456";
const USER_NAME = "Debora Barros";

const UNAUTHORIZATION_STATUS = 401;
const BAD_REQUEST_STATUS = 400;
const OK_STATUS = 200;

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== "POST") return response.status(UNAUTHORIZATION_STATUS).json({ msg: "Acesso negado!" });

  const { email, password } = request.body;
  if (!email && !password) return response.status(BAD_REQUEST_STATUS).json({ msg: "Enviar um email e senha!" });

  if (email !== EMAIL_LOGIN || password !== PASSWORD_LOGIN)
    return response.status(UNAUTHORIZATION_STATUS).json({ msg: "Email ou senha incorretos!" });

  const jwt = jsonWebToken.sign({ email }, SECRET_KEY, { expiresIn: 60 * 60 * 24 });

  return response.status(OK_STATUS).json({
    user: {
      email: EMAIL_LOGIN,
      name: USER_NAME,
    },
    access_token: jwt,
  });
}
