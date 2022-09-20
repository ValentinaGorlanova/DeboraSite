import nookies from "nookies";
import { GetServerSidePropsContext } from "next";

const ONE_HOUR = 60 * 60;
const ONE_DAY = 24 * ONE_HOUR;
const COOKIE_NAME = "@debora:auth.token";

export function saveCookie(accessToken: string) {
  nookies.set(null, COOKIE_NAME, accessToken, {
    path: "/",
    maxAge: ONE_DAY,
  });
}

export function getContextCookie(context: GetServerSidePropsContext) {
  const cookie = nookies.get(context);
  return cookie[COOKIE_NAME];
}

export function logoutUser(context: GetServerSidePropsContext) {
  nookies.destroy(context, COOKIE_NAME, { path: "/" });
}
