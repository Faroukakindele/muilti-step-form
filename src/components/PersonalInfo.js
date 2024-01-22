import styles from "./PersonalInfo.module.css";

function PersonalInfo({ state, dispatch }) {
  const { email, input, number } = state;

  return (
    <section className="section_wrapper">
      <h1>
        Personal info <span className={styles.info}>&#8505;</span>
      </h1>
      <h3>Please provide your name address and phone number</h3>
      <form
        className={styles.form}
        onChange={() => dispatch({ type: "error" })}
      >
        <div className={styles.input}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={input}
            onChange={(e) =>
              dispatch({ type: "input", payload: e.target.value })
            }
            id="name"
            required
            placeholder="e.g .Stephen King"
          />
        </div>

        <div className={styles.input}>
          <label htmlFor="email">email address</label>

          <input
            type="email"
            required
            value={email}
            id="email"
            onChange={(e) =>
              dispatch({ type: "email", payload: e.target.value })
            }
            placeholder="e.g .stephenking@lorem.com"
          />
        </div>

        <div className={styles.input}>
          <label htmlFor="number">phone number</label>

          <input
            type="text"
            onChange={(e) =>
              dispatch({ type: "number", payload: e.target.value })
            }
            value={number}
            id="number"
            placeholder="eg. +1 234 567 890"
          />
        </div>
      </form>
    </section>
  );
}

export default PersonalInfo;
