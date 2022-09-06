export interface ConfigType {
  showQueryStatus: boolean;
  time: {
    start: string;
    end: string;
    interval: string;
    sectionTime: string;
  };
}

export function writeValues(config: object) {
  window.localStorage.setItem("config", JSON.stringify(config));
}

export function getValues(): ConfigType | null {
  const stringConfig = window.localStorage.getItem("config");

  if (!stringConfig) return null;

  const configObject = JSON.parse(stringConfig);
  return configObject;
}
