import * as React from 'react';
import Fab from '@mui/material/Fab';
import ForkKnife from "../assets/ForkKnife.svg"

export default function FloatingActionButtons() {
  return (
    <div className="fab">
    <Fab color="primary" aria-label="add" style={{
        width: 64,  
        height: 64,   
        borderRadius: 40,            
        backgroundColor: '#D6001B',                                    
        position: 'absolute',                                          
        bottom: 50,                                                    
        right: 30
    }}>
<img src={ForkKnife} alt="description" />
</Fab>
</div>
  );
}