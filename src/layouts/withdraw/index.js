import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Grid,
  Card,
} from '@mui/material';
import MDBox from 'components/MDBox';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';

const Withdraw = () => {
  const [amount, setAmount] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState('');

  const handleWithdraw = () => {
    // Basic validation
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setMessage('Please enter a valid amount.');
      setOpenSnackbar(true);
      return;
    }

    // Process withdrawal logic here (e.g., API call)
    console.log(`Withdrawing: ${amount}`);

    // Clear the input field
    setAmount('');
    setMessage('Withdrawal successful!');
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={4.5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={6} xl={5}>
            <Container maxWidth="sm">
              <Card style={{ marginTop: '20px', padding: '40px' }}>
                <Typography variant="h4" align="center" color="dodgerblue" gutterBottom>
                  Withdrawal Funds
                </Typography>
                <Typography variant="h6" component="h1" align="left" color="red" gutterBottom>
                  Minium Deposit $50 USDT
                </Typography>
                <TextField
                  label="Withdrawal Amount"
                  variant="outlined"
                  fullWidth
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                  style={{ marginBottom: '20px' }}
                />
                <Button
                  variant="contained"
                  color="dark"
                  onClick={handleWithdraw}
                  fullWidth
                >
                  Withdraw
                </Button>
                <Snackbar
                  open={openSnackbar}
                  autoHideDuration={6000}
                  onClose={handleCloseSnackbar}
                >
                  <Alert onClose={handleCloseSnackbar} severity="info">
                    {message}
                  </Alert>
                </Snackbar>
              </Card>
            </Container>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default Withdraw;
