import { SEO, CalendarContent } from "../../../components";

// import { SSRWithAuth } from "@/lib/SSRWithAuth";

export default function Calendar() {
  return (
    <>
      <SEO title="Calendário" />
      <CalendarContent />
    </>
  );
}

// export const getServerSideProps = SSRWithAuth((props: any) => {
//   return props;
// });
