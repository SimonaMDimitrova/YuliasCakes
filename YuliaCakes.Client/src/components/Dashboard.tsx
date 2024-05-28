import { ChangeEvent, useState, useEffect } from 'react';
import { get, post } from '../services/httpClient';
import { Button, Typography, Container, Grid, Paper} from "@mui/material";
import * as React from 'react';
import Title from './Title';

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Title>Галерия</Title>
      </div>
        
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography color="textPrimary" sx={{ flex: 1 }} component="h4" variant="h6">
              1-ва тортичка
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
            </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography color="textPrimary" sx={{ flex: 1 }}>
              2-ра тортичка
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
            </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography color="textPrimary" sx={{ flex: 1 }}>
              3-та тортичка
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1, }}>
            </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;