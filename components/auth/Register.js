import useInput from "../../hooks/use-input";
import ButtonSpinner from "../ui/ButtonSpinner";
import CentralForm from "../layout/CentralForm";
import FloatInput from "../ui/FloatInput";

import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import GoogleLogin from "../ui/GoogleLogin";
import axios from "axios";

const Register = () => {
  const auth = getAuth();
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    isValid: enteredEmailIsValid,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) =>
    value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  );
  const {
    value: enteredUsername,
    hasError: usernameInputHasError,
    valueChangeHandler: usernameChangedHandler,
    isValid: enteredUsernameIsValid,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsernameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredFullName,
    hasError: fullNameInputHasError,
    valueChangeHandler: fullNameChangedHandler,
    isValid: enteredFullNameIsValid,
    inputBlurHandler: fullNameBlurHandler,
    reset: resetFullNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    isValid: enteredPasswordIsValid,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");

  const signUp = async () => {
    await createUserWithEmailAndPassword(enteredEmail, enteredPassword)
      .then(async (userCredential) => {
        console.log(userCredential.user.stsTokenManager);
        updateProfile(auth.currentUser, { displayName: enteredFullName }).catch(
          (err) => console.log(err)
        );
        // sendEmailVerification(auth.currentUser).catch((err) =>
        //   console.log(err)
        // );
        axios.post('/api/auth/register', {
          uid: userCredential.user.uid,
          name: enteredFullName,
          username: enteredUsername,
          email: enteredEmail
        });
      })
      .catch((error) => {
        console.log(error.code)
      });
  }

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return;
    }
    signUp();
  };

  const regButtonClasses = !formIsValid
    ? "w-full flex justify-center items-center py-2 rounded-full shadow-lg bg-green-500 dark:bg-green-700 text-white shadow-sm cursor-not-allowed opacity-50"
    : "w-full flex justify-center items-center py-2 rounded-full shadow-lg bg-green-500 dark:bg-green-700 hover:bg-green-600 dark:hover:bg-green-600 text-white shadow-sm";

  return (
    <CentralForm>
      <h1 className="text-center my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
        Register
      </h1>
      <p className="text-center text-gray-500 dark:text-gray-400">
        Sign up to create your account
      </p>
      <div className="m-4">
        <form className="grid gap-4" onSubmit={formSubmissionHandler}>
          <FloatInput label="Email" id="email"
            type="email"
            name="email"
            value={enteredEmail}
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            hasError={emailInputHasError}
            autoComplete="off"
            autoFocus
          />
          <FloatInput label="Full name" id="name"
            type="text"
            name="name"
            value={enteredFullName}
            onChange={fullNameChangedHandler}
            onBlur={fullNameBlurHandler}
            hasError={fullNameInputHasError}
            autoComplete="off"
          />
          <FloatInput label="Username" id="username"
            type="text"
            name="username"
            value={enteredUsername}
            onChange={usernameChangedHandler}
            onBlur={usernameBlurHandler}
            hasError={usernameInputHasError}
            autoComplete="off"
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
          <div className="my-2">
            <button
              onClick={signUp}
              type="submit"
              disabled={!formIsValid}
              className={regButtonClasses}
            >
              Sign up
              {loading && <ButtonSpinner />}
            </button>
          </div>
          <GoogleLogin />
        </form>
      </div>
    </CentralForm>
  );
};

export default Register;
