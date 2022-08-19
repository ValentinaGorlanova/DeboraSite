import React, { createContext, useContext, useState } from "react";

interface TimeType {
  start: string;
  end: string;
  interval: string;
  sectionTime: string;
}

interface ConfigContextType {
  showQueryStatus: boolean;
  time: TimeType;

  setShowQueryStatus: (value: boolean) => void;
  setTimeStart: (value: string) => void;
  setTimeEnd: (value: string) => void;
  setTimeInterval: (value: string) => void;
  setSectionTime: (value: string) => void;
}

const defaultConfigContent: ConfigContextType = {
  showQueryStatus: false,
  time: {
    start: "00:00",
    end: "00:00",
    interval: "30",
    sectionTime: "50",
  },

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setShowQueryStatus: (value: boolean) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTimeStart: (value: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTimeEnd: (value: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTimeInterval: (value: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSectionTime: (value: string) => {},
};

const ConfigContext = createContext<ConfigContextType>(defaultConfigContent);

export function useConfigContext() {
  return useContext(ConfigContext);
}

interface PropsType {
  children?: React.ReactElement;
}

export function ConfigContextProvider({ children }: PropsType) {
  const [showQueryStatus, setShowQueryStatus] = useState(false);
  const [time, setTime] = useState<TimeType>({
    start: "07:00",
    end: "17:00",
    interval: "60",
    sectionTime: "50",
  });

  function setShowQueryStatusContext(value: boolean) {
    setShowQueryStatus(value);
  }

  function setTimeStart(value: string) {
    setTime({
      ...time,
      start: value,
    });
  }

  function setTimeEnd(value: string) {
    setTime({
      ...time,
      end: value,
    });
  }

  function setTimeInterval(value: string) {
    setTime({
      ...time,
      interval: value,
    });
  }

  function setSectionTime(value: string) {
    setTime({
      ...time,
      sectionTime: value,
    });
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const providerContext = {
    showQueryStatus,
    time,
    setShowQueryStatus: setShowQueryStatusContext,
    setTimeStart,
    setTimeEnd,
    setTimeInterval,
    setSectionTime,
  };

  return <ConfigContext.Provider value={providerContext}>{children}</ConfigContext.Provider>;
}
