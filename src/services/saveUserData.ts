interface UserDataType {
  displayName: string;
  photoURL: string;
  uid: string;
}

export function saveUserData(user: UserDataType) {
  globalThis.localStorage.setItem("userData", JSON.stringify(user));
}

export function getUserData() {
  const userStringObject = globalThis.localStorage.getItem("userData");

  if (!userStringObject) return null;

  return JSON.parse(userStringObject);
}
