interface DayType {
  key: number;
  dayNumber: number;
  grayColor: boolean;
}

const numberMaxDayOfMonth = [
  31, // JANEIRO
  28, // FEVEREIRO
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
