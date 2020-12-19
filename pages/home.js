import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Layout from '../components/layout'
import Users from './users'
import Posts from './posts'
import axios from 'axios'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [authors, setAuthors] = useState([])
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState('home')

  useEffect(()=>{
    onRefreshPosts()
    onRefreshUser()
  },[onRefreshPosts, onRefreshUser])

  const onRefreshUser = useCallback(() => {
    setRefreshing(true)
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      setAuthors(res.data)
      setRefreshing(false)
    })
    .catch(err=>{
      setAuthors([])
      setRefreshing(false)
    })
  }, []);

  const onRefreshPosts = useCallback(() => {
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
      onRefresh={ ()=>{ onRefreshPosts(); onRefreshUser() } }
      setPage={ (e)=> setPage(e) }
    >
      { page == 'users'?
        <Users authors={ authors } />
      :
        <Posts posts={ posts } />
      }
    </Layout>
  )
}
