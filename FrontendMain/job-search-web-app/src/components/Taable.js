import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
function Table(props){
    const {charactersData, onDelete} = props;
    return(
        <div className = 'table'>
        <TableHeader/>
        <TableBody charactersData = {charactersData} onDelete={onDelete} />
        </div>
    )
}
export default Table;