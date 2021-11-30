
import './App.css';
import * as React from 'react';
import {Grid} from '@mui/material';
import Card1 from './card1';
import Card2 from './card2';
import Card3 from './card3';

function App() {
  return (
       <div className="App">
         <Grid container direction="row"
         justifyContent="space-around"
         alignItems="center">
         <Card1></Card1>
         <Card2></Card2>
         <Card3></Card3>
         </Grid>
    </div>
  );
}

export default App;
