import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";
import React from "react";
import { Button } from "./Button";

import "./CareerSec.css";

export default function Careers() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className="main-container">
        <h1 className="careers">Careers</h1>
        <h2 className="sub-heading"> Join our growing team at ZipBolt</h2>
        <div className="">
          <h2>What We Offer</h2>
          <Button
            buttonStyle="btn--outline--Secondary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            See Open Positions
          </Button>
        </div>

        <div>
          <Card>
            <CardMedia>
              <i className="" />
            </CardMedia>
            <CardContent>
              <Typography></Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <div className="container-row">
            <Box
              sx={{
                display: "inline-grid",
                columnGap: 40,
                rowGap: 40,
                gridTemplateColumns: "repeat(2, 2fr)",
              }}
            >
              <TextField
                sx={{}}
                id="outlined-basic"
                label="First Name"
                variant="standard"
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="standard"
              />
              <TextField
                id="outlined-basic"
                label="E mail"
                variant="standard"
              />
              <TextField
                id="outlined-basic"
                label="Mobile No."
                variant="standard"
              />
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Experience"
              >
                <MenuItem value={"1m"}>1 Month</MenuItem>
                <MenuItem value={"2m"}>2 Months</MenuItem>
                <MenuItem value={"3m+"}>3 Months +</MenuItem>
                <MenuItem value={"6m+"}>6 Months +</MenuItem>
                <MenuItem value={"1y+"}>1 Year +</MenuItem>
                <MenuItem value={"2y+"}>2 Year +</MenuItem>
                <MenuItem value={"3y+"}>3 Year +</MenuItem>
                Experience
              </Select>
              <label
                style={{
                  borderBottom: "1px solid #949494",
                  color: "#757575",
                  cursor: "pointer",
                }}
              >
                <input
                  type="file"
                  id="test"
                  name="resume-upload"
                  accept=".pdf,.doc,.docx"
                  style={{ display: "none" }}
                />
                Click to Select Resume
              </label>
              <label htmlFor="resume-upload">
                <Button
                  buttonStyle="btn--outline--Secondary"
                  buttonSize="btn--large"
                  onClick={console.log("hey")}
                >
                  Upload
                </Button>
              </label>
            </Box>

            <div className="container-col"></div>
          </div>
        </div>
      </div>
    </>
  );
}
