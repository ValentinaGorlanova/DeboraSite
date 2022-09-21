import nookies from "nookies";
import { GetServerSidePropsContext } from "next";

const ONE_HOUR = 60 * 60;
const ONE_DAY = 24 * ONE_HOUR;

export const COOKIE_NAME_API = "@debora:auth.token";
export const COOKIE_NAME_GOOGLE = "@debora:auth.google";

export function saveCookie(accessToken: string, cookieName: string) {
  nookies.set(null, cookieName, accessToken, {
    path: "/",
    maxAge: ONE_DAY,
  });
}

export function getContextCookie(context: GetServerSidePropsContext, cookieName: string) {
  const cookie = nookies.get(context);
  return cookie[cookieName];
}

export function logoutUser(context: GetServerSidePropsContext) {
  nookies.destroy(context, COOKIE_NAME_API, { path: "/" });
  nookies.destroy(context, COOKIE_NAME_GOOGLE, { path: "/" });
}
