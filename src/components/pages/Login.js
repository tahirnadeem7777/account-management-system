import React, { useState } from 'react';
import '../../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem(localStorage.getItem('authenticated') || false)
  );
  const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' },
    { username: 'user4', password: 'pass4' },
    { username: 'user5', password: 'pass5' },
  ];
  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);
  const loginSucessAlert = () => {
    Swal.fire({
      icon: 'success',
      text: 'Logged in successfully',
      timer: 1500,
    });
  };
  const loginFailAlert = () => {
    Swal.fire({
      icon: 'error',
      title: 'Warning!',
      text: 'Username or password is incorrect',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      setAuthenticated(true);
      localStorage.setItem('authenticated', true);
      loginSucessAlert();
      navigate('/dashboard');
      navigate('/dashboard');
    } else {
      loginFailAlert();
    }
  };
  return (
    <>
      <h2 style={{ textAlign: 'center', marginTop: '45px' }}>Login</h2>
      <div className='login__form'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter username'
              value={username}
              onChange={onUsernameChanged}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              value={password}
              onChange={onPasswordChanged}
            />
          </Form.Group>
          <Button variant='primary' className='w-100' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
