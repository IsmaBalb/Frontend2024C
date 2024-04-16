import { useState } from "react"

export const useFrom = () => {
    const [values, setValues] = useState(inicialState)

    const handleInputChange = (target) => {
        const {name, values} = target
        setValues({
            ...values,
            [name]: value 
        })
    }
}

const reset = () => {
    setValues(inicialState)
}

return [values, handleInputChange, ]

