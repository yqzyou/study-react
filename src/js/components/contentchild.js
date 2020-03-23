import React from 'react'

export default class ContentChild extends React.Component{
    render(){
        return(
            <div>
                <p><input type='text' onChange={this.props.changeParent} /></p>
            </div>
        )
    }
}