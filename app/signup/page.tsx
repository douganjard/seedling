'use client'

// app/signup.tsx
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { Container } from '@mui/material'

const Signup = () => {
  const [name, setName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Add your signup logic here
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Container maxWidth="xs">
            <Typography variant="h5" gutterBottom align="center">
              Get started with just your phone number
            </Typography>
            <TextField
              label="Phone Number"
              variant="outlined"
              margin="normal"
              fullWidth
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: '16px' }}
            >
              Sign Up
            </Button>
          </Container>
        </form>
      </Paper>
    </div>
  )
}

export default Signup
