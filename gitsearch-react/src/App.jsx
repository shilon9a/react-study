import React,{Component} from "react";

import Search from "./component/search";
import Body from "./component/body";

export default class App extends Component{
    render(){
        return (
            <div>
                <Search />
                <Body />
            </div>
        )
    }
}