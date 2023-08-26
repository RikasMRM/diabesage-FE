// import React, { useState } from 'react';
import { Button, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

export default function Page() {

    // const [age, setAge] = useState('');

    // const handleChange = (event) => {
    //   setAge(event.target.value);
    // };

    const age = '';

    return (
        <div style={{marginTop: '50px'}}>
            <center>
                <h1>Type & DIabetes Predictior</h1><br></br>
                <InputLabel id="demo-simple-select-label">Form input feature 1</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                    placeholder="Age"
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>

                <InputLabel id="demo-simple-select-label">Form input feature 2</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>

                <InputLabel id="demo-simple-select-label">Form input feature 3</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>

                <InputLabel id="demo-simple-select-label">Form input feature 4</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <br/>

                <Typography>From input feature</Typography>
                <TextField />
                <br/>
                <br/>
                <br/>
                <Button variant="contained">Predict</Button>
            </center>
        </div>
    )
}