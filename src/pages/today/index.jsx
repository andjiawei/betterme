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
    navigationBarTitleText: 'Today'
  }

  render () {
    return (
     <Text>today</Text>
    )
  }
}
