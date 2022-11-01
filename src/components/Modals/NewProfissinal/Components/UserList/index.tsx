import styles from "../../styles.module.scss";

export default function UserList() {
  return (
    <>
      <div className={styles.RowForm}>
        <div>
          <h3>Iniciado em:</h3>
        </div>

        <div>
          <input type="date" placeholder="00/00/00" />
        </div>
      </div>

      <div className={styles.RowForm}>
        <div>
          <h3>Consultas realizadas:</h3>
        </div>

        <div>
          <input type="number" placeholder="00" />
        </div>
      </div>

      <div className={styles.RowForm}>
        <div>
          <h3>Faltas:</h3>
        </div>

        <div>
          <input type="number" placeholder="00" />
        </div>
      </div>

      <div className={styles.RowForm}>
        <div>
          <h3>Consultas previstas</h3>
        </div>

        <div>
          <input type="number" placeholder="00" />
        </div>
      </div>
    </>
  );
}
