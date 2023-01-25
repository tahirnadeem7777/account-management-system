import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from './transactionSlice';
import { Modal, Button, Form } from 'react-bootstrap';
import '../../styles/AddTransactionModal.css';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import Balance from './Balance';
function AddTransactionModal() {
  const navigate = useNavigate();
  const [showModal, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [transactionAmount, setTransactionAmount] = useState();
  const [transactionType, setTransactionType] = useState('');

  const onTypeChanged = (event) => setTransactionType(event.target.value);

  const onAmountChanged = (event) => {
    setTransactionAmount(event.target.value);
  };
  const submitAlert = () => {
    Swal.fire({
      icon: 'success',
      text: 'Record has been saved successfully',
      timer: 2100,
    });
  };

  const onSaveTransaction = () => {
    if (transactionAmount && transactionType) {
      dispatch(addTransaction(transactionAmount, transactionType));
      setTransactionAmount();
      setTransactionType('');
    }
    handleClose();
    submitAlert();
    navigate('/transactionslist');
  };

  const clearAllFields = () => {
    setTransactionAmount('');
    setTransactionType('');
  };

  const isDisabled = Boolean(transactionAmount) && Boolean(transactionType);

  return (
    <>
      <div
        className='d-flex align-items-center justify-content-center'
        style={{ height: '100vh', marginTop: '-310px' }}
      >
        <Button variant='primary' onClick={handleShow}>
          Make a transaction &raquo;
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: 'center' }}>
            <b>Enter Transaction Detail</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className='mb-3'>
            <Form.Label>Transaction Amount</Form.Label>
            <Form.Control
              type='text'
              name='amount'
              id='amountId'
              placeholder='Enter Amount (only digits)'
              value={Number(transactionAmount) || 0}
              onChange={onAmountChanged}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Transaction Type</Form.Label>
            <Form.Select onChange={onTypeChanged} value={transactionType}>
              <option>Mobile load</option>
              <option>Mobile bundles</option>
              <option>Donations</option>
              <option>Challan payments</option>
              <option>Loan payments</option>
              <option>Government fees</option>
              <option>Educational payments</option>
              <option>Tickets</option>
              <option>Cash</option>
              <option>Check</option>
              <option>Debit card</option>
              <option>Bank transfer</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='primary'
            className='w-100'
            onClick={onSaveTransaction}
            disabled={!isDisabled}
          >
            Submit
          </Button>
          <Button className='w-100' variant='warning' onClick={clearAllFields}>
            Clear all fields
          </Button>
          <Button className='w-100' variant='danger' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTransactionModal;
