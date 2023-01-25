import React from 'react';
import '../../styles/TransactionsList.css';
import { useSelector } from 'react-redux';
import { selectAllTransactions } from './transactionSlice';
import { Table, Button } from 'react-bootstrap';
import AddTransactionModal from './AddTransactionModal';

const TransactionsList = () => {
  const transactions = useSelector(selectAllTransactions);

  const renderedTransactionsRows = transactions.map((transaction) => {
    return (
      <tr>
        <td>{transaction.id}</td>
        <td>{transaction.transactionAmount}</td>
        <td>{transaction.transactionType}</td>
        <td>{new Date().toLocaleString()}</td>
      </tr>
    );
  });

  return (
    <div>
      <h2 style={{ textAlign: 'center', fontWeight: '600' }}>
        Transactions List
      </h2>
      <Table striped border hover variant='dark'>
        <thead style={{ color: 'yellow' }}>
          <tr>
            <th>Transaction ID</th>
            <th>Transaction Amount</th>
            <th>Transaction Type</th>
            <th>Transaction Time</th>
          </tr>
        </thead>
        <tbody>{renderedTransactionsRows}</tbody>
      </Table>
      <div style={{ marginTop: '-310px' }}>
        <AddTransactionModal />
        <a href='/home'>Go back to home</a>
      </div>
      <div></div>
    </div>
  );
};

export default TransactionsList;
