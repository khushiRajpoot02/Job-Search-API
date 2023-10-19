import Header from './components/Header';
import Body from './components/Body';
import Table from './components/Taable';
import { useState } from 'react';
function App() {
  const characters = [
    {
      name: 'Charlie',
      job: 'Janitor',
      id: 1
    },
    {
      name: 'Mac',
      job: 'Bouncer',
      id : 2
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
      id : 3
    },
    {
      name: 'Dennis',
      job: 'Bartender',
      id: 4
    },
    {
      name: 'Khushi',
      job: 'Engineer',
      id : 5
    },
    {
      name: 'Pallu',
      job: 'Desiner',
      id : 6
    },
  ]
const[data, setData] = useState(characters);
const handleClick = (id)=>{
  const updateData = data.filter((item)=> item.id!==id
)
  setData(updateData);
}
  return (
    <div className="App">
      <Table charactersData = {data} onDelete = {handleClick}/>
    </div>
  );
}
export default App;
