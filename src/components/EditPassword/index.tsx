import { ReactNode } from "react";
import { styled } from "@stitches/react";
import { violet } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Dialog, DialogTitle, DialogTrigger, DialogContent, DialogClose } from "../Modal";

interface PropsEditPassword {
  children: ReactNode;
}

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

const BodyModal = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "32px",

  div: {
    width: "90%",
  },

  p: {
    width: "100%",
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    marginBottom: "12px",
  },
});

const InputModal = styled("input", {
  width: "100%",
  height: "50px",
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontSize: "16px",
  border: "1px solid #273A51",
  borderRadius: "12px",
  paddingLeft: "12px",
  outline: "none",
});

const ButtonSave = styled("button", {
  maxWidth: "165px",
  width: "100%",
  padding: "12px",

  fontWeight: "600",
  cursor: "pointer",

  color: "#f7f7f7",
  borderRadius: "8px",
  border: "none",
  background: "#e7975d",

  "&:hover": { transform: "scale(0.98)" },
});

export default function EditPassword({ children }: PropsEditPassword) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Alterar senha</DialogTitle>

        <BodyModal>
          <div>
            <p>Digite sua senha atual</p>
            <InputModal type="text" placeholder="Sua senha atual" />
          </div>

          <div>
            <p>Confirme sua senha atual</p>
            <InputModal type="text" placeholder="Sua senha atual" />
          </div>

          <ButtonSave>Confirmar senha</ButtonSave>
        </BodyModal>

        <DialogClose asChild>
          <IconButton aria-label="Close">
            <Cross2Icon />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
