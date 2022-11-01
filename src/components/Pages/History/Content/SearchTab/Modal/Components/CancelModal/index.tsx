import styles from "../../style.module.scss"
import { styled } from "@stitches/react";

import { DialogContent, DialogClose } from "@/components/Modals/ModalTemplate";

  const Flex = styled("div", { 
    display: "flex" ,
    maxWidth: "370px",
    margin: "32px auto 0"
  });

  interface ModalProps {
    handleClick: () => void;
  }

export default function CancelModal ({handleClick}: ModalProps) {
    return(
        <DialogContent>
            <div className={styles.container}>
                <h3>
                Tem certeza que deseja cancelar?
                </h3>

                <h4>
                as informações não serão salvas
                </h4>
            </div>

            <Flex css={{ justifyContent: "space-between" }}>         
                <button className={styles.Button2}
                onClick={handleClick}>Voltar</button>
                <DialogClose asChild>
                    <button className={styles.Button}
                    onClick={handleClick} >Cancelar
                    </button>
                </DialogClose>
            </Flex>
        </DialogContent>
    )
} 

