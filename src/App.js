import './App.css';
import UseEffect from './hooks/UseEffect';
import UseRef from './hooks/UseRef';
import UseState from './hooks/UseState';

function App() {
  return (
    <div className="App">
      <h1>React hooks</h1>
      <UseState />
      <br /><br />
      <UseEffect />
      <br /><br />
      <UseRef />
    </div>

  );
}

export default App;
