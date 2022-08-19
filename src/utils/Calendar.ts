interface DayType {
  key: number;
  dayNumber: number;
  grayColor: boolean;
}

const numberMaxDayOfMonth = [
  31, // JANEIRO
  29, // FEVEREIRO
  31, // MARÇO
  30, // ABRIL
  31, // MAIO
  30, // JUNHO
  31, // JULHO
  31, // AGOSTO
  30, // SETEMBRO
  31, // OUTUBRO
  30, // NOVEMBRO
  31, // DEZEMBRO
];

const nameDayWeek = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

function getOldDays(date: Date) {
  const dayName = date.toLocaleDateString("pt-BR", { weekday: "long" });

  return nameDayWeek.findIndex((find) => find === dayName);
}

function getCurrentDate(date: Date) {
  const numberDayOfMonth = numberMaxDayOfMonth[date.getMonth()];

  const temp = getOldDays(date);
  const numberDayOldWeek = temp !== undefined ? temp : 0;

  return { numberDayOfMonth, numberDayOldWeek };
}

/**
 * Returna um array de objetos com os dias do mes
 */
export function getDaysOfMonth(date: Date): Array<DayType> {
  const result = [];
  const newDate = new Date(date.getFullYear(), date.getMonth(), 1);

  const { numberDayOfMonth, numberDayOldWeek } = getCurrentDate(newDate);

  for (let i = 0 - numberDayOldWeek; i < 42 - numberDayOldWeek; i += 1) {
    const nextDay = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + i);
    result.push({
      key: i,
      dayNumber: nextDay.getDate(),
      grayColor: i < 0 || i >= numberDayOfMonth,
    });
  }

  return result;
}

export function getWeek(date: Date): Array<number> {
  const week = date.toLocaleDateString("pt-BR", { weekday: "long" });
  const indexWeek = nameDayWeek.findIndex((find) => find === week);

  const result = [];

  for (let i = 0 - indexWeek; i < 7 - indexWeek; i += 1) {
    const tempDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + i);
    result.push(tempDate.getDate());
  }

  return result;
}

export function getMonthList(date: Date) {
  const nameMonth = [
    { name: "jan.", activate: false },
    { name: "fev.", activate: false },
    { name: "mar.", activate: false },
    { name: "abr.", activate: false },
    { name: "mai.", activate: false },
    { name: "jun.", activate: false },
    { name: "jul.", activate: false },
    { name: "ago.", activate: false },
    { name: "set.", activate: false },
    { name: "out.", activate: false },
    { name: "nov.", activate: false },
    { name: "dez.", activate: false },
  ];

  const month = date.toLocaleDateString("pt-BR", { month: "short" });
  const indexMonth = nameMonth.findIndex((find) => find.name === month);
  const result = indexMonth <= 5 ? nameMonth.slice(0, 6) : nameMonth.slice(6, 12);

  result[indexMonth % 6].activate = true;
  return result;
}

export function getHourOfDay(start: string, end: string, interval: string) {
  const timeStartSplit = start.split(":");
  const timeEndSplit = end.split(":");

  const startTime = new Date(0, 0, 0, Number(timeStartSplit[0]), Number(timeStartSplit[1]));
  const endTime = new Date(0, 0, 0, Number(timeEndSplit[0]), Number(timeEndSplit[1]));

  const timeInterval = Number(interval);
  const result = [];

  while (startTime <= endTime) {
    const timeStringSplit = startTime.toLocaleTimeString("pt-BR").split(":");
    result.push(`${timeStringSplit[0]}:${timeStringSplit[1]}`);

    startTime.setMinutes(startTime.getMinutes() + timeInterval);
  }

  return result;
}

export function calcTimeSection(hourInit: string, interval: string): string {
  const splitHour = hourInit.split(":");

  const hour = Number(splitHour[0]);
  const minutes = Number(splitHour[1]) + Number(interval);

  const date = new Date(0, 0, 0, hour, minutes).toLocaleTimeString("pt-BR").split(":");
  return `${date[0]}:${date[1]}`;
}
