
import React, { useState } from 'react';
import { Button, Container, Typography, Divider, TextField, Box, Card, CardContent, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const PaymentDetails = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    if (option.name === 'Credit Card') {
      // Handle the specific action for Credit Card option
      setSelectedOption(option);
    } else if (option.name === 'PayPal') {
      setSelectedOption(option);
    } else {
      setSelectedOption(null); // Clear selection for other options
    }
  };

  const paymentOptions = [
    {
      id: 1,
      name: 'Credit Card',
      details: (
        <Container maxWidth="sm">
          <form>
            <Typography variant="h6" gutterBottom>
              Payment Details:
            </Typography>
            <Box sx={{ '& .MuiTextField-root': { marginBottom: '15px' } }}>
              <TextField label="Card Number" fullWidth />
              <TextField label="Name on Card" fullWidth />
              <TextField label="Expiry Date" fullWidth />
              <TextField label="CVV" fullWidth />
            </Box>
            <Button
              variant="contained"
              color="primary"
              component={RouterLink} // Use RouterLink from react-router-dom
              to="/payment" // Specify the route to navigate to
              type="submit"
            >
              Continue to Payment
            </Button>
          </form>
        </Container>
      ),
    },
    {
      id: 2,
      name: 'PayPal',
      details: (
        <Container maxWidth="sm">
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                PayPal
              </Typography>
              <Container maxWidth="xs">
                <CardMedia
                  component="img"
                  height="100%"
                  image="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" // PayPal logo image URL
                  alt="PayPal Logo"
                />
              </Container>
              <Typography variant="body1" style={{ marginTop: '10px' }}>
                Pay securely with PayPal.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/paypal-payment"
                style={{ marginTop: '10px' }}
              >
                Continue with PayPal
              </Button>
            </CardContent>
          </Card>
        </Container>
      ),
    },
    // Add more payment options here
  ];

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Choose Payment Option
      </Typography>
      <Divider />
      <div style={{ marginTop: '20px' }}>
        {paymentOptions.map((option) => (
          <div key={option.id} style={{ marginBottom: '10px' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </Button>
          </div>
        ))}
      </div>
      {selectedOption && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6" gutterBottom>
            {selectedOption.name}
          </Typography>
          <Typography variant="body1">{selectedOption.details}</Typography>
        </div>
      )}
    </Container>
  );
};

export default PaymentDetails;

