import React, { useState, useEffect, useCallback } from 'react'
import { StatusBar, StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native'
import Header from './header'
import Footer from './footer'

export default function Layout({ refreshing, onRefresh, setPage, children }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#d40644" barStyle={'light-content'} />
      <Header />
      <ScrollView
        style={ styles.scroll }
        refreshControl={
          <RefreshControl colors={['#d40644']} refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        { children }
      </ScrollView>
      <Footer
        onTap={ setPage }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    margin: 5,
    marginBottom: 20,
  }
})
