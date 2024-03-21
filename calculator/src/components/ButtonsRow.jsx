import {Button} from "./Buttons"

export const ButtonsRow = ({row, buttonsFunctions}) => {
  return (
    <tr>
      {
         row.map((button) =>{
          return(
            <Button
            key={button.label}
            buttonsFunctions={buttonsFunctions}
            {...button}
            />
          )
         })
      }

    </tr>
  )
}

ButtonsRow.prototype = {
  row: 'array',
  buttonsFunctions: 'object',
}