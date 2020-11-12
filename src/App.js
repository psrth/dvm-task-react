import './App.css';
import Button from 'react-bootstrap/button'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header text="Auth Routing Test"/>
        <Button variant="light" className="navB">Login</Button>        
        <Button variant="light" className="navB">Signup</Button>
        <Button variant="light" className="navB">Home</Button>
        <Button variant="light" className="navB">About</Button>
      </header>
    </div>
  );
}

export default App;
