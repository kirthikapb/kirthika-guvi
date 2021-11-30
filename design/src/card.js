import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {Grid} from '@mui/material';

import './card.css';
 function Maincard(props) {
  return (
    <div>
    <Card sx={{minWidth:375,borderRadius:"20px"}}> 
      <CardContent>
        <div className="card">
            <header>
                <p className="bold">{props.heading}</p>
                <h1 className="header">${props.price}<span className="spanheader">/month</span></h1>
                
            </header>
        </div><hr/>
        <div className="bold">
                
                <Grid container
                direction="column"
               >
               <p><sub><img src={props.imguser} className="img"
                alt="tick"></img></sub>&nbsp;{props.userno} </p>

                <p> <sub><img src={props.imgstorage}lcassName="img"
                alt="tick"></img></sub> &nbsp;{props.storage}Storage</p>

                <p> <sub><img src={props.imgpublic} className="img"
                alt="tick"></img></sub>&nbsp;Unlimited Public Projects</p>

                <p> <sub><img src={props.imgaccess} className="img"
                 alt="tick"></img></sub>&nbsp;Community Access</p>

                 <p> <sub><img src={props.imgprivate} className="img"
                alt="tick"></img></sub>&nbsp;Unlimited Private Projects</p>

                <p> <sub><img src={props.imgsupport}className="img"
                 alt="tick"></img></sub>&nbsp;Dedicated Phone Support</p>

                <p><sub><img src={props.imgdomain} className="img"
                alt="tick"></img></sub>&nbsp;{props.domain}</p>

                <p> <sub><img src={props.imgstatus} className="img"
                alt="tick"></img></sub>&nbsp;Monthly Status Reports </p>
                <Button variant="contained" sx={{borderRadius:"20px",height:"45px"}}>Button</Button>
                </Grid>
                
        </div>
    
    </CardContent>
    
    
    </Card>

    </div>
  );
}
export default Maincard
