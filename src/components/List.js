import React from 'react'

export default function List(props) {

      const handleCompleteChange = (id) => {
        let newTodoData = props.todoData.map(data => {
          if(data.id === id){
            data.completed = !data.completed
          }
          return data;
        })
        props.setTodoData(newTodoData);
      }
    
    
      const handleClick = (id) => {
        let newTodoData = props.todoData.filter((data => data.id !== id))
        props.setTodoData(newTodoData);
      }
  return (
    <div>
      {props.todoData.map((data)=>(
        <div key={data.id}>
          <div className='flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded'>
            <div className="items-center">
              <input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(data.id)} />
                <span className={data.completed ? "line-through" : undefined}>{data.title}</span>
              </div>
              <div>
                <button className='px-4 py-2 float-right' onClick={()=> handleClick(data.id)}>x</button>
              </div>
            </div>
        </div>
      ))}
    </div>
  )
}
