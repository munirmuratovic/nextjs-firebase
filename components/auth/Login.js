import React, { useEffect, useState } from "react";
import useInput from "../../hooks/use-input";
import ButtonSpinner from "../ui/ButtonSpinner";
import Link from "next/link";
import CentralForm from "../layout/CentralForm";
import FloatInput from "../ui/FloatInput";
import Button from '../ui/Button';

import { initFirebase } from "../../firebase/firebase";
import { getAuth } from "firebase/auth";

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import GoogleLogin from "../ui/GoogleLogin";
import axios from "axios";

const Login = () => {
  const [toastError, setToastError] = useState(null);

  const {
    value: enteredUsername,
    hasError: usernameInputHasError,
    valueChangeHandler: usernameChangedHandler,
    isValid: enteredUsernameIsValid,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsernameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    isValid: enteredPasswordIsValid,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");

  const auth = getAuth();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  async function signIn() {
    let res;
    try {
      res = await axios.post('/api/auth/verify', { loginData: enteredUsername });

      if (res && res.status === 200) {
        signInWithEmailAndPassword(res.data.email, enteredPassword);
      } else {
        setToastError("Cannot find entered username!");
      }
    } catch (error) {
      setToastError("Could not login. Check your username and password.")
    }
  }

  let formIsValid = false;

  if (enteredUsernameIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredUsernameIsValid || !enteredPasswordIsValid) {
      return;
    }
    signIn();
  };

  const loginButtonClasses = !formIsValid
    ? "w-full flex justify-center items-center py-2 rounded-full shadow-lg bg-blue-500 dark:bg-blue-700 text-white shadow-sm cursor-not-allowed opacity-50 "
    : "w-full flex justify-center items-center py-2 rounded-full shadow-lg bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-white shadow-sm";

  return (
    <CentralForm>
      {toastError && (
        <div className="flex items-center justify-between p-4 mb-4 text-black bg-red-200 rounded-lg dark:bg-red-800 dark:text-white" role="alert">
          <div>{toastError}</div>
          <Button
            className="ml-3"
            onClick={() => setToastError(null)}
          ><i className="bi bi-x"></i></Button>
        </div>
      )}

      <h1 className="text-center my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
        Login
      </h1>
      <p className="text-center text-gray-500 dark:text-gray-400">
        Sign in to access your account
      </p>
      <div className="m-4">
        <form className="grid gap-4" onSubmit={formSubmissionHandler}>
          <FloatInput label="Username or Email" id="username"
            type="text"
            name="username"
            value={enteredUsername}
            onChange={usernameChangedHandler}
            onBlur={usernameBlurHandler}
            hasError={usernameInputHasError}
            autoComplete="off"
            autoFocus
          />
          <FloatInput label="Password" id="password"
            type="password"
            name="password"
            value={enteredPassword}
            onChange={passwordChangedHandler}
            onBlur={passwordBlurHandler}
            hasError={passwordInputHasError}
            autoComplete="off"
          />
          <div className="flex justify-end text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">
            <Link href="forgot-password" passHref>
              Forgot password?
            </Link>
          </div>
          <div className="my-2">
            <button
              onClick={signIn}
              type="submit"
              disabled={!formIsValid}
              className={loginButtonClasses}
            >
              Sign in
              {loading && <ButtonSpinner />}
            </button>
          </div>
          <GoogleLogin />
        </form>
      </div>
    </CentralForm>
  );
};

export default Login;
