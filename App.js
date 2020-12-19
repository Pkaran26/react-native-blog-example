import React, { useState, useEffect, useCallback } from 'react'
import { StatusBar, StyleSheet, Text, View, } from 'react-native'
import Layout from './components/layout'
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
    <Layout
      refreshing={ refreshing }
      onRefresh={ onRefresh }
    >
      { posts.map((e, i)=>(
        <Card
          key={ i }
          data={ e }
        />
      )) }
    </Layout>
  )
}
