import styles from "./AddOns.module.css";
function AddOns({ state, dispatch }) {
  return (
    <section className="section_wrapper">
      <h1>Pick add-ons</h1>
      <h3>Add-ons help to improve your gaming experience</h3>
      <div className={styles.AddOns}>
        <AddOnsItems
          header={"Online Services"}
          description={"access to muiltiple muiltiplayer games"}
          price={state.addOnsPrice[0]}
          dispatch={dispatch}
          state={state}
        />
        <AddOnsItems
          header={"Larger Storage"}
          description={"Extra 1TB of cloud save"}
          price={state.addOnsPrice[1]}
          dispatch={dispatch}
          state={state}
        />
        <AddOnsItems
          header={"Customizable profile"}
          description={"customize theme on your profile"}
          price={state.addOnsPrice[2]}
          dispatch={dispatch}
          state={state}
        />
      </div>
    </section>
  );
}

function AddOnsItems({ header, description, price, dispatch, state }) {
  return (
    <div className={styles.AddOnsItems}>
      <input
        type="checkbox"
        onChange={(e) => {
          if (e.target.checked) {
            dispatch({
              type: "addAddOn",
              payload: { header, price, checked: true },
            });
          } else {
            dispatch({
              type: "removeAddOn",
              payload: { header, checked: false },
            });
          }
        }}
      />
      <h2>{header}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>{`+$${price}/${
        state.planType ? "mo" : "yr"
      }`}</p>
    </div>
  );
}
export default AddOns;
