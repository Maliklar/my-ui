import "./App.css";
import Avatar from "./components/Avatar";
import Button from "./components/Button";
import TextField from "./components/TextField";
import { FaAccusoft } from "react-icons/fa";
import Color from "./types/styles/colors";
function App() {
  return (
    <div
      className="App"
      style={{
        padding: 20,
      }}
    >
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

      <Avatar
        src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
        alt="lskdfj"
        badge={Color.LightGreen500}
      />
    </div>
  );
}

export default App;
