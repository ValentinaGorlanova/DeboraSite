export interface DayCard {
  name: string;
  doctor: string;
  date: string;
  hour: string;
  hourEnd: string;
  ckecked: boolean;
  mode: string;
  query: string;
  status: string;
}

export interface ObjectType {
  [index: number]: { [index: number]: Array<DayCard> };
}

export const object: ObjectType = {
  0: {},
  1: {},
  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
  7: {
    16: [
      {
        name: "Gabriela Silva",
        doctor: "Debora Serafim",
        date: "16/08/2022",
        hour: "09h00",
        hourEnd: "09h50",
        ckecked: false,
        status: "Confirmado",
        query: "Primeira consulta",
        mode: "Presencial",
      },
      {
        name: "João Silva",
        doctor: "Debora Serafim",
        date: "16/08/2022",
        hour: "09h00",
        hourEnd: "09h50",
        ckecked: false,
        status: "Cancelado",
        query: "Segunda consulta",
        mode: "Presencial",
      },
      {
        name: "Marcos Moura",
        doctor: "Debora Serafim",
        date: "16/08/2022",
        hour: "09h00",
        hourEnd: "09h50",
        ckecked: false,
        status: "Confirmado",
        query: "Primeira consulta",
        mode: "Presencial",
      },
    ],
    18: [
      {
        name: "Alexandre Silva",
        doctor: "Debora Serafim",
        date: "18/08/2022",
        hour: "09h00",
        hourEnd: "09h50",
        ckecked: false,
        status: "Cancelado",
        query: "Quarta consulta",
        mode: "Online",
      },
    ],
    20: [
      {
        name: "Jose Maria",
        doctor: "Debora Serafim",
        date: "20/08/2022",
        hour: "09h00",
        hourEnd: "09h50",
        ckecked: false,
        status: "Confirmado",
        query: "Primeira consulta",
        mode: "Online",
      },
    ],
    30: [
      {
        name: "Dolores",
        doctor: "Debora Serafim",
        date: "30/08/2022",
        hour: "09h00",
        hourEnd: "09h50",
        ckecked: false,
        status: "Confirmado",
        query: "Primeira consulta",
        mode: "Online",
      },
    ],
  },
  8: {},
  9: {},
  10: {},
  11: {},
};
