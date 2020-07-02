import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkEmail, checkUser } from '../apicalls.js';

const Login = () => {
  const email = useSelector((state) => state.email);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const isEmailExist = useSelector((state) => state.isEmailExist);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const handleChange = (name) => (event) => {
    dispatch({ type: `SET_${name}`, payload: event.target.value });
  };

  const checkEmailExists = async () => {
    let checker = await checkEmail();
    if (checker) {
      dispatch({ type: `SET_EMAIL_EXISTS`, payload: true });
    }
  };

  const checkIsAuthenticated = async () => {
    await checkUser(email, password)
      .then((value) => {
        if (value.data.loginResult === 'SUCCESS') {
          dispatch({ type: 'SET_ISAUTHENTICATED', payload: true });
          dispatch({
            type: 'SET_NAME',
            payload: `${value.data.user.firstName} ${value.data.user.lastName}`,
          });
          dispatch({ type: 'SET_ISAUTHENTICATED', payload: true });
          dispatch({ type: 'SET_EMAIL', payload: value.data.user.email });
        } else {
          dispatch({ type: 'SET_ISAUTHENTICATED', payload: false });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Loginform = () => {
    return (
      <section>
        {isAuthenticated && <Redirect to="/home" />}
        {!isEmailExist && (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Enter Your Email</legend>
              <ul>
                <li>
                  <label for="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    required
                    value={email}
                    onChange={handleChange('EMAIL')}
                  />
                  {console.log(email)}
                </li>
              </ul>
            </fieldset>
            <button type="button" onClick={checkEmailExists}>
              Next
            </button>
            <Link to="/signup" type="button">
              Create an Account?
            </Link>
          </form>
        )}
        {isEmailExist && (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label for="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    disabled
                    onChange={handleChange('EMAIL')}
                  />
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    required
                    onChange={handleChange('PASSWORD')}
                  />
                </li>
                <li>
                  <i />
                  <Link to="/login" type="button">
                    Forgot Password?
                  </Link>
                </li>
              </ul>
            </fieldset>
            <button type="button" onClick={checkIsAuthenticated}>
              Login
            </button>
            <Link to="/signup" type="button">
              Create an Account
            </Link>
          </form>
        )}
      </section>
    );
  };

  return <div>{Loginform()}</div>;
};
export default Login;
