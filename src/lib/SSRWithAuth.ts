/* eslint-disable @typescript-eslint/no-explicit-any */

import { GetServerSidePropsContext } from "next";
import { getContextCookie } from "@/lib/cookies";

import { authUserToken } from "@/services/auth";

export const SSRWithAuth = (callback: any) => {
  return async (context: GetServerSidePropsContext) => {
    const accessToken = getContextCookie(context);
    const response = await authUserToken(accessToken);

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
