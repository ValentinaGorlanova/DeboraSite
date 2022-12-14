/* eslint-disable react/prop-types */
import { ReactNode, useState } from "react";
import { styled } from "@stitches/react";
import { violet } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";
import { AiOutlineWhatsApp } from "react-icons/ai";

import { DayCard } from "../Pages/CalendarContent/Content/mocks";
import { Dialog, DialogTitle, DialogTrigger, DialogClose, DialogContent } from "../Modal";
import SelectStatus from "../SelectStatus";

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

  "@media (max-width: 425px)": {
    select: {
      fontWeight: "400",
      fontSize: "14px",
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

  "@media (max-width: 425px)": {
    fontSize: "16px",
    fontWeight: "400",
  },
});

const Flex = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "20px",

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
  marginTop: "20px",

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
  width: "100%",
  flexWrap: "wrap",
  gap: "20px",

  div: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    div: {
      width: "14px",
      height: "3px",
      borderRadius: "5px",
      background: "#273A51",
    },
  },

  "@media (max-width: 425px)": {
    input: {
      fontWeight: "600",
      fontSize: "14px",
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

const RadioLabel = styled("span", {
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "20px",
  lineHeight: "26px",
  color: "#1E1E1E",
  marginLeft: "8px",
  marginRight: "20px",

  "@media (max-width: 425px)": {
    fontWeight: "400",
    fontSize: "14px",
  },
});

const StatusLabel = styled("span", {
  fontFamily: "Barlow",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "26px",
  color: "#1E1E1E",
  display: "flex",
  alignItems: "center",
  gap: "10px",

  "@media (max-width: 425px)": {
    fontSize: "16px",
    fontWeight: "400",
  },
});

const RadioContainer = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  fontSize: "16px",
  gap: "10px",
});

interface DialogProps {
  children: ReactNode;
  dataQuery: DayCard;
}

function EditAppointmentModal({ children, dataQuery }: DialogProps) {
  const [step, setStep] = useState(1);

  const splitDate = dataQuery.date.split("/");
  const startHour = dataQuery.hour.replace("h", ":");
  const endHour = dataQuery.hourEnd.replace("h", ":");

  return (
    <Dialog>
      <DialogTrigger asChild style={{ cursor: "pointer" }}>
        {children}
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Editar consulta</DialogTitle>
        <Flex>
          <div>
            <SubTitle>Quem e o cliente dessa sess??o?</SubTitle>
            <DataWrapper>
              <LabelData>{dataQuery.name}</LabelData>
              <AiOutlineWhatsApp size={24} color="#3A4D65" />
            </DataWrapper>
          </div>

          <div>
            <DataWrapper>
              <SubTitle>Quem e o profissional?</SubTitle>
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
          </div>

          <DataWrapper direction="column">
            <SubTitle>Data e Horario</SubTitle>
            <InputsWrapper>
              <DateInput type="date" id="start" name="date" value={`${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`} />

              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <HourInput type="time" id="start" name="start" value={startHour} />
                <div />
                <HourInput type="time" id="end" name="end" value={endHour} />
              </div>
            </InputsWrapper>
          </DataWrapper>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginBottom: "10px" }}>
            <SubTitle>Essa consulta ser??:</SubTitle>
            <form>
              <input type="radio" id="Presencial" name="Presencial" value="Presencial" />
              <RadioLabel>Presencial</RadioLabel>
              <input type="radio" id="Online" name="Online" value="Online" />
              <RadioLabel>Online</RadioLabel>
            </form>
          </div>

          <RadioContainer>
            <div>
              <input type="radio" id="Online" name="Online" value="Online" />
              <RadioLabel>Atualizar somente essa consulta</RadioLabel>
            </div>

            <div>
              <input type="radio" id="Online" name="Online" value="Online" />
              <RadioLabel>Atualizar todas as recorrencias</RadioLabel>
            </div>
          </RadioContainer>

          <div style={{ marginTop: "20px" }}>
            <StatusLabel>
              Status de consulta:
              <SelectStatus toTop />
            </StatusLabel>
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
              Salvar alterac??es
            </ButtonsModal>
          </ButtonsContainer>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export default EditAppointmentModal;
