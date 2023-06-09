import React,{Component} from "react";
import Item from "../item";
import PubSub from 'pubsub-js'

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Body extends Component{

    state={
        users:[],
        isLoading:false,
        isFirst:true,
        err:''
    }

    componentDidMount(){
        PubSub.subscribe('users-message',(_,dates)=>{
            this.setState(dates)
        })
        console.log(this.state)
    }

    render(){
        const {users,isFirst,isLoading,err} =this.state

        return(
            <div className="container text-center">
                {
                    isFirst?<h2>请输入想要查询的内容</h2>:
                    isLoading?<h2>正在查</h2>:
                    err?<h2>{err}</h2>:
                    users.map(user=>{
                        return <Item user={user} key={user.id}/>
                    })
                }
            </div>
        )
    }
}