import { useState } from "react"

function App(){
  const [inputForm, setInputsForm,] = useState({
    username: "",
    password: "",
  })

  const [username, setusername] = useState ("")
  const [password, setPassword,] = useState("")

 const handleUsernameChange = (event) => {
  username = event.target.value
  //console.log(username)
 }

 const handlePasswordChange = (event) => {
  setPassword(event.target.value)
 }
 const handleSubmit = (e) => {
  e.proventDefault()
  console.log("Nombre de usuario:", username)
  console.log("Contraseña:", password)
  username = ""
  setPassword
 }
  return (
    <div>
      <h1>Inputs</h1>
      <hr />
      <form onSubmit = {(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="username">Username</label>
          <input  id="username"
           type="text" 
           onChange={(event) => handleUsernameChange(event)}
           />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
