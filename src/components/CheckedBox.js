import "../assets/components.css";
export default function CheckedBox({
    id,
    toggleTask,
    finished
})
{
    return(
         <div className="checkboxSection"  >
            <label>
                <input type="checkbox" checked = {finished} onChange={e=>toggleTask(id)} id={id}></input>
                <span className="checkboxShow" ></span>
            </label>
            
        </div>
       
    );
}