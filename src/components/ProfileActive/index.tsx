/* eslint-disable react/prop-types */
import React, { ReactNode } from "react";
import { styled } from "@stitches/react";
import { violet } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";

import { Dialog, DialogTitle, DialogTrigger, DialogClose, DialogContent } from "../Modal";

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

interface ModalDataProps {
  children: ReactNode;
}

const Message = styled("p", {
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "18px",
  textAlign: "center",
});

const ButtonsContainer = styled("div", {
  width: "100%",
  marginTop: "53px",

  display: "flex",
  gap: "10px",

  flexDirection: "column",
  alignItems: "center",

  "@media (min-width: 375px)": {
    flexDirection: "row",
    justifyContent: "center",
  },
});

const Button = styled("button", {
  maxWidth: "148px",
  width: "100%",
  height: "43px",
  border: "1px solid #E7975D",
  borderRadius: "8px",

  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "16px",

  background: "none",
  color: "#E7975D",

  variants: {
    variant: {
      fill: {
        background: "#E7975D",
        color: "#F7F7F7",
      },
    },
  },
});

export function ProfileActive({ children }: ModalDataProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Dasativar perfil</DialogTitle>

        <Message>Essa função vai desativar esse perfil e ele não ficara mais visível no sistema principal</Message>

        <ButtonsContainer>
          <Button>Cancelar ação</Button>
          <Button variant="fill">Desativar perfil</Button>
        </ButtonsContainer>

        {/* end */}
        <DialogClose asChild></DialogClose>
        <DialogClose asChild>
          <IconButton aria-label="Close">
            <Cross2Icon />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
