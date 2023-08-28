"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";
import axios from "axios";

export default function Page() {
  const [age, setAge] = useState("");
  const [age1, setAge1] = useState("");
  const [age2, setAge2] = useState("");
  const [age3, setAge3] = useState("");
  const [textvalue, setTextvalue] = useState("");

  const handleSubmit = () => {
    const body = {
      age: age,
      age1: age1,
      age2: age2,
      age3: age3,
      textvalue: textvalue,
    };
    console.log("Data : ", body);

    // try {
    //   const res = axios.post("example.com/asdasd", body);

    //   if (res) {
    //     console.log();
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <center>
        <h1>Type & DIabetes Predictior</h1>
        <br></br>
        <InputLabel id="demo-simple-select-label">
          Form input feature 1
        </InputLabel>
        <FormControl style={{ width: "190px", margin: "20px" }}>
          <InputLabel id="demo-simple-select-label">
            Form input feature 1
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Form input feature 1"
            onChange={(e) => setAge(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <br />

        <InputLabel id="demo-simple-select-label">
          Form input feature 2
        </InputLabel>
        <FormControl style={{ width: "190px", margin: "20px" }}>
          <InputLabel id="demo-simple-select-label-1">
            Form input feature 2
          </InputLabel>
          <Select
            labelId="demo-simple-select-label-1"
            id="demo-simple-select"
            value={age1}
            label="Form input feature 2"
            onChange={(e) => setAge1(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <br />

        <InputLabel id="demo-simple-select-label">
          Form input feature 3
        </InputLabel>
        <FormControl style={{ width: "190px",margin: "20px" }}>
          <InputLabel id="demo-simple-select-label">
            Form input feature 3
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age2}
            label="Form input feature 3"
            onChange={(e) => setAge2(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <br />

        <InputLabel id="demo-simple-select-label">
          Form input feature 4
        </InputLabel>
        <FormControl style={{ width: "190px", margin: "20px" }}>
          <InputLabel id="demo-simple-select-label">
            Form input feature 4
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age3}
            label="Form input feature 4"
            onChange={(e) => setAge3(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <br />

        <Typography>From input feature</Typography>
        <TextField
          value={textvalue}
          onChange={(e) => setTextvalue(e.target.value)}
        />
        <br />
        <br />
        <br />
        <Button variant="contained" onClick={handleSubmit}>
          Predict
        </Button>

        <Box
          style={{
            margin: "20px",
            border: "1px solid red",
            display: "table",
            padding: "20px",
            borderRadius: "20px",
            backgroundColor: "#ff9191",
          }}
        >
          Prediction Display Area
        </Box>
      </center>
    </div>
  );
}
