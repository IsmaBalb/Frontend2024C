import { buttonsClasses } from "../assests/buttonsClasses"

export const Button = ({
    label,
    class: buttonClass,
    columns,
    function: buttonFunction,
    buttonsFunctions
}) =>{
    return(
        <td colSpan={columns}>
       <button className= {buttonsClasses[buttonClass]} type='button' onClick={() => buttonsFunctions[buttonFunction](label)}>{label}</button>
    </td>
)
}