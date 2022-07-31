import React, {Component} from "react";

export default class app extends Component {

  state = {   
    todoData : [
      {
        id: "1",
        title: "공부하기",
        completed: true
      },
      {
        id:"2",
        title:"청소하기",
        completed: false
      },
    ]
  }

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none"
    }
  }


  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data => data.id !== id))
    this.setState({todoData : newTodoData});
  }
  
  render() {    
    return(
      <div className="container">
          <div className="todoBlock">
            <div className="title">
              <h1>할 일 목록</h1>
            </div>
            <form style={{display : 'flex' }}>
              <input
                  type="text"
                  name="value"
                  sytle={{ flex: '10', padding : '5px' }}
                  placeholder = "해야 할 일을 입력하세요"
                  value=""/>

            </form>

              {this.state.todoData.map((data)=>(
                <div style={this.getStyle()} key={data.id}>
                    <input type="checkbox" defaultChecked={false} />
                      {data.title}
                    <button style={this.btnStyle} onClick={()=> this.handleClick(data.id)}>x</button>
                </div>
              ))}
          </div>
      </div>
    )
  }
}