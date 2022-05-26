/* eslint-disable no-param-reassign */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";

import toast from "react-hot-toast";
import styles from "./styles.module.scss";
import { FormProps } from "./formTypes";
import { maskPhone } from "@/utils/Masks";

export function ConsultationForm() {
  const schema = yup
    .object({
      name: yup.string().required("Nome completo é obrigatório!"),
      phone: yup.string().required("Telefone é obrigatório!"),
      date: yup.string().required("A data não pode ser nula!"),
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

  const phoneValue = watch("phone");

  useEffect(() => {
    setValue("phone", maskPhone(phoneValue));
  }, [phoneValue, setValue]);

  async function onSubmit(userData: FormProps) {
    const notificationToast = toast.loading("Enviando sua mensagem", {
      style: {
        height: "50px",
        fontSize: "15px",
        fontFamily: "Barlow",
      },
    });
    // const emailTemplateReplaced = EmailTemplate.replace("{name}", userData.name)
    //   .replace("{option}", userData.option === "online" ? "Online" : "Presencial")
    //   .replace("{name}", userData.name)
    //   .replace("{email}", userData.email)
    //   .replace("{phone}", String(userData.phone))
    //   .replace("{age}", String(userData.age))
    //   .replace("{message}", userData.message)
    //   .replace("{date}", userData.date)
    //   .replace("{hour}", String(userData.hour))
    //   .replace("{option}", userData.option === "online" ? "Online" : "Presencial")
    //   .replace("{ansiedade}", userData.ansiedade ? "Ansiedade, " : "")
    //   .replace("{depressao}", userData.depressao ? "Depressão, " : "")
    //   .replace("{panico}", userData.panico ? "Síndrome do pânico, " : "")
    //   .replace("{alcoolismo}", userData.alcoolismo ? "Alcoolismo, " : "")
    //   .replace("{dependencia_quimica}", userData.dependencia_quimica ? "Dependência química, " : "")
    //   .replace("{fobia_social}", userData.fobia_social ? "Fobia Social, " : "")
    //   .replace("{dificuldades_sexuais}", userData.dificuldades_sexuais ? "Dificuldades Sociais, " : "")
    //   .replace("{autoconhecimento}", userData.autoconhecimento ? "Autoconhecimento, " : "")
    //   .replace("{tdah}", userData.tdah ? "TDAH, " : "")
    //   .replace("{outros}", userData.outros ? "Outros. " : "");

    // console.log("Dados: ", emailTemplateReplaced);

    const emailValues = {
      option: userData.option === "online" ? "Online" : "Presencial",
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      age: userData.age,
      message: userData.message,
      date: userData.date,
      hour: userData.hour,
      ansiedade: userData.ansiedade ? "Ansiedade, " : "",
      depressao: userData.depressao ? "Depressão, " : "",
      panico: userData.panico ? "Síndrome do pânico, " : "",
      alcoolismo: userData.alcoolismo ? "Alcoolismo, " : "",
      dependencia_quimica: userData.dependencia_quimica ? "Dependência química, " : "",
      fobia_social: userData.fobia_social ? "Fobia Social, " : "",
      dificuldades_sexuais: userData.dificuldades_sexuais ? "Dificuldades Sociais, " : "",
      autoconhecimento: userData.autoconhecimento ? "Autoconhecimento, " : "",
      tdah: userData.tdah ? "TDAH, " : "",
      outros: userData.outros ? "Outros. " : "",
    };
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; // months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    // eslint-disable-next-line no-useless-concat
    const newdate = `${year}-` + `0${month}-${day}`;

    if (userData.date === "" || userData.date < newdate) {
      toast.error("Ops 🙁 você não pode agendar uma data anterior a data atual", {
        id: notificationToast,
      });

      return;
    }
    try {
      await emailjs.send("service_x0vcdha", "template_y3qwtjg", emailValues, "PE9lOhNzjdGovGIiH");
      toast.success("Email enviado com sucesso", {
        id: notificationToast,
      });
    } catch (e) {
      console.log(e);
      toast.error("Ops 🙁 por algum motivo não conseguimos enviar sua mensagem, por favor tente novamente mais tarde", {
        id: notificationToast,
      });
    }
    reset();
    resetField("ansiedade");
    resetField("depressao");
    resetField("panico");
    resetField("alcoolismo");
    resetField("dependencia_quimica");
    resetField("fobia_social");
    resetField("dificuldades_sexuais");
    resetField("autoconhecimento");
    resetField("tdah");
    resetField("outros");
  }

  return (
    <div className={styles.container} id="consult">
      <div className={styles.left}>
        <h1>Vamos agendar uma consulta?</h1>

        <form id="form" className={styles.form_left} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.name}>
            Nome completo:*
            <input type="text" placeholder="Ex: Maria Conceição" {...register("name", { required: true })} />
            {errors.name && <span className={styles.spanError}>{errors.name?.message}</span>}
          </label>

          <label className={styles.email}>
            E-mail:
            <input type="email" placeholder="Ex: maria@gmail.com" {...register("email")} />
          </label>

          <label className={styles.phone}>
            Telefone para contato:*
            <input type="text" placeholder="Ex: (99) 99999-9999" {...register("phone", { required: true })} />
            {errors.phone && <span className={styles.spanError}>{errors.phone?.message}</span>}
          </label>

          <label className={styles.age}>
            Qual a sua idade:
            <input type="text" placeholder="Ex: 37" {...register("age")} />
          </label>

          <label className={styles.date}>
            Data da consulta:
            <input type="date" {...register("date")} />
            {errors.date && <span className={styles.spanError}>{errors.date?.message}</span>}
          </label>

          <label className={styles.consult_hour}>
            Horário da consulta:
            <input type="text" placeholder="Ex: 10" {...register("hour")} />
          </label>

          <label className={styles.message}>
            Mensagem:
            <textarea placeholder="Ex: Sua mensagem aqui..." {...register("message")} />
          </label>

          <div className={styles.consult}>
            <p>Sua consulta será:</p>
            <div>
              <input id="presencial" type="radio" value="presencial" {...register("option")} />
              <label htmlFor="presencial" className={`${styles.label} ${styles.labelRadio}`}>
                Presencial
              </label>

              <input id="online" type="radio" defaultChecked value="online" {...register("option")} />
              <label htmlFor="online" className={`${styles.label} ${styles.labelRadio}`}>
                Online
              </label>
            </div>
          </div>
        </form>
      </div>

      <form id="form" className={styles.form_right} onSubmit={handleSubmit(onSubmit)}>
        <h2>Qual o motivo do contato:</h2>

        <div>
          <div className={styles.box1}>
            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="ansiedade" {...register("ansiedade")} />
              <label htmlFor="ansiedade" className={`${styles.label} ${styles.labelCheckbox}`}>
                Ansiedade
              </label>
            </div>

            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="depressao" {...register("depressao")} />
              <label htmlFor="depressao" className={`${styles.label} ${styles.labelCheckbox}`}>
                Depressão
              </label>
            </div>

            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="panico" {...register("panico")} />
              <label htmlFor="panico" className={`${styles.label} ${styles.labelCheckbox}`}>
                Sindrome do Pânico
              </label>
            </div>

            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="alcoolismo" {...register("alcoolismo")} />
              <label htmlFor="alcoolismo" className={`${styles.label} ${styles.labelCheckbox}`}>
                Alcoolismo
              </label>
            </div>

            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="dependencia_quimica" {...register("dependencia_quimica")} />
              <label htmlFor="dependencia_quimica" className={`${styles.label} ${styles.labelCheckbox}`}>
                Dependência Química
              </label>
            </div>
          </div>

          <div className={styles.box2}>
            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="fobia_social" {...register("fobia_social")} />
              <label htmlFor="fobia_social" className={`${styles.label} ${styles.labelCheckbox}`}>
                Fobia Social
              </label>
            </div>

            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="dificuldades_sexuais" {...register("dificuldades_sexuais")} />
              <label htmlFor="dificuldades_sexuais" className={`${styles.label} ${styles.labelCheckbox}`}>
                Dificuldades Sexuais
              </label>
            </div>

            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="autoconhecimento" {...register("autoconhecimento")} />
              <label htmlFor="autoconhecimento" className={`${styles.label} ${styles.labelCheckbox}`}>
                Autoconhecimento
              </label>
            </div>

            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="tdah" {...register("tdah")} />
              <label htmlFor="tdah" className={`${styles.label} ${styles.labelCheckbox}`}>
                TDAH e Transtornos de Aprendizagem
              </label>
            </div>

            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="outros" {...register("outros")} />
              <label htmlFor="outros" className={`${styles.label} ${styles.labelCheckbox}`}>
                Outros:
              </label>
            </div>
          </div>
        </div>
      </form>
      <button type="submit" form="form" onClick={() => onSubmit}>
        Enviar Solicitação
      </button>
    </div>
  );
}
