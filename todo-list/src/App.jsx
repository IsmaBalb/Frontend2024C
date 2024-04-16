import List from "./List"

const tasklist = [
  {
    id: 1,
    task: "Estudiar",
    Limit: "13:00", 
  },
  {
    id: 2,
    task: "Practicar",
    Limit: "14:00", 
  },
  {
    id: 2,
    task: "Trabajar",
    Limit: "15:00", 
  }
]

function App() {
  return (
      <div className="container">
        <h1>To Do List</h1>
        <hr />
        <List 
        tasklist={tasklist}
        />
       </div>
   
  )
}

export default App
