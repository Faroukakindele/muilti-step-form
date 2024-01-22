import styles from "./SelectPlan.module.css";

function SelectPlan({ state, dispatch }) {
  return (
    <div className="section_wrapper">
      <h1>Select your plan </h1>
      <h3>you have the opportunity of monthly or yearly billing </h3>

      <div className={styles.itemWrapper}>
        <SelectPlanItems
          path={"icon-arcade.svg"}
          price={state.price[0]}
          type={"arcade"}
          state={state}
          dispatch={dispatch}
        />
        <SelectPlanItems
          path={"icon-advanced.svg"}
          price={state.price[1]}
          type={"advance"}
          state={state}
          dispatch={dispatch}
        />
        <SelectPlanItems
          path={"icon-pro.svg"}
          price={state.price[2]}
          type={"Pro"}
          state={state}
          dispatch={dispatch}
        />
        <SelectYear dispatch={dispatch} state={state} />
      </div>
    </div>
  );
}

function SelectPlanItems({ path, type, price, state, dispatch }) {
  return (
    <div
      className={`${styles.item} ${
        state.selected?.type === type ? styles.selected : ""
      } `}
      onClick={() => dispatch({ type: "class", payload: { type, price } })}
    >
      <div className={styles.img}>
        <img src={path} alt={"img"} />
      </div>
      <h4>{type}</h4>
      <h3>{`$${price}/${state.planType ? "mo" : "yr"}`}</h3>
      {!state.planType && <p>2 months Free</p>}
    </div>
  );
}
export default SelectPlan;

function SelectYear({ dispatch, state }) {
  return (
    <div
      className={styles.plan}
      onClick={() => {
        dispatch({ type: "plan" });
      }}
    >
      <p className={state.planType ? styles.active : ""}> monthly</p>
      <div
        className={`${styles.toggle}  ${
          !state.planType ? styles.toggleYear : ""
        }`}
      >
        <div></div>
      </div>
      <p className={!state.planType ? styles.active : ""}>Yearly</p>
    </div>
  );
}
