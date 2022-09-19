import nookies from "nookies";
import { GetServerSidePropsContext } from "next";

const ONE_HOUR = 60 * 60;
const COOKIE_NAME = "@debora:auth.token";

export function saveCookie(accessToken: string) {
  nookies.set(null, COOKIE_NAME, accessToken, { maxAge: ONE_HOUR });
}

export function getContextCookie(context: GetServerSidePropsContext) {
  const cookie = nookies.get(context);
  return cookie[COOKIE_NAME];
}
