import React from 'react';
import { toast } from 'react-toastify';

const Home = () => {
  const notify = () => toast("Welcome to FuruBattle!");

  return (
    <div>
      <h1>Welcome to FuruBattle</h1>
      <button onClick={notify}>Notify!</button>
    </div>
  );
};

export default Home;