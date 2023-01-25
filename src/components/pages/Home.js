import React from 'react';
import '../../styles/Home.css';
import Navigation from './Navigation';

const Home = () => {
  return (
    <>
    <Navigation />
      <div className='home__page'>
        <h1>Account Management System</h1>
        <p>
          In fact, starting your own business is still the smartest way to earn
          your living and create a better future. However, in order to avoid
          getting failed, it is important to plan and create a systematic way to
          run your business. When it comes to the success of a small business,
          one of the things that should be your priority is to ensure a better
          accounting management system is in place. In this article, we will go
          over the term “accounting management system”. We will also get to know
          why is it so important for small businesses and what tool you can use.
        </p>
        <a href='/login'>&laquo; Go to user login</a>
      </div>
    </>
  );
};

export default Home;
