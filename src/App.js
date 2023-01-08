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
    data:200,
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
{ markerOffset: 25, name: "India", coordinates: [77.524831,13.038781 ],
data:300,
bar:[{value:10,color: '#2c26b6',name:">$5k"},
{value:15,color: '#3c73ff',name:"$1k-$5k"},
{value:15,color: '#68b7ff',name:"$500-$1k"},
{value:60,color: '#b7e6ff',name:"<$500"}]
 },
 { markerOffset: 25, name: "USA", coordinates: [-102.275213,43.218341 ],
data:500,
bar:[{value:10,color: '#2c26b6',name:">$5k"},
{value:15,color: '#3c73ff',name:"$1k-$5k"},
{value:15,color: '#68b7ff',name:"$500-$1k"},
{value:60,color: '#b7e6ff',name:"<$500"}]
 },
 { markerOffset: 25, name: "Australia", coordinates: [128.19317146159125,-22.365814909802523 ],
 data:400,
 bar:[{value:30,color: '#2c26b6',name:">$5k"},
 {value:25,color: '#3c73ff',name:"$1k-$5k"},
 {value:25,color: '#68b7ff',name:"$500-$1k"},
 {value:20,color: '#b7e6ff',name:"<$500"}]
  },
  { markerOffset: 25, name: "Europe", coordinates: [ 9.484536781493427,50.99438740143028 ],
  data:350,
  bar:[{value:30,color: '#2c26b6',name:">$5k"},
  {value:20,color: '#3c73ff',name:"$1k-$5k"},
  {value:25,color: '#68b7ff',name:"$500-$1k"},
  {value:25,color: '#b7e6ff',name:"<$500"}]
   },
   { markerOffset: 25, name: "South Africa", coordinates: [ 11.590596837523238,10.355087521004805 ],
  data:250,
  bar:[{value:10,color: '#2c26b6',name:">$5k"},
  {value:40,color: '#3c73ff',name:"$1k-$5k"},
  {value:28,color: '#68b7ff',name:"$500-$1k"},
  {value:22,color: '#b7e6ff',name:"<$500"}]
   },
   { markerOffset: 25, name: "China", coordinates: [ 99.55489866341644,39.02158739138396 ],
   data:450,
   bar:[{value:40,color: '#2c26b6',name:">$5k"},
   {value:20,color: '#3c73ff',name:"$1k-$5k"},
   {value:22,color: '#68b7ff',name:"$500-$1k"},
   {value:18,color: '#b7e6ff',name:"<$500"}]
    }



  
  
];

function App() {
  const [content,setContent]=useState(null)
  
  return (
    <div>
    <div className="App">
      
    {content ? <h2>{content.name} <span style={{fontSize:"10px",color:"#b7e6ff"}}>Usage Details</span></h2>:<h2>Click the marker to see usage details</h2>}
      <ComposableMap data-tip="">
        <ZoomableGroup zoom={1}>
            {" "}
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#b4dcff70"
              
            />
          ))
        }
      </Geographies>
      {markers.map((eachdata) => (
        <Marker key={eachdata.name} coordinates={eachdata.coordinates} onClick={()=>setContent(eachdata)} >
          <circle r={eachdata.data/50} fill="#9acdfc" stroke="#6881d0" strokeWidth={2} />
         
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
