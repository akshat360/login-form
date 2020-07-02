import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <section>
      <form>
        <h2>Sign Up!</h2>
        <fieldset>
          <legend>Create Account</legend>
          <ul>
            <li>
              <label for="email">Email:</label>
              <input type="text" id="email" required />
            </li>
            <li>
              <label for="email">Email:</label>
              <input type="email" id="email" required />
            </li>
            <li>
              <label for="password">Password:</label>
              <input type="password" id="password" required />
            </li>
          </ul>
        </fieldset>
        <button>Submit</button>
        <Link to="/login" type="button">
          Have an Account?
        </Link>
      </form>
    </section>
  );
};
export default Signup;
