/* eslint-disable @typescript-eslint/no-var-requires */
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillCameraFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
// must go before plugins

import styles from "./styles.module.scss";
import { EditUserDataModal } from "@/components/EditUserDataModal";
import DropFile from "@/components/DropFile";
// The import order DOES MATTER here. If you change it, you'll get an error!
// const EventCalendar = require("react-event-calendar");

export function Content() {
  const [currentTab, setCurrentTab] = useState(1);
  const [secondTab, setSecondTab] = useState(1);

  return (
    <div className={styles.container}>
      {/* Input Seach */}

      <div className={`${styles.SubmenuButtons} ${styles.buttonsDesktop}`}>
        <div className={styles.buttons}>
          <button className={currentTab === 1 ? styles.filled : styles.outline} onClick={() => setCurrentTab(1)}>
            Perfil principal
          </button>
          <button className={currentTab === 1 ? styles.outline : styles.filled} onClick={() => setCurrentTab(2)}>
            Perfil de profissionais
          </button>
        </div>
      </div>

      <p className={styles.Title}>Pessoa Fisica</p>

      <div className={styles.tabsContainer}>
        <div className={secondTab === 1 ? styles.active : ""} onClick={() => setSecondTab(1)}>
          <span>Dados principais</span>
        </div>
        <div className={secondTab === 2 ? styles.active : ""} onClick={() => setSecondTab(2)}>
          <span>Serviços</span>
        </div>
        <div className={secondTab === 3 ? styles.active : ""} onClick={() => setSecondTab(3)}>
          <span>Sistema</span>
        </div>
        <div className={secondTab === 4 ? styles.active : ""} onClick={() => setSecondTab(4)}>
          <span>Pacientes</span>
        </div>
      </div>

      <div className={styles.tabContent}>
        {secondTab === 1 && (
          <>
            <div className={styles.userImage}>
              <FaUser size={78} color="#7588A2" />
              <div className={styles.buttonAddImage}>
                <BsFillCameraFill size={32} color="#F7F7F7" />
              </div>
            </div>
            <div className={styles.userData}>
              <div>
                <p className={styles.p}>Nome completo</p>
                <span>Debora Barros</span>
              </div>
              <div>
                <p className={styles.p}>CRP</p>
                <span>000 000 0</span>
              </div>
              <div>
                <p className={styles.p}>CPF</p>
                <span>000.000.000 - 00</span>
              </div>
              <div>
                <p className={styles.p}>Endereco</p>
                <span>R. Aureliano Guimarães, 172/150 - Conjunto 819 - 8 andar - Vila Andrade São Paulo - SP</span>
              </div>
            </div>
            <div className={styles.userData}>
              <div>
                <p className={styles.p}>Data de nascimento</p>
                <span>00/00/00</span>
              </div>
              <div>
                <p className={styles.p}>Email</p>
                <span>nome-contato@email.com</span>
              </div>
              <div>
                <p className={styles.p}>Telefone</p>
                <span>+55 (11) 99999 999</span>
              </div>
            </div>
          </>
        )}
        {secondTab === 2 && (
          <>
            <div className={styles.userData}>
              <div>
                <p className={styles.p}>Cargo</p>
                <span>Psicologo</span>
              </div>
              <div>
                <p className={styles.p}>Email</p>
                <span>nome-contato@email.com</span>
              </div>
              <div>
                <p className={styles.p}>Abordagens utilizadas</p>
                <div>
                  <input type="checkbox" name="teste" id="" />
                  <span> Terapia Cognitiva Comportamental</span>
                </div>
                <div>
                  <input type="checkbox" name="teste" id="" />
                  <span> Terapia Cognitiva Comportamental</span>
                </div>
                <div>
                  <input type="checkbox" name="teste" id="" />
                  <span> Terapia Cognitiva Comportamental</span>
                </div>
              </div>
              <div>
                <p className={styles.p}>Adicionar curriculo</p>
                <DropFile onDropFile={(file) => file} />
              </div>
            </div>
            <div className={styles.userData}>
              <div>
                <p className={styles.p}>Convênios</p>
                <div>
                  <input type="checkbox" name="teste" id="" />
                  <span>Nome de convênio</span>
                </div>
                <div>
                  <input type="checkbox" name="teste" id="" />
                  <span>Nome de convênio</span>
                </div>
                <div>
                  <input type="checkbox" name="teste" id="" />
                  <span>Nome de convênio</span>
                </div>
              </div>
              <div>
                <p className={styles.p}>Dados bancários</p>
                <div>
                  <p className={styles.p}>Código Pix</p>
                </div>
                <div>
                  <p className={styles.p}>Conta bancária</p>
                </div>
              </div>
            </div>
          </>
        )}
        {secondTab === 3 && (
          <>
            <div className={styles.userData}>
              <p className={styles.p}>Permitir acesso padrão ao sistema</p>
              <p className={styles.p}>Permitir acesso padrão ao sistema</p>
              <p className={styles.p}>Permitir acesso padrão ao sistema</p>
              <div>
                <p className={styles.p}>Ativa desde de </p>
                <span>00/00/00</span>
              </div>
            </div>
            <div className={styles.userData}>
              <div>
                <p className={styles.p}>Inativa desde de</p>
                <span>00/00/00</span>
              </div>
            </div>
          </>
        )}
        {secondTab === 4 && (
          <div className={styles.userList}>
            <div className={styles.userListData}>
              <p className={styles.p}>Nome do paciente</p>
              <div className={styles.userContent}>
                <span>Inciado em: 00/00/00</span>
                <span>Consultas realizadas: 04</span>
                <span>Faltas: 01</span>
                <span>Consultas previstas: 10</span>
                <div>
                  <EditUserDataModal>
                    <button>
                      <RiPencilFill size={32} color="#273A51" />
                    </button>
                  </EditUserDataModal>
                  <button>
                    <AiFillCloseCircle size={32} color="#273A51" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
