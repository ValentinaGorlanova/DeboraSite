import { useRef, useState } from "react";

import styles from "../../style.module.scss"
import { styled } from "@stitches/react";

import { DialogTitle,  DialogContent } from "@/components/Modals/ModalTemplate";
import { DropDown } from "@/components/Modals/ModalTemplate/DropdownElement/ModalDropDown";

export const info = [
    {
      id: "profissional",
      name: "Profissional",
      options: ["Débora Barros", "Ana Cardoso", "Miguel Faria", "Carla Vieira"],
    },
    {
      id: "atendimento",
      name: "Atendimento",
      options: ["Psicólogo", "Clinico Geral", "Oftalmologista", "Psiquitra"],
    },
  ]

  const inputs = [
    {
      id: "name",
      label: "Nome Completo",
      placeholder: "Nome completo",
      placeholderIfEmpty: "Nome Completo",
      style: {"width": "100%"},
    },
    {
      id: "birthday",
      label: "Data de nascimento",
      placeholder: "00/00/00",
      placeholderIfEmpty: "00/00/00",
      style: {"width": "98px"},
    },
    {
      id: "age",
      label: "Idade",
      placeholder: "00",
      placeholderIfEmpty: "00",
      style: {"width": "23px"},
    },
    {
      id: "gender",
      label: "Gênero",
      placeholder: "Gênero",
      placeholderIfEmpty: "Gênero",
      style: {"width": "64px"},
    },
    {
      id: "status",
      label: "Estado Civil",
      placeholder: "Estado civil",
      placeholderIfEmpty: "informe estado civil",
      style: {"width": "100%"},
    },
    {
      id: "prof",
      label: "Profissão",
      placeholder: "Profissão",
      placeholderIfEmpty: "informe profissão",
      style: {"width": "100%"},
    },

    
  ]

  const Flex = styled("div", { 
    display: "flex" ,
    maxWidth: "370px",
    margin: "32px auto 0"
  });

  interface ModalProps {
    handleClick: () => void;
  }


export default function PacienteData ({handleClick}: ModalProps) {

  const inputEls = useRef(new Array());

  const onButtonClick = () => {
    const inputs = inputEls.current
    inputs.forEach((inputEl => {
      inputEl && inputEl.value === '' ? inputEl.classList.add("require") : null
      setIsEmpty(true)
    }))   
  };
  
  const onChangeInp = () => {
    const inputs = inputEls.current
    inputs.forEach((inputEl => {
      inputEl && inputEl.value !== '' ? inputEl.classList.remove("require") : null
    }))  
  };

  const [isEmpty, setIsEmpty] = useState(false)

    return(
        <DialogContent>
            <DialogTitle>Novo Paciente</DialogTitle>
            <div className={styles.TabsContainer}>
            <button className={`${styles.SelectTabButton} ${styles.active}`}>
            Dados principais
            </button>
            </div>
            {info.map((select, i) => <DropDown select={select} i={select.id} paddingSides="0 80px"/>)}

            {inputs.map((input, i) => {
              return ( 
                <div className={styles.InputWrapper} key={input.id}>
                    <label className={styles.Label} htmlFor={input.id}>
                    {input.label}
                    </label>
                    <input className={styles.Input} 
                    type="text" id={input.id} 
                    style={input.style}
                    placeholder={isEmpty ? input.placeholderIfEmpty : input.placeholder}
                    ref={(input) => inputEls.current.push(input)}
                    onChange={onChangeInp} />
                </div>
              )}
            )}
            
            <Flex css={{ justifyContent: "space-between" }}>         
          
              <button className={styles.Button2}
              onClick={handleClick}
              >Cancelar</button>
            
              <button className={styles.Button}
              onClick={onButtonClick}
              >Adicionar</button>
            </Flex>
          </DialogContent>
    )
}