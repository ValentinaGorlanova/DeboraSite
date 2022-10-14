import { FinanceContent, SEO } from "@/components";

import { SSRWithAuth } from "@/lib/SSRWithAuth";

export default function Profile() {
  return (
    <>
      <SEO title="Finance" />
      <FinanceContent />
    </>
  );
}

export const getServerSideProps = SSRWithAuth((props: any) => {
  return props;
});