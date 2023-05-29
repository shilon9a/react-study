import React,{Component} from "react";
import {nanoid} from 'nanoid'

export default class Header extends Component{

    addTodo = (event)=>{
        const {keyCode,target} = event
        // 如果按钮不是回车键退出
        if(keyCode!==13){return}
        if(target.value.trim()===''){return}
        // 根据用户的输入构建一个item
        const todo={id:nanoid(),context:target.value,state:"false"}
        this.props.addItem(todo)
        target.value=""
    }

    render(){
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入任务,按回车键确认" onKeyUp={this.addTodo}></input>
            </div>
        )
    }
}
