import React, { useCallback, useState} from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {

  const [todoData, setTodoData] = useState([
    {
      id: 1,
      title : "밥먹기",
      completed : false
    },
    {
      id:2,
      title:"물걸레청소",
      completed:false
    }
  ]);
  const [value, setValue] = useState("");

  const handleClick = useCallback((id) => {
    let newTodoData = todoData.filter((data => data.id !== id))
    setTodoData(newTodoData);
  }, [todoData])

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id : Date.now(),
      title : value,
      completed : false,
    }
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  }

    const handleRemoveClick = () => {
        setTodoData([]);
    }

    return(
      <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
          <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
            <div className="flex justify-between mb-3">
              <h1 className="font-bold">할 일 목록</h1>
              <button className="hover:bg-gray-200" onClick={handleRemoveClick}>DELETE ALL</button>
            </div>
            <Lists handleClick={handleClick} todoData={todoData} setTodoData={setTodoData}/>
              <Form value={value} setValue={setValue} handleSubmit={handleSubmit}/>
          </div>
      </div>
    )
}