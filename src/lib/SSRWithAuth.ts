/* eslint-disable @typescript-eslint/no-explicit-any */

import { GetServerSidePropsContext } from "next";
import { getContextCookie } from "@/lib/cookies";

import { authUserToken } from "@/services/auth";

export const SSRWithAuth = (callback: any) => {
  return async (context: GetServerSidePropsContext) => {
    const accessToken = getContextCookie(context);

    console.log("SSRWithAuth:Token,", accessToken);
    const response = await authUserToken(accessToken);
    console.log("SSRWithAuth:Response,", response);

    if (!accessToken || !response)
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
      };

    return callback({
      props: {},
    });
  };
};
