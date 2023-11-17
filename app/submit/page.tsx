"use client";
import React, { useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";

const Survey: React.FC = () => {
  const [employerName, setEmployerName] = useState<string>("");
  const [talentPrompt, setTalentPrompt] = useState<string>("");

  const handleInputChange = () => {};

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("submit");

    // Redirect to the response view page
    //router.push("/responses");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          width: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Prompt Submission
          </Typography>
          <TextField
            label="Employer Name"
            variant="outlined"
            margin="normal"
            fullWidth
            value={employerName}
            onChange={(e) => setEmployerName(e.target.value)}
          />
          <TextField
            label="Talent Prompt"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            fullWidth
            value={talentPrompt}
            onChange={(e) => setTalentPrompt(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Survey;
