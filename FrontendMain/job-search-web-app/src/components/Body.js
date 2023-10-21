import React from 'react';
import { useState } from 'react';
function Body({onAdd}) {
const[formData, setFormData]= useState({name : '', job : ''});
const{name, job} = formData;
const handleChange = (event)=>{
    setFormData(
        {
         ...formData,
        [event.target.name] : event.target.value,
        }
    )
    console.log(event.target.name);
}
const handleSubmit = (e)=>{
    e.preventDefault();
    onAdd(formData);
    setFormData({ name: '', job: '' });
}
  return (
    <div className="body">
      <div className="body-content">
        <form className="form-content">
          <input type="text" placeholder="name.." onChange={handleChange} name='name' value = {name} />
          <input type="text" placeholder="e.g running..."  onChange={handleChange} name = 'job' value = {job} />    
          <button className="btn" onClick={handleSubmit}>Add</button>
        </form>
      </div>
    </div>
  );
}
export default Body;

// for adding data from form to table we do the following things:
// 1st create onChange method
// onChange method means ::- whatever will type on form it has to be added to json
// 
