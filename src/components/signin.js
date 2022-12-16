import React from 'react';

import Paper from '@mui/material/Paper';
import GoogleIcon from '@mui/icons-material/Google';
import { Grid, Typography } from '@mui/material';
import Image from "mui-image";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
function Copyright(props) {
	return (
	  <Typography variant="body2" color="text.secondary" align="center" {...props}>
		{'Copyright © '}
		<Link color="inherit" href="https://mui.com/">
		  Your Website
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	  </Typography>
	);
  }
const styles = {
    paperContainer: {
		backgroundImage: `url(${'https://drive.google.com/uc?export=view&id=1nJaKiSCz6MkSuZf624PYifAkUNYfwxNV'})`,
		width: '608px',
		height:'750px'
    }
};

export default class Signin extends React.Component{
	render() {
		const handleSubmit = (event) => {
			event.preventDefault();
			const data = new FormData(event.currentTarget);
			console.log({
			  email: data.get('email'),
			  password: data.get('password'),
			});
		  };
		return (<>
			<Grid container xs={12}>		
			<Paper style={styles.paperContainer}>
			<Grid Container xs={6} sx={{marginLeft:'55px'}}>
				<Grid overlay={styles.overlay}>
			<Image src="https://drive.google.com/uc?export=view&id=1DAyaOiRTn1fi2eVSohkY6-2XgHxuwLd5" style={{
    width: '40%',
    height: '2%',margin:'20px'
					}}></Image>
						</Grid>
						</Grid>	
				</Paper>			
			<Grid container xs={7}>			
			<ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
							>
		<Grid container xs={12} sx={{marginLeft:'185px'}}>
          <Typography component="h1" variant="h3"sx={{fontfamily: 'Roboto', fontstyle: 'normal',fontsize: '36px',textAlign:'center',fontWeight:'600',lineheight: '48px'}}>
            Sign in
          </Typography>
			</Grid>
		<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container >
			<Grid container xs={12} sx={{mt:'10px',mb:'20px'}} >
			<Grid item xs={1}>
			<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Name</Typography>
			</Grid>
			<Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Enter your name"
                  size='small'
                />
              </Grid>
              </Grid>
			{/* <Grid container xs={12} sx={{mt:'10px',mb:'20px'}} >
				<Grid item xs={1} spacing={2}>
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Email</Typography>
				</Grid>
				<Grid item xs={12} >
				<TextField
                  required
                  fullWidth
                  id="email"
                  label="Enter Your email"
                  name="email"
				autoComplete="email"
				size='small'
				/>
				</Grid>
				</Grid> */}
				<Grid container xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item xs={1} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Password</Typography>
				</Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Enter your password"
                  type="password"
                  id="password"
													autoComplete="new-password"
													size='small'
                />
				</Grid>
				</Grid>
              <Grid item xs={12} >
			  <Grid container justifyContent="flex-end" xs={12}>
              <Grid item>
                <Link href="#" variant="body2">
                  forgot password?
                </Link>
              </Grid>
            </Grid>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
			sx={{
				mt: 3, mb: 2, background: '#3A81F3',
				borderRadius: '8px'}}
			>
			Sign Up
			</Button>	
            
			<Grid container xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item xs={12} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>OR</Typography>
				</Grid>
              <Grid item xs={12} >
			  <Button
              type="submit"
              fullWidth
              variant="contained"sx={{
				mt: 3, mb: 2, background: 'White',
				borderRadius: '8px',color:'black',fontFamily: 'Roboto',
				fontStyle: 'normal',
				fontWeight: '500',
				fontSize: '16px',marginRight:'20px'}}
											>
		
			<Image src='https://drive.google.com/uc?export=view&id=1k5vItsQ0FbrmLPMHYxMb88X3BNK0e9uH' width='26px' height='26px'sx={{marginRight:'20px'}} ></Image>
			Sign Up with Google
			</Button>
				</Grid>
				</Grid>
				<Grid container justifyContent="flex-end" xs={12}>
              <Grid item xs={12}>
                <Typography href="#" variant="body2">
				Don’t have an account?<Link href="#" variant="body2">Sign Up</Link> 
                </Typography>
              </Grid>
			</Grid>
									
          </Box>
        </Box>
		
		</Container>
		</ThemeProvider>
		</Grid>
		</Grid>
		</>
        )
    }
}