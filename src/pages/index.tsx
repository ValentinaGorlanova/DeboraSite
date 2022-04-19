

import { Begin } from "../components/Begin/Begin";
import { Sobre } from "../components/Sobre/Sobre";
import { Header } from "../components/Header/Header";
import { Especialidade } from "../components/Especialidade/Especialidade";
import { Instagram } from "../components/Instagram/Instagram";
import { Consulta } from "../components/Consulta/Consulta";


export default function Home() {
  return (
    <>

      <Header />
      <Begin />
      <Sobre />
      <Especialidade />
      <Instagram/>
      <Consulta/>
    </>
  )
}
