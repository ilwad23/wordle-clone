import React from "react";
import styles from "../../styles/KeyPad.module.css";
import { useStateValue } from "../../states/StateProvider";
import Row from "./Row";
function KeyPad() {
  const [{colorsForKey},dispatch] = useStateValue();
  const rows = [
    ["QWERTYUIOP", false],
    ["ASDFGHJKL", false],
    ["ZXCVBNM", true],
  ];
 
  return (
    <div className={styles.grid}>
      {rows.map(([l, b], i) => (
        <Row
          key={l}
          letters={l}
          styles={styles}
          dispatch={dispatch}
          bottom={b}
          colorsForKey={colorsForKey}
        />
      ))}
    </div>
  );
}

export default KeyPad;
