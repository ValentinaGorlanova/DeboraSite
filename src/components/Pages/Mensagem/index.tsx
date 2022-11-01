import { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import { FaUserAlt, FaPaperclip, FaArrowAltCircleRight, FaEyeSlash, FaBellSlash, FaEraser, FaTrash } from "react-icons/fa";
import { BsThreeDots, BsArrowLeftShort, BsPinFill } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";

import styles from "./styles.module.scss";

import ProfissionalItem from "./components/ProfissinalItem";
import { users } from "./mock";

import InputSearch from "@/components/SearchInput";
import { EnvelopeIcon } from "@/components/Icons/EnvelopeIcon";
import { SidebarMenu } from "@/components/Layout/components/SidebarMenu";

import MessageModal from "@/components/Modals/MessageModal";

export function Mensagem() {
  const [userSelectedIndex, setUserSelectedIndex] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.pageContainer}>
      <SidebarMenu />

      <div className={`${styles.searchProfissional} ${userSelectedIndex !== null ? styles.hidden : styles.show}`}>
        <div className={styles.area}>
          <div className={styles.header}>
            <h2>Mensagens</h2>

            <div>
              <MessageModal>
                <button>
                  <AiOutlinePlus />
                </button>
              </MessageModal>
            </div>
          </div>

          <div>
            <div className={styles.inputContainer}>
              <InputSearch placeholder="Pesquise por profissionais" />
            </div>

            <div className={styles.userListContainer}>
              {users.map((user, i) => (
                <ProfissionalItem key={user.userName} {...user} activate={userSelectedIndex === i} onClick={() => setUserSelectedIndex(i)} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.messageArea} ${userSelectedIndex !== null ? styles.show : ""}`}>
        <div className={`${styles.area} ${styles.fill}`}>
          {userSelectedIndex === null && (
            <div className={styles.messageInitial}>
              <EnvelopeIcon />
              <h2>Confira suas mensagens</h2>
              <p>
                Começe a conversar com seus pacientes <br /> clicando no botão &quot;+&quot;
              </p>
            </div>
          )}

          {userSelectedIndex !== null && (
            <>
              <div className={styles.header}>
                <div className={styles.profile}>
                  <div>
                    <button className={styles.backButton} onClick={() => setUserSelectedIndex(null)}>
                      <BsArrowLeftShort />
                    </button>
                  </div>

                  <div className={styles.profileContainer}>
                    <FaUserAlt />
                  </div>

                  <h3>{users[userSelectedIndex].userName}</h3>
                </div>

                <div className={styles.menuContainer}>
                  <button className={styles.buttonStyle} onClick={() => setMenuOpen(!menuOpen)}>
                    <BsThreeDots />
                  </button>

                  <div className={`${styles.menu} ${menuOpen ? styles.show : ""}`}>
                    <ul>
                      <li>
                        <div>
                          <FaUserAlt /> Dados do contato
                        </div>
                      </li>

                      <li>
                        <div>
                          <BsPinFill /> Fixar
                        </div>
                      </li>

                      <li>
                        <div>
                          <FaEyeSlash /> Marcar como não lida
                        </div>
                      </li>

                      <li>
                        <div>
                          <FaBellSlash /> Silenciar notificações
                        </div>
                      </li>

                      <li>
                        <div>
                          <FaEraser /> Limpar conversa
                        </div>
                      </li>

                      <li>
                        <div>
                          <FaTrash /> Apagar conversa
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.body}>
                <div className={styles.messageContainer}>
                  {users[userSelectedIndex].messages.map((message, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div className={message.left ? styles.alignLeft : styles.alignRight} key={i}>
                      <div>
                        <div className={styles.message}>
                          <p>{message.message}</p>
                        </div>
                        <p className={styles.legend}>{message.hour}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.fieldContainer}>
                  <div>
                    <input type="text" name="message" placeholder="Digite uma nova mensagem" className={styles.inputNewMessage} />
                  </div>

                  <div className={styles.action}>
                    <div className={styles.actionGroup}>
                      <div>
                        <button>
                          <FaPaperclip />
                        </button>
                      </div>

                      <div>
                        <button>
                          <HiOutlineEmojiHappy />
                        </button>
                      </div>
                    </div>

                    <div>
                      <button>
                        <FaArrowAltCircleRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
