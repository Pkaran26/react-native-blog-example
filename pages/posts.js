import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, View, } from 'react-native'
import Post from '../components/post'

export default function Posts({ posts }) {
  return (
    <View>
      { posts.map((e, i)=>(
        <Post
          key={ i }
          data={ e }
        />
      ))}
    </View>
  )
}
