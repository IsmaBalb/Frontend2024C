import ListItem from "./ListItem"

const List = ({ tasklist }) =>{
    return(
        <div>
        <div className="row">
          <div className="col-6">
            <h4>Tasks</h4>
          </div>
          <div className="col-2">
          <h4>Limit</h4>
          </div>
          <div className="col">
          <h4>Actions</h4>
          </div>
        </div>
        
        {
            tasklist.map(
                (task) => (
                    <ListItem
                    key={task.id}
                    task={task.task}
                    Limit={task.Limit}
                    />
                )
            )
        }
        </div>
    )
}

export default List