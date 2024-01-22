import PersonalInfo from "./PersonalInfo";
import styles from "./Main.module.css";
import ControlButton from "./ControlButton";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import FinishingUp from "./FinishingUp";
import Success from "./Success";

function Main({ state, dispatch }) {
  return (
    <div className={styles.main}>
      {state.track === 1 && <PersonalInfo state={state} dispatch={dispatch} />}
      {state.track === 2 && <SelectPlan state={state} dispatch={dispatch} />}
      {state.track === 3 && <AddOns state={state} dispatch={dispatch} />}
      {state.track === 4 && <FinishingUp state={state} dispatch={dispatch} />}
      {state.track === 5 && <Success state={state} dispatch={dispatch} />}

      {state.track <= 4 && <ControlButton state={state} dispatch={dispatch} />}
    </div>
  );
}

export default Main;
