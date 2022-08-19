export interface DayCard {
  name: string;
  doctor: string;
  date: string;
  hour: string;
  hourEnd: string;
  ckecked: boolean;
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
      { name: "Gabriela Silva", doctor: "Debora Serafim", date: "16/08/2022", hour: "09h00", hourEnd: "09h40", ckecked: false },
      { name: "João Silva", doctor: "Debora Serafim", date: "16/08/2022", hour: "09h00", hourEnd: "09h40", ckecked: false },
      { name: "Marcos Moura", doctor: "Debora Serafim", date: "16/08/2022", hour: "09h00", hourEnd: "09h40", ckecked: false },
    ],
    18: [{ name: "Alexandre Silva", doctor: "Debora Serafim", date: "18/08/2022", hour: "09h00", hourEnd: "09h40", ckecked: false }],
    20: [{ name: "Jose Maria", doctor: "Debora Serafim", date: "20/08/2022", hour: "09h00", hourEnd: "09h40", ckecked: false }],
    30: [{ name: "Dolores", doctor: "Debora Serafim", date: "30/08/2022", hour: "09h00", hourEnd: "09h40", ckecked: false }],
  },
  8: {},
  9: {},
  10: {},
  11: {},
};
