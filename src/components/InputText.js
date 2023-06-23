import "../assets/components.css"

export default function InputText(props){

    return(
        <input type="text" 
        value={props.newTodo} 
        onChange={e=>props.setNewTodo(e.target.value)} 
        placeholder="e.g. Lunch"
        ></input>
    )
}