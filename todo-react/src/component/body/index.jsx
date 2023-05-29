import React,{Component} from "react";

import Item from "../item";

export default class Body extends Component{

    render(){
        const {todos,updateTodo,deleteItem}=this.props
        return(
            <ul className="body-ul">
                {
                    todos.map((todo) => {
                        return <Item 
                        key={todo.id} 
                        {...todo}
                        updateTodo={updateTodo} 
                        deleteItem={deleteItem}/>

                    })
                    
                }
            </ul>
        )
    }
}