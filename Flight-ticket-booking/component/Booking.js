// FlightBooking.js

import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import SearchFlights from './FlightAvailability';
import Booking from './Booking';

const FlightBooking = () => {
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleFlightSelection = (flight) => {
    setSelectedFlight(flight);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <SearchFlights onFlightSelect={handleFlightSelection} />
        </Grid>
        <Grid item xs={6}>
          {selectedFlight ? (
            <Booking flightDetails={selectedFlight} />
          ) : (
            <p>Select a flight to proceed with booking</p>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default FlightBooking;
