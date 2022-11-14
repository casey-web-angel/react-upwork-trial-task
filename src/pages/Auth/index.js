import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput";
import TextInput from "../../components/TextInput";
import SignupModal from "../../components/SignupModal";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [nameerror, setNameerror] = useState("");
  const [password, setPassword] = useState("");
  const [pwderror, setPwderror] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const navigate = useNavigate();

  const onSubmit = () => {
    if (username === "") {
      setNameerror(true);
    }
    if (password === "") {
      setPwderror(true);
    }
    if (username !== "" && password !== "") {
      navigate("/");
    }
  };

  const onNameChange = (name) => {
    setUsername(name);
    if (name !== "") {
      setNameerror(false);
    }
  };

  const onPwdchange = (pwd) => {
    setPassword(pwd);
    if (pwd !== "") {
      setPwderror(false);
    }
  };

  return (
    <>
      <div className={styles.Login}>
        <div className={styles.left}>
          <div className={styles.header}>
            <Link to={"/"}>
              <img
                src="assets/logo--Gaggle.svg"
                alt="logo"
                className={styles.logo}
              />
            </Link>
          </div>
          <div className={styles.content}>
            <TextInput
              value={username}
              onChange={onNameChange}
              error={nameerror}
              label="Username"
            />
            <PasswordInput
              password={password}
              onPwdchange={onPwdchange}
              pwderror={pwderror}
            />
            <label className={styles.labelContainer}>
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className={styles.inputCheck}
              />
              <span className={styles.checkText}>Remember</span>
            </label>
            <button className={styles.signon} onClick={() => onSubmit()}>
              Sign On
            </button>
          </div>
          <div className={styles.footer}>
            <span
              className={styles.register}
              onClick={() => setShowSignup(true)}
            >
              Register
            </span>
            <span className={styles.splitter}></span>
            <Link to={"/forget-password"} className={styles.forget}>
              Forget Password?
            </Link>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
      {showSignup && <SignupModal hideModal={() => setShowSignup(false)} />}
    </>
  );
}

export default Login;
