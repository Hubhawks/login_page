import React from 'react'
import { Button, Grid, Typography,Paper} from '@mui/material';
import { TextField } from '@mui/material';
import  { useState } from "react";
import { useForm } from 'react-hook-form';
import Image from 'mui-image';
function Contact() {
	
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);
  return (<>
	  <Grid container xs={12}>
		  <Grid container xs={6}>
			  <Typography variant='h2'> We love to hear from you</Typography> 
			  <form onSubmit={handleSubmit(onSubmit)}>
		
		  <Grid item xs={6}>
			  <label>Name</label>
			  <Grid item xs={6}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
			  </Grid>
		  </Grid>
		  <Grid item xs={6}>
			  <label>Email</label>
			  <Grid item xs={6}>
	<input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
		  </Grid></Grid>
		  <Grid item xs={6}>
			  <label>Phone Number</label>  
			  <Grid item xs={6}>
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
			  </Grid>
			  </Grid>
		  <Grid item xs={12}>
				  <label>What help do you need</label> 
				  <Grid item xs={6}>
		  <select {...register("What help do you need", { required: true })}>
				  <option value="Mr">Please select </option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
		  </select>
		  </Grid></Grid>
<Grid >
	<label>Additional comments(optional)</label></Grid>
	<Grid >  <TextField placeholder='Add here'></TextField></Grid>

      <Button variant='contained'>Let's Connect</Button>
    </form>
		  </Grid>
		  <Grid container xs={6}>
			<Typography> We love to hear from you</Typography> 
		  </Grid>
	  </Grid>
	  <Grid container xs={12} spacing={1}>
		  <Grid container xs={6}>
				<Grid item xs={6} sx={{borderRadius:'12px',backgroundColor:'#f6c5c5',m:'10px'}} spacing={1}>
				<Typography sx={{ color: 'black' }}>Hubhawks's Culutral Benefits</Typography>
			  </Grid>
			  </Grid>
		  <Grid item xs={6} sx={{borderRadius:'12px',backgroundColor:'#f6c5c5',m:'10px'}} spacing={1}>
				<Typography sx={{ color: 'black' }}>Hubhawks's Culutral Benefits</Typography>
							</Grid>
				</Grid>
	  </>
  )
}
export default Contact;
