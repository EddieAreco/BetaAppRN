import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from '../features/Counter/counterSlice'



const Counter = () => {

  const count = useSelector(state => state.counter.value) 

    const [inputToAdd, setInputToAdd] = useState(null)

    const dispatch = useDispatch()

  return (
    <View>
      
      <View>
        <Pressable
        onPress={
          () => dispatch(increment())
        }
        >
            <Text>+</Text>
        </Pressable>
      </View>

      <View>
        <Pressable>
            <Text>{count}</Text>
        </Pressable>
      </View>

      <View>
        <Pressable
        onPress={
          () => dispatch(decrement())
        }
        >
            <Text>-</Text>
        </Pressable>
      </View>

      <View>
        <TextInput
        placeholder='cantidad a aumentar'
        onChangeText={setInputToAdd}
        value={inputToAdd}
        />
        <Pressable
        onPress={
          () => dispatch(incrementByAmount( Number(inputToAdd) )) 
        }
        >
            <Text>Aumentar</Text>
        </Pressable>
      </View>

      <Pressable
      onPress={() => dispatch(reset())}
      >
        <Text>Reset</Text>
      </Pressable>

    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})