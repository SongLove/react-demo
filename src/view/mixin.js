const mixinCommon = {
    /*这个组件也有react 生命周期 */
    componentDidMount() {
        console.log('mixin componentDidMount')
    },
    addLog() {
        console.log('mixin log', this)
    }
}

export default mixinCommon