

import { Begin } from "../components/Begin/Begin";
import { Sobre } from "../components/Sobre/Sobre";
import { Especialidade } from "../components/Especialidade/Especialidade";
import { Instagram } from "../components/Instagram/Instagram";
import { Consulta } from "../components/Consulta/Consulta";
import { Contato } from "../components/Contato/Contato";
import { Footer } from "../components/Footer/Footer";

export default function Home() {
  return (
    <>

      <Begin />
      <Sobre />
      <Especialidade />
      <Instagram/>
      <Consulta/>
      <Contato/>
      <img src="/whatsapp.svg" alt=""  className="wha" />
      
      <Footer/>
    </>
  )
}
