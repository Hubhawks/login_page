import Container from '@mui/material/Container';
import  Grid  from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';
import Image from 'mui-image';

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 2 }}
        py={{ xs: 3, sm: 2 }}
        bgcolor="#FAFBFC"
        color="black"
      >
        <Container maxWidth="lg">
				  <Grid container spacing={10}>
					  <Grid item xs={2} sm={3}>
				  <Image src="https://drive.google.com/uc?export=view&id=1DAyaOiRTn1fi2eVSohkY6-2XgHxuwLd5" style={{
    justifyContent:'space-around',width:'auto'
						  }}></Image>
						  </Grid>
						  <Grid item xs={2} sm={3}>
              <Box><Typography>Why Hubhawks</Typography></Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  SignUp
                </Link>
              </Box>      
			</Grid>
					  
            <Grid item xs={3} sm={3}>
              <Box><Typography>Company</Typography></Box>
              <Box>
                <Link href="/" color="inherit">
				<Typography>About us</Typography>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
				<Typography>Services</Typography>
                </Link>
						  </Box>
						  <Box>
                <Link href="/" color="inherit">
				<Typography>Blog</Typography>
                </Link>
              </Box>
            </Grid>
					  <Grid item xs={3} sm={3}>
              <Typography>Support</Typography>
              <Box>
                <Link href="/" color="inherit">
                <Typography>Contact us</Typography>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
				<Typography>Privacy Policy</Typography>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
				<Typography>Terms and Conditions</Typography>
                </Link>
              </Box>
			 </Grid>
					  
				  </Grid>{/*
				  Icons Bar for left side*/} 
				  <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
					  <Grid container xs={6}>
						  <Grid item xs={1}>
						  <Image src="https://drive.google.com/uc?export=view&id=1IKS5RQhbzWL7DkiDYTbjjlxYnoc3sSqF" style={{
    justifyContent:'space-around',width:'auto'
						  }}></Image>
						  </Grid>
						  <Grid item xs={1}>
						  <Image src="https://drive.google.com/uc?export=view&id=1MyFr-3hwERNPf6SOSsUuFfR7ndN3V0rN" style={{
    justifyContent:'space-around',width:'auto'
						  }}></Image>
						  </Grid>
						  <Grid item xs={1}>
						  <Image src="https://drive.google.com/uc?export=view&id=1RIPmuZQcSxdOalMQSGm4_zhg3MfatCMr" style={{
    justifyContent:'space-around',width:'auto'
						  }}></Image>
						  </Grid>
					  </Grid>
					  <Grid item xs={6}>&reg; All rights reserved to Hubhawks 2022 </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}