import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from "react-bootstrap/Alert";
import { validateEmail } from '../../utils/helpers';

export default function Contact() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email');
      return;
    }
    if (!username) {
      setErrorMessage(`Name cannot be left blank`);
      return;
    }
    if (!email) {
      setErrorMessage(`Email cannot be left blank`);
      return;
    }
    if (!message) {
      setErrorMessage(`Message cannot be left blank`);
      return;
    }
    setErrorMessage(`Thank you! Your message has been sent.`);

    setUsername('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
    <h1 className='text-center title'>Contact me!</h1>
    <p className='text-center'>Have an idea for a website but don't know where to start? Want to collborate on a project? Send me a message and let me know!</p>
    <Form className='w-50 m-auto'>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control className='shadow-none' type="text" placeholder="Name" value={username} onChange={(e) => {setUsername(e.target.value);}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control className='shadow-none' type="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value);}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
       <Form.Group className="mb-3" controlId="ControlText">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" className='shadow-none' rows={3} type="text" value={message} onChange={(e) => {setMessage(e.target.value);}}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleFormSubmit}>
        Submit
      </Button>
      {errorMessage && (
        <div>
        <Alert variant="warning" className="mt-5 m-auto text-center" style={{ width: "20rem" }}>
          {errorMessage}
        </Alert>
        </div>
       )}
    </Form>
    </div>
  );
}
