import { useState } from "react"

export const useForm = () => {
    const [values, setValues] = useState(inicialState)

    const handleTnputChange = ({target}) => {
        const {name, value}= target
        setValues({
            ...values,
            [name]: value
        })
    }

}

const reset = () => {
    setValues(inicialState)
}

return [values, handleTnputChange, reset ]

