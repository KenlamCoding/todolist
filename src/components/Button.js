import "../assets/components.css";
export default function Button({id, name, action}) 
{
    function getFunction() {
        switch(name){
            case 'Add':
                //Handle the add item with onSubmit
                break;
            case "Achieve":
                action(id);
                break;
            default:
                console.log("noAction");
        }
    }
    return(
    <button onClick={getFunction}>{name}</button>)
}