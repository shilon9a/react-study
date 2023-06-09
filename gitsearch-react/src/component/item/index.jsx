import React,{Component} from "react";

export default class Item extends Component{
    render(){
        const {user} =this.props 
        return(
            <div>
                <a href={user.html_url} rel="noopener noreferrer" target="_blank" >
                    <img alt={user.login} src={user.avatar_url}></img>
                </a>
                <p>{user.login}</p>
            </div>
        )
    }    
}