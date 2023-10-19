import { useState } from "react";
function TableBody(props){
const {charactersData, onDelete} = props;

    return(
     <tbody>
      {charactersData.map((row, idx)=>(
        <tr key = {row.id}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
        <button onClick = {()=>onDelete(row.id)}>Delete</button>
        </td>
        </tr>
      ))}
    </tbody>
    )
}
export default TableBody;
