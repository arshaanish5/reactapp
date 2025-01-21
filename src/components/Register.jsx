import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import axios from 'axios';

const Register = ({user}) => {
	const[form,setForm]=useState({
		name:user.name,
		email:user.email,
		phonenumber:'',
		address:'',
		password:'',
		repassword:'' 
	})
	const capValue=()=>{
		// console.log(form)
		axios.post('https://dummyjson.com/users/add',form).then((res)=>{
			console.log(res)
			alert(`This is the id ${res.data.id}`)
		})
		setForm()
	}
  return (
	<>
	<div>
		<h1>STUDENT REGISTER FORM</h1>
	</div>
	<Box
	component="form"
      sx={{ '& .MuiTextField-root': { m: 3, width: '25ch' } }}
      noValidate
      autoComplete="off"
	  >
	<div>
	<TextField
          required
          id="outlined-required"
          label="Name"
		  value={form.name}
		  onChange={(e)=>setForm({...form,name:e.target.value})}
        />
        <TextField
          id="outlined-required"
          label="Email"
		  value={form.email}
		  onChange={(e)=>setForm({...form,email:e.target.value})}
        />
		</div>
		<div>
		<TextField
          id="outlined-number"
          label="Number"
          type="number"
		  value={form.phonenumber}
		  onChange={(e)=>setForm({...form,phonenumber:e.target.value})}
        />
		  <TextField
          id="outlined-required"
          label="Address"
		  value={form.address}
		  onChange={(e)=>setForm({...form,address:e.target.value})}
        />
		</div>
		<div>
         <TextField
		 id="outlined-password-input"
		 label="Password"
		 type="password"
		 value={form.password}
		 onChange={(e)=>setForm({...form,password:e.target.value})}
	   />
	   <TextField
          id="outlined-password"
          label="Re-enter Password"
          type="password"
		  value={form.repassword}
		  onChange={(e)=>setForm({...form,repassword:e.target.value})}
        />
      </div>
	  <Button variant="outlined" onClick={capValue}>Submit</Button>
	  </Box>
	  
	  
	</>
  );
}

export default Register