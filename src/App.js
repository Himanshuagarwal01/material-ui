import "./App.css";
import { Button } from "@mui/material";
import MUI from "./component/MUI";

function App() {
  return (
    <>
    <div className="App">
    
    <h1>React-MUI</h1>
      <button >Click Me</button>
      <span>-- this is a simple button using HTML</span>
      <br />
      <Button color="warning" variant="contained">
        material ui button
      </Button>
      <br />
      <Button variant="text" color="success">Text</Button>
      <Button variant="contained" color="error">Contained</Button>
      <Button variant="outlined" color="secondary">Outlined Secondary</Button>
      <br />
      <Button color="primary">Primary</Button>
      <Button disabled color="info">Disabled</Button>
      <Button href="#text-buttons" variant="contained" color="inherit">
        Link</Button>
      <br />
    </div>
    <MUI/>
    </>
  );
}

export default App;
