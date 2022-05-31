import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./styles.module.scss";

interface FormProps {
  email: string;
  password: string;
}

export function ModalSendEmail() {
  const schema = yup
    .object({
      email: yup.string().required("E-mail não pode ser vazio").email("Digite um e-mail válido"),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    resetField,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: FormProps) {
    console.log("User: ", data);
  }

  return (
    <div className={styles.container}>
      <div className={styles.imagesLeft}>
        <img className={styles.img1} src="/imgLoginLeft1.png" alt="Figura ponto de interrogação" />
        <img src="/imgLoginLeft.png" alt="Figura de mulher sentada em um sofá azul" />
      </div>

      <img className={styles.imageRight} src="/imgLoginRight.png" alt="Figura de homem sentado em um sofá azul" />
      <div className={styles.modalLogin}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Redefinir sua senha</h1>

          <span className={styles.messageSendEmail}>Para redefinir sua senha precisamos que voce digite seu email abaixo</span>

          <label>
            Digite seu email
            <input type="text" className={errors.email ? `${styles.inputError}` : ""} placeholder="Digite seu email" {...register("email")} />
            {errors.email && <span className={styles.spanError}>{errors.email?.message}</span>}
          </label>

          <button type="submit" className={styles.buttonLogin} onClick={() => onSubmit}>
            Enviar email
          </button>
        </form>
      </div>
    </div>
  );
}
