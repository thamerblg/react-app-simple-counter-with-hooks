import { useState } from "react";

function App() {
  const initialcount = 0;
  const [count, setCount] = useState(initialcount);
  const [pas, setPas] = useState(1);

  return (
    <div className="App">
      <h2>Simple app Counter with React & Hooks</h2>
      <p
        className="counterValue"
        style={{ color: count === 0 ? "black" : count > 0 ? "green " : "red" }}
      >
        {count}
      </p>
      <div className="form-container">
        <p>Modify the advancement step here: </p>
        <form>
          <input
            className="jumbotron__window"
            type="number"
            value={pas}
            onChange={(e) => setPas(parseInt(e.target.value))}
            min="1"
          />
        </form>
      </div>
      <div className="btn-container">
        <button className="" onClick={() => setCount(count - pas)}>
          Decrease
        </button>
        <button className="" onClick={() => setCount(initialcount)}>
          Reset
        </button>
        <button className="" onClick={() => setCount(count + pas)}>
          Increase
        </button>
      </div>
    </div>
  );
}

export default App;
