import Button from './components/Button';
export default function TodoItem({finished,id,title,toggleTask, deleteTodo}) 
{
    return (
    < div className = "toDoItem" >
        <label>
            {title}
        </label>
        <div className="action">
            <input type = "checkbox" checked = {finished} onChange={e=>toggleTask(id)} ></input>
            <Button action={deleteTodo} id={id} name={"Achieve"} />
        </div>
    </div>
    )
}