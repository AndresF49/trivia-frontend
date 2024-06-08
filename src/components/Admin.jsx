import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";

function Admin({ setAdmin }) {
  const [answer, setAnswer] = useState("");
  const [wannaBeAdmin, setWannaBeAdmin] = useState(false);

  const submitClicked = () => {
    if (answer === "andres is awesome") {
      setAdmin(true);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",

          gap: "10px",
        }}
        autoComplete="off"
      >
        {!wannaBeAdmin && (
          <>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(event) => setWannaBeAdmin(event.target.value)}
                />
              }
              label="Are you an admin? 🤨"
            />
          </>
        )}
        {wannaBeAdmin && (
          <>
            <TextField
              id="admin"
              label="Admin Password"
              type="password"
              onChange={(event) => setAnswer(event.target.value)}
            />
            <Button
              variant="contained"
              disabled={answer === ""}
              onClick={submitClicked}
            >
              Submit
            </Button>
          </>
        )}
      </Box>
    </>
  );
}

export default Admin;
