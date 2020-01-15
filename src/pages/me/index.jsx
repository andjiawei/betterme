import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'


export default class Index extends Component {



  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

 
  config = {
    navigationBarTitleText: 'Me'
  }


  render () {
    return (
      <Text>me</Text>
    )
  }
}
