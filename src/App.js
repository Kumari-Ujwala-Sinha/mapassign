import React, { useState } from "react";
import "./styles.css";
import Multicolor from "./Multicolor";



import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  
  ZoomableGroup
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";

const markers = [
  {
    markerOffset: -15,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037],
    data:100,
    bar:[
    {value:20,color: '#2c26b6',name:">$5k"},
    {value:26,color: '#3c73ff',name:"$1k-$5k"},
    {value:24,color: '#68b7ff',name:"$500-$1k"},
    {value:30,color: '#b7e6ff',name:"<$500"}]
  },
  { markerOffset: -15, name: "La Paz", coordinates: [-68.1193, -16.4897] ,data:90,
  bar:[{value:27,color: '#2c26b6',name:">$5k"},
  {value:20,color: '#3c73ff',name:"$1k-$5k"},
  {value:30,color: '#68b7ff',name:"$500-$1k"},
  {value:23,color: '#b7e6ff',name:"<$500"}]
},
  
  
];

function App() {
  const [content,setContent]=useState(null)
  
  return (
    <div>
    <div className="App">
    {content && <h1>{content.name} <span style={{fontSize:"10px",color:"#b7e6ff"}}>Usage Details</span></h1>}
      <ComposableMap data-tip="">
        <ZoomableGroup zoom={1}>
            {" "}
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#e5ebf2"
              
            />
          ))
        }
      </Geographies>
      {markers.map((eachdata) => (
        <Marker key={eachdata.name} coordinates={eachdata.coordinates} onClick={()=>setContent(eachdata)} >
          <circle r={eachdata.data/10} fill="#9acdfc" stroke="#6881d0" strokeWidth={2} />
         
        </Marker>
      ))}
      </ZoomableGroup>
      
    </ComposableMap>
    </div>
    

    {content && <Multicolor content={content}/>}
    
      
    </div>
  );
}

export default App;
