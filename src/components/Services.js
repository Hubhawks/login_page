import React from 'react'
import  Grid  from '@mui/material/Grid';
import { Typography }  from '@mui/material';
import Button from '@mui/material/Button';
import Image from "mui-image";
import Footer from '../footer';
import Box from '@mui/material/Box';

function Services() {
  return (
	  <>
		<Box sx={{m:'70px'}}>
	  <Typography variant='h2' sx={{fontFamily:'Roboto',fontWeight:'800',fontSize:'36px',textAlign:'center',color:'#000000'}}>Services We Offers</Typography>
			<Grid container xs={12} spacing={4}sx={{m:'5px'}} rowSpacing={5}  >
				<Grid item xs={3} >
				<Image src="https://drive.google.com/uc?export=view&id=19g12d7cnoN8cwe3FCzImAzxkW7e7M-26" style={{
    justifyContent:'space-around',borderRadius:'12px',width:'270px',height:'140px'
					}}></Image>	
					  <Grid item xs={4}>
						  <Typography sx={{ fontFamily: 'Roboto', fontWeight: '800', fontSize: '18px', color: '#000000', fontStyle: 'normal' }}>Editing</Typography>
					  </Grid>
				  </Grid>
				<Grid item xs={3}>
				<Image src="https://drive.google.com/uc?export=view&id=1bKNPL8v-xRco7O0CY7Fd2rzK_3e-SyT1" style={{
    justifyContent:'space-around',borderRadius:'20px',width:'270px',height:'140px'
					  }}></Image>
					  <Grid item xs={7}>
						  <Typography sx={{ fontFamily: 'Roboto', fontWeight: '800', fontSize: '18px', color: '#000000', fontStyle: 'normal' }}>Cover Designing</Typography>
					  </Grid>
				</Grid>
				<Grid item xs={3}>
				<Image src="https://drive.google.com/uc?export=view&id=1_cjEzuX34WHGn31VWFwnfmdSJ85wMmal" style={{
    justifyContent:'space-around',borderRadius:'20px',width:'270px',height:'140px'
					  }}></Image>
					  <Grid item xs={6}>
						  <Typography sx={{ fontFamily: 'Roboto', fontWeight: '800', fontSize: '18px', color: '#000000', fontStyle: 'normal' }}>Translation</Typography>
					  </Grid>
				</Grid>
				<Grid item xs={3}>
				<Image src="https://drive.google.com/uc?export=view&id=1JlhoJV-AJhEpbGWJDVi4qqfAxQPMwFER" style={{
    justifyContent:'space-around',borderRadius:'20px',width:'270px',height:'140px'
					  }}></Image>
					 <Grid item xs={6}>
						  <Typography sx={{ fontFamily: 'Roboto', fontWeight: '800', fontSize: '18px', color: '#000000', fontStyle: 'normal' }}>GhostWriting</Typography>
					  </Grid>
			  </Grid>
			  <Grid item xs={3}>
				<Image src="https://drive.google.com/uc?export=view&id=1iSfLAbXy5Am04pQge6HmmwEHEG1777pF" style={{
    justifyContent:'space-around',borderRadius:'20px',width:'270px',height:'140px'
					}}></Image>	
					<Grid item xs={7}>
						  <Typography sx={{ fontFamily: 'Roboto', fontWeight: '800', fontSize: '18px', color: '#000000', fontStyle: 'normal' }}>AMS(amazonads)</Typography>
					  </Grid>
				</Grid>
				<Grid item xs={3}>
				<Image src="https://drive.google.com/uc?export=view&id=1kzDSaKV4PRDhQhId90Gomt0NJKVrWbA8" style={{
    justifyContent:'space-around',borderRadius:'20px',width:'270px',height:'140px'
					  }}></Image>
					  <Grid item xs={7}>
  <Typography sx={{ fontFamily: 'Roboto', fontWeight: '800', fontSize: '18px', color: '#000000', fontStyle: 'normal' }}>Book Reviews</Typography>
</Grid>
				</Grid>
				<Grid item xs={3}>
				<Image src="https://drive.google.com/uc?export=view&id=1eP94nn1zrWdQelGJkJ-IxVx6tqQ-UFZW" style={{
    justifyContent:'space-around',borderRadius:'20px',width:'270px',height:'140px'
  }}></Image><Grid item xs={6}>
  <Typography sx={{ fontFamily: 'Roboto', fontWeight: '800', fontSize: '18px', color: '#000000', fontStyle: 'normal' }}>Book Trailer</Typography>
</Grid>
				</Grid>
				<Grid item xs={3}>
				<Image src="https://drive.google.com/uc?export=view&id=14fyDCc6OZddGybRtVel8yfXV2dCYcZ4H" style={{
    justifyContent:'space-around',borderRadius:'20px',width:'270px',height:'140px'
  }}></Image><Grid item xs={4}>
  <Typography sx={{ fontFamily: 'Roboto', fontWeight: '800', fontSize: '18px', color: '#000000', fontStyle: 'normal' }}>BookStore</Typography>
</Grid>
			  </Grid>
				  <Grid container xs={12}>
				  <Grid item xs={12}>
				<Button variant='contained'sx={{
					my:
						  '80px',borderRadius:'8px',width:'148px',height:'48px',backgroundColor:'#3A81F3',fontSize:'14px'
				  }}>See More</Button>
					  </Grid>
				  </Grid>
			  </Grid>
			  </Box>
		  <Footer />
	  </>
  )
}
export default Services;
