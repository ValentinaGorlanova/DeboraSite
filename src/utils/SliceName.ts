export function sliceName(name: string | undefined) {
  if (!name) return "";
  const splitName = name.split(" ");
  const lastName = splitName.length > 1 ? ` ${splitName[1].slice(0, 2)}.` : "";

  return `${splitName[0]}${lastName}`;
}
