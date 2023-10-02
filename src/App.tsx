import "./App.css";
import Avatar from "./components/Avatar";
import Button from "./components/Button";
import TextField from "./components/TextField";
import { FaAccusoft, FaExclamationTriangle } from "react-icons/fa";
import Color from "./types/styles/colors";
import Dialog from "./components/Dialog";
import { useState } from "react";
import Alert from "./components/Alert";
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

      <Alert icon={FaExclamationTriangle}>
        Hello There this is an Alert component hopfully I can flow it up
      </Alert>

      <Dialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default App;
