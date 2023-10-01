import "./App.css";
import Avatar from "./components/Avatar";
import Button from "./components/Button";
import TextField from "./components/TextField";
import { FaAccusoft } from "react-icons/fa";
import Color from "./types/styles/colors";
import Dialog from "./components/Dialog";
import { useState } from "react";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="App"
      style={{
        padding: 20,
        height: 4000,
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
        onClick={() => setOpen(true)}
        src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
        alt="lskdfj"
        badge={Color.LightGreen500}
      />

      <Dialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default App;
