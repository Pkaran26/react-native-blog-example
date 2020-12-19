import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Users({ authors }) {
  return (
    <View>
      { authors.map((e, i)=>(
        <View style={ styles.container }>
          <Text style={ styles.title }>{ e.name }</Text>
          <Text style={ styles.body }>{ e.email }</Text>
        </View>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
   container: {
      padding: 10,
      marginBottom: 10,
      borderColor: '#d6d6d6',
      borderWidth: 0.2,
   },
   title: {
     fontSize: 16,
     marginBottom: 10,
     color: '#d40644'
   },
   body: {
     fontSize: 14,
     marginBottom: 10,
   },
})
