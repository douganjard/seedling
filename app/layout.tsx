'use client'

import './globals.css'
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import { createTheme } from '@mui/material/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#4F6F52',
      },
      secondary: {
        main: '#B99470',
      },
    },
    spacing: 8,
    typography: {
      fontFamily: 'Lato',
      h2: {
        fontWeight: 600, // or 'bold'
      },
    },
  })

  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Seedling
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="sticky">
            <Toolbar>
              <FontAwesomeIcon icon={faSeedling} />
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, marginLeft: 2 }}
              >
                Seedling
              </Typography>
              <Link
                href="/"
                className={`link ${pathname === '/' ? 'active' : ''}`}
                passHref
              >
                <Typography
                  variant="button"
                  component="a"
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    marginRight: 2,
                  }}
                >
                  Home
                </Typography>
              </Link>
              <Link
                href="/signup"
                className={`link ${pathname === '/signup' ? 'active' : ''}`}
                passHref
              >
                <Typography
                  variant="button"
                  component="a"
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    marginRight: 2,
                  }}
                >
                  Sign Up
                </Typography>
              </Link>
            </Toolbar>
          </AppBar>
          {children}
          {/* Footer */}
          <Box sx={{ p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
              Seedling
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              Where KC talent advances their career.
            </Typography>
            <Copyright />
          </Box>
          {/* End footer */}
        </ThemeProvider>
      </body>
    </html>
  )
}
