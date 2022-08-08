import React from 'react'

const List = React.memo((props) => {

  const handleCompleteChange = (id) => {
    let newTodoData = props.todoData.map(data => {
      if(data.id === id){
        data.completed = !data.completed
      }
      return data;
    })
    props.setTodoData(newTodoData);
  }


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
                      </div>
                    </div>
  )
})
export default List