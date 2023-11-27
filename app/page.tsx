'use client'

import * as React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { TextField } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  const [phoneNumber, setPhoneNumber] = React.useState<string>('')
  return (
    <main>
      <Box
        sx={{
          pt: 16,
          pb: 12,
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Plant Your Career Seeds
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Your network is your forest. <br />
            Find humans who want to plant this with you together.
          </Typography>
          <Container maxWidth="xs">
            <Stack
              sx={{ pt: 4 }}
              direction="column"
              spacing={2}
              justifyContent="center"
            >
              <Typography variant="h6" gutterBottom align="center">
                Get started with just your phone number
              </Typography>
              <TextField
                label="Phone Number"
                variant="outlined"
                margin="normal"
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
            </Stack>
          </Container>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4} alignItems="center">
          <Grid item key={1} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia component="div" src="/assets/seed.png">
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src="/assets/seed.png" // Route of the image file
                    height={64} // Desired size with correct aspect ratio
                    width={64} // Desired size with correct aspect ratio
                    alt="Seed"
                  />
                </div>
              </CardMedia>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  align="center"
                >
                  Text us for 30 seconds. <br />
                  All we need to hear is how we can help, and 2-3 simple yes/no
                  follow-ups, then we&apos;re good to go.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item key={2} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia component="div" src="/assets/plant.png">
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src="/assets/plant.png" // Route of the image file
                    height={96} // Desired size with correct aspect ratio
                    width={96} // Desired size with correct aspect ratio
                    alt="Plant"
                  />
                </div>
              </CardMedia>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  align="center"
                >
                  We get to work. <br />
                  We parse out what you need, then give you our top options for
                  local people who can help.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item key={3} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia component="div" src="/assets/sprout.png">
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src="/assets/sprout.png" // Route of the image file
                    height={96} // Desired size with correct aspect ratio
                    width={96} // Desired size with correct aspect ratio
                    alt="Sprout"
                  />
                </div>
              </CardMedia>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  align="center"
                >
                  Pick your person! <br />
                  These people already signed up to help people, time for you to
                  chose. And then they&apos;ll contact you.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}
