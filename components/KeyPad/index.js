import React from "react";
import styles from "../../styles/Home.module.css";
import { useStateValue } from "../../states/StateProvider";
import RowOfKeys from "./rowOfKeys";
function KeyPad() {
  const dispatch = useStateValue()[1];
  const rows = [
    ["QWERTYUIOP", false],
    ["ASDFGHJKL", false],
    ["ZXCVBNM", true],
  ];
 
  return (
    <div className={styles.grid}>
      {rows.map(([l, b], i) => (
        <RowOfKeys
          key={l}
          letters={l}
          styles={styles}
          dispatch={dispatch}
          bottom={b}
        />
      ))}
    </div>
  );
}

export default KeyPad;
