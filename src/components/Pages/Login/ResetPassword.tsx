import { useCallback, useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiOutlineExclamationCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./styles.module.scss";

interface FormProps {
  password: string;
  passwordConfirm: string;
}

export function ResetPassword() {
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [textPassword, setTextPassword] = useState("");
  const [textPasswordConfirmation, setTextPasswordConfirmation] = useState("");
  const schema = yup
    .object({
      password: yup.string().required("Digite sua nova senha").min(6, "A senha deve conter pelo menos 6 digitos"),
      passwordConfirm: yup
        .string()
        .required("Confirme sua nova senha")
        .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    })
    .required();

  // .oneOf(["password"], "As senhas devem ser iguais")

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

  const showPassword = useCallback(() => {
    if (textPassword) {
      setShowPass(!showPass);
    }
  }, [textPassword, showPass]);

  const showPasswordConfirmation = useCallback(() => {
    if (textPasswordConfirmation) {
      setShowPassConfirm(!showPassConfirm);
    }
  }, [textPasswordConfirmation, showPassConfirm]);

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

      {/* <ModalLogin /> */}

      <div className={styles.modalLogin}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Definir nova senha</h1>

          <label>
            Digite sua nova senha
            <input
              className={errors.password && !textPassword ? `${styles.inputError}` : ""}
              type={showPass ? "text" : "password"}
              {...register("password")}
              placeholder="Digite sua senha"
              value={textPassword}
              onChange={(e) => setTextPassword(e.target.value)}
            />
            {errors?.password ? <span className={styles.spanError}>{errors.password?.message}</span> : ""}
            <button type="button" className={styles.iconEye} onClick={showPassword}>
              {errors?.password && !textPassword ? <AiOutlineExclamationCircle className={styles.iconErrorSVG} /> : ""}
              {showPass ? <AiFillEyeInvisible className={styles.iconEyeSVG} /> : <AiFillEye className={styles.iconEyeSVG} />}
            </button>
          </label>

          <label>
            Confirme sua nova senha
            <input
              className={errors.passwordConfirm && !textPasswordConfirmation ? `${styles.inputError}` : ""}
              type={showPassConfirm ? "text" : "password"}
              {...register("passwordConfirm")}
              placeholder="Confirme sua nova senha"
              value={textPasswordConfirmation}
              onChange={(e) => setTextPasswordConfirmation(e.target.value)}
            />
            {errors?.passwordConfirm ? <span className={styles.spanError}>{errors.passwordConfirm?.message}</span> : ""}
            <button type="button" className={styles.iconEye} onClick={showPasswordConfirmation}>
              {errors?.passwordConfirm && !textPasswordConfirmation ? <AiOutlineExclamationCircle className={styles.iconErrorSVG} /> : ""}
              {showPassConfirm ? <AiFillEyeInvisible className={styles.iconEyeSVG} /> : <AiFillEye className={styles.iconEyeSVG} />}
            </button>
          </label>

          <button type="submit" className={styles.buttonLogin} onClick={() => onSubmit}>
            Enviar nova senha
          </button>
        </form>
      </div>
    </div>
  );
}
