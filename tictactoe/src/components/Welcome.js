import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { setUsernameAction } from '../actions'

class Welcome extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  
  static navigationOptions = {
    title: 'Tic Tac Toe'
  }
  
  setUsername(data){
    const { navigate } =this.props.navigation
    this.props.setUsername(data)
    navigate('PlayingField')
  }
  
  render() {
    return (
      
      <View style={styles.container}>
      
    
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome Lets play Tic Tac Toe!</Text>
        </View>
        
        
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Input Your Username"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            style={styles.inputPlace}
          />
          
          
          <TextInput
            placeholder="Your Password"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            style={styles.inputPlace}
          />
          
          
          
          <TouchableOpacity onPress={() => this.setUsername(this.state)} style={styles.buttonBox}>
            <Text style={styles.buttonText}>LOGIN n LETS PLAY</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5FCFF'
  },
  title: {
    color: '#000'
  },
  titleContainer: {
    alignItems: 'center'
  },
  textInputContainer: {
    padding: 20
  },
  inputPlace: {
    marginBottom: 10,
    height: 50,
  },
  buttonBox: {
    paddingVertical: 15,
    backgroundColor: '#0082fc'
  },
  buttonText: {
    textAlign: 'center'
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (data) => dispatch(setUsernameAction(data))
  }
}

export default connect(null, mapDispatchToProps)(Welcome)