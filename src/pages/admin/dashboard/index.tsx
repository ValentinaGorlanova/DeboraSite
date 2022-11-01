/* eslint-disable @typescript-eslint/no-explicit-any */
import { SEO, Dashboard } from "../../../components";

// import { SSRWithAuth } from "@/lib/SSRWithAuth";

export default function Home() {
  return (
    <>
      <SEO title="Dashboard" />
      <Dashboard />
    </>
  );
}

// export const getServerSideProps = SSRWithAuth((props: any) => {
//   return props;
// });
