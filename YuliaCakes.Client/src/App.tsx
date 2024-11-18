import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Dashboard from './components/Dashboard';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import { Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import logo from './logo.svg';
import Footer from './components/Footer/Footer';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100%)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    text: {
      primary: '#121212',
    },
  },
});

export default function App() {
  const [open, setOpen] = React.useState(true);
  const navItems = ['Home', 'About', 'Contact'];

  return (
    <React.Fragment>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="fixed">
            <Toolbar>

              <Box sx={{ flexGrow: 1 }}>
                <a href="/" className="App-logo"><img src={logo} className="app-logo" /></a>

                <Button color="inherit" className="app-order-now-button">ПОРЪЧАЙ СЕГА</Button>
              </Box>
              
              <List className="app-list">
                {navItems.map((item) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Dashboard />
                  </Paper>
                  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Footer />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
      <ToastContainer />
    </React.Fragment>
  );
}