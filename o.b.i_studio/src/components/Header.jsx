import Logo from "./Logo";
import OBI_logo from "../Images/OBI_logo.gif";


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';




const pages = ['Art', 'Team' ];
const anchorComps = ['About', 'RoadMap']
const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/"sx={{ my: 2, color: 'white' }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              O.B.I Studio
            </Typography>
          </Link>
         
          <Avatar 
            alt="OBI Logo" 
            src={OBI_logo} 
            sx={{ width: 70, height: 70, display: { xs: 'none', md: 'flex' }}}
          />

          
            {/* Menu Icon when screen is smaller */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              // size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              padding='0'
              
            >
              <MenuIcon />
              <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ ml: 2, display: { xs: 'flex', md: 'none' } }}
            >
              O.B.I Studio
            </Typography>
            <Avatar 
              alt="OBI Logo" 
              src={OBI_logo} 
              sx={{ width: 70, height: 70 ,display: { xs: 'flex', md: 'none' }}}
            />
            </IconButton>
            <Menu
              
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {anchorComps.map((anchorComp) => (
                <MenuItem key={anchorComp} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{anchorComp}</Typography>
                </MenuItem>
              ))}
              {pages.map((page) => (
  
                <Link href={"/"+page}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
                
              ))}
            </Menu>
          </Box>
          
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
            {anchorComps.map((anchorComp) => (
              <Button
                key={anchorComp}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {anchorComp} 
              </Button> 
            ))}

            {pages.map((page) => (
              
              <Link href={"/"+page}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page} 
                </Button> 
              </Link>
              
            
              
            ))}
        
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
