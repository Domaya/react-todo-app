import React, { useState } from 'react'

const List = React.memo((props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);

  
  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodoData = props.todoData.map((data) => {
      if(data.id === props.id){
        data.title = editedTitle;
      }
      return data;
    })
    props.setTodoData(newTodoData);
    setIsEditing(false)
  }

  const handleCompleteChange = (id) => {
    let newTodoData = props.todoData.map(data => {
      if(data.id === id){
        data.completed = !data.completed
      }
      return data;
    })
    props.setTodoData(newTodoData);
  }

  if(isEditing){
    return(
      <div
          className="bg-gray-100 flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">          
          <form onSubmit={handleSubmit}>
            <input value={editedTitle} className="w-ful px-3 py-2 mr-4 text-gray-500 rounded"
            onChange={handleEditChange}
            autoFocus></input>
          </form>
          <div className="items-center">
              <button className='px-4 py-2 float-right'
                  onClick={()=> setIsEditing(false)}
                >x</button>
                <button className='px-4 py-2 float-right'
                type='Submit'
                onClick={handleSubmit}
                >save</button>
            </div>
        </div>
    )
  } else {
    return (
          <div
              key={props.id}
              {...props.provided.draggableProps} 
              ref={props.provided.innerRef}
              {...props.provided.dragHandleProps}
              className={`${props.snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded `}>
            
              <div className="items-center">
                <input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(props.id)} />
                  <span className={props.completed ? "line-through" : undefined}>{props.title}</span>
                </div>
                <div>
                  <button className='px-4 py-2 float-right' onClick={()=> props.handleClick(props.id)}>x</button>
                  <button className='px-4 py-2 float-right' onClick={()=> setIsEditing(true)}>edit</button>
                </div>
              </div>
    )
  }
})
export default List