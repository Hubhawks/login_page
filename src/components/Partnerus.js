import React from 'react'
import { Button, Grid, Typography,Paper} from '@mui/material';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useForm } from 'react-hook-form';
import Image from 'mui-image';

import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import Footer from '../footer';
import Carousel from 'react-material-ui-carousel'
function Partnerus() {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);
  return (<>
	  <Grid container xs={12}>
		  <Grid container xs={6}>
			<Paper sx={{backgroundColor:' #BB00000A',position: 'absolute',width: '704px',height: '872px'}}>
			<Grid container xs={12}>
				  <Grid item xs={12}>
				  <Typography variant='h2' sx={{
					  fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '600', fontSize: '36px', lineHeight: '48px', textAlign: 'center',
					  color: '#BB0000'
				  }}>Why you should partner with us</Typography>   
					  </Grid>
					  <Grid container xs={12}>
						<Grid item xs={2} style={{ gap: 5 }}>
					  <CheckCircleOutlineRoundedIcon color='Green' />
						  </Grid>
					<Grid item xs={6} spacing={3}>
					  <Typography>200+ authors actively working with us</Typography>
					  </Grid>

					  </Grid>


					  <Grid container xs={6}>
					<Grid item xs={2} spacing={3}>
					  <CheckCircleOutlineRoundedIcon color='Green' />
						  </Grid>
					<Grid item xs={10}>
					  <Typography>100k+ content pieces delivered</Typography>
					  </Grid>

					  </Grid>


					  <Grid container xs={12}>
						<Grid item xs={2}>
					  <CheckCircleOutlineRoundedIcon color='Green' />
						  </Grid>
					<Grid item xs={6}>
					  <Typography>Hassle-free payments</Typography>
					  </Grid>

					  </Grid>
					  <Grid container xs={12}>
						<Grid item xs={2}>
					  <CheckCircleOutlineRoundedIcon color='Green' />
						  </Grid>
					<Grid item xs={6}>
					  <Typography>Connect with like-minded clients</Typography>
					  </Grid>

					  </Grid>
					  <Grid container xs={12}>
						<Grid item xs={2}>
					  <CheckCircleOutlineRoundedIcon color='Green' />
						  </Grid>
					<Grid item xs={6}>
					  <Typography>Excel in your niche</Typography>
					  </Grid>

					  </Grid>

				  </Grid>	
				  <Grid container xs={12}>
					  <Grid item xs={12}>
						  <Typography>Trusted By</Typography>
					  </Grid>
					  <Grid item xs={3}>
				<Image src="https://drive.google.com/uc?export=view&id=1oxOpbsvHPzmZz7El_wFTVxsp6t9U7gYL" style={{
    justifyContent:'space-around',borderRadius:'12px',width: '130px',
							  height: '48px'
						  }}>
							  
	</Image>
					  </Grid>
					  <Grid item xs={3}>
				<Image src="https://drive.google.com/uc?export=view&id=1RFPo_Uqxz8lYvx0ZSR5rtn9jdTL3kx-h" style={{
    justifyContent:'space-around',borderRadius:'12px',width: '130px',
	height: '48px'
  }}></Image>
					  </Grid>
					  <Grid item xs={3}>
				<Image src="https://drive.google.com/uc?export=view&id=1_R6Y-rgNyOtfvQRMofUe2X-he6a_NeYi" style={{
    justifyContent:'space-around',borderRadius:'12px',width: '130px',
	height: '48px'
  }}></Image>
			  </Grid>






				  </Grid>



				  <Carousel navButtonsAlwaysInvisible={true} visibility='hidden' width='480px' height='240px'>
					  <Grid container xs={12}>
						  <Grid container xs={9} sx={{ backgroundColor: "white" }}>
						<Grid item xs={6}>
							  <Image src="https://drive.google.com/uc?export=view&id=1_9LcnLFJ1b8E1Z9aYsLeP_Bksnr4n56a" width='60px' height='60px' />
							  </Grid>	
							  <Grid item xs={6}>
								  <Typography>Manuraj Dubey</Typography>
							   </Grid>
					<Grid item xs={12}>	  
                    <Typography sx={{fontSize:'16px',color: '#333335'}}>It was a pleasure collaborating with HubHawks. The animated videos are well designed and conceptualised, videos are engaging, highly professional, very gripping, theme oriented and the best part is that they are well edited. </Typography>
					</Grid>	</Grid>
					  </Grid>
					  <Grid container xs={12}>
					  <Grid item xs={9} sx={{ backgroundColor: "white" }}>
                    <Image src="https://drive.google.com/uc?export=view&id=1_R6Y-rgNyOtfvQRMofUe2X-he6a_NeYi" width='60px' height='60px' />
                    <Typography>Legend 1</Typography>
						  </Grid>
					  </Grid>
					  <Grid container xs={12}>
					  <Grid item xs={9} sx={{ backgroundColor: "white" }}>
                    <Image src="https://drive.google.com/uc?export=view&id=1_R6Y-rgNyOtfvQRMofUe2X-he6a_NeYi" width='60px' height='60px' />
                    <Typography>Legend 1</Typography>
						  </Grid>
					  </Grid>
					  <Grid container xs={12}>
					  <Grid item xs={9} sx={{ backgroundColor: "white" }}>
                    <Image src="1_R6Y-rgNyOtfvQRMofUe2X-he6a_NeYi" />
                    <Typography>Legend 1</Typography>
						  </Grid>
					  </Grid>
        </Carousel>
			  </Paper>		  
		  </Grid>
		  <Grid container xs={6}>
			  <Grid item xs={12}>
				  <Typography variant='h2'> Partner with Us </Typography> 
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
			
				<Grid container xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item xs={1} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Email</Typography>
				</Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Enter your password"
                  type="password"
                  id="password"
													autoComplete="new-password"
													size='small'
                />
				</Grid>
					  </Grid>
					  <Grid container xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item xs={2} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Phone Number</Typography>
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
					  <Grid container xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item xs={3} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Services Offered</Typography>
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
				<Grid container xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item xs={3} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Portfolio/Work samples</Typography>
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
				<Grid container xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item xs={3} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Additional Comments</Typography>
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
					  
              <Grid item xs={6} >
			  <Grid container justifyContent="flex-end" xs={12}>
              <Grid item>
			  <Button
              type="submit"
              fullWidth
              variant="contained"sx={{
				mt: 3, mb: 2, background: '#3A81F3',
				borderRadius: '8px'}}
			>
			Submit
			</Button>
              </Grid>
            </Grid>
              </Grid>
				  </Grid>					
          </Box>
		  </Grid>
	  </Grid>
	
	  </>
  )
}
export default Partnerus;
