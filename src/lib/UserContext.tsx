import { createContext, useContext, ReactElement, useState, useEffect } from "react";

import { getUserData, saveUserData } from "@/services/saveUserData";

interface UserDataType {
  displayName: string;
  photoURL: string;
  uid: string;
}

interface UserContextType {
  userData: UserDataType;
  setUserData: (userLoginValue: UserDataType) => void;
}

const defaultUserContext: UserContextType = {
  userData: {
    displayName: "",
    photoURL: "",
    uid: "",
  },

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserData: (userLoginValue: UserDataType) => {},
};

const UserContext = createContext<UserContextType>(defaultUserContext);

export function useUserContext() {
  return useContext(UserContext);
}

interface UserContextProviderType {
  children?: ReactElement;
}

export function UserContextProvider({ children }: UserContextProviderType) {
  const [currentUserData, setCurrentUserData] = useState<UserDataType>({
    displayName: "",
    photoURL: "",
    uid: "",
  });

  function setUserData(userLoginValue: UserDataType) {
    saveUserData(userLoginValue);
    setCurrentUserData(userLoginValue);
  }

  useEffect(() => {
    const userDataStorage = getUserData();

    if (userDataStorage) setCurrentUserData(userDataStorage);
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const providerValues: UserContextType = {
    userData: { ...currentUserData },
    setUserData,
  };

  return <UserContext.Provider value={providerValues}>{children}</UserContext.Provider>;
}
