import ListIem from "./Listitem"
const persona = [
{
  nombre: 'ismael',
  telefono: '6969669',
  email: 'elisma@gmail.com'
},
{
  nombre: 'messi ronaldo',
  telefono: '38373737',
  email: 'pele@gmail.com'
},
{
  nombre: 'luis angel',
  telefono: '99910101',
  email: 'luis@hotmail.com'
}
]
function App(){
  return(
    <div>
      <h1>Agenda</h1>
      <hr/>
      <ul>
        {
          persona.map((persona)=>(
            <ListIem
            key={persona.email}
            nombre={persona.nombre}
            telefono={persona.telefono}
            email={persona.email}
            ></ListIem>
          ))
        }
      </ul>
    </div>
  )
}

export default App
