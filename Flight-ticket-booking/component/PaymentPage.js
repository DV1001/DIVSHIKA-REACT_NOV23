import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const PaymentPage = () => {
  const handleConfirmPayment = () => {
    // Process payment and show confirmation message
    alert('Payment Confirmed!');
    // Redirect to home or success page
    // No useHistory, using Link to navigate
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Confirm Payment
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your total amount: $XXX
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/p" // Change this to the desired destination after payment
        onClick={handleConfirmPayment}
      >
        Confirm Payment
      </Button>
    </Container>
  );
};

export default PaymentPage;
