/* eslint-disable react/prop-types */
import { ChangeEvent, ReactNode, useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { BsArrowLeft } from "react-icons/bs";

import CheckButton from "../CheckButton";

import { Dialog, DialogTitle, DialogTrigger, DialogClose, DialogContent } from "../Modal";
import DropFile from "../DropFile";
import MissingContent from "./components/MissingContent";
import AsideButtons from "./components/AsideButtons";
import TableFiles from "./components/TableFiles";

import styles from "./styles.module.scss";

interface DialogProps {
  children: ReactNode;
}

export default function AnnotationModal({ children }: DialogProps) {
  const [step, setStep] = useState(1);
  const [isAddingContent, setIsAddingContent] = useState(1);

  const [typeFileSelected, setTypeFileSelected] = useState<string>("");
  const textButtons = ["Antes da sessão", "Resumo da sessão", "Observação", "Evolução", "Anexar arquivos"];

  function handleSelect(select: ChangeEvent) {
    const element = select.target as HTMLSelectElement;
    setTypeFileSelected(element.value);
    setIsAddingContent(2);
  }
  function handleBackButton() {
    setTypeFileSelected("");
    setIsAddingContent(1);
  }

  return (
    <Dialog>
      <DialogTrigger asChild style={{ cursor: "pointer" }}>
        {children}
      </DialogTrigger>

      <DialogContent>
        {isAddingContent === 1 && (
          <>
            <DialogTitle>Anotações da sessão</DialogTitle>
            <div className={styles.SelectsWrapper}>
              {step === 5 && (
                <select name="options" id="options" onChange={(sel) => handleSelect(sel)}>
                  <option value="" disabled selected>
                    Adicionar novo arquivo
                  </option>
                  <option value="Encaminhamentos">Encaminhamentos</option>
                  <option value="Receitas">Receitas</option>
                  <option value="Arquivos gerais">Arquivos gerais</option>
                  <option value="Testes">Testes</option>
                  <option value="Desenhos">Desenhos</option>
                  <option value="Imprimir agenda">Imprimir agenda</option>
                </select>
              )}

              <select name="options" id="options" onChange={() => setIsAddingContent(3)}>
                <option value="" disabled selected>
                  Gerar PDFs
                </option>
                <option value="saab">PDF do prontuário</option>
                <option value="mercedes">PDF da sessão</option>
                <option value="audi">Histórico de sessões</option>
              </select>
            </div>

            <main className={`${styles.Main} ${styles.column}`}>
              <AsideButtons step={step} setStep={(indexStep) => setStep(indexStep)} textButtons={textButtons} />

              <div className={styles.AsideContent}>
                {step === 5 && (
                  <>
                    <MissingContent />
                    <TableFiles />
                  </>
                )}
              </div>
            </main>

            <DialogClose asChild>
              <button className={styles.IconButton}>
                <Cross2Icon />
              </button>
            </DialogClose>
            <DialogClose asChild>
              <div className={styles.ButtonsContainer}>
                <button className={`${styles.ButtonsModal} ${styles.filled}`} type="button" onClick={() => setStep(2)}>
                  Salvar alteracões
                </button>
              </div>
            </DialogClose>
          </>
        )}
        {isAddingContent === 2 && (
          <>
            <button className={styles.BackButton} onClick={() => handleBackButton()}>
              <BsArrowLeft />
            </button>

            <DialogTitle>Dados do documento</DialogTitle>

            <main className={`${styles.Main} ${styles.grid}`}>
              <div className={`${styles.AsideContent} ${styles.noBorder}`}>
                <div className={styles.AsideInputs}>
                  <span>Tipo de documento</span>
                  <input type="text" value={typeFileSelected} />
                </div>

                <div className={`${styles.AsideInputs} ${styles.ApplyMarginTop}`}>
                  <span>Titulo para o documento</span>
                  <input type="text" placeholder="Titulo para o documento" />
                </div>
              </div>

              <DropFile onDropFile={(fileDrop) => fileDrop} />
            </main>

            <DialogClose asChild>
              <button className={styles.IconButton}>
                <Cross2Icon />
              </button>
            </DialogClose>
            <DialogClose asChild>
              <div className={styles.ButtonsContainer}>
                <button className={styles.filled} type="button" onClick={() => setStep(2)}>
                  Salvar alterações
                </button>
              </div>
            </DialogClose>
          </>
        )}

        {isAddingContent === 3 && (
          <>
            <button className={styles.BackButton} onClick={() => handleBackButton()}>
              <BsArrowLeft />
            </button>

            <DialogClose asChild>
              <button className={styles.IconButton}>
                <Cross2Icon />
              </button>
            </DialogClose>

            <DialogTitle>Configurar documento</DialogTitle>

            <main className={`${styles.Main} ${styles.defaultColumn}`}>
              <p className={styles.TitleSection}>O que você quer que apareça no relatório:</p>
              <div className={styles.LineForm}>
                <CheckButton checked onChange={() => "empty"} />
                <p>Anotações de antes da sessão</p>
              </div>

              <div className={styles.LineForm}>
                <CheckButton checked onChange={() => "empty"} />
                <p>Resumo da sessão</p>
              </div>

              <div className={styles.LineForm}>
                <CheckButton checked onChange={() => "empty"} />
                <p>Observação</p>
              </div>

              <div className={styles.LineForm}>
                <CheckButton checked onChange={() => "empty"} />
                <p>Evolução</p>
              </div>
            </main>

            <DialogClose asChild>
              <div className={styles.ButtonsContainer}>
                <button className={`${styles.ButtonsModal} ${styles.filled}`} type="button">
                  Gerar PDFs
                </button>
              </div>
            </DialogClose>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
