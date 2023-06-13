import { Button ,ButtonGroup,Checkbox} from '@mui/material'
import React,{useState} from 'react'

const MUI = () => {
  const[name,setname]=useState([]);
  function customapp(){
    alert("Function called")
  }

  function getvalue(ev){
    let data=name;
    data.push(ev.target.value);
    console.log(data);
  }
  return (
    <div className='App' style={{backgroundColor:"grey",height:"17vh",padding:"3px",margin:"5px"}}>
    <h1>
      React Material UI
    </h1>
    {/* rendering button with outline with green background and yellow color */}
    <Button variant='contained' color="success" onClick={()=>alert("Button is being clicked")  } >Click me </Button><br/>
    <Button variant='contained' color="success" size="small" onClick={()=>customapp()} >Click to call function  </Button>
    <br/>
    <ButtonGroup orientation='vertical' >
      {/* all contains the property to render the all the group buttons horizontally and vertically  by default it is horizontal */}
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>

  <Checkbox value="anil" onChange={(ev)=>{getvalue(ev)}}/>
  <Checkbox value="sunil" onChange={(ev)=>{getvalue(ev)}}/>
  <Checkbox value="naresh" onChange={(ev)=>{getvalue(ev)}}/>
  <Checkbox value="xyz" indeterminate onChange={(ev)=>{getvalue(ev)}}/>
    </div>
  )
}

export default MUI;
