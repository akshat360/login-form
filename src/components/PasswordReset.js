import { Link } from 'react-router-dom';
import React from 'react';

const PasswordReset = () => {
  return (
    <form>
      <h2>Reset Password</h2>
      <fieldset>
        <legend>Password Reset</legend>
        <ul>
          <li>
            <em>A reset link will be sent to your inbox!</em>
          </li>
          <li>
            <label for="email">Email:</label>
            <input type="email" id="email" required />
          </li>
        </ul>
      </fieldset>
      <button>Send Reset Link</button>
      <Link to="/login" type="button">
        Go Back
      </Link>
    </form>
  );
};
export default PasswordReset;
