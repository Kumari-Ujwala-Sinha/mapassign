import React from "react";
import "./styles.css";


const Multicolor = (props) => {
   
   const readings=props.content.bar
   
  
       

        let values = readings && readings.length && readings.map((item, i)=>(
            <div className="value" style={{'color': item.color, 'width': item.value + '%'}}  key={i}>
                        <span className="dot" style={{'color': item.color}}>▮</span>
                        <span style={{fontSize:"10px",marginRight:item.value+"px"}}>{item.name}</span>
                        <span>              </span>
                        <span style={{fontSize:"10px"}}>{item.value}%</span>
                    </div>
        ))
  
        let bars = readings && readings.length && readings.map((item, i) =>(
            <div className="bar" style={{'backgroundColor': item.color, 'width': item.value + '%'}}  key={i}>
  
                    </div>
        ))
  
        
  
        
  
      return (
       
           
        <div className="multicolor-bar">
           
            
            <div className="bars">
                {bars === ''?'':bars}
            </div>
            <div className="values">
                {values === ''?'':values}
            </div>
           
            
        </div>
       
      );
    
  }
  
  
  export default Multicolor;
  

  