import styles from "./SideBarItems.module.css";

function SideBarItems({ data, track }) {
  return (
    <div className={styles.items}>
      <button className={track >= data.id ? "active" : ""}>{data.id}</button>

      <h3>step {data.id}</h3>
      <h1>{data.description}</h1>
    </div>
  );
}

export default SideBarItems;
