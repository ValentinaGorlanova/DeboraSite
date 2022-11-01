import { ProfileContent, SEO } from "@/components";

// import { SSRWithAuth } from "@/lib/SSRWithAuth";

export default function Profile() {
  return (
    <>
      <SEO title="Perfil" />
      <ProfileContent />
    </>
  );
}

// export const getServerSideProps = SSRWithAuth((props: any) => {
//   return props;
// });
