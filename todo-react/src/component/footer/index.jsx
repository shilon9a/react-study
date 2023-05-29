import React,{Component} from "react";

export default class Footer extends Component{

    checkAll = (checked)=>{
        this.props.checkAllItem(checked)
    }

    deleteFinish =()=>{
        this.props.clearItem()
    }

    render(){
        const {todos}=this.props
        
        const finishCount=todos.reduce((ans,cur)=>ans+(cur.done?1:0),0)
        
        const countAll=todos.length
        

        return(
            <div className="footer-div">
                <label>
                    <input 
                    type="checkbox" 
                    checked={finishCount===countAll && countAll>=1?true:false}
                    onChange={(event)=>{this.checkAll(event.target.checked)}}
                    ></input>
                </label>
                <span>已完成{finishCount}/</span>{countAll}
                <span><button onClick={this.deleteFinish}>删除已完成任务</button></span>
            </div>
        )
    }
}