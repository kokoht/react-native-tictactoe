import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import { connect } from 'react-redux'


export default class Welcome extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  
  static navigationOptions = {
    title: ''
  }
  
  render() {
    const { navigate } = this.props.navigation
    return (
      
      <View >
        <Text style={styles.title}>GAME OVERRR !!!!!</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  title: {
    color: '#000'
  }
})
