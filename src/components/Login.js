import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkEmail, checkUser } from '../apicalls.js';

const Login = () => {
  const email = useSelector((state) => state.email);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const isEmailExist = useSelector((state) => state.isEmailExist);
  const password = useSelector((state) => state.password);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleChange = (name) => (event) => {
    dispatch({ type: `SET_${name}`, payload: event.target.value });
  };
  // checking if Email Exist
  const checkEmailExists = async () => {
    let checker = await checkEmail();
    if (checker.user.email === email) {
      dispatch({ type: `SET_ERROR`, payload: '' });
      dispatch({ type: `SET_EMAIL_EXISTS`, payload: true });
    } else {
      dispatch({ type: `SET_EMAIL`, payload: '' });
      dispatch({ type: `SET_ERROR`, payload: 'No Such Email Exist' });
    }
  };
  // checking if User Exist
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
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    required
                    value={email}
                    onChange={handleChange('EMAIL')}
                  />
                </li>
                {error.length !== 0 && (
                  <h4 className=" alert-danger rounded text-center p-1 mx-2 my-3">
                    {error}
                  </h4>
                )}
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
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    disabled
                    onChange={handleChange('EMAIL')}
                  />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
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
