import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../TextInput";
import PasswordInput from "../PasswordInput";
import styles from "./index.module.scss";

function SignupModal(props) {
  const [name, setName] = useState("");
  const [nameerror, setNameerror] = useState(false);
  const [password, setPassword] = useState("");
  const [pwderror, setPwderror] = useState(false);
  const [email, setEmail] = useState("");
  const [emailerror, setEmailerror] = useState(false);

  const { hideModal } = props;
  const navigate = useNavigate();

  const onSubmit = () => {
    if (name === "") {
      setNameerror(true);
    }
    if (email === "") {
      setEmailerror(true);
    }
    if (password === "") {
      setPwderror(true);
    }

    if (name !== "" && email !== "" && password !== "") {
      navigate("/");
    }
  };

  const onNameChange = (name) => {
    setName(name);
    if (name !== "") {
      setNameerror(false);
    }
  };

  const onEmailChange = (name) => {
    setEmail(name);
    if (name !== "") {
      setEmailerror(false);
    }
  };

  const onPwdchange = (pwd) => {
    setPassword(pwd);
    if (pwd !== "") {
      setPwderror(false);
    }
  };

  return (
    <div className={styles.SignupModal}>
      <div className={styles.backdrop} onClick={() => hideModal()}></div>
      <div className={styles.modalBody}>
        <div className={styles.content}>
          <div className={styles.side}>
            <img src="/assets/duck.png" alt="duck" />
          </div>
          <div className={styles.body}>
            <h1>New Account</h1>
            <TextInput
              value={name}
              error={nameerror}
              onChange={onNameChange}
              label="Username"
            />
            <PasswordInput
              password={password}
              onPwdchange={onPwdchange}
              pwderror={pwderror}
            />
            <div className={styles.pwdEmailGap}></div>
            <TextInput
              value={email}
              error={emailerror}
              onChange={onEmailChange}
              label="Email"
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.cancelBtn} onClick={() => hideModal()}>
            Cancel
          </span>
          <span className={styles.registerBtn} onClick={() => onSubmit()}>
            Register Account
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
