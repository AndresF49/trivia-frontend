import { Box, Button, InputLabel, Select, MenuItem } from "@mui/material";
import fetchUrl from "../util/fetchUrl";
import { useEffect, useState } from "react";

function AdminButtons({ setAnswersTable }) {

  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      gap: '10px'
    }}
    >
      <p>admin buttons bar</p>
      <GetAnswers setAnswersTable={setAnswersTable} />
      <ClearAll />
      <ClearAnswers />
      <AddScore />
    </Box>
  );
}

function GetAnswers({ setAnswersTable }) {

  const answersClicked = async () => {
    try {
      const res = await fetch(fetchUrl + "/getAnswers");
  
      if (!res.ok) {
        throw new Error('Network response was not ok.');
      }
      // console.log(res);
      const data = await res.json();
      setAnswersTable(data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button variant="contained" onClick={answersClicked}>Get Answers</Button>
  );
}

function ClearAll() {
  const clearAllClicked = async () => {
    try {
      const res = await fetch(fetchUrl + "/clearAll");
  
      if (!res.ok) {
        throw new Error('Network response was not ok.');
      }
      // console.log(res);
      const data = await res.json();
      alert(data.message);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button variant="contained" onClick={clearAllClicked}>Clear Names and Answers</Button>
  );
}

function ClearAnswers() {
  const clearAnswers = async () => {
    try {
      const res = await fetch(fetchUrl + "/clearAnswers");
  
      if (!res.ok) {
        throw new Error('Network response was not ok.');
      }
      // console.log(res);
      const data = await res.json();
      alert(data.message);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button variant="contained" onClick={clearAnswers}>Clear Answers</Button>
  );
}

function AddScore() {
  const [name, setName] = useState("");
  const [score, setScore] = useState(null);
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    getNames();
  },[]);

  const addScoreClicked = async () => {
    try {
      const res = await fetch(fetchUrl + "/addScore", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify(answer)
        body: `{ "name": "${name}", "score": "${score}" }`
      });
  
      if (!res.ok) {
        throw new Error('Network response was not ok.');
      }
      // console.log(res);
      const data = await res.json();
      alert(data.message);

    } catch (error) {
      console.error(error);
    }
  };

  const getNames = async () => {
    try {
      const res = await fetch(fetchUrl + "/getAnswers");
  
      if (!res.ok) {
        throw new Error('Network response was not ok.');
      }
      // console.log(res);
      const data = await res.json();
      setNameList(data.map(row => row.name));

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <InputLabel id="name-select-label">Name</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="name-select"
        value={name}
        label="Name"
        onChange={(event) => setName(event.target.value)}
        onClick={getNames}
      >
        {nameList.map((name) => (
          <MenuItem value={name}>{name}</MenuItem>
        ))}
        {/* <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem> */}
      </Select>
      <Button variant="contained" onClick={addScoreClicked}>Add Score</Button>
    </>
  );
}

// add score
// check scores

export default AdminButtons;