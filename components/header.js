import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ()=>{
  return (
    <View style = {styles.container}>
      <Text style={ styles.text }>Blog App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#d40644',
      paddingTop: 5,
      paddingLeft: 20,
      paddingBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5
   },
   text: {
     color: '#fff',
     fontSize: 25
   }
})

export default Header
