import React from 'react';
import { useDispatch } from 'react-redux';
import { showRemainingBalance } from './transactionSlice';
import { Button } from 'react-bootstrap';

const Balance = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Balance</h2>
      <Button onClick={() => dispatch(() => showRemainingBalance(233))}>
        Balance
      </Button>
    </div>
  );
};

export default Balance;
