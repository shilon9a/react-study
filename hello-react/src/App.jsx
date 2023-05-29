import React,{Component} from "react";
import Hello from "./component/Hello/Hello";
import Welcome from "./component/Welcom/Welcome";

export default class App extends Component{
    render(){
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}

