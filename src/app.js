import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.css'
// import image1 from '../../images/81(1).png'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/oneiromancy/index',
      'pages/habitude/index',
      'pages/constellation/index',
      'pages/constellationDetail/index',
      'pages/calendar/index'
      
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#F8F0E5',
      navigationBarTitleText: '玄学',
      navigationBarTextStyle: 'black'
    },
    "tabBar": {
      "color":"#bfbfbf",
      "selectedColor":"#707070",
      "backgroundColor":"#F8F0E5",
      "list": [{
        "pagePath": "pages/index/index",
        "text": "周公解梦",
        "iconPath":"./images/8.png",
        "selectedIconPath":"./images/81.png"
      }, {
        "pagePath": "pages/constellation/index",
        "text": "星座运势",
        "iconPath":"./images/xing.png",
        "selectedIconPath":"./images/xing1.png"
      }, {
        "pagePath": "pages/calendar/index",
        "text": "万年历",
        "iconPath":"./images/iconset0209.png",
        "selectedIconPath":"./images/iconset0209(1).png"
      }]
    }
  }
  
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
