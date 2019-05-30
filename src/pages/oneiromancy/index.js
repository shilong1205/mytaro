import Taro, { Component } from '@tarojs/taro'
import { View,Input,Image } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

    config = {
        navigationBarTitleText: '周公解梦'
    }

    constructor(props){
        super(props);
        this.state = {
            item:{}
        }
    }

    componentWillMount () { }

    componentDidMount () { 
        let item = JSON.parse(this.$router.params.item);
        this.setState({
            item
        })
        
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        return (
            <View className='wrapper'>
                <View className="title">{item.title}</View>
                <View className="content">{item.des}</View>
            </View>
        )
    }

  
}

