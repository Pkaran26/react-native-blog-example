import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal, ScrollView } from 'react-native'
import moment from 'moment'
import axios from 'axios'

const Card = ({ data: { id, title, body } })=>{
  const [show, setShow] = useState(false)
  const [post, setPost] = useState('')
  const [comments, setComments] = useState([])

  const onPress = (id)=>{
    setShow(true)
    axios.get(`https://jsonplaceholder.typicode.com/posts/${ id }`)
    .then(res=>{
      setPost(res.data)
    })
    .catch(err=>{
      setPost('')
    })

    axios.get(`https://jsonplaceholder.typicode.com/posts/${ id }/comments`)
    .then(res=>{
      setComments(res.data)
    })
    .catch(err=>{
      setComments([])
    })
  }

  return (
    <View style = {styles.container}>
      <TouchableOpacity
        onPress={()=> onPress(id) }
      >
        <Text style={ styles.title }>{ title.toUpperCase() }</Text>
        <Text style={ styles.date }>{ moment().format('DD MMM YYYY hh:mm A') }</Text>
        <Text style={ styles.body }>{ body }</Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={show}
          onRequestClose={() => {
            setShow(false)
          }}
        >
        { post?
        <View style={ styles.model }>
          <Text style={ styles.title }>{ post.title.toUpperCase() }</Text>
          <Text style={ styles.date }>{ moment().format('DD MMM YYYY hh:mm A') }</Text>
          <Text style={ styles.body }>{ post.body }</Text>
          <Text style={ styles.title }>Comments :- </Text>
          <ScrollView style = {styles.scroll}>
            { comments.map((e, i)=>(
              <View key={ i }>
                <Text style={ styles.commentTitle }>{ e.name }:- </Text>
                <Text style={ styles.body }>{ e.body }</Text>
              </View>

            )) }
          </ScrollView>
          <TouchableOpacity
            onPress={()=> setShow(false) }
          >
            <Text style={ styles.link }>Close</Text>
          </TouchableOpacity>
        </View>
        :
          <View style = {styles.container}>
            <Text style={ styles.title }>Loading...</Text>
          </View>
        }
        </Modal>
      </TouchableOpacity>
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
   model: {
     margin: 10,
     marginTop: 70,
     backgroundColor: '#fff',
     borderWidth: 0.5,
     borderColor: '#d40644',
     padding: 10,
   },
   scroll: {
     height: 300,
     padding: 5,
   },
   title: {
     fontSize: 16,
     marginBottom: 10,
     color: '#d40644'
   },
   date: {
     marginBottom: 10,
     color: '#0da6d9'
   },
   body: {
     fontSize: 14,
     marginBottom: 10,
   },
   link: {
     textAlign: 'center',
     fontSize: 16,
     color: '#3d76d1',
     padding: 10,
   },
   commentTitle: {
     fontSize: 14,
     marginBottom: 10,
     color: '#d40644'
   }
})

export default Card
