import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';

const auth = getAuth(app);

function App() {
  const handleEmailBlur = (event) => {
    console.log(event.target.value);
  }
  const handlePasswordBlur = (event) => {
    console.log(event.target.value);
  }
  const hanldeFormSubmit = (event) => {
    console.log('form submited');
    event.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={hanldeFormSubmit}>
        Name:
        <input type="text" name="" id="" /><br />
        Password:
        <input onBlur={handlePasswordBlur} type="password" name="" id="" /><br />
        Email:
        <input onBlur={handleEmailBlur} type="email" name="" id="" /><br />
        <input type="submit" value="Login" /><br />
      </form>
    </div>
  );
}

export default App;
