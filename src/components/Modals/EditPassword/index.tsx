import { ReactNode } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Dialog, DialogTitle, DialogTrigger, DialogContent, DialogClose } from "../ModalTemplate";

import styles from "./styles.module.scss";

interface PropsEditPassword {
  children: ReactNode;
}

export default function EditPassword({ children }: PropsEditPassword) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Alterar senha</DialogTitle>

        <div className={styles.BodyModal}>
          <div>
            <p>Digite sua senha atual</p>
            <input className={styles.InputModal} type="text" placeholder="Sua senha atual" />
          </div>

          <div>
            <p>Confirme sua senha atual</p>
            <input className={styles.InputModal} type="text" placeholder="Sua senha atual" />
          </div>

          <button className={styles.ButtonSave}>Confirmar senha</button>
        </div>

        <DialogClose asChild>
          <button className={styles.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
