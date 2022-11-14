import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";

function TextInput(props) {
  const [focus, setFocus] = useState(false);
  const { value, label, error, onChange } = props;
  return (
    <div className={styles.TextInput}>
      <p className={styles.label}>{label}</p>
      <div className={`${styles.inputBody} ${focus ? styles.focus : ""}`}>
        <div className={styles.top}>
          {error && <img src="assets/icon--alert.svg" alt="alert" />}

          <input
            type="text"
            value={value}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) => onChange(e.target.value)}
          />
          {value !== "" && (
            <FontAwesomeIcon
              icon={faXmark}
              className={styles.cross}
              onClick={() => onChange("")}
            />
          )}
        </div>
        {error && (
          <div className={styles.bottom}>
            <p className={styles.errorMsg}>No Value Provided.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TextInput;
