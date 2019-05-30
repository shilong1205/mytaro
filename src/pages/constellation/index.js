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
            constellation:[{
                img:'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_03.png',
                name:'白羊座',
                date:'3.21-4.19',
                id:0
            },{
                img:'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_04.png',
                name:'金牛座',
                date:'4.20-5.20',
                id:1
            },{
                img:'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_06.png',
                name:'双子座',
                date:'5.21-6.21',
                id:2
            },{
                img:'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_08.png',
                name:'巨蟹座',
                date:'6.22-7.22',
                id:3
            },{
                img:'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_10.png',
                name:'狮子座',
                date:'7.23-8.22',
                id:4
            },{
                img:'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_12.png',
                name:'处女座',
                date:'8.23-9.22',
                id:5
            },{
                img:'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_14.png',
                name:'天枰座',
                date:'9.23-10.23',
                id:6
            },{
                img:'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_16.png',
                name:'天蝎座',
                date:'10.24-11.22',
                id:7
            },{
                img:'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_18.png',
                name:'射手座',
                date:'11.23-12.21',
                id:8
            },{
                img:'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_20.png',
                name:'魔蝎座',
                date:'12.22-1.19',
                id:9
            },{
                img:'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_22.png',
                name:'水瓶座',
                date:'1.20-2.18',
                id:10
            },{
                img:'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_24.png',
                name:'双鱼座',
                date:'2.19-3.20',
                id:11
            }]
        }
    }

    componentWillMount () { }

    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        return (
            <View className='wrapper'>
                <View className="main">
                    {
                        constellation.map((item,i)=><View key={item.id} className="item" onClick={this.clickItem.bind(this,item)}>
                            <Image src={item.img}></Image>
                            <View>{item.name}</View>
                            <View>{item.date}</View>
                        </View>)
                    }
                </View>
            </View>
        )
    }

    clickItem(item){
        console.log(123)
        wx.navigateTo({ 
            url: '/pages/constellationDetail/index?item=' + JSON.stringify(item) 
        });
    }

  
}

