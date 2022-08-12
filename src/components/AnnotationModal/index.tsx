/* eslint-disable react/prop-types */
import { ChangeEvent, ReactNode, useState } from "react";
import { styled, keyframes } from "@stitches/react";
import { violet, blackA } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as DialogPrimitive from "@radix-ui/react-dialog";
// import { FileUploader } from "react-drag-drop-files";
import { BsFillTrashFill, BsArrowLeft } from "react-icons/bs";
import { CgSoftwareDownload } from "react-icons/cg";
import { UploadImage } from "../Images/UploadImage";

import CheckButton from "../CheckButton";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  zIndex: 200,
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: "#F7F7F7",
  borderRadius: 6,
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "858px",
  height: "auto",
  padding: 25,
  zIndex: 201,
  overflowY: "auto",
  maxHeight: "90vh",

  "&::-webkit-scrollbar": {
    width: "10px",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "#d8d8d8",
    borderRadius: "10px",

    transition: "background 400ms",

    "&:hover": {
      background: "#e7975d",
    },
  },

  "@media (max-width: 768px)": {
    maxWidth: "680px",
  },

  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  "&:focus": { outline: "none" },
});

function Content({ children, ...props }: any) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
}

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "center",
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "24px",
  lineHeight: "28px",
  color: "#1E1E1E",
  marginBottom: "32px",
});

// Exports
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogClose = DialogPrimitive.Close;

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  position: "absolute",
  top: 10,
  right: 10,

  "&:hover": { backgroundColor: violet.violet4 },
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

interface DialogProps {
  children: ReactNode;
}

const ButtonsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "18px",
});

const ButtonsModal = styled("button", {
  width: "181px",
  height: "43px",
  border: "none",
  cursor: "pointer",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "19px",

  variants: {
    variant: {
      filled: {
        background: "#E7975D",
        color: "#F7F7F7",
      },
      asideActive: {
        padding: "24px 12px",
        width: "170px",
        height: "104px",
        background: "#273A51",
        fontWeight: "700",
        fontSize: "24px",
        lineHeight: "28px",
        color: "#F7F7F7",
        borderRadius: "0",

        "@media (max-width: 670px)": {
          width: "139px",
          height: "50px",
          fontSize: "14px",
        },
      },
      aside: {
        background: "transparent",
        padding: "24px 12px",
        width: "170px",
        height: "104px",
        borderRadius: "0",
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: "28px",
        color: "#1E1E1E",

        "@media (max-width: 670px)": {
          width: "139px",
          height: "50px",
          fontSize: "14px",
        },
      },
    },
  },
});

const Main = styled("main", {
  display: "flex",
  marginTop: "20px",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
  gap: "10px",

  variants: {
    variant: {
      column: {
        "@media (max-width: 670px)": {
          flexDirection: "column",
        },
      },

      defaultColumn: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "32px",
      },

      grid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr auto",

        "@media (max-width: 768px)": {
          gridTemplateColumns: "100%",
          gridTemplateRows: "1fr 1fr auto",
        },
      },
    },
  },

  table: {
    width: "100%",

    th: {
      border: "none",
      textAlign: "left",
      padding: "8px",

      fontFamily: "Barlow",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "26px",
      color: "#1E1E1E",
    },
    td: {
      border: "none",
      textAlign: "left",
      padding: "8px",
      borderTop: "1px solid #C9C9C9",

      fontFamily: "Barlow",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",
      color: "#1E1E1E",
    },

    button: {
      cursor: "pointer",
      fonSize: "0",
      border: "none",
      backgroundColor: "transparent",
      marginRight: "10px",
    },
  },
});

const AsideButtons = styled("div", {
  display: "flex",
  flexDirection: "column",
  borderRight: "1px solid #C9C9C9",

  "@media (max-width: 670px)": {
    width: "100%",
    overflowX: "auto",
    flexDirection: "row",
  },
});

const SelectsWrapper = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "flex-end",

  gap: "8px",
  select: {
    padding: "8px 12px",
    background: "#F7F7F7",
    border: "1px solid #273A51",
    borderRadius: "12px",

    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "28px",

    color: "#273A51",
  },

  "@media (max-width: 670px)": {
    select: {
      width: "100%",
    },
  },

  "@media (max-width: 425px)": {
    flexDirection: "column",
  },
});
const AsideContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "auto",
  maxHeight: "520px",
  minHeight: "466px",
  overflowY: "auto",

  border: "1px solid #D4D4D4",

  variants: {
    variant: {
      dashed: {
        // border: "1px dashed #273A51",
        width: "100%",
        // minHeight: "164px",
        border: "none",
        maxHeight: "120px",
        minHeight: "200px",
        overflowY: "hidden",
      },
      noBorder: {
        border: "none",
        maxWidth: "278px",
        maxHeight: "120px",
        minHeight: "200px",
        overflowY: "hidden",
        gap: "10px",

        "@media (max-width: 768px)": {
          flexDirection: "row",
          maxWidth: "none",
          minHeight: "100px",
          justifyContent: "space-between",
        },

        "@media (max-width: 500px)": {
          flexDirection: "column",
          minHeight: "200px",
          justifyContent: "flex-start",
        },
      },
    },
  },

  span: {
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#0A0A0A",
  },

  input: {
    padding: "14px 0px 14px 16px",
    width: "100%",
    height: "52px",
    border: "1px solid #632700",
    borderRadius: "8px",
  },
});

const MissingContent = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: {
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "28px",
    display: "flex",
    alignItems: "center",
    color: "#1E1E1E",
    maxWidth: "290px",
  },

  "p:nth-child(2)": {
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "26px",
  },

  "@media (max-width: 510px)": {
    p: {
      fontSize: "14px",
    },

    "p:nth-child(2)": {
      fontSize: "12px",
    },
  },
});

const FileUploadedInfo = styled("div", {
  height: "57px",
  background: "#F0F0F0",
  borderBottom: "3px solid #273A57",
  display: "flex",
  alignItems: "center",

  h3: {
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    color: "#000",
  },
});

const AsideInputs = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  maxWidth: "278px",
  width: "100%",

  "@media (max-width: 500px)": {
    width: "100%",
    maxWidth: "none",

    input: {
      width: "100%",
    },
  },

  variants: {
    variant: {
      ApplyMarginTop: {
        marginTop: "10px",

        "@media (max-width: 768px)": {
          marginTop: 0,
        },
      },
    },
  },
});

const BackButton = styled("button", {
  width: "30px",
  height: "30px",
  background: "none",
  border: "none",

  position: "absolute",
  left: "10px",
  top: "10px",

  fontSize: "20px",

  color: "rgb(231, 151, 93)",
});

const ButtonDeleteFile = styled("button", {
  width: "120px",
  height: "30px",
  float: "right",
  textDecoration: "underline",
  color: "#D10438",
  fontWeight: "600",
  fontSize: "14px",
  marginTop: "16px",
  border: "none",
  background: "none",
  cursor: "pointer",
});

const LineForm = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: "32px",

  p: {
    fontSize: "24px",
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: 400,

    "@media (max-width: 768px)": {
      fontSize: "20px",
    },

    "@media (max-width: 425px)": {
      fontSize: "14px",
    },
  },
});

const TitleSection = styled("p", {
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontSize: "24px",
  fontWeight: 500,

  "@media (max-width: 768px)": {
    fontSize: "20px",
  },

  "@media (max-width: 425px)": {
    fontSize: "14px",
  },
});

export default function AnnotationModal({ children }: DialogProps) {
  const [step, setStep] = useState(1);
  const [isAddingContent, setIsAddingContent] = useState(1);
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState(null);
  const [typeFileSelected, setTypeFileSelected] = useState<string>("");

  const handleChange = (files: any) => {
    setFile(file);
  };
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

      {isAddingContent === 1 && (
        <DialogContent>
          <DialogTitle>Anotacao da sessao 01/05/22</DialogTitle>
          <SelectsWrapper>
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
              <option value="saab">PDF do prontuario</option>
              <option value="mercedes">PDF da sessao</option>
              <option value="audi">Historico de sessões</option>
            </select>
          </SelectsWrapper>
          <Main variant="column">
            <AsideButtons>
              <div>
                <ButtonsModal variant={step === 1 ? "asideActive" : "aside"} onClick={() => setStep(1)}>
                  Antes da sessao
                </ButtonsModal>
              </div>
              <div>
                <ButtonsModal variant={step === 2 ? "asideActive" : "aside"} onClick={() => setStep(2)}>
                  Resumo da sessao
                </ButtonsModal>
              </div>
              <div>
                <ButtonsModal variant={step === 3 ? "asideActive" : "aside"} onClick={() => setStep(3)}>
                  Observação
                </ButtonsModal>
              </div>
              <div>
                <ButtonsModal variant={step === 4 ? "asideActive" : "aside"} onClick={() => setStep(4)}>
                  Evolução
                </ButtonsModal>
              </div>
              <div>
                <ButtonsModal variant={step === 5 ? "asideActive" : "aside"} onClick={() => setStep(5)}>
                  Anexar arquivos
                </ButtonsModal>
              </div>
            </AsideButtons>
            <AsideContent>
              {step === 5 && (
                <>
                  <MissingContent>
                    <UploadImage />
                    <div>
                      <p>Voce ainda nao anexou nenhum arquivo para esse paciente</p>
                      <p>Adicinone arquivos no botao acima</p>
                    </div>
                  </MissingContent>

                  <div style={{ overflowX: "auto", minWidth: "550px" }}>
                    <table cellSpacing="0">
                      <tr>
                        <th>Titulo</th>
                        <th>Tipo</th>
                        <th>Opções</th>
                      </tr>
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
                    </table>
                  </div>
                </>
              )}
            </AsideContent>
          </Main>

          <DialogClose asChild>
            <IconButton aria-label="Close">
              <Cross2Icon />
            </IconButton>
          </DialogClose>
          <DialogClose asChild>
            <ButtonsContainer>
              <ButtonsModal type="button" variant="filled" onClick={() => setStep(2)}>
                Salvar alteracoes
              </ButtonsModal>
            </ButtonsContainer>
          </DialogClose>
        </DialogContent>
      )}
      {isAddingContent === 2 && (
        <DialogContent>
          <BackButton onClick={() => handleBackButton()}>
            <BsArrowLeft />
          </BackButton>

          <DialogTitle>Dados do documento</DialogTitle>

          <Main variant="grid">
            <AsideContent variant="noBorder">
              <AsideInputs>
                <span>Tipo de documento</span>
                <input type="text" value={typeFileSelected} />
              </AsideInputs>

              <AsideInputs variant="ApplyMarginTop">
                <span>Titulo para o documento</span>
                <input type="text" placeholder="Titulo para o documento" />
              </AsideInputs>
            </AsideContent>

            <AsideContent variant="dashed">
              {/* <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                multiple
                label="Arraste e solte arquivos aqui"
                classes="testando"
                maxSize="1"
              /> */}
            </AsideContent>

            <div></div>

            <div>
              <FileUploadedInfo>
                <h3>Nomedoarquivo.pdf (tamanho)</h3>
              </FileUploadedInfo>

              <ButtonDeleteFile>Excluir arquivo</ButtonDeleteFile>
            </div>
          </Main>

          <DialogClose asChild>
            <IconButton aria-label="Close">
              <Cross2Icon />
            </IconButton>
          </DialogClose>
          <DialogClose asChild>
            <ButtonsContainer>
              <ButtonsModal type="button" variant="filled" onClick={() => setStep(2)}>
                Salvar alterações
              </ButtonsModal>
            </ButtonsContainer>
          </DialogClose>
        </DialogContent>
      )}

      {isAddingContent === 3 && (
        <DialogContent>
          <BackButton onClick={() => handleBackButton()}>
            <BsArrowLeft />
          </BackButton>

          <DialogClose asChild>
            <IconButton aria-label="Close">
              <Cross2Icon />
            </IconButton>
          </DialogClose>

          <DialogTitle>Configurar documento</DialogTitle>

          <Main variant="defaultColumn">
            <TitleSection>O que você quer que apareça no relatório:</TitleSection>
            <LineForm>
              <CheckButton checked onChange={() => "empty"} />
              <p>Anotações de antes da sessão</p>
            </LineForm>

            <LineForm>
              <CheckButton checked onChange={() => "empty"} />
              <p>Resumo da sessão</p>
            </LineForm>

            <LineForm>
              <CheckButton checked onChange={() => "empty"} />
              <p>Observação</p>
            </LineForm>

            <LineForm>
              <CheckButton checked onChange={() => "empty"} />
              <p>Evolução</p>
            </LineForm>
          </Main>

          <DialogClose asChild>
            <ButtonsContainer>
              <ButtonsModal type="button" variant="filled">
                Gerar PDFs
              </ButtonsModal>
            </ButtonsContainer>
          </DialogClose>
        </DialogContent>
      )}
    </Dialog>
  );
}
