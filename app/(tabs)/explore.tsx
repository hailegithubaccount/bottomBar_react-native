import React from 'react'
import { StyleSheet,Text,View } from 'react-native'

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>explore screen</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    }
})

export default Page;
