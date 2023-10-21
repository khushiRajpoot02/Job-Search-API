import { useState, useEffect } from "react";
import Axios from 'axios';
const Form =(props)=>{
    const[formData, setFormData] = useState({name : '', email : ''});
const handleChange = (e)=>{
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    }
    ) 
}
const handleSubmit = async (e)=>{
  e.preventDefault();
  try{
     await Axios.post("http://localhost:5000/submitFormData", formData);
  }catch(err){
    console.log(`error ${err}`);
  }
  //props.onSubmit(formData);
}

return(
        <div>
        <form>
        <label>Name</label>
        <input className="name" type ='text' name = 'name'  placeholder = 'eg.name...' onChange={handleChange} /><br/>
        <label>Email</label>
        <input className="email" type ='email' name = 'email'  placeholder = 'eg.khushi@gmail.com...'
        onChange = {handleChange}
        />
        <br/>
        <button onClick = {handleSubmit}>Submit</button>
        </form>
        </div>
    )
}
export default Form;