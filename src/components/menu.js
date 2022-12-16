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
import Image from "mui-image";
import { Link } from 'react-router-dom';
const pages = [ 'Home','Services','About','Contact','Blog','Signin'];

function ResponsiveAppBar() {
  return (
	  <AppBar position='static' sx={{ color: '#000000', backgroundColor: '#FFFFFF', flexDirection: 'row-reverse' }}>	
		  <Button variant='contained' sx={{margin:"auto"}} >SignUp</Button>
          <Box sx={{ color:'#FFFFFF', display: { xs: 'flex', md: 'flex'}}}>
            {pages.map((page) => (
              <Button
					key={page}
					onClick={()=>{}}
                sx={{ my: 3, color: 'black', display: 'block',mx:3}}
              >			
					<Link to={`/${page}`}>{page}</Link>
              </Button>
			))}
		  </Box>	
		  <Image src="https://drive.google.com/uc?export=view&id=1DAyaOiRTn1fi2eVSohkY6-2XgHxuwLd5" style={{
    width: '14%',
    height: '0%',justifyContent:'space-around'
  }}></Image>
    </AppBar>
  );
}
export default ResponsiveAppBar;