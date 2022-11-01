import { ReactElement, useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";

import { IoIosArrowBack } from "react-icons/io";
import { Dialog, DialogTitle, DialogTrigger, DialogContent, DialogClose } from "../ModalTemplate";

import styles from "./styles.module.scss";

import ActionModalSelect from "./Components/ActionModalSelect";
import StartConversation from "./Components/StartConversation";
import CreateGroup from "./Components/CreateGroup";

interface MessageModalType {
  children?: ReactElement;
}

export default function MessageModal({ children }: MessageModalType) {
  const [createGroup, setCreateGroup] = useState<boolean | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        {createGroup !== null && (
          <button className={styles.backButton} onClick={() => setCreateGroup(null)}>
            <IoIosArrowBack />
          </button>
        )}

        {createGroup === null && (
          <>
            <DialogTitle>O que você deseja?</DialogTitle>
            <ActionModalSelect onSelect={(value) => setCreateGroup(value)} />
          </>
        )}

        {createGroup === false && (
          <>
            <DialogTitle>Iniciar uma conversa</DialogTitle>
            <StartConversation />
          </>
        )}

        {createGroup === true && (
          <>
            <DialogTitle>Criar um grupo</DialogTitle>
            <CreateGroup />
          </>
        )}

        <DialogClose asChild>
          <button className={styles.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
