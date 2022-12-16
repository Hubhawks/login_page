import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import  Grid  from '@mui/material/Grid';
import { Typography }  from '@mui/material';
import Button from '@mui/material/Button';
import Image from "mui-image";
import Footer from './footer';
import { Link } from 'react-router-dom';
import SwipeableTextMobileStepper from './components/Testimonial'
function LandingPage()
{
	return (
				<>
			<Grid container xs={12} sx={{marginTop:'90px',marginBottom:'100px'}}>
				<Grid container xs={6}sx={{margin:'50px'}}>
			<Grid item xs={12} sm={12} >
						<Typography variant='h2' sx={{  fontWeight: '700',fontSize:'56px', fontFamily:'Roboto',color:'#333335'}}>One stop literacy<Grid xs={10}> marketplace</Grid></Typography>	
					</Grid>
					<Grid item xs={12}>
						<Typography variant='h6' sx={{ fontWeight: '400', fontSize: '18px', fontFamily: 'Roboto', color: '#333335' }}>Bridging the gap between good to great, make your 
						</Typography>
							<Grid item xs={8}>
								<Typography variant='h6' sx={{ fontWeight: '400', fontSize: '18px', fontFamily: 'Roboto', color: '#333335' }}>book for best seller</Typography>
							</Grid>
		
					</Grid>	
					<Grid item xs={7}>
					<Button variant='contained' size='large' sx={{mx:0}} >Sign Up</Button>
					</Grid>	
				</Grid>
				<Grid Container xs={4}sx={{marginLeft:'50px'}}>
				<Grid item xs={12} >
				<Image src="https://drive.google.com/uc?export=view&id=1ME-L6biUpvR1C4aD-GG5X3aiJw37xLQ9" style={{
    justifyContent:'space-around',width:'560px',height:'352px'
						}}></Image>
						</Grid>
				</Grid>
			</Grid>	
			<Grid container xs={12} >
			<Grid item xs={12}>
			<Typography variant='h5' sx={{fontfamily: 'Roboto',fontStyle: 'normal',fontWeight: '600',fontSize: '24px',lineheight: '40px'}}>Publishers We Have Worked With</Typography>
				</Grid>	
			<Grid container xs={12} sx={{m:'100px'}}>
				<Grid item xs={2}>
				<Image src="https://drive.google.com/uc?export=view&id=1_R6Y-rgNyOtfvQRMofUe2X-he6a_NeYi" style={{
   justifyContent:'space-around',width:'173px',height:'120px'
  }}></Image>
				</Grid>
				<Grid item xs={2}>
				<Image src="https://drive.google.com/uc?export=view&id=1o06m-nr_x3hnjH8cg6Q-d3EDdb4SFi3_" style={{
   justifyContent:'space-around',width:'173px',height:'120px'
  }}></Image>
				</Grid>
				<Grid item xs={2}>
				<Image src="https://drive.google.com/uc?export=view&id=1eO72ezicWb325O0sCJKozZgfSUldQ0Gx" style={{
    justifyContent:'space-around',width:'174px',height:'120px'
  }}></Image>
				</Grid>
				<Grid item xs={2}>
				<Image src="https://drive.google.com/uc?export=view&id=11NhcuuyvNDCtCbBlEUCyWazQePiA9fwA" style={{
    justifyContent:'space-around',width:'173px',height:'108px'
  }}></Image>
				</Grid>
				<Grid item xs={2}>
				<Image src="https://drive.google.com/uc?export=view&id=1oxOpbsvHPzmZz7El_wFTVxsp6t9U7gYL" style={{
    justifyContent:'space-around',width:'173px',height:'104px'
  }}></Image>
				</Grid>
				<Grid item xs={2}>
				<Image src="https://drive.google.com/uc?export=view&id=1RFPo_Uqxz8lYvx0ZSR5rtn9jdTL3kx-h" style={{
    justifyContent:'space-around',width:'173px',height:'120px'
  }}></Image>
				</Grid>
				</Grid>
			</Grid>
			<Grid container xs={12} >
				<Grid item xs={12} sx={{mb:'50px'}}>
					<Typography variant='h5' sx={{fontfamily: 'Roboto',
fontstyle: 'normal',
fontWeight: '600',
fontsize: '36px',
lineheight: '48px'}}>Services We Offers</Typography>
				</Grid>
			<Grid container xs={12}>
				<Grid item xs={3} >
				<Image src="https://drive.google.com/uc?export=view&id=19g12d7cnoN8cwe3FCzImAzxkW7e7M-26" style={{
    justifyContent:'space-around' ,borderRadius: '12px', width:'270px',height:'142px'
					}}></Image>	
					<Typography>Editing</Typography>
				</Grid>
				<Grid item xs={3} >
				<Image src="https://drive.google.com/uc?export=view&id=1bKNPL8v-xRco7O0CY7Fd2rzK_3e-SyT1" style={{
    justifyContent:'space-around',borderRadius: '12px', width:'270px',height:'142px'
  }}></Image><Typography>BookStore</Typography>
				</Grid>
				<Grid item xs={3} >
				<Image src="https://drive.google.com/uc?export=view&id=1_cjEzuX34WHGn31VWFwnfmdSJ85wMmal"sx={{borderRadius: '12px',position: 'absolute', width:'270px',height:'142px'}} style={{
    justifyContent:'space-around',borderRadius: '12px', width:'270px',height:'142px'
  }}></Image><Typography>GhostWriting</Typography>
				</Grid>
				<Grid item xs={3} >
				<Image src="https://drive.google.com/uc?export=view&id=1JlhoJV-AJhEpbGWJDVi4qqfAxQPMwFER"sx={{borderRadius: '12px',position: 'absolute', width:'270px',height:'142px'}} style={{
    justifyContent:'space-around',borderRadius: '12px', width:'270px',height:'142px'
  }}></Image><Typography>Translation</Typography>
				</Grid>
				<Grid item xs={12} sm={12}>
					<Button variant='contained' sx={{
					justifyContent: 'center' ,m:
								'auto'
						}}>See more</Button>
					</Grid>
			</Grid>	
			</Grid>
			<Paper sx={{backgroundColor:'#bb00000a',
height: '521px',
left: '0px',
right: '0px',
top: '1424px'}} >
			<Typography variant='h2' sx={{ textAlign:'center',fontFamily: 'Roboto',
fontStyle: 'normal',
fontWeight: '600',
fontSize: '36px',
lineHeight: '48px'}}>Partner With Hubhawks</Typography>
			<Grid container xs={12}>
				
					<Grid container xs={6}>
					
				<Grid item xs={6} >
				<Image src="https://drive.google.com/uc?export=view&id=1wFizUuVWnSqCCa5RvVmVR6fM2NigCfsL" style={{
    justifyContent:'space-around',width:'463px',height:'244px',borderRadius: '12px'
						}}></Image>
					</Grid>
				</Grid>
				<Grid container xs={6}>
				<Grid item xs={5} sx={{backgroundColor:'#FFFFFF',borderRadius:'12px', m:'auto',width:'20px',height:'104px'}}>
				<Grid container xs={12}>
							<Grid item xs={2} sm={2}>
								<Image src="https://drive.google.com/uc?export=view&id=1UFCpEs32Dv1vUZH2fe5Mi_LWzjrOQKLA" style={{
    justifyContent:'space-around',width:'52.78px',height:'48px',margin:'12px'
									}}></Image></Grid>
								
							<Grid container xs={8}>
							<Grid item xs={12} sm={12} spacing={3} sx={{margin:'auto'}}>
									<Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '24px' }}>200+ Authors actively
									</Typography>
									<Grid item xs={12}>
									<Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '24px',marginRight:'43px'}}>working with us</Typography></Grid>
									</Grid>
								</Grid>
								</Grid>	

						</Grid>	

					{/* <Grid item xs={6} sx={{backgroundColor:'#FFFFFF',borderRadius:'12px', m:'auto',width:'270px',height:'104px'}}>
				<Typography>100k+ content piece delivered</Typography>
					</Grid> */}
						
						<Grid item xs={5} sx={{backgroundColor:'#FFFFFF',borderRadius:'12px', m:'auto',width:'20px',height:'104px'}}>
				<Grid container xs={12}>
							<Grid item xs={2} sm={2}>
								<Image src="https://drive.google.com/uc?export=view&id=10ZBFOkSfmgx1jibPD4GAZvv8gnN0wDHO" style={{
    justifyContent:'space-around',width:'52.78px',height:'48px',margin:'12px'
									}}></Image></Grid>
								
							<Grid container xs={8}>
							<Grid item xs={12} sm={12} spacing={3} sx={{margin:'auto'}}>
									<Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '24px' }}>200+ Authors actively
									</Typography>
									<Grid item xs={12}>
									<Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '24px',marginRight:'43px'}}>working with us</Typography></Grid>
									</Grid>
								</Grid>
								</Grid>	

						</Grid>	

						<Grid item xs={5} sx={{backgroundColor:'#FFFFFF',borderRadius:'12px', m:'auto',width:'20px',height:'104px'}}>
				<Grid container xs={12}>
							<Grid item xs={2} sm={2}>
								<Image src="https://drive.google.com/uc?export=view&id=1DkRa9ZXUDbUsLqOc_5MIWZ1xkz1I87sw" style={{
    justifyContent:'space-around',width:'52.78px',height:'48px',margin:'12px'
									}}></Image></Grid>
								
							<Grid container xs={8}>
							<Grid item xs={12} sm={12} spacing={3} sx={{margin:'auto'}}>
									<Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '24px' }}>200+ Authors actively
									</Typography>
									<Grid item xs={12}>
									<Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '24px',marginRight:'43px'}}>working with us</Typography></Grid>
									</Grid>
								</Grid>
								</Grid>	

						</Grid>	











					{/* <Grid item xs={6} sx={{backgroundColor:'#FFFFFF',borderRadius:'12px', m:'auto',width:'270px',height:'104px'}}>
				<Typography>Connected with like-minded Clients</Typography>
				</Grid> */}
						
						<Grid item xs={5} sx={{backgroundColor:'#FFFFFF',borderRadius:'12px', m:'auto',width:'20px',height:'104px'}}>
				<Grid container xs={12}>
							<Grid item xs={2} sm={2}>
								<Image src="https://drive.google.com/uc?export=view&id=16M4SXr_kZ02n8n59_88qFjZD_ezAo4nd" style={{
    justifyContent:'space-around',width:'52.78px',height:'48px',margin:'12px'
									}}></Image></Grid>
								
							<Grid container xs={8}>
							<Grid item xs={12} sm={12} spacing={3} sx={{margin:'auto'}}>
									<Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '24px' }}>200+ Authors actively
									</Typography>
									<Grid item xs={12}>
									<Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '24px',marginRight:'43px'}}>working with us</Typography></Grid>
									</Grid>
								</Grid>
								</Grid>	

						</Grid>	











				{/* <Grid item xs={6} sx={{backgroundColor:'#FFFFFF',borderRadius:'12px', m:'auto',width:'270px',height:'104px'}}>
				<Typography>Hassels-Free Payments</Typography>
				</Grid> */}
				</Grid>
					<Typography variant='h5' sx={{ textAlign: 'center', m: 'auto' }}>
						<Link to='/Partnerus'>Work with us</Link></Typography>
				</Grid>
				</Paper>
			<Typography variant='h5' sx={{ textAlign: 'center', m:'auto' }}>Why Hubhawks</Typography>
			<Grid container xs={12}>
				<Grid container xs={12}>
				<Grid container xs={3}>
					<Grid item xs={8} sx={{ width: '271px', height:'212px',background:'#06B2BB1A',borderRadius: '12px'}}>
					<Grid item xs={12} sm={12}>
					<Image src="https://drive.google.com/uc?export=view&id=1zoezVSzeufCNtDl38mhaGFYNDFrl3ZOb" style={{
    justifyContent:'center',width:'60px',height:'60px',margin:'12px'
							}}>
							</Image>
							</Grid>			
							<Grid item xs={12}>	
						<Typography>10X your work and grow exponentially with us</Typography></Grid>
					</Grid>
					</Grid>

					{/* <Grid item xs={3} sx={{ width: '271px', height:'212px',background:'#FDD2191A',borderRadius: '12px'}}>
						<Typography>10x</Typography>
					</Grid> */}
					<Grid container xs={3}>
					<Grid item xs={8} sx={{ width: '271px', height:'212px',background:'#FDD2191A',borderRadius: '12px'}}>
					<Grid item xs={12} sm={12}>
					<Image src="https://drive.google.com/uc?export=view&id=1zoezVSzeufCNtDl38mhaGFYNDFrl3ZOb" style={{
    justifyContent:'center',width:'60px',height:'60px',margin:'12px'
							}}>
							</Image>
							</Grid>			
							<Grid item xs={12}>	
						<Typography>10X your work and grow exponentially with us</Typography></Grid>
					</Grid>
					</Grid>
					<Grid item xs={3} sx={{ width: '271px', height:'212px',background:'#F788281A',borderRadius: '12px'}}>
					<Typography>10x</Typography>
					</Grid>
					<Grid item xs={3} sx={{ width: '271px', height:'212px',background:'#FA54561A',borderRadius: '12px'}}>
					<Typography>10x</Typography>
					</Grid>
				</Grid>
				
					<Grid item xs={3} >
					<Typography>10x</Typography>
				</Grid>
					<Grid item xs={3}>
					<Typography>10x</Typography>
				</Grid>
					<Grid item xs={3}>
					<Typography>10x</Typography>
				</Grid>
					<Grid item xs={3}>
					<Typography>10x</Typography>
				</Grid>
					
			</Grid>
			<Typography variant='h5'>TestiMonials</Typography>
			<Grid container xs={12}>
				<Grid item xs={12}>
				<Image src="https://drive.google.com/uc?export=view&id=1C0q5be4_iBseQdLM_uX7uq0AJpznpjBk" style={{
    justifyContent:'space-around',width:'70px',height:'50px'
					}}>
					</Image>
					<Grid item xs={6}>
						<Typography variant='h6'>Rhai</Typography></Grid>
						
			</Grid>
			 </Grid> 
			{/*Founder story for home page*/}
			<Paper sx={{backgroundColor:'#bb00000a'}}>
			<Typography variant='h5'>Founder Story</Typography>
			<Grid container xs={12}>
			<Grid container xs={12} sx={{m:'50px',backgroundColor:'#FFFFFF',borderRadius:'20px'}}>
				<Grid item xs={6}sx={{m:'20px'}}>
					<Typography sx={{fontsize:'16px',fontStyle:'Roboto',fontWeight:'400px',color:'#000000'}}>
					Kevin Missal wrote his first book at the age of 14, and at 22, the St. Stephens graduate has turned out to be a bestselling author and a full-time writer with the first two books in his Kalki series being runaway successes. Along with the Narasimha series being published by Harper Collins, his recent release with Penguin reimagines the fabled story of Sinbad the Sailor. Kevin loves fantasy fiction and has always been a fan of mythology. His books have been featured in publications like the Sunday Guardian, The New Indian Express and Millennium Post.
						</Typography>
						</Grid>
						<Grid item xs={5} sx={{mx:'0px'}} >
						
						<Image src="https://drive.google.com/uc?export=view&id=1uXojzON_Pp414rpaWSVCPOJO7E8cY9xL" style={{
    justifyContent:'space-around',width:'200px',height:'200px'
					}}></Image>	
							
							</Grid>
					

				</Grid>
				</Grid>
				</Paper>
			<Footer />
			</>
	);

}
export default LandingPage;