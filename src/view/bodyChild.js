import React from 'react'

export default class BodyChild extends React.Component {

    render() {
        return (
            <div>
                <p>子页面 <input onBlur={this.props.handleValue} type='text' /></p>
            </div>
        )
    }
}