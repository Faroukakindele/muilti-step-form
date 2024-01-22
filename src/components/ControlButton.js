import styles from "./ControlButton.module.css";
function ControlButton({ dispatch, state }) {
  const istrue = state.track > 1;

  return (
    <div className={styles.container}>
      <button
        onClick={() => dispatch({ type: "goBack" })}
        className={istrue ? styles.backActive : styles.backNotActive}
      >
        Go back
      </button>
      <button
        className={`${styles.next} ${state.track > 3 ? styles.confirm : ""}`}
        disabled={!state.clickable}
        onClick={() => dispatch({ type: "nextStep" })}
      >
        {state.track > 3 ? "Confirm" : "next Step"}
      </button>
    </div>
  );
}

export default ControlButton;
