export interface DayCard {
  name: string;
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
      { name: "Gabriel Silva", hour: "09h00", hourEnd: "09h40", ckecked: false },
      { name: "Gabriel Silvas", hour: "09h00", hourEnd: "09h40", ckecked: false },
      { name: "Gabriel Silva1", hour: "09h00", hourEnd: "09h40", ckecked: false },
    ],
    18: [{ name: "Gabriel Silva", hour: "09h00", hourEnd: "09h40", ckecked: false }],
  },
  8: {},
  9: {},
  10: {},
  11: {},
};
