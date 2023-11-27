import React , { useState } from 'react';
import { Typography, Button,Grid, Paper, IconButton, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import InfoIcon from '@mui/icons-material/Info';
import FlightDateSelection from './FlightDateSelection'; // Import the FlightDateSelection component
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const FlightDetails = () => {
  const [cartCounts, setCartCounts] = useState(Array(4).fill(0)); // Individual cart counts for 2 rows

  const incrementCount = (index) => {
    const newCounts = [...cartCounts];
    newCounts[index]++;
    setCartCounts(newCounts);
  };

  const decrementCount = (index) => {
    const newCounts = [...cartCounts];
    if (newCounts[index] > 0) {
      newCounts[index]--;
      setCartCounts(newCounts);
    }
  };

  return (
    <div>
      <Paper
        elevation={3}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', // Aligns items to the ends (right and left)
          padding: '20px',
          marginBottom: '20px',
          backgroundColor: '#1976d2',        
        }}
      >
        <Button style={{ color:'black'}} component={RouterLink} to='/home'>
          <ArrowBackIcon />back
        </Button>
      <Typography variant="h5" gutterBottom >
        Flight Options
      </Typography>
      <Button aria-label="View Cart"  variant="contained" color="primary" component={RouterLink}
        to="/p">
        <ShoppingCartIcon /> Cart
        {cartCounts.reduce((acc, count) => acc + count, 0) > 0 && (
          <span>{cartCounts.reduce((acc, count) => acc + count, 0)}</span>
        )}
      </Button>
      </Paper>
      <FlightDateSelection />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Flight</TableCell>
                  <TableCell>Departure Time</TableCell>
                  <TableCell>Arrival Time</TableCell>
                  <TableCell>Duration</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Book</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {[1, 2, 3, 4, 5].map((row) => ( */}
                  {/* <TableRow key={row}> */}
                  <TableRow >
                    <TableCell>
                      <Grid container alignItems="center">
                        <Grid item>
                          <FlightIcon />
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1">I5 611</Typography>
                          <IconButton aria-label="More Info">
                            <InfoIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell>00:00</TableCell>
                    <TableCell>00h 00m</TableCell>
                    <TableCell>00h 00m</TableCell>
                    <TableCell>₹..... - ₹.....</TableCell>
                    <TableCell> <IconButton
              aria-label="Remove from Cart"
              onClick={() => decrementCount(0)} // Decrement count for Row 1
            >
              <RemoveIcon />
            </IconButton>
            {cartCounts[0]} {/* Display count for Row 1 */}
            <IconButton
              aria-label="Add to Cart"
              onClick={() => incrementCount(0)} // Increment count for Row 1
            >
              <AddIcon />
            </IconButton>
            </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>
                      <Grid container alignItems="center">
                        <Grid item>
                          <FlightIcon />
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1">I5 612</Typography>
                          <IconButton aria-label="More Info">
                            <InfoIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell>00:00</TableCell>
                    <TableCell>00h 00m</TableCell>
                    <TableCell>00h 00m</TableCell>
                    <TableCell>₹..... </TableCell>
                    <TableCell><IconButton
              aria-label="Remove from Cart"
              onClick={() => decrementCount(1)} // Decrement count for Row 2
            >
              <RemoveIcon />
            </IconButton>
            {cartCounts[1]} {/* Display count for Row 2 */}
            <IconButton
              aria-label="Add to Cart"
              onClick={() => incrementCount(1)} // Increment count for Row 2
            >
              <AddIcon />
            </IconButton></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>
                      <Grid container alignItems="center">
                        <Grid item>
                          <FlightIcon />
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1">I5 612</Typography>
                          <IconButton aria-label="More Info">
                            <InfoIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell>00:00</TableCell>
                    <TableCell>00h 00m</TableCell>
                    <TableCell>00h 00m</TableCell>
                    <TableCell>₹..... </TableCell>
                    <TableCell><IconButton
              aria-label="Remove from Cart"
              onClick={() => decrementCount(2)} // Decrement count for Row 2
            >
              <RemoveIcon />
            </IconButton>
            {cartCounts[2]} {/* Display count for Row 2 */}
            <IconButton
              aria-label="Add to Cart"
              onClick={() => incrementCount(2)} // Increment count for Row 2
            >
              <AddIcon />
            </IconButton></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>
                      <Grid container alignItems="center">
                        <Grid item>
                          <FlightIcon />
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1">I5 612</Typography>
                          <IconButton aria-label="More Info">
                            <InfoIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell>00:00</TableCell>
                    <TableCell>00h 00m</TableCell>
                    <TableCell>00h 00m</TableCell>
                    <TableCell>₹..... </TableCell>
                    <TableCell><IconButton
              aria-label="Remove from Cart"
              onClick={() => decrementCount(3)} // Decrement count for Row 2
            >
              <RemoveIcon />
            </IconButton>
            {cartCounts[3]} {/* Display count for Row 3 */}
            <IconButton
              aria-label="Add to Cart"
              onClick={() => incrementCount(3)} // Increment count for Row 2
            >
              <AddIcon />
            </IconButton>
            </TableCell>
                  </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default FlightDetails;
