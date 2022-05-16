import {
  Header,
  Banner,
  Symptoms,
  WhenToLook,
  SectionCount,
  AboutMe,
  Epecialties,
  ApproachesUsed,
  Instagram,
  ConsultationForm,
  Testimonials,
  Contact,
} from "../components";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Symptoms />
      <WhenToLook />
      <SectionCount />
      <AboutMe />
      <Epecialties />
      <ApproachesUsed />
      <Instagram />
      <ConsultationForm />
      <Testimonials />
      <Contact />
      {/* <img src="/whatsapp.svg" alt="" className="wha" /> */}

      {/* <Footer />  */}
    </>
  );
}
