import { useCallback, useState } from "react";
import Link from "next/link";
import { AiFillEye, AiFillEyeInvisible, AiOutlineExclamationCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import styles from "./styles.module.scss";

import { tryLoginUser } from "@/services/auth";
// import googleLoginAccount from "@/services/firebase/googleAuth";
// import facebookLoginAccount from "@/services/firebase/facebookAuth";

import { useUserContext } from "@/lib/UserContext";

interface FormProps {
  email: string;
  password: string;
}

export function Login() {
  const [showPass, setShowPass] = useState(false);
  const [textPassword, setTextPassword] = useState("");
  const [textEmail, setTextEmail] = useState("");

  const router = useRouter();
  const { setUserData } = useUserContext();

  const schema = yup
    .object({
      email: yup.string().required("E-mail não pode ser vazio").email("Digite um e-mail válido"),
      password: yup.string().required("Digite sua senha"),
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

  const showPassword = useCallback(() => {
    if (textPassword) {
      setShowPass(!showPass);
    }
  }, [textPassword, showPass]);

  async function onSubmit(data: FormProps) {
    const notification = toast.loading("Fazendo login...", {
      style: {
        height: "50px",
        fontSize: "15px",
        fontFamily: "Barlow",
      },
    });
    try {
      await tryLoginUser(data);
      router.push("/admin/dashboard");

      toast.success("Login feito com sucesso!", {
        id: notification,
      });
    } catch (err) {
      toast.error("Ops! Email ou senha incorretos! Tente novamente!", {
        id: notification,
      });
    }
    // router.push("/admin/dashboard");
  }

  async function handleLoginWithGoogle() {
    const notification = toast.loading("Fazendo login...", {
      style: {
        height: "50px",
        fontSize: "15px",
        fontFamily: "Barlow",
      },
    });

    try {
      const userData = await googleLoginAccount();

      setUserData({
        displayName: userData.displayName,
        photoURL: userData.photoURL,
        uid: userData.uid,
      });

      router.push("/admin/dashboard");
      toast.success("Login feito com sucesso!", {
        id: notification,
      });
    } catch (err) {
      toast.error("Ops! Erro ao fazer login com conta do Google! Tente novamente!", {
        id: notification,
      });
    }
  }

  async function handleLoginWithFacebook() {
    const notification = toast.loading("Fazendo login...", {
      style: {
        height: "50px",
        fontSize: "15px",
        fontFamily: "Barlow",
      },
    });

    try {
      const userData = await facebookLoginAccount();
      setUserData({
        displayName: userData.displayName,
        photoURL: userData.photoURL,
        uid: userData.uid,
      });

      router.push("/admin/dashboard");
      toast.success("Login feito com sucesso!", {
        id: notification,
      });
    } catch (err) {
      toast.error("Ops! Erro ao fazer login com conta do Google! Tente novamente!", {
        id: notification,
      });
    }
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
        {/* <form onSubmit={onSubmit}> */}
          <h1>Faça seu login</h1>

          <label>
            Digite seu email
            <input
              type="text"
              className={errors.email && !textEmail ? `${styles.inputError}` : ""}
              placeholder="Digite seu email"
              {...register("email")}
              onChange={(e) => setTextEmail(e.target.value)}
            />
            {errors?.email && !textEmail ? <AiOutlineExclamationCircle className={styles.iconErrorEmailSVG} /> : ""}
            {errors.email && <span className={styles.spanError}>{errors.email?.message}</span>}
          </label>

          <label>
            Digite sua senha
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

          <Link href="/login/send-email">
            <a className={styles.linkRecover}>Esqueceu sua senha?</a>
          </Link>
          {/* <Link href="/admin/dashboard"> */}
            <button type="submit" className={styles.buttonLogin} onClick={() => onSubmit}>
              Entrar
            </button>
          {/* </Link> */}
          <p>Ou entre com</p>

          <div className={styles.loginAlternative}>
            <a href="#" onClick={handleLoginWithGoogle}>
              <img src="/google.svg" alt="ícone do Google" /> Google
            </a>
            <a href="#" onClick={handleLoginWithFacebook}>
              <img src="/facebook.svg" alt="ícone do Facebook" /> Facebook
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
