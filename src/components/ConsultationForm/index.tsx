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
              <label>
                <input name="option" type="radio" value="presencial" />
                Presencial
              </label>
              <label>
                <input name="option" type="radio" checked value="online" />
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
            <label htmlFor="ansiedade">
              <input type="checkbox" id="ansiedade" />
              Ansiedade
            </label>

            <label htmlFor="depressao">
              <input type="checkbox" id="depressao" />
              Depressão
            </label>

            <label htmlFor="panico">
              <input type="checkbox" id="panico" />
              Sindrome do Pânico
            </label>

            <label htmlFor="alcoolismo">
              <input type="checkbox" id="alcoolismo" />
              Alcoolismo
            </label>

            <label htmlFor="dependencia_quimica">
              <input type="checkbox" id="dependencia_quimica" />
              Dependência Química
            </label>
          </div>

          <div className={styles.box2}>
            <label htmlFor="fobia_social">
              <input type="checkbox" id="fobia_social" />
              Fobia Social
            </label>

            <label htmlFor="dificuldades_sexuais">
              <input type="checkbox" id="dificuldades_sexuais" />
              Dificuldades Sexuais
            </label>

            <label htmlFor="autoconhecimento">
              <input type="checkbox" id="autoconhecimento" />
              Autoconhecimento
            </label>

            <label htmlFor="tdah">
              <input type="checkbox" id="tdah" />
              TDAH e Transtornos de Aprendizagem
            </label>

            <label htmlFor="outros">
              <input type="checkbox" id="outros" />
              Outros:
            </label>
          </div>
        </div>
      </form>
      <button>Enviar Solicitação</button>
    </div>
  );
}
