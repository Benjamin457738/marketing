import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Container, CircularProgress, Grid } from '@mui/material';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import MDBox from 'components/MDBox';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';

const Deposit = () => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleDeposit = () => {
    setLoading(true);
    setMessage('');

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      setAmount('');
      setMessage('Deposit successful!');
    }, 2000);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={4.5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={6} xl={5}>
            <Container maxWidth="sm">
              <Card style={{ marginTop: '20px', padding: '20px' }}>
                <CardContent>
                  <Typography variant="h4" component="h1" align="center" color="dodgerblue" gutterBottom>
                    Deposit Funds
                  </Typography>
                  <Typography variant="h6" component="h1" align="left" color="red" gutterBottom>
                    Minium Deposit $50 USDT
                  </Typography>
                  <TextField
                    fullWidth
                    label="Amount"
                    variant="outlined"
                    margin="normal"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    type="number"
                  />
                  <Button
                    variant="contained"
                    color="dark"
                    fullWidth
                    onClick={handleDeposit}
                    disabled={loading || !amount}
                  >
                    {loading ? <CircularProgress size={24} /> : 'Deposit'}
                  </Button>
                  {message && (
                    <Typography variant="body1" color="success.main" align="center" style={{ marginTop: '10px' }}>
                      {message}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Container>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default Deposit;
