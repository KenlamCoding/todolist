export default function TodoItem({
    finished,
    id,
    title,
    toggleTask,
    deleteTodo
}) {
    return (
    <li key={id}>
        <label >
                <input type="checkbox" checked={finished} 
                            onChange={e=>toggleTask(id)}
                ></input>
                {
                    title
                }
                </label>
                <button 
                onClick = {() => deleteTodo(id)} 
                > delete </button>
    </li> )
}