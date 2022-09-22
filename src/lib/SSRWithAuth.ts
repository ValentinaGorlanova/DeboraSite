/* eslint-disable @typescript-eslint/no-explicit-any */

import { GetServerSidePropsContext } from "next";
import { getContextCookie, COOKIE_NAME_API, COOKIE_NAME_GOOGLE } from "@/lib/cookies";

import { authUserToken } from "@/services/auth";
import { googleTokenVerify } from "@/services/firebase/googleTokenVerify";

export const SSRWithAuth = (callback: any) => {
  return async (context: GetServerSidePropsContext) => {
    const accessTokenAPI = getContextCookie(context, COOKIE_NAME_API);
    const accessTokenGoogle = getContextCookie(context, COOKIE_NAME_GOOGLE);

    const isValidTokenAPI = await authUserToken(accessTokenAPI);
    const isValidTokenGoogle = await googleTokenVerify(accessTokenGoogle);

    console.log(
      `accessTokenAPI: ${accessTokenAPI}\naccessTokenGoogle: ${accessTokenGoogle}\nisValidTokenAPI: ${isValidTokenAPI}\nisValidTokenGoogle: ${isValidTokenGoogle}`
    );
    if ((accessTokenAPI && isValidTokenAPI) || (accessTokenGoogle && isValidTokenGoogle))
      return callback({
        props: {},
      });

    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  };
};
