import styles from "./Button.module.scss";

interface ButtonProps {
  title: string;
  classNameStyle?: string;
}

export function Button({ title, classNameStyle }: ButtonProps) {
  return <a className={`${classNameStyle} ? ${classNameStyle} : ${styles.button}`}>{title}</a>;
}
