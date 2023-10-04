import "./App.css";
import Avatar from "./components/Avatar";
import Button from "./components/Button";
import TextField from "./components/TextField";
import {
  FaAccusoft,
  FaAdjust,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaPlay,
} from "react-icons/fa";
import Dialog from "./components/Dialog";
import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import Color from "./types/styles/colors";

type Colors =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "none";

const colors = ["primary", "secondary", "success", "error", "warning", "none"];
function App() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState<Color>(colors[0] as Color);

  useEffect(() => {
    let i = 0;
    let interval = setInterval(() => {
      if (i >= colors.length) i = 0;
      if (colors[i]) setColor(colors[i] as Color);
      i++;
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      className="App"
      style={{
        padding: 20,
        height: 4000,
      }}
    >
      <section>
        <h2>Buttons</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            color={color}
            startIcon={FaExclamationCircle}
          >
            Contained
          </Button>

          <Button variant="outlined" color={color} startIcon={FaAdjust}>
            Outlined
          </Button>

          <Button variant="text" color={color} startIcon={FaPlay}>
            Text
          </Button>
        </div>
      </section>

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
        onClick={() => setOpen((i) => !i)}
        src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
        alt="lskdfj"
        badge={Color.LightGreen500}
      />

      <Alert icon={FaExclamationTriangle} open={open}>
        Hello There this is an Alert component hopfully I can flow it up
      </Alert>

      {/* <Dialog open={open} onClose={() => setOpen(false)} /> */}
    </div>
  );
}

export default App;
