import React from 'react'
import PropTypes from 'prop-types'
import BodyChild from './bodyChild'
import ReactMixin from 'react-mixin'
import mixinCommon from './mixin'
const defaultProps = {
    userType: '这是一个默认的type'
}
export default class BodyContent extends React.Component {
    constructor() {
        super(); // 调用基类的所有的初始化方法
        this.state = {
            userNmae: 'tong song',
            age: 23
        }
    }
    componentWillMount() {
        // 即将载入 进入render
        console.log('bodyContent - componentWillMount')
    }
    componentDidMount() {
        // 加载完毕 render完毕
        console.log('b odyContent - componentDidMount')
    }
    changeAge() {
        this.setState({
            age: 50
        })
        mixinCommon.addLog.call(this)
    }
    handleValue (event) {
        this.setState({
            age: event.target.value
        })
    }
    render() {
        console.log('render')
        // setTimeout(() => {
        //     this.setState({
        //         userNmae: 'tangtongsong',
        //         age: 18
        //     })
        // }, 2000)
        return (
            <article>
                {/*展开运算符，传递每个参数*/}
                <BodyChild {...this.props} handleValue={this.handleValue.bind(this)} />
                <div>{this.state.age}内容页{this.props.userType}</div>
                <p>{this.state.userNmae == '' ? '用户还没登录' : this.state.userNmae}</p>
                <p><input ref='botton ' onClick={this.changeAge.bind(this)} type='button' value={this.state.userNmae} /></p>
                {/*注释*/}
                <p dangerouslySetInnerHTML={{ __html: this.state.userNmae }}></p>
            </article>
        )
    }
}

BodyContent.propTypes = {
    userType: PropTypes.string
}
BodyContent.defaultProps = defaultProps

ReactMixin(BodyContent.prototype, mixinCommon)