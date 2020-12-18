import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Footer = ()=>{
  return (
    <View style = {styles.container}>
      <Text style={ styles.text }>&copy; Blog App 2019-20</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#d40644',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
   },
   text: {
     color: '#fff',
     padding: 2,
   }
})

export default Footer
