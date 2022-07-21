/* eslint-disable react/prop-types */
import { ReactNode, useState } from "react";
import { styled, keyframes } from "@stitches/react";
import { violet, blackA } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { RiUser3Fill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import UseAnimations from "react-useanimations";
import radioButton from "react-useanimations/lib/radioButton";

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
  width: "100%",
  maxWidth: "696px",

  padding: 25,
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

const LabelData = styled("span", {
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "26px",
  color: "#1E1E1E",

  variants: {
    variant: {
      check: {
        fontFamily: "Barlow",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "26px",
        color: "#1E1E1E",
      },
      small: {
        fontFamily: "Barlow",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "14px",
        display: "flex",
        alignItems: "center",
        color: "#1E1E1E",
      },
    },
  },
});

const DataWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  margin: "10px 0",
  gap: "5px",

  variants: {
    size: {
      small: {
        // margin: "0",
      },
    },
  },
});

const SubTitle = styled("p", {
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "26px",
  color: "#1E1E1E",
  marginBottom: "16px",
});

// const Checkbox = styled("input", {
//   display: "none",
//   "&:checked": {
//     content: '""',
//     backgroundImage: 'url("/iconChecked.svg")',
//     backgroundRepeat: "no-repeat",
//     border: "1px solid #d78950",
//     backgroundSize: "15px 11px",
//     backgroundPosition: "2px 2px",
//     borderRadius: "4px",
//   },
// });

const Flex = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  variants: {
    position: {
      center: {
        alignItems: "center",
        justifyContent: "center",
      },
    },
  },
});

const DateAndHourContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "235px",
  height: "202px",
  background: "#F7F7F7",
  border: "2px solid #D4D4D4",
  borderRadius: "8px",
  paddingLeft: "16px",
  paddingTop: "24px",
  // alignItems: "center",
});

const AsideCardTitle = styled("span", {
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "26px",
  display: "flex",
  color: "#1E1E1E",
  alignItems: "center",
  justifyContent: "center",
});

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
      outline: {
        background: "transparent",
        color: "#E7975D",
        border: "2px solid #E7975D",
      },
    },
  },
});

function NewRequestModal({ children }: DialogProps) {
  const [step, setStep] = useState(1);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      {step === 1 ? (
        <DialogContent>
          <DialogTitle>Detalhes da solicitação</DialogTitle>
          <Flex>
            <div>
              <SubTitle>Informacoes pessoais</SubTitle>
              <DataWrapper>
                <RiUser3Fill size={24} color="#3A4D65" />
                <LabelData>Nome: Gabriela Silva</LabelData>
              </DataWrapper>
              <DataWrapper>
                <IoMdMail size={24} color="#3A4D65" />
                <LabelData>Email: gabriela_silva@gmail.com</LabelData>
              </DataWrapper>
              <DataWrapper>
                <BsFillTelephoneFill size={24} color="#3A4D65" />
                <LabelData>Telefone: (11) 98453 7532</LabelData>
              </DataWrapper>
              <DataWrapper>
                <LabelData>Idade: 30</LabelData>
              </DataWrapper>
              <SubTitle>Motivos selecionados</SubTitle>
              <DataWrapper>
                <input type="checkbox" />
                <LabelData variant="check">Ansiedade</LabelData>
              </DataWrapper>
              <DataWrapper>
                <input type="checkbox" />
                <LabelData variant="check">Fobia Social</LabelData>
              </DataWrapper>
            </div>
            <DateAndHourContainer>
              <AsideCardTitle>Data e Horario</AsideCardTitle>
              <DataWrapper size="small">
                <IoMdMail size={18} color="#3A4D65" />
                <LabelData variant="small">Quarta, 01 Maio 2022</LabelData>
              </DataWrapper>
              <DataWrapper size="small">
                <AiFillClockCircle size={18} color="#3A4D65" />
                <LabelData variant="small">Horario: 14h00</LabelData>
              </DataWrapper>
              <DataWrapper size="small">
                <AiFillClockCircle size={18} color="#3A4D65" />
                <LabelData variant="small">Online</LabelData>
              </DataWrapper>
              <DataWrapper size="small">
                <LabelData variant="small">Primeira consulta</LabelData>
              </DataWrapper>
            </DateAndHourContainer>
          </Flex>
          <DialogClose asChild>
            <IconButton aria-label="Close">
              <Cross2Icon />
            </IconButton>
          </DialogClose>
          <ButtonsContainer>
            <ButtonsModal type="button" variant="filled" onClick={() => setStep(2)}>
              Aceitar solicitacao
            </ButtonsModal>
            <ButtonsModal type="button" variant="outline">
              Entrar em contato
            </ButtonsModal>
          </ButtonsContainer>
        </DialogContent>
      ) : (
        <DialogContent>
          <DialogTitle>Solicitacao aceita</DialogTitle>
          <Flex position="center" css={{ marginBottom: "20px" }}>
            <UseAnimations animation={radioButton} size={46} autoplay />
          </Flex>
          <DialogClose asChild onClick={() => setStep(1)}>
            <IconButton aria-label="Close">
              <Cross2Icon />
            </IconButton>
          </DialogClose>
          <ButtonsContainer>
            <a href="/admin/calendar">
              <ButtonsModal type="button" variant="filled">
                Ir para agenda
              </ButtonsModal>
            </a>
          </ButtonsContainer>
        </DialogContent>
      )}
    </Dialog>
  );
}

export default NewRequestModal;
