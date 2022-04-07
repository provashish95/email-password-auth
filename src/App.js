
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import app from './firebase.init';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError("Password should have at least one special char")
      return;
    }
    setValidated(true);
    setError('');

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      })
    // console.log('form submitted', email, password);
    event.preventDefault();
  }

  return (
    <div >
      <div className="registration w-50 mx-auto mt-5">
        <h2 className="text-primary">Please register</h2>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Control.Feedback type="invalid">
              Please input valid email
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please input valid password
            </Form.Control.Feedback>
            <p className="text-danger">{error}</p>
          </Form.Group>


          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
