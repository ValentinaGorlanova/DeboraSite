import { createContext, useContext, ReactElement, useState } from "react";

interface CalendarContextType {
  currentDate: Date;
  selectDayOfWeek: string;
  handleChangeDay: (value: number, option: string) => void;
  handleChangeMonthWithClick: (monthNumber: number) => void;
  handleChangeWeekWithClick: (weekDayNumber: number, monthNumber: number) => void;
  handleSelectDayOfWeek: (selectedValue: string) => void;
}

const defaultCalendarContext: CalendarContextType = {
  currentDate: new Date(0, 0, 0),
  selectDayOfWeek: "week",

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleChangeDay: (value: number, option: string) => {},

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleChangeMonthWithClick: (monthNumber: number) => {},

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleChangeWeekWithClick: (weekDayNumber: number, monthNumber: number) => {},

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleSelectDayOfWeek: (selectedValue: string) => {},
};

const CalendarContext = createContext<CalendarContextType>(defaultCalendarContext);

export function useCalendarContext() {
  return useContext(CalendarContext);
}

interface CalendarContextProviderType {
  children?: ReactElement;
}

export function CalendarContextProvider({ children }: CalendarContextProviderType) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectDayOfWeek, setSelectDayOfWeek] = useState("week");

  function handleSelectDayOfWeek(selectedValue: string) {
    setSelectDayOfWeek(selectedValue);
  }

  function handleChangeDay(value: number, option: string) {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    if (option === "day") newDate.setDate(currentDate.getDate() + value);
    if (option === "month") newDate.setMonth(currentDate.getMonth() + value);
    if (option === "week") newDate.setDate(currentDate.getDate() + value);

    setCurrentDate(newDate);
  }

  function handleChangeMonthWithClick(monthNumber: number) {
    const newDate = new Date(currentDate.getFullYear(), monthNumber, currentDate.getDate());
    setCurrentDate(newDate);
  }

  function handleChangeWeekWithClick(weekDayNumber: number, monthNumber: number) {
    const newDate = new Date(currentDate.getFullYear(), monthNumber, weekDayNumber);
    setCurrentDate(newDate);
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const provideValues = {
    currentDate,
    selectDayOfWeek,
    handleChangeDay,
    handleSelectDayOfWeek,
    handleChangeMonthWithClick,
    handleChangeWeekWithClick,
  };

  return <CalendarContext.Provider value={provideValues}>{children}</CalendarContext.Provider>;
}
