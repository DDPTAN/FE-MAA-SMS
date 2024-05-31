import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Login.module.css'

function Login() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className={styles.header}>
            <p>Logo Here</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <div className={styles.loginWrapper}>

            <div className={styles.loginOutline}>
              <div className={styles.textWrapper}>
                  <h5>Login</h5>
                  <p>Welcome back! Login by entering you email and password.</p>
              </div>
              <div className={styles.inputContainer}>
                  <div className={styles.inputWrapper}>
                    <label>Email</label>
                    <div className={styles.inputIconContainer}>
                      <FontAwesomeIcon icon="fa-regular fa-envelope" style={{"height" : "20px", "width" : "20px"}} className={styles.icon} />
                      <input type="email" placeholder='youremail@example.com' />
                    </div>
                  </div>
                  <div className={styles.inputWrapper}>
                    <label>Password</label>
                    <div className={styles.inputIconContainer}>
                      <FontAwesomeIcon icon="fa-solid fa-lock" style={{"height" : "20px", "width" : "20px"}} className={styles.icon} />
                      <input type="password" placeholder="enter your password" />
                    </div>
                  </div>
                </div>
                <div className={styles.forgotPasswordWrapper}>
                  <a href="">Forgot Password?</a>
                </div>
                <div className={styles.toggleWrapper}>
                  <div className={`form-check form-switch ${styles.toggleInput}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <p>Remember me</p>
                  </div>
                </div>
                <div className={styles.loginButtonWrapper}>
                  <hr />
                  <button>Login</button>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login