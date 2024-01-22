import styles from "./FinishingUp.module.css";
import { numReducer } from "./helper";
function FinishingUp({ state, dispatch }) {
  const moORYr = state.planType ? "mo" : "yr";
  const totalAddons = numReducer(state.addOnsObj?.map((x) => x.price)) || 0;
  const total = totalAddons + state?.selected.price;

  return (
    <section className="section_wrapper">
      <h1>Finishing up</h1>
      <h3>
        Double-check everything looks <span className={styles.ok}>OK</span>{" "}
        before confirming
      </h3>
      <div className={styles.FinishingUp}>
        <div className={styles.plan}>
          <div>
            <p>
              {state.selected.type}
              <span>({state.planType ? "Monthly" : "Yearly"})</span>
            </p>
            <button
              onClick={() => {
                dispatch({ type: "change" });
              }}
            >
              change
            </button>
          </div>
          <p>
            ${state.selected.price}/{moORYr}
          </p>
        </div>
        <hr />
        <div className={styles.addons}>
          {state.addOnsObj.length === 0 && <p>No add ons </p>}
          {state.addOnsObj.map((obj, i) => (
            <FinishingUpItems key={i} obj={obj} moORyr={moORYr} />
          ))}
        </div>
      </div>
      <FinishingUpPrice
        plan={state.planType ? "month" : "year"}
        moORYr={moORYr}
        total={total}
      />
    </section>
  );
}

function FinishingUpItems({ obj, moORyr }) {
  return (
    <div className={styles.items}>
      <h4>{obj.header}</h4>
      <p>
        +{obj.price}/{moORyr}
      </p>
    </div>
  );
}
function FinishingUpPrice({ plan, total, moORYr }) {
  return (
    <div className={styles.price}>
      <h4>Total (per {plan})</h4>
      <h2>
        +${total} /{moORYr}
      </h2>
    </div>
  );
}
export default FinishingUp;
