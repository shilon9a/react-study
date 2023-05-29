import React,{Component} from "react";

import "./index.css"

export default class Item extends Component{

    state={mouse:false}

    mouseState = (flag)=>{
        this.setState({mouse:flag})
    }

    changeBox = (id,checked)=>{
        this.props.updateTodo(id,checked)
    }

    delete = (id)=>{
        this.props.deleteItem(id)
    }

    render(){
        const {id,context,done}=this.props
        const {mouse}=this.state
        
        return (
           <li className="item-li" style={{background:mouse?'#ddd':'white'}} onMouseLeave={()=>{this.mouseState(false)}} onMouseEnter= {()=>{this.mouseState(true)}} >
                <label>
                    <input type="checkbox" checked={done} onChange={(event)=>{this.changeBox(id,event.target.checked)}}></input>
                    <span>{context}</span>
                </label>
                <button style={{display:mouse?'block':'none'} } className="Item-button" onClick={()=>{this.delete(id)}}>删除</button>
           </li>
        )
    }
}