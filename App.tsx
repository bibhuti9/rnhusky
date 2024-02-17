import { View, Text, SafeAreaView } from "react-native"
import React from "react"

export default function App() {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  )
}
