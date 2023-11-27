import * as React from 'react';
import { useState } from 'react';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "@mui/material/Link";
import './HomePage.css';
import {Toolbar,Typography,Container,Grid,Paper,TextField,Button,Box,IconButton,InputBase,Badge,MenuItem,Menu,List,Divider,ListItem,ListItemButton,ListItemIcon,ListItemText,} from '@mui/material';
import { styled, alpha, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import CssBaseline from '@mui/material/CssBaseline';
import ButtonBase from '@mui/material/ButtonBase';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Link as RouterLink } from 'react-router-dom';

// ... constants
const Search = styled('div')(({ theme }) => ({
// ...styles for Search component
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
  
const drawerWidth = 240;
  
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    // ...styles for Main component
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
}),
marginLeft: `-${drawerWidth}px`,
...(open && {
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    }),
  }),);
  
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    // ...styles for AppBar component
    transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
    ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  }));
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    // ...styles for DrawerHeader component
    display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    // ...styles for SearchIconWrapper component
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // ...styles for StyledInputBase component
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  })); 
  
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));

  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

  const actions = [
    { icon: <TwitterIcon />, name: 'X' },
    { icon: <WhatsAppIcon />, name: 'Whatsapp' },
    { icon: <InstagramIcon />, name: 'IG' },
    { icon: <PhoneIcon />, name: 'Contact' },
  ];

  //.
  const FormContainer = styled('div')(({ theme }) => ({
    padding: theme.spacing(2),
  }));

  const HomePage1 = () => {
    
    // ...React component logic
    // Handlers for drawer and menu...
    const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const menuId = 'primary-search-account-menu';
  const renderMenu = (
    // Render Profile menu...
    <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical:'bottom',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <p onClick={handleMenuClose}>......No Message!....</p>
      </Menu>
  );
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    // Render mobile menu...
    <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        {/* <MenuItem>
          <IconButton size="large" aria-label="show 0 new mails" color="inherit">
            <Badge badgeContent={0} color="error">
              <HomeIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem> */}
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 0 new notifications"
            color="inherit"
          >
            <Badge badgeContent={0} color="error" onClick={handleProfileMenuOpen}>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
  );

  // Images array...
  const images = [
    {
      url: 'https://as1.ftcdn.net/v2/jpg/00/37/32/34/1000_F_37323420_Ttq8iXFjkqNYZuW0qu77ORHAYTxmvT7E.jpg',
      title: 'DESTINATIONS',
      width: '100%',
    },
  ];

  const Footer = () => {
    return (
      <Box component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are dedicated to providing the best service to our
              users.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: flights@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
             Security & Customer Rights
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Terms & Conditions
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Privacy Policy
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Conditions of Carriage
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Domestic Fares/Tarrif
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Fees & Charges
            </Typography>
            
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://Flights.com/">
              Airways
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
      // </Box>
    );
  };  

  const [searchCriteria, setSearchCriteria] = useState({
    departure: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    tripType: '',
    // Add more search criteria as needed
  });
  const [searchedFlights, setSearchedFlights] = useState([]);

  const handleSearch = () => {
    // Logic to search for flights using searchCriteria
    // Fetch flights based on searchCriteria and update searchedFlights state

    // For demonstration, using a console log to display searched flights
    console.log('Searched flights:', searchCriteria);
    // Clear the form after search (optional)
    setSearchCriteria({
      departure: '',
      destination: '',
      departureDate: '',
      returnDate: '',
      tripType: searchCriteria.tripType, 
    });
  };

  const handleInputChange = (e) => {
    setSearchCriteria({
      ...searchCriteria,
      [e.target.name]: e.target.value,
    });
  };
  const handleTripTypeChange = (e) => {
    setSearchCriteria({
      ...searchCriteria,
      tripType: e.target.value,
      // Reset returnDate when switching trip types
      returnDate: e.target.value === 'oneWay' ? '' : searchCriteria.returnDate,
    });
  };

  const [guests, setGuests] = useState({
    adults: '',
    children: '',
    infants: '',
  });

  const getTotalGuestsText = () => {
    const { adults, children, infants } = guests;
  const totalGuests = adults + children + infants;

  // Format the text based on guest counts
  const formattedText =
    `${adults} Adult${adults !== 1 ? 's' : ''}, ` +
    `${children} Child${children !== 1 ? 'ren' : ''}, ` +
    `${infants} Infant${infants !== 1 ? 's' : ''}`;

  return `Guests: ${totalGuests} (${formattedText})`;
}; 

  const handleGuestsChange = (event) => {
    setGuests({
      ...guests,
      [event.target.name]:  parseInt(event.target.value, 10)
    });
  };

  return (
  <div className='img'>

    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar position="static"> */}
        {/* ... AppBar content ... */}
        <Toolbar>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        <Typography 
          variant="h6"
          noWrap
          component="div"
          >
          FLIGHT TICKET BOOKING
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button type="submit"
                color='primary'
                fullWidth 
                component={RouterLink}
                to='/Signin'
                variant="contained">LOGIN </Button>
        </container>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={0} color="error">
              <HomeIcon />
            </Badge>
          </IconButton> */}
          <IconButton
            size="large"
            aria-label="show 0 new notifications"
            color="inherit"
            aria-controls={menuId}
            onClick={handleProfileMenuOpen}
            >
            <Badge badgeContent={0} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            >
            <AccountCircle />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
            >
            <MoreIcon />
          </IconButton>
        </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        {[
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Information', icon: <InfoIcon /> },
    { text: 'Notifications', icon: <NotificationsIcon /> },
    { text: 'Bookings', icon: <BookOnlineIcon /> },
  ].map((item, index) => (
    <ListItem key={item.text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  ))}
        </List>
        <Divider />
        <List>
        {[
    { text: 'Account', icon: <AccountCircle /> },
    { text: 'Settings', icon: <SettingsIcon /> },
    { text: 'About us', icon: <HelpIcon /> },
  ].map((item, index) => (
    <ListItem key={item.text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        </Main>
      </Box>
        
      </Toolbar>
      {renderMobileMenu}
      {renderMenu}
      <h1 className='f'>Book a Flight</h1>
      <p className='f'>
        Search for flights and book online. 
        See our routes and schedules, and discover more about the experience 
        you can look forward to on board.
      </p>
    </Box>

    <Container sx={{ mt: 5 }}>
    <Grid container spacing={2}>           
        <Grid item xs={20}>
          <Paper elevation={3} sx={{ p: 5 }} className='b'>
            <Typography variant="h6" gutterBottom>
              Find Your Flight
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <TextField label="Origin" 
                  fullWidth />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField label="Destination" fullWidth />
                </Grid>
                <Grid item xs={12} md={4}>
                <TextField
                    select
                    label="Trip Type"
                    value={searchCriteria.tripType}
                    onChange={handleTripTypeChange}
                    fullWidth
                    >
                    <MenuItem value="oneWay">One-way</MenuItem>
                    <MenuItem value="roundTrip">Round-trip</MenuItem>
                  </TextField>
                  </Grid>
                  {/* <Grid item xs={12} md={4}>
                  <TextField
                    label="Departure"
                    type="date"
                    value={searchCriteria.departureDate}
                    onChange={handleInputChange}
                    fullWidth
                    InputLabelProps={{ shrink: true, }}/>
                  </Grid>
                  {searchCriteria.tripType === 'roundTrip' && (
                    <Grid item xs={12} md={4}>
                  
                      <TextField
                        label="Return"
                        type="date"
                        value={searchCriteria.returnDate}
                        onChange={handleInputChange}
                        fullWidth
                        InputLabelProps={{shrink: true, }}
                        />
                  </Grid>
                        )} */}
                        <Grid item xs={12} md={4}>
                  <TextField
                    label="Departure"
                    type="date"
                    value={searchCriteria.departureDate}
                    onChange={(e) =>
                      setSearchCriteria({
                        ...searchCriteria,
                        departureDate: e.target.value,
                      })
                    }
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    name="departureDate" 
                  />
                </Grid>
                {searchCriteria.tripType === 'roundTrip' && (
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Return"
                      type="date"
                      value={searchCriteria.returnDate}
                      onChange={(e) =>
                        setSearchCriteria({
                          ...searchCriteria,
                          returnDate: e.target.value,
                        })
                      }
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      name="returnDate" 
                    />
                  </Grid>
                )}

                <Grid item xs={12} md={4}>
                <TextField
                     select
                    label="Guests"
                     name="Guests"
                     value={getTotalGuestsText()} // Display total count in TextField
                     fullWidth
                  ><MenuItem value={getTotalGuestsText()}>
                  {getTotalGuestsText()} {/* Display count with guest names in MenuItem */}
                </MenuItem>
                    <MenuItem value="adults">
                    <TextField
                      type="number"
                      name="adults"
                      label="Adults"
                      value={guests.adults}
                      onChange={handleGuestsChange}
                      fullWidth
                      InputProps={{ inputProps: { min: 1, max: 10 } }} />
                  </MenuItem>
                  <MenuItem value="children">
                    <TextField
                      type="number"
                      name="children"
                      label="Children"
                      value={guests.children}
                      onChange={handleGuestsChange}
                      fullWidth
                      InputProps={{ inputProps: { min: 0, max: 10 } }} />
                  
                  </MenuItem>
                  <MenuItem value="infants">
                    <TextField
                      type="number"
                      name="infants"
                      label="Infants"
                      value={guests.infants}
                      onChange={handleGuestsChange}
                      fullWidth
                      InputProps={{ inputProps: { min: 0, max: 10 } }} // Set minimum and maximum values
                      />
                  </MenuItem>
                  </TextField>
                  </Grid>
        {/* <Grid item xs={12} md={4}>
          <TextField
            type="number"
            name="adults"
            label="Adults"
            value={guests.adults}
            onChange={handleGuestsChange}
            fullWidth
            InputProps={{ inputProps: { min: 1, max: 10 } }} // Set minimum and maximum values
          ></TextField>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            type="number"
            name="children"
            label="Children"
            value={guests.children}
            onChange={handleGuestsChange}
            fullWidth
            InputProps={{ inputProps: { min: 0, max: 10 } }} // Set minimum and maximum values
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            type="number"
            name="infants"
            label="Infants"
            value={guests.infants}
            onChange={handleGuestsChange}
            fullWidth
            InputProps={{ inputProps: { min: 0, max: 10 } }} // Set minimum and maximum values
            />
        </Grid> */}
               <Grid item xs={12} md={4}>
                <TextField
                    select
                    label="Class"
                    // value={searchCriteria.tripType}
                    // onChange={handleTripTypeChange}
                    fullWidth
                    >
                    <MenuItem value="EconomyClass">Economy Class</MenuItem>
                    <MenuItem value="BusinessClass">Business Class</MenuItem>
                    <MenuItem value="FirstClass">First Class</MenuItem>
                  </TextField>
                  </Grid>
                <Grid item xs={12}>
                  <Button to="/flights" component={RouterLink} variant="contained" color="primary" fullWidth>
                    Search Flights
                  </Button>
                </Grid>
        </Grid>
      </form>
          </Paper>
        </Grid>
        </Grid>
     </Container>
        <Grid item xs={12}>
          <br></br>
          <Paper elevation={3} sx={{ p: 2.5 }} className="available-flights-section">
            <Typography variant="h6" gutterBottom>
              Available Flights
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
              {images.map((image) => (
                <ImageButton focusRipple key={image.title} style={{ width: image.width }}>
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography component="span" variant="subtitle1" color="inherit" sx={{ position: 'relative', p: 4, pt: 2, pb: (theme) => `calc(${theme.spacing(1)} + 6px)` }} component={RouterLink} to="/d">
                      {image.title}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              ))}
            </Box>
          </Paper>
        </Grid>
    <br></br>
    <Footer />
    <Box sx={{ height: 40, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  </div>
);
};
      
export default HomePage1;
