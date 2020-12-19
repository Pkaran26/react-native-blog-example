import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Footer = ({ onTap })=>{
  return (
    <View style = {styles.container}>
      <View style={ styles.menu }>
        <TouchableOpacity
          onPress={()=> onTap('home') }
        >
          <Text style={ styles.item }>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={ styles.menu }>
        <TouchableOpacity
          onPress={()=> onTap('users') }
        >
          <Text style={ styles.item }>Users</Text>
        </TouchableOpacity>
      </View>
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
    elevation: 5,
    flex: 1,
    flexDirection: 'row'
   },
   text: {
     color: '#fff',
     padding: 2,
   },
   menu: {
     width: '50%',
     justifyContent: 'center',
     alignItems: 'center'
   },
   item: {
     color: '#fff',
     fontSize: 16,
     padding: 10
   }
})

export default Footer
