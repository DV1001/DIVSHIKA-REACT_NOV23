import { Typography, Grid, IconButton, Select, MenuItem } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

function FlightDetails() {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={3}>
      <Typography variant="body2">TRIP TYPE</Typography>
      </Grid>
      <Grid item xs={3}>
        <IconButton>
          <FlightIcon />
        </IconButton>
        <Typography variant="body1">ABC</Typography>
        <Typography variant="body2">ORIGIN</Typography>
      </Grid>
      <Grid item xs={2}>
        <IconButton>
          <SwapHorizIcon />
        </IconButton>
      </Grid>
      <Grid item xs={3}>
        <IconButton>
          <FlightIcon />
        </IconButton>
        <Typography variant="body1">XYZ</Typography>
        <Typography variant="body2">DESTINATION</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body1">GUESTS</Typography>
      </Grid>
      {/* Add the rest of your components */}
    </Grid>
  );
}

export default FlightDetails;
