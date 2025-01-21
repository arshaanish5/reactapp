import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'


const Task = () => {
	const[count,setCount]=useState(0);
	const increment=()=>{
		setCount(count+1);
	}
	const decrement=()=>{
		setCount(count-1);
	}
	const reset=()=>{
		setCount(0);
	}
  return (
	<>
	<div>
	<small>The Button pressed {count} times.</small><br /><br />
	</div>
	<div class="btn">
	<Button  variant="contained" color="success" onClick={increment}>Increment</Button>&nbsp;
	<Button  variant="contained" color="warning" onClick={decrement} >Decrement</Button>&nbsp;
	{/* <small>The Button pressed {count} times.</small><br /> */}
	<Button  variant="contained" onClick={reset}>Reset</Button>
	</div>
	</>
  )
}

export default Task