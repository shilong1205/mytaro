import Taro, { Component } from '@tarojs/taro'
import { View,Input,Image } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

    config = {
        navigationBarTitleText: '星座运势'
    }

    constructor(props){
        super(props);
        this.state = {
            items:{},
            list:[{
                title:'今天',
                date:'today',
                id:0
            },{
                title:'明天',
                date:'tomorrow',
                id:0
            },{
                title:'本周',
                date:'week',
                id:0
            },{
                title:'本月',
                date:'month',
                id:0
            },{
                title:'本年',
                date:'year',
                id:0
            }],
            i:0,
            content:[]
        }
    }

    componentWillMount () { }

    componentDidMount () {
        let item = JSON.parse(this.$router.params.item);
        this.setState({
            items:item
        })
        wx.request({
            url:'http://web.juhe.cn:8080/constellation/getAll?consName='+ item.name +'&type=today&key=6b56c1baaa1829617d2e1fa9bdf17c6a',
            success:(res)=>{
                this.setState({
                    content:res.data
                })
                console.log(res.data)
            }
        })
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        let {list,i,content,items} = this.state;
        return (
            <View className='wrapper'>
                <View className="header">
                    {
                        list.map((item,index)=><View className={index === i ? 'active' : ''} key={item.id} onClick={this.clickDate.bind(this,index,item.date)}>{item.title}</View>)
                    }
                </View>
                <View className="main">
                    {
                        i === 0 ? <View className="today">
                            <View className="head">{content.QFriend}今日运势</View>
                            <View className="datetime">日期: {content.datetime}</View>
                            <View className="content">
                                <Image src={items.img}></Image>
                                <View className="content-right">
                                    <View className="item">
                                        <View>健康指数</View>
                                        <View className="progress-bar">
                                            <View style={'background:#ff8362;width:'+parseInt(content.health)+'%'}></View>
                                        </View>
                                        <View>{content.health}</View>
                                    </View>
                                    <View className="item">
                                        <View>爱情指数</View>
                                        <View className="progress-bar">
                                            <View style={'background:#C1f19a;width:'+parseInt(content.love)+'%'}></View>
                                        </View>
                                        <View>{content.love}</View>
                                    </View>
                                    <View className="item">
                                        <View>财运指数</View>
                                        <View className="progress-bar">
                                            <View style={'background:#f1e29a;width:'+parseInt(content.money)+'%'}></View>
                                        </View>
                                        <View>{content.money}</View>
                                    </View>
                                    <View className="item">
                                        <View>工作指数</View>
                                        <View className="progress-bar">
                                            <View style={'background:#bbf6ff;width:'+parseInt(content.work)+'%'}></View>
                                        </View>
                                        <View>{content.work}</View>
                                    </View>
                                    <View className="item">
                                        <View>综合指数</View>
                                        <View className="progress-bar">
                                            <View style={'background:#fecbff;width:'+parseInt(content.all)+'%'}></View>
                                        </View>
                                        <View>{content.all}</View>
                                    </View>
                                </View>
                            </View>
                            <View className="text">今日概述:{content.summary}</View>    
                            <View className="good-fortune">
                                <View>
                                    <View>{content.color}</View>
                                    <View>幸运色</View>
                                </View>
                                <View>
                                    <View>{content.number}</View>
                                    <View>幸运数字</View>
                                </View>
                                <View>
                                    <View>{content.QFriend}</View>
                                    <View>速配星座</View>
                                </View>
                            </View>
                        </View> : i === 1 ? <View className="tomorrow">
                            <View className="head">{content.QFriend}明日运势</View>
                            <View className="datetime">日期: {content.datetime}</View>
                            <View className="content">
                                <Image src={items.img}></Image>
                                <View className="content-right">
                                    <View className="item">
                                        <View>健康指数</View>
                                        <View className="progress-bar">
                                            <View style={'background:#ff8362;width:'+parseInt(content.health)+'%'}></View>
                                        </View>
                                        <View>{content.health}</View>
                                    </View>
                                    <View className="item">
                                        <View>爱情指数</View>
                                        <View className="progress-bar">
                                            <View style={'background:#C1f19a;width:'+parseInt(content.love)+'%'}></View>
                                        </View>
                                        <View>{content.love}</View>
                                    </View>
                                    <View className="item">
                                        <View>财运指数</View>
                                        <View className="progress-bar">
                                            <View style={'background:#f1e29a;width:'+parseInt(content.money)+'%'}></View>
                                        </View>
                                        <View>{content.money}</View>
                                    </View>
                                    <View className="item">
                                        <View>工作指数</View>
                                        <View className="progress-bar">
                                            <View style={'background:#bbf6ff;width:'+parseInt(content.work)+'%'}></View>
                                        </View>
                                        <View>{content.work}</View>
                                    </View>
                                    <View className="item">
                                        <View>综合指数</View>
                                        <View className="progress-bar">
                                            <View style={'background:#fecbff;width:'+parseInt(content.all)+'%'}></View>
                                        </View>
                                        <View>{content.all}</View>
                                    </View>
                                </View>
                            </View>
                            <View className="text">今日概述:{content.summary}</View>    
                            <View className="good-fortune">
                                <View>
                                    <View>{content.color}</View>
                                    <View>幸运色</View>
                                </View>
                                <View>
                                    <View>{content.number}</View>
                                    <View>幸运数字</View>
                                </View>
                                <View>
                                    <View>{content.QFriend}</View>
                                    <View>速配星座</View>
                                </View>
                            </View>
                        </View> : i === 2 ? <View className="week">
                            <View className="head">{content.name}本周运势</View>
                            <View className="datetime">日期: {content.date}</View>
                            <View className="text">{content.love}</View>
                            <View className="text">{content.money}</View>
                            <View className="text">{content.work}</View>
                        </View>: i === 3 ? <View className="month">
                            <View className="head">{content.name}本月运势</View>
                            <View className="datetime">日期: {content.date}</View>
                            <View className="text">爱情运势:{content.love}</View>
                            <View className="text">财运运势:{content.money}</View>
                            <View className="text">工作运势:{content.work}</View>
                            <View className="text">健康运势:{content.health}</View>
                            <View className="text">综合运势:{content.all}</View>
                        </View> : <View className="year">
                            <View className="head">{content.name}本年运势</View>
                            <View className="datetime">日期: {content.date}</View>
                            <View className="text">概述:{content.mima.info}</View>
                            <View className="text">说明:{content.mima.text}</View>
                            <View className="text">事业运:{content.career[0]}</View>
                            <View className="text">感情运:{content.love[0]}</View>
                            <View className="text">财运:{content.finance[0]}</View>
                        </View>
                    }
                </View>
            </View>
        )
    }

    clickDate(index,date){
        this.setState({
            i:index
        })
        let {items} = this.state;
        wx.request({
            url:'http://web.juhe.cn:8080/constellation/getAll?consName='+ items.name +'&type=' + date + '&key=6b56c1baaa1829617d2e1fa9bdf17c6a',
            success:(res)=>{
                this.setState({
                    content:res.data
                })
                console.log(res.data)
            }
        })
    }
}

