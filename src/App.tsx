import "./App.css";
import Button from "./components/Button";
import TextField from "./components/TextField";
import { FaAccusoft } from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <Button variant="outlined" color="primary">
        Hello
      </Button>
      <TextField
        title="SOME INPUT"
        placeholder="Hello World"
        variant="outlined"
        error
        errorMessage="Error"
        icon={FaAccusoft}
        type="password"
      />
    </div>
  );
}

export default App;
