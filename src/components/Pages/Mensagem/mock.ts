export interface MessageType {
  left: boolean;
  message: string;
  hour: string;
}

export interface UserDataType {
  activate?: boolean;
  messageCount?: number;
  userName: string;
  hour: string;
  oldMessage: string;

  messages: Array<MessageType>;
}

export const users: Array<UserDataType> = [
  {
    messageCount: 1,
    oldMessage: "oiii",
    userName: "Gabriela Silva",
    hour: "14:00",
    messages: [
      { left: false, message: "Oi, tudo bem?", hour: "10:00" },
      { left: true, message: "Oi, tudo! E você?", hour: "11:00" },
      { left: false, message: "Que bom!", hour: "11:01" },
      { left: false, message: "Oi, tudo bem?", hour: "10:00" },
      { left: true, message: "Oi, tudo! E você?", hour: "11:00" },
      { left: false, message: "Que bom!", hour: "11:01" },
      { left: false, message: "Oi, tudo bem?", hour: "10:00" },
      { left: true, message: "Oi, tudo! E você?", hour: "11:00" },
      { left: false, message: "Que bom!", hour: "11:01" },
    ],
  },
  {
    messageCount: 10,
    oldMessage: "oiii",
    userName: "Gabriela Silva",
    hour: "14:00",
    messages: [
      { left: false, message: "Oiiii", hour: "10:00" },
      { left: true, message: "Olaaaaa", hour: "11:00" },
      { left: false, message: "tchau!!!!", hour: "11:01" },
    ],
  },
  {
    oldMessage: "ola",
    userName: "João Perreira",
    hour: "Ontem",
    messages: [
      { left: true, message: "Oi João, tudo bem?", hour: "10:00" },
      { left: false, message: "Oi, tudo! E você?", hour: "11:00" },
      { left: true, message: "Que bom!", hour: "11:01" },
    ],
  },
  {
    oldMessage: "tudo bem e você?",
    userName: "Gaby Silva",
    hour: "10:30",
    messages: [
      { left: true, message: "Oi Gaby, tudo bem?", hour: "10:00" },
      { left: true, message: "Oi, tudo! E você?", hour: "11:00" },
      { left: true, message: "Que bom!", hour: "11:01" },
    ],
  },
];
