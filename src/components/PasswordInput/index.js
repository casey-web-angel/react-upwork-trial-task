import React, { useState, useEffect } from "react";
import cs from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";

function PasswordInput(props) {
  const [focus, setFocus] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const { password, pwderror, onPwdchange } = props;
  return (
    <div className={styles.PasswordInput}>
      <div className={styles.label}>
        <p className={styles.left}>Password</p>
        <div className={styles.right}>
          <FontAwesomeIcon
            icon={showPwd ? faEyeSlash : faEye}
            className={styles.eyeIcon}
            onClick={() => setShowPwd(!showPwd)}
          />
          <p className={styles.show}>{showPwd ? "Hide" : "Show"}</p>
        </div>
      </div>
      <div className={`${styles.inputBody} ${focus ? styles.focus : ""}`}>
        <div className={styles.top}>
          {pwderror && <img src="assets/icon--alert.svg" alt="alert" />}
          <input
            type={showPwd ? "text" : "password"}
            value={password}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) => onPwdchange(e.target.value)}
          />
          {password !== "" && (
            <FontAwesomeIcon
              icon={faXmark}
              className={styles.cross}
              onClick={() => onPwdchange("")}
            />
          )}
        </div>
        {pwderror && (
          <div className={styles.bottom}>
            <p className={styles.errorMsg}>No Value Provided.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PasswordInput;
