import { useState } from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, TextField, Button } from '@mui/material'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Answer from './components/Answer';

const theme = createTheme({
    palette: {
      primary: {
        main: "#2a9461"
      },
      secondary: {
        main: "#21764D"
      }
    },
    textColor:{
      color:'white'
    }
  });


function App() {
  const [name, setName] = useState("");
  const [admin, setAdmin] = useState(false);
  const [hasName, setHasName] = useState(false);

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {hasName === false && <Name setName={setName} setHasName={setHasName} />}
      {hasName && name && <Answer name={name} />}
    </div>
    </ThemeProvider>
  );
}

function Name({ setName, setHasName }) {

  const submitClicked = () => {
    setHasName(true);
  };

  return (
  <Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '25ch' },
    display: 'flex',
  }}
  autoComplete="off"
  >
    <TextField id="name" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
    <Button variant="contained" onClick={submitClicked}>Submit</Button>
  </Box>
  );
}

export default App;
