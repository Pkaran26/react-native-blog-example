import React, { useState, useEffect, useCallback } from 'react'
import { StatusBar, StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native'
import Header from './components/header'
import Footer from './components/footer'
import Card from './components/card'
import axios from 'axios'

export default function App() {
  const [posts, setPosts] = useState([])
  const [refreshing, setRefreshing] = useState(false);

  useEffect(()=>{
    onRefresh()
  },[onRefresh])

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      setPosts(res.data)
      setRefreshing(false)
    })
    .catch(err=>{
      setPosts([])
      setRefreshing(false)
    })
  }, []);


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
        { posts.map((e, i)=>(
          <Card
            key={ i }
            data={ e }
          />
        )) }
      </ScrollView>
      <Footer />
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
