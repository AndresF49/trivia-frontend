import { useEffect, useState } from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, TextField, Button } from '@mui/material'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Answer from './components/Answer';
import Admin from './components/Admin';
import AdminButtons from './components/AdminButtons';
import AnswersTable from './components/AnswersTable';

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
  const [answersTable, setAnswersTable] = useState(null);

  useEffect(() => {
    console.log(answersTable);
  }, [answersTable]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {hasName && 
          // <p> Welcum {name} 🍆💦😩</p>
          <p> {name} has arrived 🤓</p>
        }
        {hasName === false && <Name name={name} setName={setName} setHasName={setHasName} />}
        {hasName && name && !admin && <Answer name={name} />}
        {admin === false 
          && <Admin setAdmin={setAdmin} />          
        }
        {admin && <AdminButtons setAnswersTable={setAnswersTable} /> }
        {admin && <AnswersTable data={answersTable === null ? [] : answersTable} />}
      </div>
    </ThemeProvider>
  );
}

function Name({ name, setName, setHasName }) {

  const submitClicked = () => {
    if (name !== "")
      setHasName(true);
  };

  return (
  <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    gap: '10px'
  }}
  autoComplete="off"
  >
    <TextField id="name" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
    <Button variant="contained" onClick={submitClicked}>Submit</Button>
  </Box>
  );
}

export default App;
