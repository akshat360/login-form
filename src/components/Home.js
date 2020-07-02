import { useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const email = useSelector((state) => state.email);
  const name = useSelector((state) => state.name);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return (
    <div>
      {isAuthenticated && (
        <section>
          <form>
            <h2 className="text-center">WELCOME TO GLABBR</h2>
            <label>Name : {name}</label>
            <label>Email : {email}</label>
          </form>
        </section>
      )}
      {!isAuthenticated && (
        <section>
          <form>
            <h2 className="text-center">Please Login First</h2>
            <Link to="/login" type="button">
              Login
            </Link>
          </form>
        </section>
      )}
    </div>
  );
}
