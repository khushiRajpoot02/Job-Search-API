import React, { useEffect, useState } from 'react';
import Axios from 'axios';
function Mern(){
    const[data, setData] = useState("");
    const getBackData = async ()=>{
        try {
            const response = await Axios.get("http://localhost:5000/getData");
            setData(response.data); // Update the state with response.data
            console.log(response.data); // Log the fetched data
          } catch (error) {
            console.error("Error fetching data:", error);
          }
    }
    useEffect(()=>{
        getBackData();
    }, []);
    return (
     <div>
    <h1>{data}</h1>
    </div>
    );
  }
  export default Mern;