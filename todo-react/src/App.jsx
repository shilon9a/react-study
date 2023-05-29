import React,{Component} from "react";

import Header from "./component/header";
import Footer from "./component/footer";
import Body from "./component/body";



export default class App extends Component{

    state = {todos:[
        {id:1,context:"英语",done:false},
        {id:2,context:"数学",done:true},
        {id:3,context:"语文",done:false},],
    }

    addItem = (data)=>{
        const {todos}=this.state   
        const newTodos=[data,...todos]
        this.setState({todos:newTodos})
    }

    updateTodo =(id,done)=>{
        const {todos}=this.state
        todos.forEach((todo)=>{
            if(todo.id===id){
                todo.done=done
            }
        })
        this.setState({todos:todos})
    }

    deleteItem =(id)=>{
        const {todos} = this.state
        const newTodos=todos.filter((item)=>{
            return item.id!==id
        })

        this.setState({todos:newTodos})
    }
    
    checkAllItem = (done)=>{
        const {todos}=this.state
        todos.forEach((todo)=>{
            todo.done=done
        })

        this.setState({todos:todos})
    }
    
    clearItem=()=>{
        const {todos}=this.state
        const newTodos=todos.filter((todo)=>{
            return todo.done===false
        })
        this.setState({todos:newTodos})
    }

    render(){
        const {todos}=this.state
        return (
            <div className="todo-container">
                <div className="container">
                    <Header addItem={this.addItem} />
                    <Body todos={todos} updateTodo={this.updateTodo} deleteItem={this.deleteItem}/>
                    <Footer todos={todos} checkAllItem={this.checkAllItem} clearItem={this.clearItem}/>
                </div>
            </div>
        )
    }
}