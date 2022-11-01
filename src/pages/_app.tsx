import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import "../../styles/globals.scss";

import { UserContextProvider } from "@/lib/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />

      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </>
  );
}

export default MyApp;
