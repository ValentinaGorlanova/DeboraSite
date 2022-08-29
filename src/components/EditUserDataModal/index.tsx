/* eslint-disable react/prop-types */
import React, { ReactNode, useState } from "react";
import { styled } from "@stitches/react";
import { violet } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";

import DropFile from "../DropFile";

import { Dialog, DialogTitle, DialogTrigger, DialogClose, DialogContent } from "../Modal";

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
  width: "100%",
  maxWidth: "291px",
  flex: "1",
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
});

interface ModalDataProps {
  children: ReactNode;
}

const InputWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "15px 0",
  width: "100%",
});

const TabsContainer = styled("div", {
  width: "100%",
  display: "flex",
  marginTop: "24px",
  marginBottom: "42px",
  borderBottom: "1px solid #D4D4D4",
});

const SelectTabButton = styled("button", {
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  fontFamily: "Barlow",
  marginRight: "10px",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "24px",
  lineHeight: "28px",
  background: "transparent",
  border: "none",

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

const UploadsContainer = styled("div", {
  width: "343px",
  minHeight: "121px",
  border: "1px dashed #273a51",
  padding: "16px 22px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 16px",
    gap: "10px",
    width: "70px",
    height: "33px",
    border: "2px solid #e7975d",
    borderRadius: "8px",
    background: "transparent",
    cursor: "pointer",
    fontFamily: '"Barlow"',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#e7975d",
  },

  span: {
    fontFamily: '"Barlow"',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#b5b5b5",
  },
});

export function EditUserDataModal({ children }: ModalDataProps) {
  const [activeTab, setActiveTab] = useState(2);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Editar dados</DialogTitle>
        <TabsContainer>
          <SelectTabButton variant={activeTab === 1 ? "active" : "ghost"} onClick={() => setActiveTab(1)}>
            Dados principais
          </SelectTabButton>
          <SelectTabButton variant={activeTab === 2 ? "active" : "ghost"} onClick={() => setActiveTab(2)}>
            Serviços
          </SelectTabButton>
          <SelectTabButton variant={activeTab === 3 ? "active" : "ghost"} onClick={() => setActiveTab(3)}>
            Sistema
          </SelectTabButton>
          <SelectTabButton variant={activeTab === 4 ? "active" : "ghost"} onClick={() => setActiveTab(4)}>
            Pacientes
          </SelectTabButton>
        </TabsContainer>

        {activeTab === 1 && (
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

        {activeTab === 2 && (
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
