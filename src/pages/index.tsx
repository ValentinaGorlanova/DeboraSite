import {
  SEO,
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
  Footer,
} from "../components";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
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
      <Footer />
    </>
  );
}
