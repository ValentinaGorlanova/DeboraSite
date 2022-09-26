import { saveCookie, COOKIE_NAME_API } from "@/lib/cookies";

const headers = {
  "Content-Type": "application/json",
};

interface LoginUserType {
  email: string;
  password: string;
}

interface APIResponseType {
  access_token: string;
  user: {
    email: string;
    name: string;
  };
}

export async function tryLoginUser(data: LoginUserType): Promise<any> {
  try {
    const response = await fetch("api/session", { method: "POST", headers, body: JSON.stringify(data) });

    if (response.status !== 200) throw new Error("Erro ao criar sessão");

    const result = await response.json();
    saveCookie(result.access_token, COOKIE_NAME_API);

    return null;
  } catch (err) {
    throw new Error("Erro ao criar sessão");
  }
}

export async function authUserToken(accessToken: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/auth`, { method: "POST", headers, body: JSON.stringify({ accessToken }) });

    if (response.status !== 200) return false;

    return true;
  } catch (err) {
    return false;
  }
}
