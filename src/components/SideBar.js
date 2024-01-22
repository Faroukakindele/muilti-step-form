import SideBarItems from "./SideBarItems";
import styles from "./SideBar.module.css";

const tempdata = [
  { id: 1, description: "Your info" },
  { id: 2, description: "Select plan " },
  { id: 3, description: "Add-ons" },
  { id: 4, description: "summary" },
];

function SideBar({ track }) {
  return (
    <div className={styles.sideBar}>
      <div className={styles.items}>
        {tempdata.map((x, i) => (
          <SideBarItems track={track} key={i} data={x} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
