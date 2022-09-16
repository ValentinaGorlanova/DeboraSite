import { BsFillTrashFill } from "react-icons/bs";
import { CgSoftwareDownload } from "react-icons/cg";
import styles from "./styles.module.scss";

export default function TableFiles() {
  return (
    <div style={{ overflowX: "auto", minWidth: "550px" }}>
      <table cellSpacing="0" className={styles.table}>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Tipo</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nome do arquivo</td>
            <td>Encaminhamento</td>
            <td>
              <div>
                <button>
                  <CgSoftwareDownload size={24} color="#273A51" />
                </button>
                <button>
                  <BsFillTrashFill size={20} color="#D10438" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Nome do arquivo</td>
            <td>Receitas</td>
            <td>
              <div>
                <button>
                  <CgSoftwareDownload size={24} color="#273A51" />
                </button>
                <button>
                  <BsFillTrashFill size={20} color="#D10438" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Nome do arquivo</td>
            <td>Arquivos gerais</td>
            <td>
              <div>
                <button>
                  <CgSoftwareDownload size={24} color="#273A51" />
                </button>
                <button>
                  <BsFillTrashFill size={20} color="#D10438" />
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Nome do arquivo</td>
            <td>Arquivos gerais</td>
            <td>
              <div>
                <button>
                  <CgSoftwareDownload size={24} color="#273A51" />
                </button>
                <button>
                  <BsFillTrashFill size={20} color="#D10438" />
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Nome do arquivo</td>
            <td>Arquivos gerais</td>
            <td>
              <div>
                <button>
                  <CgSoftwareDownload size={24} color="#273A51" />
                </button>
                <button>
                  <BsFillTrashFill size={20} color="#D10438" />
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Nome do arquivo</td>
            <td>Arquivos gerais</td>
            <td>
              <div>
                <button>
                  <CgSoftwareDownload size={24} color="#273A51" />
                </button>
                <button>
                  <BsFillTrashFill size={20} color="#D10438" />
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Nome do arquivo</td>
            <td>Arquivos gerais</td>
            <td>
              <div>
                <button>
                  <CgSoftwareDownload size={24} color="#273A51" />
                </button>
                <button>
                  <BsFillTrashFill size={20} color="#D10438" />
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>Nome do arquivo</td>
            <td>Arquivos gerais</td>
            <td>
              <div>
                <button>
                  <CgSoftwareDownload size={24} color="#273A51" />
                </button>
                <button>
                  <BsFillTrashFill size={20} color="#D10438" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
