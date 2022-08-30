/* eslint-disable react/prop-types */
import React, { ReactNode, useState } from "react";
import { styled } from "@stitches/react";
import { violet } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";

import DropFile from "../DropFile";

import { Dialog, DialogTitle, DialogTrigger, DialogClose, DialogContent } from "../Modal";
import CheckButton from "../CheckButton";

// Your app...
const Flex = styled("div", { display: "flex" });
const Box = styled("div", {});

const Button = styled("button", {
  all: "unset",

  width: "158px",
  height: "43px",
  left: "241px",
  bottom: "32px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    variant: {
      save: {
        background: "#E7975D",
        fontFamily: "Barlow",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "19px",

        color: "#F7F7F7",
      },
    },
  },

  defaultVariants: {
    variant: "violet",
  },
});

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

const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 20,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 15,
});

const Label = styled("label", {
  textAlign: "right",
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "20px",
  lineHeight: "28px",
  color: "#1E1E1E",
});

const Input = styled("input", {
  all: "unset",
  width: "90%",
  maxWidth: "291px",
  padding: "12px",
  gap: "5px",
  background: "#F7F7F7",
  border: "1px solid #273A51",
  borderRadius: "12px",

  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "26px",
  color: "#B5B5B5",

  "&::placeholder": {
    opacity: "0.7",
  },

  "@media (max-width: 620px)": {
    maxWidth: "455px",
  },
});

interface ModalDataProps {
  children: ReactNode;
  initialTab: number;
}

const InputWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "15px 0",
  width: "100%",

  "@media (max-width: 620px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

const TabsContainer = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginTop: "24px",
  marginBottom: "42px",
  borderBottom: "1px solid #D4D4D4",

  overflowX: "auto",
});

const SelectTabButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "24px",
  lineHeight: "28px",
  background: "transparent",
  border: "none",
  minWidth: "120px",

  cursor: "pointer",
  paddingBottom: "5px",
  variants: {
    variant: {
      active: {
        color: "#273A51",
        borderBottom: "2px solid #273A51",
        borderTop: "1px solid transparent",
      },
      ghost: {
        color: "#1E1E1E",
        opacity: "0.5",
      },
    },
  },

  "@media (max-width: 768px)": {
    fontSize: "16px",
  },
});

const CheckboxContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "5px",
  input: {
    width: "18px",
    height: "18px",
  },
});

const CheckboxLabel = styled("span", {
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "20px",
  lineHeight: "28px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",

  color: "#000000",
});

const LabelAndCheckboxContainer = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: "15px",
});
const UploadContainerWrapper = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: "15px",
});
const AccountDetailsWrapper = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: "15px",

  p: {
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "28px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",

    color: "#000000",
  },
});
const RowForm = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "10px 0",

  fontFamily: "Barlow",
  fontStyle: "normal",

  div: {
    width: "50%",
  },

  p: {
    fontWeight: "400",
    fontSize: "18px",
  },

  h3: {
    fontSize: "16px",
    marginBottom: "10px",
  },

  input: {
    fontSize: "16px",
    outline: "none",

    background: "#f7f7f7",
    padding: "12px",

    border: "1px solid #273a51",
    borderRadius: "12px",
  },

  "input[type='number']": {
    width: "80px",
  },

  "@media (max-width: 425px)": {
    flexDirection: "column",
    alignItems: "flex-start",

    div: {
      width: "100%",
    },

    p: {
      fontSize: "12px",
    },

    h3: {
      fontSize: "14px",
    },
  },

  "@media (min-width: 425px) and (max-width: 768px)": {
    p: {
      fontSize: "16px",
    },

    h3: {
      fontSize: "16px",
    },
  },
});

export function EditUserDataModal({ children, initialTab }: ModalDataProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Editar dados</DialogTitle>
        <TabsContainer>
          <SelectTabButton variant={activeTab === 0 ? "active" : "ghost"} onClick={() => setActiveTab(0)}>
            Dados principais
          </SelectTabButton>
          <SelectTabButton variant={activeTab === 1 ? "active" : "ghost"} onClick={() => setActiveTab(1)}>
            Serviços
          </SelectTabButton>
          <SelectTabButton variant={activeTab === 2 ? "active" : "ghost"} onClick={() => setActiveTab(2)}>
            Sistema
          </SelectTabButton>
          <SelectTabButton variant={activeTab === 3 ? "active" : "ghost"} onClick={() => setActiveTab(3)}>
            Pacientes
          </SelectTabButton>
        </TabsContainer>

        {activeTab === 0 && (
          <>
            <InputWrapper>
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" placeholder="Nome do profissional" />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="CPF">CPF</Label>
              <Input id="CPF" placeholder="000.000.000 - 00" />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="CRP">CRP</Label>
              <Input id="CRP" placeholder="00.000 - 00" />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="CRP">Telefone</Label>
              <Input id="CRP" placeholder="(00) 0 0000 0000" />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="Email">Email</Label>
              <Input id="Email" placeholder="nome@email.com" />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="born">Data de nascimento</Label>
              <Input id="born" placeholder="00/00/00" />
            </InputWrapper>
          </>
        )}

        {activeTab === 1 && (
          <>
            <InputWrapper>
              <Label htmlFor="role">Cargo</Label>
              <Input id="role" placeholder="Cargo do profissional" />
            </InputWrapper>

            <LabelAndCheckboxContainer>
              <Label htmlFor="checkbox">Abordagens utilizadas</Label>
              <CheckboxContainer>
                <input type="checkbox" name="item" />
                <CheckboxLabel>Terapia Cognitiva Comportamental</CheckboxLabel>
              </CheckboxContainer>
            </LabelAndCheckboxContainer>
            <LabelAndCheckboxContainer>
              <Label htmlFor="checkbox">Convenios</Label>
              <CheckboxContainer>
                <input type="checkbox" name="item" />
                <CheckboxLabel>Nome de convênio</CheckboxLabel>
              </CheckboxContainer>
            </LabelAndCheckboxContainer>
            <UploadContainerWrapper>
              <Label htmlFor="checkbox">Adicionar curriculo</Label>
              <DropFile onDropFile={(file) => file} />
            </UploadContainerWrapper>
            <AccountDetailsWrapper>
              <Label htmlFor="checkbox">Dados bancarios</Label>
              <p>Codigo Pix</p>
              <p>Conta bancaria</p>
            </AccountDetailsWrapper>
          </>
        )}

        {activeTab === 2 && (
          <>
            <RowForm>
              <p>Permitir acesso padrão ao sistema</p>
              <CheckButton checked={false} onChange={() => ({})} />
            </RowForm>

            <RowForm>
              <p>Permitir acesso apenas ao calendário de agendamentos</p>
              <CheckButton checked onChange={() => ({})} />
            </RowForm>

            <RowForm>
              <p>Permitir acesso apenas ao calendário de agendamentos</p>
              <CheckButton checked={false} onChange={() => ({})} />
            </RowForm>

            <RowForm>
              <p>Permitir acesso apenas ao calendário de agendamentos</p>
              <CheckButton checked onChange={() => ({})} />
            </RowForm>

            <RowForm>
              <p>Desativar conta</p>
              <CheckButton checked={false} onChange={() => ({})} />
            </RowForm>

            <RowForm>
              <div>
                <h3>Ativa desde de</h3>
                <p>00/00/00</p>
              </div>

              <div>
                <h3>Inativa desde de</h3>
                <p>00/00/00</p>
              </div>
            </RowForm>
          </>
        )}

        {activeTab === 3 && (
          <>
            <RowForm>
              <div>
                <h3>Iniciado em:</h3>
              </div>

              <div>
                <input type="date" placeholder="00/00/00" />
              </div>
            </RowForm>

            <RowForm>
              <div>
                <h3>Consultas realizadas:</h3>
              </div>

              <div>
                <input type="number" placeholder="00" />
              </div>
            </RowForm>

            <RowForm>
              <div>
                <h3>Faltas:</h3>
              </div>

              <div>
                <input type="number" placeholder="00" />
              </div>
            </RowForm>

            <RowForm>
              <div>
                <h3>Consultas previstas</h3>
              </div>

              <div>
                <input type="number" placeholder="00" />
              </div>
            </RowForm>
          </>
        )}

        {/* end */}
        <Flex css={{ marginTop: 25, justifyContent: "flex-end" }}>
          <DialogClose asChild>
            <Button variant="save">Salvar cadastro</Button>
          </DialogClose>
        </Flex>
        <DialogClose asChild>
          <IconButton aria-label="Close">
            <Cross2Icon />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
