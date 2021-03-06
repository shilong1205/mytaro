import Taro, { Component } from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import './index.css'
import arrows from '../../images/iconfonticonfonti2.png'

export default class Index extends Component {

    config = {
        navigationBarTitleText: '万年历'
    }

    constructor(props){
        super(props);
        this.state = {
            year:'',
            month:'',
            date:'',
            newDate:'',
            list:{}
        }
    }

    componentWillMount () { }

    componentDidMount () { 
        let myDate = new Date();
        let year = myDate.getFullYear();
        let month = myDate.getMonth() + 1;
        let date = myDate.getDate();
        this.setState({
            newDate: year+'-'+month+'-'+date,
            year,
            month,
            date
        })

        wx.request({
            url:'http://v.juhe.cn/calendar/day?date=' + year+'-'+month+'-'+date + '&key=8ef69139e8b2d848fa0c6bb5ce1bdf01',
            success:(res)=>{
                this.setState({
                    list:res.data.result.data
                })
                console.log(res.data.result.data)
            }
        })
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        let {newDate,year,month,date} = this.state;
        return (
            <View className='wrapper'>
                <View className="main">
                    <View class="section">
                        <Picker mode="date" value={newDate} onChange={this.DateChange.bind(this)}>
                            <View class="picker">
                                当前日期: {year+'年'+month+'月'+date+'日'}
                                <Image src={arrows}></Image>
                            </View>
                        </Picker>
                    </View>
                    <View className="content">
                        <View className="text">具体日期:{list.date}</View>
                        <View className="text">农历:{list.lunar}</View>
                        <View className="text">纪年:{list.lunarYear}</View>
                        <View className="text">属相:{list.animalsYear}</View>
                        <View className="text">宜:{list.suit}</View>
                        <View className="text">忌:{list.avoid}</View>
                        <View className="text">{list.weekday}</View>
                        {
                            list.holiday && <View className="text">假日:{list.holiday}</View>
                        }
                        {
                            list.desc && <View className="text">假日描述:{list.desc}</View>
                        }
                        
                        
                    </View>
                </View>
            </View>
        )
    }

    DateChange(ev){
        let year = ev.detail.value.split('-')[0];
        let month = ev.detail.value.split('-')[1] < 10 ? ev.detail.value.split('-')[1] * 1 : ev.detail.value.split('-')[1];
        let date = ev.detail.value.split('-')[2] < 10 ? ev.detail.value.split('-')[2] * 1 : ev.detail.value.split('-')[2];
        this.setState({
            newDate: year + '-' + month + '-' + date,
            year,
            month,
            date
        })

        wx.request({
            url:'http://v.juhe.cn/calendar/day?date=' + year + '-' + month + '-' + date + '&key=8ef69139e8b2d848fa0c6bb5ce1bdf01',
            success:(res)=>{
                    this.setState({
                        list:res.data.result.data
                    })
                console.log(res.data.result.data)
            }
        })
        
    }
  
}

