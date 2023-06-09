import React,{Component} from "react";
import PubSub from 'pubsub-js'


export default class Search extends Component{

    sendRequest=async (value)=>{
        //发布状态
        PubSub.publish('users-message',{isFirst:false,isLoading:true})
        
        // 无论是axios还是jquery都是封装xhr然后进行网络请求的发送
        // 但是有一个web浏览器原生支持的api-fetch可以发送网络请求

        //简易版本
        // fetch(`https://api.github.com/search/users?q=${value}`).then(
        //     response =>{
        //         return response.json()
        //     }
        // ).then(
        //     response =>{
        //         PubSub.publish('users-message',{isLoading:false,users:response.items})
        //     }
        // ).catch(
        //     error=>{
        //         console.log(error)
        //     }
        // )

        //优化版本
        try{
            const response = await fetch(`https://api.github.com/search/users?q=${value}`)
            const data=await response.json()
            PubSub.publish('users-message',{users:data.items,isLoading:false})
        }catch(error){
            console.log("数据请求失败")
            PubSub.publish('users-message',{isLoading:false,err:error})
        }
        
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