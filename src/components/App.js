import SideBar from "./SideBar";
import Main from "./Main";
import styles from "./App.module.css";

import { useEffect, useReducer } from "react";
import { checkName, testEmail, hasAlphabet } from "./helper";
const initialState = {
  track: 1,
  input: "",
  number: "",
  email: "",
  clickable: false,
  planType: true, // true === month false === year
  price: [9, 12, 15],
  selected: null,
  addOnsPrice: [1, 2, 2],
  addOnsObj: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "input":
      return { ...state, input: action.payload };
    case "number":
      return { ...state, number: action.payload };
    case "email":
      return { ...state, email: action.payload };

    case "error":
      if (
        checkName(state.input) &&
        testEmail(state.email) &&
        !hasAlphabet(state.number)
      )
        return { ...state, clickable: true };
      else {
        return { ...state, clickable: false };
      }
    case "nextStep":
      return { ...state, clickable: false, track: state.track + 1 };

    case "goBack":
      if (state.addOnsObj.length > 0)
        return {
          ...state,
          track: state.track - 1,
          clickable: true,
          addOnsObj: initialState.addOnsObj,
        };

      return { ...state, track: state.track - 1, clickable: true };
    case "class":
      return {
        ...state,
        selected: action.payload,
        clickable: true,
      };
    case "plan":
      return {
        ...state,
        price: !state.planType
          ? initialState.price
          : initialState.price.map((x) => x * 10),
        addOnsPrice: !state.planType
          ? initialState.addOnsPrice
          : initialState.addOnsPrice.map((x) => x * 10),

        planType: !state.planType,
      };

    case "addAddOn":
      return {
        ...state,
        addOnsObj: [...state.addOnsObj, action.payload],
        clickable: true,
      };

    case "removeAddOn":
      return {
        ...state,
        addOnsObj: state.addOnsObj.filter(
          (obj) => obj.header !== action.payload.header
        ),
      };
    case "addOnStep":
      return { ...state, clickable: true };
    case "change":
      return {
        ...state,
        selected: initialState.selected,
        addOnsObj: initialState.addOnsObj,
        track: 2,
        clickable: false,
      };
    default:
      throw new Error("unknown error");
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    function () {
      if (state.track >= 3) {
        dispatch({ type: "addOnStep" });
      }
    },
    [state.track]
  );
  return (
    <div className={styles.App}>
      <SideBar track={state.track} />
      <Main state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
