import  React,{useState} from 'react';
import './App.css'
import {Card,CardContent,Button,Grid,
    Box,AppBar,Toolbar,IconButton,Typography,CardActions}from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import CheckIcon from "@mui/icons-material/Check";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";

export default function Cart() {
const[toggle1,setToggle1]=useState(false)
const[toggle2,setToggle2]=useState(false)
const[toggle3,setToggle3]=useState(false)
const[count,setCount]=useState(0)
const handletoggle1=(e)=>{
  setToggle1(!toggle1)
  if(e.target.name==="add to cart")
  {
      setCount(count+1)
  }
  else{
      setCount(count-1)
  }
  }
  const handletoggle2=(e)=>{
    setToggle2(!toggle2) 
    if(e.target.name==="add to cart")
    {
        setCount(count+1)
    }
    else{
        setCount(count-1)
    }
    }
    const handletoggle3=(e)=>{
      setToggle3(!toggle3) 
      if(e.target.name==="add to cart")
      {
          setCount(count+1)
      }
      else{
          setCount(count-1)
      }
      }
  return (
      <div>
    <Grid container
    direction="column"
    > 
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           shopping site
          </Typography>
          
    
          <Badge badgeContent={count} color="secondary">
          <ShoppingCartIcon/>
         </Badge>
        </Toolbar>
      </AppBar>
    </Box>
        </div>  

        <div  className="product">
       <Grid container
        justifyContent="space-around"
       >
         {/* product1 */}       
    <Card sx={{ minWidth: 300, borderRadius:"20px" }}>
      <CardContent>
     
      <div className="head">
            <header>
                <p className="bold">FREE</p>
                <h1 className="header">$0<span className="spanheader">/month</span></h1>
                
            </header>
        </div><hr/>


        <div className="bold "> 
                   <p> <CheckIcon />Single User</p>    
                    <p><CheckIcon />
                    5GB Storage</p>  
                    <p><CheckIcon />
                    Unlimited Public Projects</p>
                    <p> <CheckIcon />
                    Community Access</p>         
                    <p> <HighlightOffSharpIcon />
                      Unlimited Private Projects</p> 
                      <p> <HighlightOffSharpIcon />
                      Dedicated Phone Support</p>
                      <p> <HighlightOffSharpIcon />
                      Free Subdomain</p>                      
                      <p> <HighlightOffSharpIcon />
                      Monthly Status Reports</p>
        
        </div>
    
     <CardActions>
      <Button variant="contained" 
      name={toggle1?"remove from cart":"add to cart"}
      onClick={(e)=>handletoggle1(e)}
      sx={{borderRadius:"20px",height:"45px",minWidth: 300}}>
        {toggle1?"remove from cart":"add to cart"}</Button>
      </CardActions>
      </CardContent> 
    </Card>



           {/* product2 */}       
    <Card sx={{ minWidth:300 , borderRadius:"20px"}}>
      <CardContent>

      <div  className="head">
            <header>
                <p className="bold"> Plus</p>
                <h1 className="header">$9<span className="spanheader">/month</span></h1>  
            </header>
        </div><hr/>
 
        <div className="bold"> 
                   <p> <CheckIcon />Single User</p>    
                    <p><CheckIcon />
                    5GB Storage</p>  
                    <p><CheckIcon />
                    Unlimited Public Projects</p>
                    <p> <CheckIcon />
                    Community Access</p>         
                    <p> <CheckIcon />
                      Unlimited Private Projects</p> 
                      <p> <CheckIcon />
                      Dedicated Phone Support</p>
                      <p> <CheckIcon />
                      Free Subdomain</p>                      
                      <p> <HighlightOffSharpIcon />
                      Monthly Status Reports</p>
        
        </div>

     <CardActions>
      <Button variant="contained" 
      name={toggle2?"remove from cart":"add to cart"}
      onClick={(e)=>handletoggle2(e)}
      sx={{borderRadius:"20px",height:"45px",minWidth: 300}}>
        {toggle2?"remove from cart":"add to cart"}</Button>
     </CardActions>
      </CardContent>   
    </Card>


    {/* product3 */}       
    <Card sx={{ minWidth: 300, borderRadius:"20px" }}>
      <CardContent>

      <div  className="head">
            <header>
                <p className="bold">  PRO</p>
                <h1 className="header">$49<span className="spanheader">/month</span></h1>  
            </header>
        </div><hr/>

        <div className="bold"> 
                   <p> <CheckIcon />Single User</p>    
                    <p><CheckIcon />
                    5GB Storage</p>  
                    <p><CheckIcon />
                    Unlimited Public Projects</p>
                    <p> <CheckIcon />
                    Community Access</p>         
                    <p> <CheckIcon />
                      Unlimited Private Projects</p> 
                      <p> <CheckIcon />
                      Dedicated Phone Support</p>
                      <p> <CheckIcon />
                      Free Subdomain</p>                      
                      <p> <CheckIcon />
                      Monthly Status Reports</p>
        
        </div>

        <CardActions>
      <Button variant="contained" 
      name={toggle3?"remove from cart":"add to cart"}
      onClick={(e)=>handletoggle3(e)}
      sx={{borderRadius:"20px",height:"45px",minWidth: 300}}>
        {toggle3?"remove from cart":"add to cart"}</Button>
      </CardActions>
      </CardContent>
        
    </Card>
    </Grid>
    </div>
    </Grid>
    </div>
  );
}

