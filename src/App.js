import logo from "./logo.svg";
import "./App.css";
import Simple from "./components/Simple";
import { useRef } from "react";
import useCounter from "./hooks/useCounter";

function App() {
  const [stateCounter, dispatch] = useCounter();
  const { count, index } = stateCounter;

  const inputRef = useRef(null);

  /* const [count, setCount] = useState(1);
  const [index, setIndex] = useState(1); */

  function handleClick() {
    inputRef.current.focus();
    if (inputRef.current.style.backgroundColor === "white") {
      inputRef.current.style.backgroundColor = "red";
    } else {
      inputRef.current.style.backgroundColor = "white";
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{count}</p>
        <button
          onClick={
            () => dispatch({ type: "inc" })
            // setCount((prevCount) => {
            //   return prevCount + 2;
            // })
          }
        >
          Ekle count
        </button>

        <button onClick={() => dispatch({ type: "dec" })}>Çıkar count</button>
        <button onClick={() => dispatch({ type: "reset" })}>
          Sıfırla count
        </button>
        <p>{index}</p>
        {/*<button onClick={() => setIndex(index + 1)}>Ekle index</button>
        {count % 2 === 0 && <Simple />} */}
        <input ref={inputRef} />
        <button onClick={handleClick}>Focus the input</button>
      </header>
    </div>
  );
}

export default App;
