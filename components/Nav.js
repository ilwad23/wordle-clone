import React from "react";
import styles from "../styles/Nav.module.css";
import {
  MenuIcon,
  QuestionMarkCircleIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";
import {CogIcon} from "@heroicons/react/solid";

export default function Nav() {
  return (
    <div className={styles.container}>
      <MenuIcon style={{ width: "32px", height: "32px" }} />
      <h1 className={styles.logo}>Wordle</h1>
      <div className={styles.leftSideIcon}>
        <QuestionMarkCircleIcon style={{ width: "32px", height: "32px" }} />
        <ChartBarIcon style={{ width: "32px", height: "32px" }} />
        <CogIcon style={{ width: "32px", height: "32px" }} />
      </div>
    </div>
  );
}
