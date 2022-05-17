import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { EmailTemplate } from "./EmailTemplate";
import styles from "./styles.module.scss";
import { FormProps } from "./formTypes";
import { maskPhone } from "@/utils/Masks";

export function ConsultationForm() {
  const schema = yup
    .object({
      name: yup.string().required("Nome completo é obrigatório!"),
      phone: yup.string().required("Telefone é obrigatório!"),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
  });

  const phoneValue = watch("phone");

  useEffect(() => {
    setValue("phone", maskPhone(phoneValue));
  }, [phoneValue, setValue]);

  function onSubmit(userData: FormProps) {
    const emailTemplateReplaced = EmailTemplate.replace("{name}", userData.name)
      .replace("{option}", userData.option === "online" ? "Online" : "Presencial")
      .replace("{name}", userData.name)
      .replace("{email}", userData.email)
      .replace("{phone}", String(userData.phone))
      .replace("{age}", String(userData.age))
      .replace("{message}", userData.message)
      .replace("{date}", userData.date)
      .replace("{hour}", String(userData.hour))
      .replace("{option}", userData.option === "online" ? "Online" : "Presencial")
      .replace("{ansiedade}", userData.ansiedade ? "Ansiedade, " : "")
      .replace("{depressao}", userData.depressao ? "Depressão, " : "")
      .replace("{panico}", userData.panico ? "Síndrome do pânico, " : "")
      .replace("{alcoolismo}", userData.alcoolismo ? "Alcoolismo, " : "")
      .replace("{dependencia_quimica}", userData.dependencia_quimica ? "Dependência química, " : "")
      .replace("{fobia_social}", userData.fobia_social ? "Fobia Social, " : "")
      .replace("{dificuldades_sexuais}", userData.dificuldades_sexuais ? "Dificuldades Sociais, " : "")
      .replace("{autoconhecimento}", userData.autoconhecimento ? "Autoconhecimento, " : "")
      .replace("{tdah}", userData.tdah ? "TDAH, " : "")
      .replace("{outros}", userData.outros ? "Outros. " : "");

    console.log("Dados: ", emailTemplateReplaced);
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
