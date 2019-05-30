import Taro, { Component } from '@tarojs/taro'
import { View,Input,Image } from '@tarojs/components'
import './index.css'
import sousuo from '../../images/sousuo.png'
export default class Index extends Component {

    config = {
        navigationBarTitleText: '周公解梦'
    }

    constructor(props){
        super(props);
        this.state = {
            text:'',
            list:[]
        }
    }

    componentWillMount () { }

    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        let {list} = this.state;
        return (
            <View className='wrapper'>
                <View className="search">
                    <Input placeholder="梦到了什么?" value={text} onInput={this.inputValue.bind(this)}></Input>
                    <View onClick={this.clickSearch.bind(this)} className="searchbtn">
                        <Image className="iconsearch" src={sousuo}></Image>
                        <View>搜索</View>
                    </View>
                    
                </View>
                <View className="content">
                    {
                        list.length && list.map((item,i)=><View className="item" key={i} onClick={this.clickItem.bind(this,item)}>{item.title}</View>)
                    }
                </View>
                <View className="habitude" onClick={this.clickHabitude.bind(this)}>
                    <View>民间</View>
                    <View>习俗</View>
                </View>
            </View>
        )
  }

    inputValue(ev){
        this.setState({
            text: ev.detail.value
        })
    }

    clickSearch(){
        if(this.state.text !== ''){
            wx.request({
                url:'http://v.juhe.cn/dream/query?key=600ae25a5e3a5c96228241cec858bda3&q='+ this.state.text,
                success:(res)=>{
                    this.setState({
                        list: res.data.result
                    })
                }
            })
        }
    }

    clickItem(item){
        wx.navigateTo({
            url: '/pages/oneiromancy/index?item=' + JSON.stringify(item)
        });

        this.setState({
            text:'',
            list:[]
        })

    }

    clickHabitude(){
        wx.navigateTo({
            url: '/pages/habitude/index'
        });
    }

}
