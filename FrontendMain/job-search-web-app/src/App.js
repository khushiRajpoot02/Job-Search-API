import Form from './components/Form';
import Body from './components/Body';
import Table from './components/Taable';
import Mern from './components/Mern'
import { useEffect, useState } from 'react';
import  Axios  from 'axios';
function App() {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', job : 'engin' },
    { id: 2, name: 'Jane Smith', job : 'hiree'},
    // Add more data as needed
  ]);
  
const [submitData, setSubmitData] = useState([]);
const handleClick = (id)=>{
  const updateData = data.filter((item)=> item.id!==id
)
  setData(updateData);
}
const handlSubmit = (newData) => {
  const id = new Date().getTime(); // Generate a unique ID (for a real app, you'd use a better approach)
  const newDataItem = { id, ...newData };
  setData([...data, newDataItem]);
};
useEffect(()=>{
   Axios.get("http://localhost:5000/getSubmittedFormData")
   .then((response)=>{setSubmitData(response.data); console.log(`form data on front backend${response.data}`)}).catch((err)=>{console.log('err', err)})
} 
,[])
  
  return (
    <div className="App">
    <h1>Form Data is getting displayed here</h1>
    <Form/>
    <div>
    <h2>Temporary Data from Backend</h2>
    <ul>
      {submitData.map((data, index) => (
        <li key={index}>
          Name: {data.name}, Email: {data.email}
        </li>
      ))}
    </ul>
  </div>
   
    <Mern/>
      <Table charactersData = {data} onDelete = {handleClick} />
      <Body  onAdd={handlSubmit}/>
    </div>
  );
}
export default App;
