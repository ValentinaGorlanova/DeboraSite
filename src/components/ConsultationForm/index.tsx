import styles from "./styles.module.scss";

export function ConsultationForm() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Vamos agendar uma consulta?</h1>

        <form className={styles.form_left}>
          <label className={styles.name}>
            Nome completo:*
            <input type="text" />
          </label>

          <label className={styles.email}>
            E-mail:
            <input type="text" />
          </label>

          <label className={styles.phone}>
            Telefone para contato:*
            <input type="number" />
          </label>

          <label className={styles.age}>
            Qual a sua idade:
            <input type="number" />
          </label>

          <label className={styles.date}>
            Data da consulta:
            <input type="date" />
          </label>

          <label className={styles.consult_hour}>
            Horário da consulta:
            <input type="number" />
          </label>

          <label className={styles.message}>
            Mensagem:
            <textarea />
          </label>

          <div className={styles.consult}>
            <p>Sua consulta será:</p>
            <div>
              <input id="presencial" name="option" type="radio" value="presencial" />
              <label htmlFor="presencial" className={`${styles.label} ${styles.labelRadio}`}>
                Presencial
              </label>

              <input id="online" name="option" type="radio" checked value="online" />
              <label htmlFor="online" className={`${styles.label} ${styles.labelRadio}`}>
                Online
              </label>
            </div>
          </div>
        </form>
      </div>

      <form className={styles.form_right}>
        <h2>Qual o motivo do contato:</h2>

        <div>
          <div className={styles.box1}>
            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="ansiedade" />
              <label htmlFor="ansiedade" className={`${styles.label} ${styles.labelCheckbox}`}>
                Ansiedade
              </label>
            </div>

            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="depressao" />
              <label htmlFor="depressao" className={`${styles.label} ${styles.labelCheckbox}`}>
                Depressão
              </label>
            </div>

            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="panico" />
              <label htmlFor="panico" className={`${styles.label} ${styles.labelCheckbox}`}>
                Sindrome do Pânico
              </label>
            </div>

            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="alcoolismo" />
              <label htmlFor="alcoolismo" className={`${styles.label} ${styles.labelCheckbox}`}>
                Alcoolismo
              </label>
            </div>

            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="dependencia_quimica" />
              <label htmlFor="dependencia_quimica" className={`${styles.label} ${styles.labelCheckbox}`}>
                Dependência Química
              </label>
            </div>
          </div>

          <div className={styles.box2}>
            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="fobia_social" />
              <label htmlFor="fobia_social" className={`${styles.label} ${styles.labelCheckbox}`}>
                Fobia Social
              </label>
            </div>

            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="dificuldades_sexuais" />
              <label htmlFor="dificuldades_sexuais" className={`${styles.label} ${styles.labelCheckbox}`}>
                Dificuldades Sexuais
              </label>
            </div>

            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="autoconhecimento" />
              <label htmlFor="autoconhecimento" className={`${styles.label} ${styles.labelCheckbox}`}>
                Autoconhecimento
              </label>
            </div>

            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="tdah" />
              <label htmlFor="tdah" className={`${styles.label} ${styles.labelCheckbox}`}>
                TDAH e Transtornos de Aprendizagem
              </label>
            </div>

            <div className={styles.boxLabelInput}>
              <input type="checkbox" id="outros" />
              <label htmlFor="outros" className={`${styles.label} ${styles.labelCheckbox}`}>
                Outros:
              </label>
            </div>
          </div>
        </div>
      </form>
      <button>Enviar Solicitação</button>
    </div>
  );
}
