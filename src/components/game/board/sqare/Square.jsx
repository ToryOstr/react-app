import React from "react";
import styles from "./square.module.css";

export default function Square({value, onSquareClick}) {

  return (
    <button onClick={onSquareClick} className={styles.square}>{value}</button>
  )
}