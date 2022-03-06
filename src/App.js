
import { useDispatch, useSelector } from "react-redux";
import { decNum, inCNum } from "./actions";
import "./App.css";


function App() {
  const myState  =  useSelector((state)=>state.changeNum)
  const dispatch  =  useDispatch()
  return (
    <div className="App">
      <h2
        style={{
          color: "grey",
          fontSize: "20px",
        }}
      >
        Redux Counter
      </h2>
      <div>
        <button
          style={{
            width: "80px",
            backgroundColor: "blue",
            color: "white",
            border: "2px solid white",
            padding: "0px",
            fontSize: "20px",
          }}
          onClick={()=>dispatch(inCNum())}
        >
          +
        </button>
      </div>
      <div>{myState}</div>
      <div>
        <button
          style={{
            width: "80px",
            backgroundColor: "red",
            color: "white",
            border: "2px solid white",
            padding: "0px",
            fontSize: "20px",
          }}
          onClick={()=>dispatch(decNum())}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
