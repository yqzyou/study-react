import React from 'react'
import ContentChild from './contentchild'
export default class Content extends React.Component{
    constructor(){
        super()
        this.state = {userName:'parry'}
    };
    handlechange(event){
        this.setState({
            userName: event.target.value
        })
    };
    render(){
        return(
            <div>
                <h1>这是页面主体内容</h1>
                <p>{this.state.userName} {this.props.userid}</p>
                <ContentChild  changeParent={this.handlechange.bind(this)}/>
            </div>
        )
    }
}