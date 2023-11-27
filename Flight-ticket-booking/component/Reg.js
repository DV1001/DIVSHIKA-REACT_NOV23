import React from 'react';
//import './reg.css';
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Link
} from '@mui/material';

const reg = () => {
    const paperstyle={padding:20,width:500,margin:"100px"}
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <Paper elevation={10} style={paperstyle} >
      <Box p={3}>
        <Typography variant="h5" align="center" >
          reg Form
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Username"
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                required
                type="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                fullWidth
                required
                type="Address"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                fullWidth
                required
                type="password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                fullWidth
                required
                type="password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/Signin"
                fullWidth
              >
                Sign-In
              </Button>
              <Typography>
                <Link href="#" component={RouterLink}
                  to="/Signin">Already Have an account?</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};

export default reg;
