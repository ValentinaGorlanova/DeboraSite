import { GetServerSidePropsContext } from "next";

import { logoutUser } from "@/lib/cookies";

export default function Logout() {
  return <div></div>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  logoutUser(context);

  return {
    redirect: {
      permanent: false,
      destination: "/login",
    },
  };
}
