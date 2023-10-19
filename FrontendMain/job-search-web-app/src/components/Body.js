import React from 'react';
import { useState } from 'react';

function Body() {
const[text, setText]= useState('');
const onType = ()=>{
    
}
  return (
    <div className="body">
      <div className="body-content">
        <form className="form-content">
          <input type="text" placeholder="e.g running..." />
          <button className="btn">Add</button>
        </form>
      </div>
    </div>
  );
}
export default Body;
