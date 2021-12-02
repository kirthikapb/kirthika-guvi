import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";

import {
  Grid,
  Box,
  AppBar,
  IconButton,
  Typography,
  Button,
  Toolbar,
  Card,
  CardContent,
  CardActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";

const styles = makeStyles({
  footerBox: {
    width: "100%",
    backgroundColor: "#1976d2",
    position: "fixed",
    bottom: 0,
    marginLeft: -8,
    height: 80,
  },
  padding: {
    paddingLeft: "50%",
  },
});



export default function App() {
  return (
    <div>
      <h3> </h3>
      <BrowserRouter>
        <Switch>
        
          <Route exact path="/" component={Home} />
          <Route exact path="/AdminLogin" component={AdminLogin} />
          <Route exact path="/StudentLogin" component={StudentLogin} />
          <Route exact path="/Contactus" component={ContactUs} />
          <Route exact path="/Aboutus" component={Aboutus} />
          <Route exact path="/Branches" component={Branches} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function AdminLogin(props) {
  return (
    <>
      <h3>Admin Login</h3>
          <label>AdminId</label>
            <input text="type"></input><br/>
            <label>Password</label>
           <input text="password"></input><br/><br/>
           <button>Login</button>&nbsp;
           
      <button onClick={props.history.goBack}>Go Back</button>
    </>
  );
}

function StudentLogin(props) {
  return (
    <>
      <h3>Student Login</h3>
        <label>StudentId</label>
          <input text="type"></input><br/>
          <label>Password</label>
         <input text="password"></input><br/>
         <button>Login</button>&nbsp;
       
      <button onClick={props.history.goBack}>Go Back</button>
    </>
  );
}

function ContactUs(props) {
  return (
    <>
      <h1>contact us on</h1>
<p>Address:
IITM Research park - phase 2, module #9, 3rd floor, D block, Kanagam Rd, Tharamani, Chennai, Tamil Nadu, India. 600113
</p>
<p>Phone: (+91) 44 6646 9865</p>
<p>Mobile: (+91) 9344419057 ( For zen related queries)</p>
<p> Email: cs@guvi.in</p>

      <button onClick={props.history.goBack}>Go Back</button>
    </>
  );
}

function Aboutus(props) {
  return (
    <>
       <h1> What is GUVI?</h1>
<ul>
<li>GUVI started as an unique community who were passionate to learn and share technical knowledge in our very own mother tongue
  . We try to connect with everyone in their preferred language.</li>
  <li>GUVI makes technical learning a simple exercise with a
     Friendly Instructor Next Door kind of knowledge sharing.</li>
     <li>GUVI is a complete platform where people can share their learning through videos</li>
     <li>GUVI helps students from rural background/novice/beginners
        who are struck with the complexity of language of delivery and 
        the hitches in getting started with new technology zone.</li>
        <li>GUVI is a Blended Learning platform where there are no 
          limits to what you can learn and no limits to what you can share
GUVI provides a social platform to share your skills and learning’s.</li>
</ul>
      <button onClick={props.history.goBack}>Go Back</button>
    </>
  );
}

function Branches(props) {
  return (
    <>
       <h2>Branches</h2>
       
     <p> Chennai</p>
     <p>coimbatore</p> 
     <p>delhi</p>
      <button onClick={props.history.goBack}>Go Back</button>
    </>
  );
}

function Home(props) {
  const classes = styles();
  return (
    <div>
      <Grid>
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
                Guvi
              </Typography>
              <Button
                color="inherit"
                onClick={() => props.history.push("/AdminLogin")}
              >
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </Box>{" "}
        <br />
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              XYZ Organization
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              India
            </Typography>
            <Typography variant="body2">
              Learning is the
              <br />
              {'"KEY to SUCCESS"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => props.history.push("/Contactus")}
            >
              Contact Us
            </Button>
          </CardActions>
        </Card>
        <br /> <br />
        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => props.history.push("/AdminLogin")}
            >
              Admin Login
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => props.history.push("/StudentLogin")}
            >
              Student Login
            </Button>
          </Grid>
        </Grid>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>React JS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on UI components. It is maintained
              by Meta and a community of individual developers and companies.
              React can be used as a base in the development of single-page or
              mobile applications.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Node JS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on the V8 engine and executes
              JavaScript code outside a web browser.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Angular</Typography>
          </AccordionSummary>
        </Accordion>
      </Grid>
      <Box className={classes.footerBox}>
        <List className={classes.padding}>
          <Button
            color="secondary"
            onClick={() =>props.history.push("/Contactus")}
          >
            Contact US
          </Button>
          <Button
            color="secondary"
            onClick={() =>props.history.push("/Aboutus")}
          >
           
            About US
          </Button>
          <Button
            color="secondary"
            onClick={() => props.history.push("/Branches")}
          >
            
            Branches
          </Button>
        </List>
      </Box>
    </div>
  );
}

