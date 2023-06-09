import React,{Component} from "react";
import axios from 'axios'
import PubSub from 'pubsub-js'


export default class Search extends Component{

    sendRequest=(value)=>{
        //发布状态
        PubSub.publish('users-message',{isFirst:false,isLoading:true})
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response =>{
                //数据查询成功就发布消息
                PubSub.publish('users-message',{users:response.data.items,isLoading:false})
            },
            error =>{
                //数据查询失败发布消息
                PubSub.publish('user-message',{err:error})
            }
        )
    }

    render(){
        return(
            <div style={{backgroundColor:'aliceblue',height:100,width:500}}>
                <input ref={(c)=>this.context_input=c} type="text" placeholder="请输入查询内容"></input>
                <button onClick={()=>{this.sendRequest(this.context_input.value)}}>查询</button>
            </div>
        )
    }
}