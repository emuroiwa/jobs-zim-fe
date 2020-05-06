import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>Job Connector</h1>
            <p className='lead'>
              Create a candidates profile/portfolio, share posts and get help
              from other candidatess
            </p>
            <div className='buttons'>
              <Link to='register' className='btn btn-primary'>
                Sign Up
              </Link>
              <Link to='register' className='btn btn-light'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
