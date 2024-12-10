import React, { useEffect, useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import { Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import logo from './logo.svg';
import Footer from './components/Footer/Footer';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/Header/Header';

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

const navItems = [
  { id: 'Home', label: 'Home' },
  { id: 'About', label: 'About' },
  { id: 'Gallery', label: 'Gallery' },
  { id: 'Comments', label: 'Comments' },
  { id: 'Contact', label: 'Contact' },
];

export default function App() {
  const [open, setOpen] = React.useState(true);
  const [activeSection, setActiveSection] = useState('Home');

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
    }
  };

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
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton
                      component="a"
                      href={`#${item.id}`}
                      sx={{
                        textAlign: 'center',
                        backgroundColor: activeSection === item.id ? '#eceff1' : 'transparent',
                        color: activeSection === item.id ? '#E94C9A' : 'inherit',
                      }}
                      onClick={() => handleNavClick(item.id)}
                    >
                      <ListItemText primary={item.label} />
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
                    <Header />
                    <Dashboard />
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