import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import fetchUrl from "../util/fetchUrl";

function Answer({ name }) {
  const [answer, setAnswer] = useState("");

  const submitClicked = async () => {
    try {
      const res = await fetch(fetchUrl + "/addAnswer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(answer)
        body: `{ "name": "${name}", "answer": "${answer}" }`,
      });

      if (!res.ok) {
        throw new Error("Network response was not ok.");
      }
      // console.log(res);
      setAnswer("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
      autoComplete="off"
    >
      <TextField
        id="answer"
        label="Your Answer"
        variant="outlined"
        onChange={(event) => setAnswer(event.target.value)}
        value={answer}
      />
      <Button
        variant="contained"
        disabled={answer === ""}
        onClick={submitClicked}
      >
        Submit
      </Button>
    </Box>
  );
}

export default Answer;
