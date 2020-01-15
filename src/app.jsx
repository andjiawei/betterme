import Taro, { Component } from '@tarojs/taro'
import Index from './pages/today/index'
// eslint-disable-next-line import/first
import 'taro-ui/dist/style/index.scss'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  
  config = {
    pages: [
      'pages/today/index',
      'pages/find/index',
      'pages/me/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: "pages/today/index",
        text: "today",
        iconPath: "./images/tab/today.png",
        selectedIconPath: "./images/tab/today_select.png"
      }, {
        pagePath: "pages/find/index",
        text: "find",
        iconPath: "./images/tab/find.png",
        selectedIconPath: "./images/tab/find_select.png"
      },{
        pagePath: "pages/me/index",
        text: "我的",
        iconPath: "./images/tab/me.png",
        selectedIconPath: "./images/tab/me_select.png"
      }],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff'
    }
  }


  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
