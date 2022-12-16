import React from 'react';
import Paper from '@mui/material/Paper';
import  Grid  from '@mui/material/Grid';
import { Typography }  from '@mui/material'
import Image from 'mui-image';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import LinearProgress from "@mui/material/LinearProgress";
function About()
{
	return (<>
		<Grid container xs={12} sx={{m:'80px'}}>
			<Grid container xs={6}>
				<Grid item xs={12}>
					<Typography variant='h2'>One-stop literary marketplace for <Typography variant='h2' sx={{color:'red'}}>every book-related service</Typography></Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='subtitle1'>Hubhawks is your go-to platform, that has all the book-related service providers and people seeking the same. The centralized solution to the literary problems a person can face. It is convenient, user-friendly, and a blessing in disguise for budding authors and the ones who are seeking to add more to their lists.</Typography>
				</Grid>
			</Grid>
			<Grid container xs={6}>
			<CardMedia
					component="img"
					height="194"
					image="https://drive.google.com/uc?export=view&id=18bbHzcnVPOggF3pC9x7DJP5DCDKkLReF"
					alt="Paella dish" style={{
						justifyContent: 'space-around', width: '416px', height: '371px', position: 'absolute',
						marginLeft:'128px',marginTop:'-66px'
					}}
      />
      <CardContent>
	  <CardMedia
					component="img"
					
					image="https://drive.google.com/uc?export=view&id=1C2MwRR31WJdraHSncktA4XzJXVpExaPf"
					alt="Paella dish" style={{
						justifyContent: 'space-around', width: '448px', height: '296px', position:'absolute'
					}}
      />
      </CardContent>
			{/* <Image src="https://drive.google.com/uc?export=view&id=1C2MwRR31WJdraHSncktA4XzJXVpExaPf" style={{
justifyContent:'space-around',width:'448px',height:'296px'
			  }}>
				</Image>
				<Image src="https://drive.google.com/uc?export=view&id=1C2MwRR31WJdraHSncktA4XzJXVpExaPf" style={{
justifyContent:'space-around',width:'48px',height:'296px'
			  }}>
				  </Image> */}
			</Grid>
		</Grid>
		<Paper> 
		{/* icon with button */}
		<Grid container xs={12} sx={{
			mx:
				'50px'
		}}>
		  <Grid container xs={4}>
			  <Grid item xs={1}>
	<Image src="https://drive.google.com/uc?export=view&id=1F9ecUqb8Olwfpj5bcpLZFQNiNohbKbw1" style={{
justifyContent:'space-around',borderRadius:'20px',width:'10px',height:'10px'
			  }}>
				  </Image>
			  </Grid>
			  <Grid item xs={3}>
			  <Typography sx={{ fontFamily: 'Roboto', fontWeight: '800', fontSize: '18px', color: '#3A81F3', fontStyle: 'normal' }}>Step,2020</Typography>  
				</Grid>
			</Grid> 
		</Grid>
			<Grid container xs={12} sx={{marginLeft:'80px'}}>
			<Grid container xs={6}>
					<Grid item xs={8}>
				
				  <Typography>Kevin Missal, the bestselling author thought of the hindrances being faced by authors and started Hubhawks with a team of 3 people.</Typography>
					</Grid>
					<Grid item xs={8}>
				  <Typography>Kevin Missal, the bestselling author thought of the hindrances being faced by authors and started Hubhawks with a team of 3 people.</Typography>
					</Grid>
					<Grid item xs={8}>
				  <Typography>Kevin Missal, the bestselling author thought of the hindrances being faced by authors and started Hubhawks with a team of 3 people.</Typography>
				</Grid>
				<Grid item xs={8}>
				  <Typography>Kevin Missal, the bestselling author thought of the hindrances being faced by authors and started Hubhawks with a team of 3 people.</Typography>
					</Grid>
				</Grid>
				<Grid container xs={6}>
					<Grid item xs={6}>
					<Image src="https://drive.google.com/uc?export=view&id=1F9ecUqb8Olwfpj5bcpLZFQNiNohbKbw1" style={{
justifyContent:'space-around',borderRadius:'20px'
			  }}></Image>
				  </Grid>
					</Grid>
			</Grid>
		</Paper>
		<Paper> 
		{/* icon with button */}
		<Grid container xs={12} sx={{
			mx:
				'50px'
		}}>
		  <Grid container xs={4}>
			  <Grid item xs={1}>
	<Image src="https://drive.google.com/uc?export=view&id=1F9ecUqb8Olwfpj5bcpLZFQNiNohbKbw1" style={{
justifyContent:'space-around',borderRadius:'20px',width:'10px',height:'10px'
			  }}>
				  </Image>
			  </Grid>
			  <Grid item xs={3}>
			  <Typography sx={{ fontFamily: 'Roboto', fontWeight: '800', fontSize: '18px', color: '#3A81F3', fontStyle: 'normal' }}>Step,2020</Typography>  
				</Grid>
			</Grid> 
		</Grid>
			<Grid container xs={12} sx={{marginLeft:'80px'}}>
			<Grid container xs={6}>
			<Grid item xs={8}>
				  <Typography>Kevin Missal, the bestselling author thought of the hindrances being faced by authors and started Hubhawks with a team of 3 people.</Typography>
					</Grid>
					<Grid item xs={8}>
				  <Typography>Kevin Missal, the bestselling author thought of the hindrances being faced by authors and started Hubhawks with a team of 3 people.</Typography>
					</Grid>
					<Grid item xs={8}>
				  <Typography>Kevin Missal, the bestselling author thought of the hindrances being faced by authors and started Hubhawks with a team of 3 people.</Typography>
				</Grid>
				<Grid item xs={8}>
				  <Typography>Kevin Missal, the bestselling author thought of the hindrances being faced by authors and started Hubhawks with a team of 3 people.</Typography>
					</Grid>
				</Grid>
				<Grid container xs={6}>
					<Grid item xs={6}>
					<Image src="https://drive.google.com/uc?export=view&id=1F9ecUqb8Olwfpj5bcpLZFQNiNohbKbw1" style={{
justifyContent:'space-around',borderRadius:'20px'
			  }}></Image>
				  </Grid>
					</Grid>
			</Grid>
		
		<Grid container xs={12} sx={{m:'50px'}}spacing={2}>
			<Grid item xs={12} >
				<Typography>Hubhawks's Culutral Benefits</Typography>
</Grid>
			</Grid>
			<Grid container xs={12} spacing={2} >
			<Grid container xs={12} sx={{m:'50px'}} >
			<Grid container xs={4} sx={{borderRadius:'12px',backgroundColor:'#f6c5c5'}}>
				<Grid item xs={1} sx={{borderRadius:'12px',backgroundColor:'#f6c5c5'}}>
							<Image src="https://drive.google.com/uc?export=view&id=1F9ecUqb8Olwfpj5bcpLZFQNiNohbKbw1" style={{
justifyContent:'space-around',borderRadius:'20px',width:'40px',height:'40px'
							}}></Image>
							
				</Grid>
				<Grid item xs={6}>
							<Typography sx={{ color: 'black' }}>Hubhawks's Culutral Benefits</Typography>
							</Grid>
				</Grid>
				<Grid item xs={4} sx={{borderRadius:'12px',backgroundColor:'#f6c5c5'}} >
				<Typography>Hubhawks's Culutral Benefits</Typography>
				</Grid>
				<Grid item xs={4} sx={{borderRadius:'12px',backgroundColor:'#f6c5c5'}}>
				<Typography>Hubhawks's Culutral Benefits</Typography>
			</Grid>
				</Grid>
				</Grid>
			</Paper>
			
		  </>
  )
}
export default About;