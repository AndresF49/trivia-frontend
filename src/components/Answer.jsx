import { Box, TextField, Button } from '@mui/material'
import { useState } from 'react';

function Answer({ name }) {
  const [answer, setAnswer] = useState("");

  const submitClicked = async () => {
    try {
      const res = await fetch("http://localhost:3000/addAnswer", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify(answer)
        body: `{ "name": "${name}", "answer": "${answer}" }`
      });
  
      if (!res.ok) {
        throw new Error('Network response was not ok.');
      }
      console.log(res);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
      display: 'flex',
    }}
    autoComplete="off"
    >
      <TextField id="answer" label="Your Answer" variant="outlined" onChange={(event) => setAnswer(event.target.value)} />
      <Button variant="contained" onClick={submitClicked}>Submit</Button>
    </Box>
    </>
  );
};

export default Answer