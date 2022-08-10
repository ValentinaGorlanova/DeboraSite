/* eslint-disable react/prop-types */
import { ReactNode, useState } from "react";
import { styled, keyframes } from "@stitches/react";
import { violet, blackA } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AiOutlineWhatsApp } from "react-icons/ai";

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
  width: "90%",
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
  fontWeight: "400",
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
  alignItems: "flex-start",
  margin: "10px 0",
  gap: "5px",

  variants: {
    size: {
      small: {
        // margin: "0",
      },
    },
    direction: {
      column: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      },
    },
  },

  select: {
    // width: "248px",
    height: "44px",
    padding: "8px 12px",
    background: "#f7f7f7",
    border: "1px solid #273a51",
    borderRadius: "12px",

    fontFamily: '"Barlow"',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    color: "#273a51",
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

  "@media (max-width: 425px)": {
    fontSize: "18px",
    fontWeight: "400",
  },
});

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

const InputsWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  flexWrap: "wrap",
  gap: "20px",

  div: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    div: {
      width: "14px",
      height: "3px",
      borderRadius: "5px",
      background: "#273A51",
    },
  },
});

const HourInput = styled("input", {
  padding: "4px 8px",
  gap: "4px",

  width: "114px",
  height: "38px",
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "26px",
  color: "#273A51",
  background: "#F7F7F7",
  border: "1px solid #273A51",
  borderRadius: "12px",
});
const DateInput = styled("input", {
  padding: "4px 8px",
  gap: "4px",

  width: "159px",
  height: "50px",
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "19px",
  lineHeight: "26px",
  color: "#273A51",
  background: "#F7F7F7",
  border: "1px solid #273A51",
  borderRadius: "12px",
});

const Subtitle = styled("span", {
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "26px",
  color: "#1E1E1E",
});

const RadioLabel = styled("span", {
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "20px",
  lineHeight: "26px",
  color: "#1E1E1E",
  marginLeft: "8px",
  marginRight: "20px",
});

const StatusLabel = styled("span", {
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "26px",
  color: "#1E1E1E",
  marginTop: "20px",
  display: "flex",
  alignItems: "center",

  "&::after": {
    content: "''",
    display: "block",
    background: "#E7975D",
    borderRadius: "12px",
    width: "30px",
    marginLeft: "16px",
    height: "24px",
  },
});

const RadioContainer = styled("div", {
  width: "100%",

  "@media (max-width: 520px)": {
    display: "flex",
    flexDirection: "column",
    fontSize: "16px",
    gap: "10px",
  },
});

function EditAppointmentModal({ children }: DialogProps) {
  const [step, setStep] = useState(1);
  return (
    <Dialog>
      <DialogTrigger asChild style={{ cursor: "pointer" }}>
        {children}
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Editar consulta</DialogTitle>
        <Flex>
          <div>
            <SubTitle>Quem e o cliente dessa sessão?</SubTitle>
            <DataWrapper>
              <LabelData>Gabriel Silva</LabelData>
              <AiOutlineWhatsApp size={24} color="#3A4D65" />
            </DataWrapper>
            <DataWrapper>
              <LabelData>Quem e o profissional?</LabelData>
            </DataWrapper>
            <DataWrapper>
              <select name="options" id="options">
                <option value="" disabled selected>
                  Debora Barros
                </option>
                <option value="saab">Debora Barros</option>
                <option value="mercedes">Debora Barros</option>
                <option value="audi">Debora Barros</option>
              </select>
            </DataWrapper>
            <DataWrapper direction="column">
              <LabelData>Data e Horario</LabelData>
              <InputsWrapper>
                <DateInput type="date" id="start" name="date" />
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <HourInput type="time" id="start" name="start" />
                  <div />
                  <HourInput type="time" id="end" name="end" />
                </div>
              </InputsWrapper>
            </DataWrapper>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginBottom: "10px" }}>
              <Subtitle>Essa consulta será:</Subtitle>
              <form>
                <input type="radio" id="Presencial" name="Presencial" value="Presencial" />
                <RadioLabel>Presencial</RadioLabel>
                <input type="radio" id="Online" name="Online" value="Online" />
                <RadioLabel>Online</RadioLabel>
              </form>
            </div>

            <RadioContainer>
              <RadioLabel>
                <input type="radio" id="Online" name="Online" value="Online" />
                Atualizar somente essa consulta
              </RadioLabel>

              <RadioLabel>
                <input type="radio" id="Online" name="Online" value="Online" />
                Atualizar todas as recorrencias
              </RadioLabel>
            </RadioContainer>

            <div>
              <StatusLabel>Status de consulta:</StatusLabel>
            </div>
          </div>
        </Flex>
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
    </Dialog>
  );
}

export default EditAppointmentModal;
